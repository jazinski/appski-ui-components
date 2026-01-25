import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Error',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Active',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Pending',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Badge variant="success">Active</Badge>
        <span>User is currently online</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="warning">Pending</Badge>
        <span>Awaiting approval</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="destructive">Error</Badge>
        <span>Payment failed</span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">Draft</Badge>
        <span>Not yet published</span>
      </div>
    </div>
  ),
};

export const WithCounts: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <span>Notifications</span>
        <Badge>5</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span>Messages</span>
        <Badge variant="destructive">12</Badge>
      </div>
      <div className="flex items-center gap-1">
        <span>Updates</span>
        <Badge variant="secondary">3</Badge>
      </div>
    </div>
  ),
};
