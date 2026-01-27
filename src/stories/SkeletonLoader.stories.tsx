import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoader } from '../components/ui/skeleton-loader';

const meta = {
  title: 'UI/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'list', 'table', 'stats', 'text', 'metric-card'],
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
} satisfies Meta<typeof SkeletonLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    variant: 'card',
    count: 1,
  },
};

export const List: Story = {
  args: {
    variant: 'list',
    count: 3,
  },
};

export const Table: Story = {
  args: {
    variant: 'table',
    count: 5,
  },
};

export const Stats: Story = {
  args: {
    variant: 'stats',
    count: 4,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    count: 5,
  },
};

export const MetricCard: Story = {
  args: {
    variant: 'metric-card',
    count: 4,
  },
};
