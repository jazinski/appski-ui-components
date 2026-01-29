import type { Meta, StoryObj } from '@storybook/react';
import { ConnectionStatus } from './connection-status';

const meta: Meta<typeof ConnectionStatus> = {
  title: 'Components/ConnectionStatus',
  component: ConnectionStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A component to indicate real-time connectivity state with visual indicators.
Ideal for server status, WebSocket connections, or heartbeat indicators.

## Features

- **Multiple States**: Online, Offline, Connecting, and Error states
- **Visual Indicators**: Color-coded dots with optional pulse animation
- **Flexible Display**: Can be rendered as plain text or as a badge
- **Customizable**: Custom labels and show/hide options
- **Accessible**: Proper ARIA attributes for screen readers

## Usage

\`\`\`tsx
import { ConnectionStatus } from '@/components/ui/connection-status';

// Basic usage
<ConnectionStatus status="online" />

// With custom label
<ConnectionStatus status="connecting" label="Syncing..." />

// As a badge
<ConnectionStatus status="error" asBadge />

// Without label (icon only)
<ConnectionStatus status="online" showLabel={false} />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'connecting', 'error'],
      description: 'The current connection status',
    },
    label: {
      control: 'text',
      description: 'Custom label to display',
    },
    pulse: {
      control: 'boolean',
      description: 'Whether to show pulse animation',
    },
    asBadge: {
      control: 'boolean',
      description: 'Display as a badge',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show or hide the label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Online status with default settings.
 * Shows green indicator with pulse animation.
 */
export const Online: Story = {
  args: {
    status: 'online',
  },
};

/**
 * Offline status with default settings.
 * Shows gray indicator without animation.
 */
export const Offline: Story = {
  args: {
    status: 'offline',
  },
};

/**
 * Connecting status with default settings.
 * Shows amber indicator with pulse animation.
 */
export const Connecting: Story = {
  args: {
    status: 'connecting',
  },
};

/**
 * Error status with default settings.
 * Shows red indicator without animation.
 */
export const Error: Story = {
  args: {
    status: 'error',
  },
};

/**
 * Online status displayed as a badge.
 * Success variant badge with green styling.
 */
export const OnlineAsBadge: Story = {
  args: {
    status: 'online',
    asBadge: true,
  },
};

/**
 * Offline status displayed as a badge.
 * Secondary variant badge with gray styling.
 */
export const OfflineAsBadge: Story = {
  args: {
    status: 'offline',
    asBadge: true,
  },
};

/**
 * Connecting status displayed as a badge.
 * Warning variant badge with amber styling.
 */
export const ConnectingAsBadge: Story = {
  args: {
    status: 'connecting',
    asBadge: true,
  },
};

/**
 * Error status displayed as a badge.
 * Destructive variant badge with red styling.
 */
export const ErrorAsBadge: Story = {
  args: {
    status: 'error',
    asBadge: true,
  },
};

/**
 * Custom label example.
 * Shows how to override the default label text.
 */
export const CustomLabel: Story = {
  args: {
    status: 'online',
    label: 'Server Connected',
  },
};

/**
 * Without label (icon only).
 * Shows just the status indicator dot.
 */
export const WithoutLabel: Story = {
  args: {
    status: 'online',
    showLabel: false,
  },
};

/**
 * Without pulse animation.
 * Demonstrates disabling the pulse animation explicitly.
 */
export const NoPulse: Story = {
  args: {
    status: 'online',
    pulse: false,
  },
};

/**
 * All statuses comparison.
 * Shows all four status states side by side.
 */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ConnectionStatus status="online" />
      <ConnectionStatus status="offline" />
      <ConnectionStatus status="connecting" />
      <ConnectionStatus status="error" />
    </div>
  ),
};

/**
 * All badge variants.
 * Shows all status states as badges side by side.
 */
export const AllBadgeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <ConnectionStatus status="online" asBadge />
      <ConnectionStatus status="offline" asBadge />
      <ConnectionStatus status="connecting" asBadge />
      <ConnectionStatus status="error" asBadge />
    </div>
  ),
};

/**
 * Real-world example: Server status dashboard.
 * Shows how to use ConnectionStatus in a typical dashboard.
 */
export const ServerDashboard: Story = {
  render: () => (
    <div className="border-border rounded-lg border bg-white p-6 shadow-sm dark:bg-slate-900">
      <h3 className="mb-4 text-lg font-semibold">Server Status</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">API Server</span>
          <ConnectionStatus status="online" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Database</span>
          <ConnectionStatus status="online" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">WebSocket</span>
          <ConnectionStatus status="connecting" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">Cache Server</span>
          <ConnectionStatus status="error" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Real-world example: User presence indicator.
 * Shows how to use ConnectionStatus for user online status.
 */
export const UserPresence: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
          <span className="text-sm font-medium">JD</span>
        </div>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <ConnectionStatus status="online" showLabel={false} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
          <span className="text-sm font-medium">JS</span>
        </div>
        <div>
          <p className="text-sm font-medium">Jane Smith</p>
          <ConnectionStatus status="offline" showLabel={false} />
        </div>
      </div>
    </div>
  ),
};
