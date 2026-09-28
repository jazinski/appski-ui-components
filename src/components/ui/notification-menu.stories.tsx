import type { Meta, StoryObj } from '@storybook/react';
import { NotificationMenu, type NotificationItem } from './notification-menu';

const meta: Meta<typeof NotificationMenu> = {
  title: 'Components/NotificationMenu',
  component: NotificationMenu,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'Visual style of the bell trigger',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Bell trigger size',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Panel alignment relative to the trigger',
    },
    side: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Panel side relative to the trigger',
    },
    maxHeight: {
      control: 'number',
      description: 'Max height of the scrollable list (px)',
    },
    emptyState: {
      control: 'text',
      description: 'Custom content when there are no notifications',
    },
    ariaLabelText: {
      control: 'text',
      description: 'Accessible name for the bell trigger',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NotificationMenu>;

const notifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Deploy finished',
    description: 'agata-dashboard rolled out to production',
    timestamp: '2m ago',
    unread: true,
    tone: 'success',
  },
  {
    id: '2',
    title: 'Backup failed',
    description: 'Synology nightly backup exited with code 1',
    timestamp: '1h ago',
    unread: true,
    tone: 'destructive',
  },
  {
    id: '3',
    title: 'New comment on APPSKI-UI-12',
    timestamp: '3h ago',
    unread: false,
  },
  {
    id: '4',
    title: 'Weekly report ready',
    description: 'Homelab overview for week 39',
    timestamp: 'Yesterday',
    unread: false,
  },
];

export const Default: Story = {
  args: { notifications },
};

export const AllRead: Story = {
  args: {
    notifications: notifications.map((n) => ({ ...n, unread: false })),
  },
};

export const Empty: Story = {
  args: { notifications: [] },
};

export const OverflowBadge: Story = {
  args: {
    notifications: Array.from({ length: 120 }, (_, i) => ({
      id: String(i),
      title: `Notification ${i + 1}`,
      unread: i < 105,
    })),
  },
};

export const OutlineLarge: Story = {
  args: {
    notifications,
    variant: 'outline',
    size: 'lg',
  },
};

export const WithActions: Story = {
  args: {
    notifications,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Wire onMarkAsRead / onMarkAllAsRead / onDismiss / onNotificationClick in your app state; the component itself is controlled (data-in, callbacks-out).',
      },
    },
  },
};
