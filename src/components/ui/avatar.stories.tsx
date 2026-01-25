import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator',
    },
    name: {
      control: 'text',
      description: 'Name to display as initials fallback',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading skeleton',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default avatar with initials from name
 */
export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

/**
 * Avatar with image
 */
export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe',
  },
};

/**
 * Avatar with custom initials
 */
export const WithCustomInitials: Story = {
  args: {
    name: 'John Doe',
    initials: 'JD',
  },
};

/**
 * Avatar with online status
 */
export const WithOnlineStatus: Story = {
  args: {
    name: 'Alice Johnson',
    status: 'online',
  },
};

/**
 * Avatar with offline status
 */
export const WithOfflineStatus: Story = {
  args: {
    name: 'Bob Smith',
    status: 'offline',
  },
};

/**
 * Avatar with away status
 */
export const WithAwayStatus: Story = {
  args: {
    name: 'Carol White',
    status: 'away',
  },
};

/**
 * Avatar with busy status
 */
export const WithBusyStatus: Story = {
  args: {
    name: 'David Brown',
    status: 'busy',
  },
};

/**
 * Avatar with image and status
 */
export const WithImageAndStatus: Story = {
  args: {
    name: 'Emma Wilson',
    src: 'https://i.pravatar.cc/150?img=5',
    status: 'online',
  },
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    loading: true,
  },
};

/**
 * Extra small avatar
 */
export const ExtraSmall: Story = {
  args: {
    name: 'John Doe',
    size: 'xs',
  },
};

/**
 * Small avatar
 */
export const Small: Story = {
  args: {
    name: 'John Doe',
    size: 'sm',
  },
};

/**
 * Medium avatar (default)
 */
export const Medium: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

/**
 * Large avatar
 */
export const Large: Story = {
  args: {
    name: 'John Doe',
    size: 'lg',
  },
};

/**
 * Extra large avatar
 */
export const ExtraLarge: Story = {
  args: {
    name: 'John Doe',
    size: 'xl',
  },
};

/**
 * 2XL avatar
 */
export const TwoXL: Story = {
  args: {
    name: 'John Doe',
    size: '2xl',
  },
};

/**
 * Square shape
 */
export const Square: Story = {
  args: {
    name: 'John Doe',
    shape: 'square',
  },
};

/**
 * Square with image
 */
export const SquareWithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://i.pravatar.cc/150?img=3',
    shape: 'square',
  },
};

/**
 * All sizes demo
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar name="XS" size="xs" />
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
      <Avatar name="2XL" size="2xl" />
    </div>
  ),
};

/**
 * All status indicators
 */
export const AllStatuses: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Online" status="online" />
        <span className="text-xs text-slate-600 dark:text-slate-400">Online</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Offline" status="offline" />
        <span className="text-xs text-slate-600 dark:text-slate-400">Offline</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Away" status="away" />
        <span className="text-xs text-slate-600 dark:text-slate-400">Away</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar name="Busy" status="busy" />
        <span className="text-xs text-slate-600 dark:text-slate-400">Busy</span>
      </div>
    </div>
  ),
};

/**
 * Color variety - initials get different colors based on name
 */
export const ColorVariety: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Avatar name="Alice Anderson" />
      <Avatar name="Bob Brown" />
      <Avatar name="Carol Chen" />
      <Avatar name="David Davis" />
      <Avatar name="Emma Evans" />
      <Avatar name="Frank Foster" />
      <Avatar name="Grace Green" />
      <Avatar name="Henry Hill" />
      <Avatar name="Iris Irving" />
      <Avatar name="Jack Johnson" />
      <Avatar name="Karen King" />
      <Avatar name="Leo Lee" />
    </div>
  ),
};

/**
 * Group of avatars
 */
export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        name="Alice"
        src="https://i.pravatar.cc/150?img=1"
        className="ring-2 ring-white dark:ring-slate-900"
      />
      <Avatar
        name="Bob"
        src="https://i.pravatar.cc/150?img=2"
        className="ring-2 ring-white dark:ring-slate-900"
      />
      <Avatar
        name="Carol"
        src="https://i.pravatar.cc/150?img=3"
        className="ring-2 ring-white dark:ring-slate-900"
      />
      <Avatar
        name="David"
        src="https://i.pravatar.cc/150?img=4"
        className="ring-2 ring-white dark:ring-slate-900"
      />
      <Avatar name="+5" className="ring-2 ring-white dark:ring-slate-900" />
    </div>
  ),
};

/**
 * Single letter names
 */
export const SingleLetter: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="A" />
      <Avatar name="B" />
      <Avatar name="X" />
      <Avatar name="Y" />
      <Avatar name="Z" />
    </div>
  ),
};

/**
 * Edge cases
 */
export const EdgeCases: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar name="" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Empty name</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="   " />
        <span className="text-sm text-slate-600 dark:text-slate-400">Whitespace only</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="VeryLongSingleWordName" />
        <span className="text-sm text-slate-600 dark:text-slate-400">Long single word</span>
      </div>
      <div className="flex items-center gap-4">
        <Avatar name="First Middle Last Extra" />
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Multiple words (takes first 2)
        </span>
      </div>
    </div>
  ),
};

/**
 * Image loading with fallback
 */
export const ImageFallback: Story = {
  args: {
    name: 'Broken Image',
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
  },
};
