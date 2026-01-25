import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, Loading, Skeleton } from './spinner';
import { Card, CardContent, CardHeader } from './card';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const LoadingWithMessage: StoryObj<typeof Loading> = {
  render: () => <Loading message="Loading data..." />,
};

export const LoadingSizes: StoryObj<typeof Loading> = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Loading size="sm" message="Small loader" />
      <Loading size="default" message="Default loader" />
      <Loading size="lg" message="Large loader" />
      <Loading size="xl" message="Extra large loader" />
    </div>
  ),
};

export const SkeletonExamples: StoryObj<typeof Skeleton> = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="avatar" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="title" />
          <Skeleton variant="text" />
        </div>
      </div>
      <Skeleton variant="card" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    </div>
  ),
};

export const CardLoadingState: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton variant="avatar" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="title" />
            <Skeleton variant="text" className="w-1/2" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" className="w-4/5" />
        </div>
      </CardContent>
    </Card>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner size="sm" />
      <span className="text-sm text-muted-foreground">Saving changes...</span>
    </div>
  ),
};

export const ButtonLoading: Story = {
  render: () => (
    <button
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      disabled
    >
      <Spinner size="sm" className="text-primary-foreground" />
      Processing...
    </button>
  ),
};
