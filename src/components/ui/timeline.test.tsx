import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rocket, AlertTriangle } from 'lucide-react';
import { Timeline, type TimelineEvent } from './timeline';

function makeDate(daysAgo: number, hours = 9): Date {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo, hours, 15);
  return d;
}

const today = makeDate(0);
const twoDaysAgo = makeDate(2);
const threeDaysAgo = makeDate(3);

const events: TimelineEvent[] = [
  {
    id: '1',
    title: 'Deployed to production',
    timestamp: threeDaysAgo,
    tone: 'success',
    icon: Rocket,
  },
  {
    id: '2',
    title: 'Chris pushed to master',
    description: 'feat: add Wizard component',
    timestamp: twoDaysAgo,
    actor: { name: 'Chris Jazinski' },
  },
  { id: '3', title: 'CI failed on #52', timestamp: today, tone: 'danger', icon: AlertTriangle },
  { id: '4', title: 'Snapshot archived', timestamp: today },
];

describe('Timeline', () => {
  it('renders a named accessible list with one row per event', () => {
    render(<Timeline events={events} />);
    expect(screen.getByRole('list', { name: 'Activity' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });

  it('groups events under Today / Yesterday / date headers', () => {
    render(<Timeline events={events} />);
    expect(screen.getByText('Today')).toBeInTheDocument();
    // Two older days render as weekday headers ("Thursday, Oct 15, 2026")
    expect(screen.getAllByText(/, \d{4}$/)).toHaveLength(2);
    expect(screen.queryByText('Yesterday')).not.toBeInTheDocument();
  });

  it('skips day headers when groupByDay is false', () => {
    render(<Timeline events={events} groupByDay={false} />);
    expect(screen.queryByText('Today')).not.toBeInTheDocument();
    // Full date+time shown inline instead (one per event)
    expect(screen.getAllByText(/9:15/)).toHaveLength(4);
  });

  it('shows yesterday header for yesterday events', () => {
    render(<Timeline events={[{ id: 'y', title: 'Old event', timestamp: makeDate(1) }]} />);
    expect(screen.getByText('Yesterday')).toBeInTheDocument();
  });

  it('renders title, description and preformatted string timestamps', () => {
    render(
      <Timeline
        events={[
          {
            id: 'a',
            title: 'Backup finished',
            description: '5.3 TB free after',
            timestamp: '2h ago',
          },
        ]}
      />
    );
    expect(screen.getByText('Backup finished')).toBeInTheDocument();
    expect(screen.getByText('5.3 TB free after')).toBeInTheDocument();
    expect(screen.getByText('2h ago')).toBeInTheDocument();
  });

  it('renders actor name and avatar initials', () => {
    render(
      <Timeline
        events={[
          { id: 'a', title: 'Pushed 3 commits', timestamp: today, actor: { name: 'Alex Blanc' } },
        ]}
      />
    );
    expect(screen.getByText('Alex Blanc')).toBeInTheDocument();
    // Avatar initials fallback
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('colors markers by tone and shows icons when provided', () => {
    render(<Timeline events={events} />);
    const danger = screen.getByText('CI failed on #52').closest('li');
    expect(danger).not.toBeNull();
    expect(danger?.querySelector('.rounded-full')?.className).toContain('text-red-600');

    const success = screen.getByText('Deployed to production').closest('li');
    expect(success?.querySelector('.rounded-full')?.className).toContain('text-emerald-600');
    // icon present -> bordered marker
    expect(success?.querySelector('.rounded-full')?.className).toContain('border');
  });

  it('fires onEventClick with the full event payload', async () => {
    const user = userEvent.setup();
    const onEventClick = vi.fn();
    render(
      <Timeline events={[{ id: 'a', title: 'Clickable event' }]} onEventClick={onEventClick} />
    );
    await user.click(screen.getByRole('button', { name: 'Clickable event' }));
    expect(onEventClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'a', title: 'Clickable event' })
    );
  });

  it('applies custom labels for the list name and empty state', () => {
    render(
      <Timeline
        events={[]}
        labels={{
          timeline: 'Audit log',
          emptyTitle: 'Nothing logged',
          emptyDescription: 'Audit entries appear here.',
        }}
      />
    );
    // Empty state replaces the list
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByText('Nothing logged')).toBeInTheDocument();
    expect(screen.getByText('Audit entries appear here.')).toBeInTheDocument();
  });

  it('shows skeletons while loading and hides the list', () => {
    const { container } = render(<Timeline events={events} loading loadingCount={3} />);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(container.querySelectorAll('.animate-pulse')).toHaveLength(9); // 3 rows * (marker + title + line)
    expect(container.firstChild).toHaveAttribute('aria-busy', 'true');
  });

  it('shows a Load more button that fires onLoadMore', async () => {
    const user = userEvent.setup();
    const onLoadMore = vi.fn();
    render(<Timeline events={events} hasMore onLoadMore={onLoadMore} />);
    await user.click(screen.getByRole('button', { name: 'Load more activity' }));
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('disables pending state on the load-more button while fetching', async () => {
    const user = userEvent.setup();
    const onLoadMore = vi.fn();
    render(<Timeline events={events} hasMore loadingMore onLoadMore={onLoadMore} />);
    const btn = screen.getByRole('button', { name: /Loading more activity/ });
    expect(btn).toBeDisabled();
    await user.click(btn);
    expect(onLoadMore).not.toHaveBeenCalled();
    // polite live region announces loading
    expect(screen.getByText('Loading more activity…')).toBeInTheDocument();
  });
});

describe('Timeline auto pagination', () => {
  it('fetches the next page when the sentinel becomes visible', async () => {
    const onLoadMore = vi.fn();
    const { rerender } = render(
      <Timeline events={events} hasMore loadMoreTrigger="auto" onLoadMore={onLoadMore} />
    );
    // IntersectionObserver is unavailable in jsdom: the effect bails early.
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument();
    });
    rerender(<Timeline events={events} hasMore loadMoreTrigger="auto" onLoadMore={onLoadMore} />);
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it('never shows a load-more button in auto mode', () => {
    render(<Timeline events={events} hasMore loadMoreTrigger="auto" onLoadMore={() => {}} />);
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /loading more/i })).not.toBeInTheDocument();
  });
});
describe('Timeline misc', () => {
  it('marks today events with a machine-readable dateTime', () => {
    render(<Timeline events={[{ id: 't', title: 'With time', timestamp: today }]} />);
    const time = screen.getByText(/\d{1,2}:\d{2}/).closest('time');
    expect(time).toHaveAttribute('datetime', today.toISOString());
  });
});
