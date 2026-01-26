import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './toast';
import { Button } from './button';
import { FaBell, FaDownload, FaTrash, FaSync } from 'react-icons/fa';

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo component to trigger toasts
const ToastDemo = ({
  variant = 'default',
  title,
  action,
}: {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  title?: string;
  action?: { label: string; onClick: () => void };
}) => {
  const toast = useToast();

  const showToast = () => {
    const messages = {
      default: 'This is a notification message',
      success: 'Your changes have been saved successfully!',
      error: 'Something went wrong. Please try again.',
      warning: 'Warning: This action cannot be undone.',
      info: 'New updates are available for your application.',
    };

    toast.addToast({
      variant,
      title,
      description: messages[variant],
      action,
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={showToast}>Show {variant} toast</Button>
      <p className="text-muted-foreground text-sm">Toast will appear in the top-right corner</p>
    </div>
  );
};

// Helper Methods Demo
const HelperMethodsDemo = () => {
  const toast = useToast();

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Button variant="default" onClick={() => toast.success('Changes saved successfully!')}>
        <FaDownload className="mr-2 h-4 w-4" />
        Save Changes
      </Button>
      <Button variant="destructive" onClick={() => toast.error('Failed to delete item')}>
        <FaTrash className="mr-2 h-4 w-4" />
        Delete Item
      </Button>
      <Button variant="outline" onClick={() => toast.warning('This action requires confirmation')}>
        <FaSync className="mr-2 h-4 w-4" />
        Sync Data
      </Button>
      <Button variant="secondary" onClick={() => toast.info('You have 3 new notifications')}>
        <FaBell className="mr-2 h-4 w-4" />
        Check Notifications
      </Button>
    </div>
  );
};

// Multi Toast Demo
const MultiToastDemo = () => {
  const toast = useToast();

  const showMultiple = () => {
    toast.success('First notification');
    setTimeout(() => toast.info('Second notification'), 200);
    setTimeout(() => toast.warning('Third notification'), 400);
    setTimeout(() => toast.error('Fourth notification'), 600);
  };

  return <Button onClick={showMultiple}>Show Multiple Toasts</Button>;
};

// Custom Duration Demo
const CustomDurationDemo = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={() => toast.success('Quick toast (2s)', { duration: 2000 })}>
        2 Second Toast
      </Button>
      <Button onClick={() => toast.info('Medium toast (5s)', { duration: 5000 })}>
        5 Second Toast
      </Button>
      <Button onClick={() => toast.warning('Long toast (10s)', { duration: 10000 })}>
        10 Second Toast
      </Button>
      <Button onClick={() => toast.error('Persistent toast', { duration: 0 })}>
        No Auto-Dismiss
      </Button>
    </div>
  );
};

// With Action Demo
const WithActionDemo = () => {
  const toast = useToast();

  const showWithAction = () => {
    toast.info('New version available', {
      title: 'Update Available',
      action: {
        label: 'Update Now',
        onClick: () => {
          toast.success('Update started!');
        },
      },
    });
  };

  return <Button onClick={showWithAction}>Show Toast with Action</Button>;
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="default" />
    </ToastProvider>
  ),
};

export const Success: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="success" />
    </ToastProvider>
  ),
};

export const Error: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="error" />
    </ToastProvider>
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="warning" />
    </ToastProvider>
  ),
};

export const Info: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="info" />
    </ToastProvider>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo variant="success" title="Success" />
    </ToastProvider>
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastProvider>
      <WithActionDemo />
    </ToastProvider>
  ),
};

export const HelperMethods: Story = {
  render: () => (
    <ToastProvider>
      <HelperMethodsDemo />
    </ToastProvider>
  ),
};

export const MultipleToasts: Story = {
  render: () => (
    <ToastProvider>
      <MultiToastDemo />
    </ToastProvider>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <ToastProvider>
      <CustomDurationDemo />
    </ToastProvider>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <ToastProvider position="top-left">
      <ToastDemo variant="info" />
    </ToastProvider>
  ),
};

export const TopCenter: Story = {
  render: () => (
    <ToastProvider position="top-center">
      <ToastDemo variant="info" />
    </ToastProvider>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <ToastProvider position="bottom-right">
      <ToastDemo variant="success" />
    </ToastProvider>
  ),
};

export const BottomLeft: Story = {
  render: () => (
    <ToastProvider position="bottom-left">
      <ToastDemo variant="warning" />
    </ToastProvider>
  ),
};

export const BottomCenter: Story = {
  render: () => (
    <ToastProvider position="bottom-center">
      <ToastDemo variant="error" />
    </ToastProvider>
  ),
};

export const MaxToasts: Story = {
  render: () => (
    <ToastProvider max={3}>
      <div className="flex flex-col gap-3">
        <MultiToastDemo />
        <p className="text-muted-foreground text-sm">Maximum 3 toasts will be shown at once</p>
      </div>
    </ToastProvider>
  ),
};
