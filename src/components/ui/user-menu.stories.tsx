import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './user-menu';

const meta = {
  title: 'Components/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A user profile menu with avatar, name, email, and dropdown actions. Composed from Avatar and Dropdown components.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: "User's display name",
    },
    email: {
      control: 'text',
      description: "User's email address",
    },
    avatarSrc: {
      control: 'text',
      description: 'Avatar image URL',
    },
    avatarStatus: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status indicator',
    },
    avatarSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Avatar size',
    },
    variant: {
      control: 'select',
      options: ['default', 'active'],
      description: 'Visual variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the menu',
    },
    onProfileClick: { action: 'onProfileClick' },
    onSettingsClick: { action: 'onSettingsClick' },
    onSignOutClick: { action: 'onSignOutClick' },
  },
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default UserMenu with initials fallback.
 */
export const Default: Story = {
  args: {
    name: 'John Doe',
    email: 'john@example.com',
  },
};

/**
 * UserMenu with avatar image.
 */
export const WithAvatar: Story = {
  args: {
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
  },
};

/**
 * UserMenu with online status indicator.
 */
export const WithStatus: Story = {
  args: {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    avatarStatus: 'online',
  },
};

/**
 * UserMenu with different status indicators.
 */
export const StatusVariants: Story = {
  args: { name: '', email: '' },
  render: () => (
    <div className="flex flex-col gap-4 bg-slate-900 p-6">
      <UserMenu
        name="Alice Johnson"
        email="alice@example.com"
        avatarSrc="https://i.pravatar.cc/150?img=5"
        avatarStatus="online"
      />
      <UserMenu
        name="Bob Wilson"
        email="bob@example.com"
        avatarSrc="https://i.pravatar.cc/150?img=12"
        avatarStatus="away"
      />
      <UserMenu
        name="Carol Martinez"
        email="carol@example.com"
        avatarSrc="https://i.pravatar.cc/150?img=9"
        avatarStatus="busy"
      />
      <UserMenu
        name="David Lee"
        email="david@example.com"
        avatarSrc="https://i.pravatar.cc/150?img=13"
        avatarStatus="offline"
      />
    </div>
  ),
};

/**
 * UserMenu with active variant (highlighted state).
 */
export const Active: Story = {
  args: {
    name: 'John Doe',
    email: 'john@example.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'active',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-900 p-6">
        <Story />
      </div>
    ),
  ],
};

/**
 * Disabled UserMenu.
 */
export const Disabled: Story = {
  args: {
    name: 'John Doe',
    email: 'john@example.com',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-900 p-6">
        <Story />
      </div>
    ),
  ],
};

/**
 * UserMenu with different avatar sizes.
 */
export const AvatarSizes: Story = {
  args: { name: '', email: '' },
  render: () => (
    <div className="flex flex-col gap-4 bg-slate-900 p-6">
      <UserMenu
        name="Extra Small"
        email="xs@example.com"
        avatarSize="xs"
        avatarSrc="https://i.pravatar.cc/150?img=20"
      />
      <UserMenu
        name="Small"
        email="sm@example.com"
        avatarSize="sm"
        avatarSrc="https://i.pravatar.cc/150?img=21"
      />
      <UserMenu
        name="Medium"
        email="md@example.com"
        avatarSize="md"
        avatarSrc="https://i.pravatar.cc/150?img=22"
      />
      <UserMenu
        name="Large"
        email="lg@example.com"
        avatarSize="lg"
        avatarSrc="https://i.pravatar.cc/150?img=23"
      />
    </div>
  ),
};

/**
 * Interactive UserMenu with event handlers.
 */
export const Interactive: Story = {
  args: { name: '', email: '' },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [lastAction, setLastAction] = React.useState<string>('');

    return (
      <div className="bg-slate-900 p-6">
        <UserMenu
          name="Interactive User"
          email="user@example.com"
          avatarSrc="https://i.pravatar.cc/150?img=8"
          avatarStatus="online"
          open={open}
          onOpenChange={setOpen}
          onProfileClick={() => { setLastAction('Profile clicked'); }}
          onSettingsClick={() => { setLastAction('Settings clicked'); }}
          onSignOutClick={() => { setLastAction('Sign out clicked'); }}
        />
        {lastAction && (
          <div className="mt-4 rounded-md bg-slate-800 p-3 text-sm text-white">
            Last action: {lastAction}
          </div>
        )}
      </div>
    );
  },
};

/**
 * UserMenu with long names and emails (truncated).
 */
export const LongContent: Story = {
  args: {
    name: 'Christopher Alexander Montgomery Wellington III',
    email: 'christopher.alexander.montgomery.wellington@verylongdomainname.com',
    avatarSrc: 'https://i.pravatar.cc/150?img=14',
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-900 p-6">
        <div className="max-w-xs">
          <Story />
        </div>
      </div>
    ),
  ],
};
