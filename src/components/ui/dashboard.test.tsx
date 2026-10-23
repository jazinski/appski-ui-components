import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dashboard,
  DashboardWidget,
  TimeRangeSelector,
  RefreshControl,
  DEFAULT_TIME_RANGES,
  DEFAULT_AUTO_REFRESH_INTERVALS,
} from './dashboard';

describe('TimeRangeSelector', () => {
  const options = [
    { value: '1h', label: '1h' },
    { value: '24h', label: '24h' },
    { value: '7d', label: '7d' },
  ];

  it('renders all options', () => {
    render(<TimeRangeSelector options={options} value="24h" onChange={() => {}} />);
    expect(screen.getByRole('radiogroup', { name: 'Time range' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '1h' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '24h' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '7d' })).toBeInTheDocument();
  });

  it('marks the selected option as checked', () => {
    render(<TimeRangeSelector options={options} value="7d" onChange={() => {}} />);
    expect(screen.getByRole('radio', { name: '7d' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '1h' })).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange when a different range is selected', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeRangeSelector options={options} value="1h" onChange={onChange} />);
    await user.click(screen.getByRole('radio', { name: '24h' }));
    expect(onChange).toHaveBeenCalledWith('24h');
  });

  it('does not call onChange when the selected range is re-clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeRangeSelector options={options} value="1h" onChange={onChange} />);
    await user.click(screen.getByRole('radio', { name: '1h' }));
    expect(onChange).not.toHaveBeenCalled();
  });
});

