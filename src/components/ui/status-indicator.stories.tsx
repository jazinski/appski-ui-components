import type { Meta, StoryObj } from '@storybook/react';
import { StatusIndicator } from './status-indicator';
import { Avatar } from './avatar';

const meta = {
  title: 'UI/StatusIndicator',
  component: StatusIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A status indicator component that displays colored dots to represent different states like online, offline, away, busy, and idle. Can be used standalone or with labels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy', 'idle'],
      description: 'The status to display',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the status indicator',
    },
    variant: {
      control: 'select',
      options: ['dot', 'pulsing', 'ring'],
      description: 'Visual variant of the indicator',
    },
    label: {
      control: 'text',
      description: 'Optional text label to display',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the label',
    },
    showRing: {
      control: 'boolean',
      description: 'Show a ring around the indicator',
    },
  },
} satisfies Meta<typeof StatusIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default status indicator with online status
 */
export const Default: Story = {
  args: {
    status: 'online',
    size: 'md',
  },
};

/**
 * All available status types
 */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Online</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="offline" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Offline</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="away" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Away</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="busy" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Busy</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="idle" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Idle</span>
      </div>
    </div>
  ),
};

/**
 * All available sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <StatusIndicator status="online" size="xs" />
        <span className="text-xs text-slate-600 dark:text-slate-400">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusIndicator status="online" size="sm" />
        <span className="text-xs text-slate-600 dark:text-slate-400">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusIndicator status="online" size="md" />
        <span className="text-xs text-slate-600 dark:text-slate-400">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusIndicator status="online" size="lg" />
        <span className="text-xs text-slate-600 dark:text-slate-400">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StatusIndicator status="online" size="xl" />
        <span className="text-xs text-slate-600 dark:text-slate-400">xl</span>
      </div>
    </div>
  ),
};

/**
 * Status indicator with text labels
 */
export const WithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StatusIndicator status="online" label="Online" />
      <StatusIndicator status="offline" label="Offline" />
      <StatusIndicator status="away" label="Away" />
      <StatusIndicator status="busy" label="In a meeting" />
      <StatusIndicator status="idle" label="Idle" />
    </div>
  ),
};

/**
 * Custom label text
 */
export const CustomLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StatusIndicator status="online" label="Available now" />
      <StatusIndicator status="busy" label="Do not disturb" />
      <StatusIndicator status="away" label="Back in 15 minutes" />
      <StatusIndicator status="offline" label="Out of office" />
    </div>
  ),
};

/**
 * Label on the left side
 */
export const LeftLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StatusIndicator status="online" label="Online" labelPosition="left" />
      <StatusIndicator status="busy" label="In a meeting" labelPosition="left" />
      <StatusIndicator status="away" label="Away" labelPosition="left" />
    </div>
  ),
};

/**
 * Pulsing animation variant
 */
export const Pulsing: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" variant="pulsing" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Active call</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="busy" variant="pulsing" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Recording...</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="away" variant="pulsing" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Connecting...</span>
      </div>
    </div>
  ),
};

/**
 * With ring border (useful on colored backgrounds)
 */
export const WithRing: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="rounded-lg bg-indigo-500 p-4">
        <StatusIndicator status="online" showRing size="lg" />
      </div>
      <div className="rounded-lg bg-slate-800 p-4">
        <StatusIndicator status="busy" showRing size="lg" />
      </div>
      <div className="rounded-lg bg-green-500 p-4">
        <StatusIndicator status="away" showRing size="lg" />
      </div>
    </div>
  ),
};

/**
 * Used with Avatar component
 */
export const WithAvatar: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=1" status="online" size="lg" />
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900 dark:text-slate-100">John Doe</span>
          <StatusIndicator status="online" label="Online" size="sm" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="Jane Smith" src="https://i.pravatar.cc/150?img=2" status="busy" size="lg" />
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900 dark:text-slate-100">Jane Smith</span>
          <StatusIndicator status="busy" label="In a meeting" size="sm" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="Bob Johnson" src="https://i.pravatar.cc/150?img=3" status="away" size="lg" />
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900 dark:text-slate-100">Bob Johnson</span>
          <StatusIndicator status="away" label="Away" size="sm" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Status list example
 */
export const StatusList: Story = {
  render: () => (
    <div className="w-80 space-y-3 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
      <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-slate-100">Team Status</h3>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Avatar name="Alice Cooper" size="sm" status="online" />
          <span className="text-sm text-slate-700 dark:text-slate-300">Alice Cooper</span>
        </div>
        <StatusIndicator status="online" size="sm" />
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Avatar name="Bob Martin" size="sm" status="busy" />
          <span className="text-sm text-slate-700 dark:text-slate-300">Bob Martin</span>
        </div>
        <StatusIndicator status="busy" label="Meeting" size="sm" />
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Avatar name="Carol White" size="sm" status="away" />
          <span className="text-sm text-slate-700 dark:text-slate-300">Carol White</span>
        </div>
        <StatusIndicator status="away" size="sm" />
      </div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Avatar name="David Brown" size="sm" status="offline" />
          <span className="text-sm text-slate-700 dark:text-slate-300">David Brown</span>
        </div>
        <StatusIndicator status="offline" size="sm" />
      </div>
    </div>
  ),
};

/**
 * Different sizes with labels
 */
export const SizesWithLabels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StatusIndicator status="online" label="Extra Small" size="xs" />
      <StatusIndicator status="online" label="Small" size="sm" />
      <StatusIndicator status="online" label="Medium" size="md" />
      <StatusIndicator status="online" label="Large" size="lg" />
      <StatusIndicator status="online" label="Extra Large" size="xl" />
    </div>
  ),
};

/**
 * Dark mode demonstration
 */
export const DarkMode: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="rounded-lg bg-white p-6">
        <h4 className="mb-4 text-sm font-semibold text-slate-900">Light Mode</h4>
        <div className="flex flex-col gap-3">
          <StatusIndicator status="online" label="Online" />
          <StatusIndicator status="busy" label="Busy" />
          <StatusIndicator status="away" label="Away" />
          <StatusIndicator status="offline" label="Offline" />
        </div>
      </div>
      <div className="rounded-lg bg-slate-900 p-6">
        <h4 className="mb-4 text-sm font-semibold text-slate-100">Dark Mode</h4>
        <div className="flex flex-col gap-3">
          <StatusIndicator status="online" label="Online" />
          <StatusIndicator status="busy" label="Busy" />
          <StatusIndicator status="away" label="Away" />
          <StatusIndicator status="offline" label="Offline" />
        </div>
      </div>
    </div>
  ),
};

/**
 * No label (empty string)
 */
export const NoLabel: Story = {
  args: {
    status: 'online',
    label: '',
  },
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" variant="dot" size="lg" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Dot (default)</span>
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" variant="pulsing" size="lg" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Pulsing</span>
      </div>
      <div className="flex items-center gap-4 rounded bg-slate-200 p-4 dark:bg-slate-800">
        <StatusIndicator status="online" showRing size="lg" />
        <span className="text-sm text-slate-600 dark:text-slate-400">
          With ring (on colored background)
        </span>
      </div>
    </div>
  ),
};
