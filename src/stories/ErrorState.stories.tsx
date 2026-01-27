import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from '../components/ui/error-state';

const meta = {
  title: 'UI/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'network', 'auth', 'notfound'],
    },
    compact: { control: 'boolean' },
    error: { control: 'text' },
  },
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    error: 'Failed to load user data',
    onRetry: () => {
      alert('Retrying...');
    },
  },
};

// Network Error
export const NetworkError: Story = {
  args: {
    variant: 'network',
    error: 'Connection timed out after 3000ms',
    onRetry: () => {
      alert('Retrying connection...');
    },
  },
};

// Auth Error
export const AuthError: Story = {
  args: {
    variant: 'auth',
    error: 'Session expired. Please log in again.',
    onRetry: () => {
      alert('Redirecting to login...');
    },
  },
};

// Compact mode
export const Compact: Story = {
  args: {
    compact: true,
    error: 'Failed to save changes',
    onRetry: () => {
      alert('Retrying save...');
    },
  },
};

// Compact Network Error
export const CompactNetwork: Story = {
  args: {
    compact: true,
    variant: 'network',
    error: 'Offline mode',
    onRetry: () => {
      alert('Reconnecting...');
    },
  },
};
