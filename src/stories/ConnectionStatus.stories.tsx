import type { Meta, StoryObj } from '@storybook/react';
import { ConnectionStatus } from '../components/ui/connection-status';

const meta = {
  title: 'UI/ConnectionStatus',
  component: ConnectionStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['online', 'offline', 'connecting', 'error'],
    },
    asBadge: { control: 'boolean' },
    pulse: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof ConnectionStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = {
  args: {
    status: 'online',
  },
};

export const Offline: Story = {
  args: {
    status: 'offline',
  },
};

export const Connecting: Story = {
  args: {
    status: 'connecting',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const AsBadge: Story = {
  args: {
    status: 'online',
    asBadge: true,
  },
};

export const CustomLabel: Story = {
  args: {
    status: 'error',
    label: 'Connection Failed',
  },
};

export const IconOnly: Story = {
  args: {
    status: 'online',
    showLabel: false,
  },
};