describe('RefreshControl', () => {
  it('renders a refresh button', () => {
    render(<RefreshControl onRefresh={() => {}} />);
    expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
  });

  it('calls onRefresh on click', async () => {
    const user = userEvent.setup();
    const onRefresh = vi.fn();
    render(<RefreshControl onRefresh={onRefresh} />);
    await user.click(screen.getByRole('button', { name: 'Refresh' }));
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('disables the button while refreshing', () => {
    render(<RefreshControl onRefresh={() => {}} isRefreshing />);
    const button = screen.getByRole('button', { name: 'Refreshing' });
    expect(button).toBeDisabled();
  });

  it('renders a relative last-refreshed hint', () => {
    const oneMinuteAgo = new Date(Date.now() - 60_000);
    render(<RefreshControl onRefresh={() => {}} lastRefreshedAt={oneMinuteAgo} />);
    expect(screen.getByTestId('last-refreshed')).toHaveTextContent('Updated 1m ago');
  });

  it('renders interval options including Off when intervals are provided', () => {
    render(
      <RefreshControl
        onRefresh={() => {}}
        intervals={DEFAULT_AUTO_REFRESH_INTERVALS}
        autoRefreshSeconds={60}
        onAutoRefreshChange={() => {}}
      />
    );
    const group = screen.getByRole('radiogroup', { name: 'Auto refresh interval' });
    expect(group).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Off' })).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('radio', { name: '1m' })).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onAutoRefreshChange with the selected interval', async () => {
    const user = userEvent.setup();
    const onAutoRefreshChange = vi.fn();
    render(
      <RefreshControl
        onRefresh={() => {}}
        intervals={DEFAULT_AUTO_REFRESH_INTERVALS}
        autoRefreshSeconds={0}
        onAutoRefreshChange={onAutoRefreshChange}
      />
    );
    await user.click(screen.getByRole('radio', { name: '30s' }));
    expect(onAutoRefreshChange).toHaveBeenCalledWith(30);
  });

  it('ticks onRefresh on the auto-refresh interval', () => {
    vi.useFakeTimers();
    const onRefresh = vi.fn();
    const { unmount } = render(
      <RefreshControl onRefresh={onRefresh} autoRefreshSeconds={30} />
    );
    expect(onRefresh).not.toHaveBeenCalled();
    vi.advanceTimersByTime(30_000);
    expect(onRefresh).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(30_000);
    expect(onRefresh).toHaveBeenCalledTimes(2);
    unmount();
    vi.advanceTimersByTime(60_000);
    expect(onRefresh).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });

  it('uses the latest onRefresh callback without re-arming the timer', () => {
    vi.useFakeTimers();
    const first = vi.fn();
    const second = vi.fn();
    const { rerender } = render(<RefreshControl onRefresh={first} autoRefreshSeconds={10} />);
    rerender(<RefreshControl onRefresh={second} autoRefreshSeconds={10} />);
    vi.advanceTimersByTime(10_000);
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });
});

describe('DashboardWidget', () => {
  it('renders title, description and content', () => {
    render(
      <DashboardWidget title="Requests" description="Total requests served">
        <p>1,234</p>
      </DashboardWidget>
    );
    expect(screen.getByText('Requests')).toBeInTheDocument();
    expect(screen.getByText('Total requests served')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
  });

  it('applies colSpan as a CSS grid span', () => {
    render(<DashboardWidget title="Wide" colSpan={8} data-testid="widget" />);
    const widget = screen.getByTestId('widget');
    expect(widget.style.gridColumn).toBe('span 8 / span 8');
    expect(widget).toHaveAttribute('data-col-span', '8');
  });

  it('clamps out-of-range spans', () => {
    render(<DashboardWidget colSpan={99} data-testid="widget" />);
    expect(screen.getByTestId('widget')).toHaveAttribute('data-col-span', '12');
  });

  it('shows a skeleton while loading', () => {
    render(
      <DashboardWidget title="Requests" loading>
        <p>should not render</p>
      </DashboardWidget>
    );
    expect(screen.getByTestId('widget-skeleton')).toBeInTheDocument();
    expect(screen.queryByText('should not render')).not.toBeInTheDocument();
  });
});

describe('Dashboard', () => {
  it('renders title and description in the header', () => {
    render(
      <Dashboard title="Overview" description="Fleet at a glance">
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByText('Fleet at a glance')).toBeInTheDocument();
  });

  it('renders time range selector and refresh control when configured', () => {
    render(
      <Dashboard
        title="Overview"
        timeRange={{ options: DEFAULT_TIME_RANGES, value: '24h', onChange: () => {} }}
        refresh={{ onRefresh: () => {} }}
      >
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    expect(screen.getByRole('radiogroup', { name: 'Time range' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
  });

  it('wires time range changes to the config callback', async () => {
    const user = userEvent.setup();
    const onRangeChange = vi.fn();
    render(
      <Dashboard
        title="Overview"
        timeRange={{ options: DEFAULT_TIME_RANGES, value: '24h', onChange: onRangeChange }}
      >
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    await user.click(screen.getByRole('radio', { name: '7d' }));
    expect(onRangeChange).toHaveBeenCalledWith('7d');
  });

  it('wires refresh clicks to the config callback', async () => {
    const user = userEvent.setup();
    const onRefresh = vi.fn();
    render(
      <Dashboard title="Overview" refresh={{ onRefresh }}>
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    await user.click(screen.getByRole('button', { name: 'Refresh' }));
    expect(onRefresh).toHaveBeenCalledTimes(1);
  });

  it('renders skeleton widgets while loading', () => {
    render(
      <Dashboard title="Overview" loading loadingCount={4}>
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    expect(screen.getAllByTestId('widget-skeleton')).toHaveLength(4);
    expect(screen.queryByText('Widget')).not.toBeInTheDocument();
  });

  it('renders extra actions in the header', () => {
    render(
      <Dashboard
        title="Overview"
        actions={<button type="button">Export</button>}
      >
        <DashboardWidget title="Widget" />
      </Dashboard>
    );
    expect(screen.getByRole('button', { name: 'Export' })).toBeInTheDocument();
  });

  it('lays widgets out on a 12-column responsive grid', () => {
    render(
      <Dashboard title="Overview" data-testid="dashboard">
        <DashboardWidget title="A" />
      </Dashboard>
    );
    const grid = screen.getByTestId('dashboard').lastElementChild as HTMLElement;
    expect(grid.className).toContain('lg:grid-cols-12');
  });
});

describe('presets', () => {
  it('exposes default time ranges', () => {
    expect(DEFAULT_TIME_RANGES.map((o) => o.value)).toEqual(['1h', '24h', '7d', '30d']);
  });

  it('exposes default auto-refresh intervals', () => {
    expect(DEFAULT_AUTO_REFRESH_INTERVALS.map((o) => o.seconds)).toEqual([30, 60, 300]);
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});
