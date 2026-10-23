import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CommentThread, type ThreadComment } from './comment-thread';

const comments: ThreadComment[] = [
  {
    id: 'cm1',
    author: { name: 'Ola' },
    body: 'Ship the board first, then the filters.',
    timestamp: '2h ago',
  },
  {
    id: 'cm2',
    author: { name: 'Chris' },
    body: 'Agreed — dogfood it in the kanban system.',
    timestamp: '1h ago',
  },
];

function renderThread(props: Partial<React.ComponentProps<typeof CommentThread>> = {}) {
  return render(
    <CommentThread comments={comments} currentUser={{ name: 'Chris' }} {...props} />
  );
}

function composer() {
  const el = screen.getByLabelText('Write a comment…');
  if (!(el instanceof HTMLTextAreaElement)) throw new Error('composer not found');
  return el;
}

describe('CommentThread', () => {
  it('renders all comment bodies, authors, and timestamps', () => {
    renderThread();

    expect(screen.getByText('Ship the board first, then the filters.')).toBeInTheDocument();
    expect(screen.getByText('Agreed — dogfood it in the kanban system.')).toBeInTheDocument();
    expect(screen.getAllByText('Ola').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Chris').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('2h ago')).toBeInTheDocument();
  });

  it('lists comments inside an accessible list', () => {
    renderThread();

    expect(screen.getByRole('list', { name: 'Comments' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.queryByText(/no comments yet/i)).not.toBeInTheDocument();
  });

  it('renders skeletons while loading', () => {
    renderThread({ loading: true });

    expect(screen.queryByText('Ship the board first')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Write a comment…')).not.toBeInTheDocument();
  });

  it('shows an empty state when there are no comments', () => {
    renderThread({ comments: [] });

    expect(screen.getByText(/no comments yet/i)).toBeInTheDocument();
  });

  it('submits a new comment via the button', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn();
    renderThread({ onSubmitComment });

    await user.type(composer(), 'Looks good to me');
    await user.click(screen.getByRole('button', { name: 'Comment' }));

    expect(onSubmitComment).toHaveBeenCalledWith('Looks good to me');
  });

  it('submits via Enter and inserts a newline with Shift+Enter', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn();
    renderThread({ onSubmitComment });

    const input = composer();
    await user.type(input, 'First line{Shift>}{Enter}{/Shift}Second line');
    expect(input.value).toBe('First line\nSecond line');

    await user.type(input, '{Enter}');
    expect(onSubmitComment).toHaveBeenCalledWith('First line\nSecond line');
  });

  it('keeps the text when submission rejects', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn().mockRejectedValue(new Error('network down'));
    renderThread({ onSubmitComment });

    await user.type(composer(), 'Will this survive?');
    await user.click(screen.getByRole('button', { name: 'Comment' }));

    expect(await screen.findByDisplayValue('Will this survive?')).toBeInTheDocument();
  });

  it('clears the composer only after the promise resolves', async () => {
    const user = userEvent.setup();
    let resolveFn: (() => void) | undefined;
    const onSubmitComment = vi.fn().mockImplementation(
      () => new Promise<void>((resolve) => (resolveFn = resolve))
    );
    renderThread({ onSubmitComment });

    await user.type(composer(), 'Async comment');
    await user.click(screen.getByRole('button', { name: 'Comment' }));

    expect(await screen.findByDisplayValue('Async comment')).toBeInTheDocument();
    expect(resolveFn).toBeDefined();
    act(() => {
      resolveFn?.();
    });
    await screen.findByDisplayValue('');
  });

  it('never submits empty input', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn();
    renderThread({ onSubmitComment });

    await user.click(screen.getByRole('button', { name: 'Comment' }));

    expect(onSubmitComment).not.toHaveBeenCalled();
  });

  it('whitespace-only input is not submitted', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn();
    renderThread({ onSubmitComment });

    await user.type(composer(), '   ');
    await user.click(screen.getByRole('button', { name: 'Comment' }));

    expect(onSubmitComment).not.toHaveBeenCalled();
  });

  it('disables the composer when disabled', async () => {
    const user = userEvent.setup();
    const onSubmitComment = vi.fn();
    renderThread({ disabled: true, onSubmitComment });

    expect(composer()).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Comment' }));
    expect(onSubmitComment).not.toHaveBeenCalled();
  });

  it('supports custom labels for localization', () => {
    renderThread({
      labels: { composerPlaceholder: 'Kommentar schreiben…', submit: 'Senden' },
    });

    expect(screen.getByLabelText('Kommentar schreiben…')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Senden' })).toBeInTheDocument();
  });
});
