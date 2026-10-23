import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NotificationMenu, type NotificationItem } from './notification-menu';

const user = userEvent.setup();

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Deploy finished',
    description: 'rolled out to production',
    timestamp: '2m ago',
    unread: true,
    tone: 'success',
  },
  { id: '2', title: 'Backup failed', timestamp: '1h ago', unread: true, tone: 'destructive' },
  { id: '3', title: 'New comment', timestamp: '3h ago', unread: false },
];

const openMenu = async () => {
  await user.click(screen.getByRole('button', { name: /notifications/i }));
};

describe('NotificationMenu', () => {
  it('renders an accessible bell trigger with unread count', () => {
    render(<NotificationMenu notifications={notifications} />);
    const trigger = screen.getByRole('button', {
      name: 'Notifications, 2 unread',
    });
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('hides the badge when there are no unread notifications', () => {
    render(<NotificationMenu notifications={[{ id: '1', title: 'Old', unread: false }]} />);
    const trigger = screen.getByRole('button', { name: 'Notifications' });
    expect(trigger.textContent).not.toContain('1');
  });

  it('caps the badge at 99+', () => {
    const many = Array.from({ length: 120 }, (_, i) => ({
      id: String(i),
      title: `n${i}`,
      unread: true,
    }));
    render(<NotificationMenu notifications={many} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('renders the notification list when opened', async () => {
    render(<NotificationMenu notifications={notifications} />);
    await openMenu();
    expect(screen.getByText('Deploy finished')).toBeInTheDocument();
    expect(screen.getByText('Backup failed')).toBeInTheDocument();
    expect(screen.getByText('New comment')).toBeInTheDocument();
    expect(screen.getByText('2m ago')).toBeInTheDocument();
  });

  it('marks unread rows with data-unread', async () => {
    render(<NotificationMenu notifications={notifications} />);
    await openMenu();
    const rows = screen.getAllByRole('listitem');
    expect(rows[0]).toHaveAttribute('data-unread', 'true');
    expect(rows[2]).toHaveAttribute('data-unread', 'false');
  });

  it('shows the empty state when there are no notifications', async () => {
    render(<NotificationMenu notifications={[]} />);
    await openMenu();
    expect(screen.getByText('No notifications')).toBeInTheDocument();
  });

  it('renders a custom empty state', async () => {
    render(<NotificationMenu notifications={[]} emptyState="All caught up 🎉" />);
    await openMenu();
    expect(screen.getByText('All caught up 🎉')).toBeInTheDocument();
  });

  it('calls onMarkAllAsRead from the header action', async () => {
    const onMarkAllAsRead = vi.fn();
    render(<NotificationMenu notifications={notifications} onMarkAllAsRead={onMarkAllAsRead} />);
    await openMenu();
    await user.click(screen.getByRole('button', { name: /mark all as read/i }));
    expect(onMarkAllAsRead).toHaveBeenCalledTimes(1);
  });

  it('hides the mark-all action when everything is read', async () => {
    render(
      <NotificationMenu
        notifications={notifications.map((n) => ({ ...n, unread: false }))}
      />
    );
    await openMenu();
    expect(
      screen.queryByRole('button', { name: /mark all as read/i })
    ).not.toBeInTheDocument();
  });

  it('calls onMarkAsRead for a single notification', async () => {
    const onMarkAsRead = vi.fn();
    render(<NotificationMenu notifications={notifications} onMarkAsRead={onMarkAsRead} />);
    await openMenu();
    await user.click(
      screen.getByRole('button', { name: 'Mark "Backup failed" as read' })
    );
    expect(onMarkAsRead).toHaveBeenCalledWith('2');
  });

  it('calls onDismiss for a single notification', async () => {
    const onDismiss = vi.fn();
    render(<NotificationMenu notifications={notifications} onDismiss={onDismiss} />);
    await openMenu();
    await user.click(screen.getByRole('button', { name: 'Dismiss "Deploy finished"' }));
    expect(onDismiss).toHaveBeenCalledWith('1');
  });

  it('calls onNotificationClick when a row is clicked', async () => {
    const onNotificationClick = vi.fn();
    render(
      <NotificationMenu notifications={notifications} onNotificationClick={onNotificationClick} />
    );
    await openMenu();
    await user.click(screen.getByText('New comment'));
    expect(onNotificationClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: '3', title: 'New comment' })
    );
  });

  it('does not render mark-as-read for already-read items', async () => {
    render(<NotificationMenu notifications={notifications} />);
    await openMenu();
    const readRow = screen.getAllByRole('listitem')[2];
    expect(
      within(readRow).queryByRole('button', { name: /as read/i })
    ).not.toBeInTheDocument();
    expect(within(readRow).getByRole('button', { name: /dismiss/i })).toBeInTheDocument();
  });

  it('supports controlled open state', () => {
    render(<NotificationMenu notifications={notifications} open />);
    expect(screen.getByText('Deploy finished')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    render(<NotificationMenu notifications={notifications} disabled />);
    expect(screen.getByRole('button', { name: /notifications/i })).toBeDisabled();
  });
});
