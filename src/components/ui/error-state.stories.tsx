import type { Meta, StoryObj } from '@storybook/react';
import { ErrorState } from './error-state';

const meta: Meta<typeof ErrorState> = {
  title: 'Components/ErrorState',
  component: ErrorState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A component for displaying user-friendly error messages with optional retry functionality.
Supports different variants for common error types (network, auth, not found).

## Features

- **Multiple Variants**: Default, Network, Auth, and Not Found error types
- **Flexible Display**: Full-page or compact inline modes
- **Retry Functionality**: Optional retry button with callback
- **Accessible**: Proper ARIA attributes and roles
- **Error Details**: Displays error messages in a formatted code block

## Usage

\`\`\`tsx
import { ErrorState } from '@/components/ui/error-state';

// Basic usage
<ErrorState error="Something went wrong" />

// With retry callback
<ErrorState 
  error={error} 
  onRetry={handleRetry}
  variant="network"
/>

// Compact inline version
<ErrorState 
  error="Failed to load data"
  onRetry={refetch}
  compact
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'text',
      description: 'The error object or message to display',
    },
    variant: {
      control: 'select',
      options: ['default', 'network', 'auth', 'notfound'],
      description: 'Visual variant of the error state',
    },
    onRetry: {
      description: 'Callback function when retry button is clicked',
    },
    compact: {
      control: 'boolean',
      description: 'Whether to show a compact inline version',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default error state.
 * Generic error message for unexpected errors.
 */
export const Default: Story = {
  args: {
    error: 'An unexpected error occurred',
    onRetry: () => alert('Retrying...'),
  },
};

/**
 * Network error variant.
 * Shows WiFi icon and network-specific messaging.
 */
export const Network: Story = {
  args: {
    error: 'Failed to fetch data from server',
    variant: 'network',
    onRetry: () => alert('Retrying connection...'),
  },
};

/**
 * Authentication error variant.
 * Shows authentication icon and login-specific messaging.
 */
export const Auth: Story = {
  args: {
    error: 'Invalid credentials',
    variant: 'auth',
    onRetry: () => alert('Redirecting to login...'),
  },
};

/**
 * Not Found error variant.
 * Shows alert icon and 404-style messaging.
 */
export const NotFound: Story = {
  args: {
    error: '404: Page not found',
    variant: 'notfound',
  },
};

/**
 * Without retry button.
 * Shows error state without action button.
 */
export const WithoutRetry: Story = {
  args: {
    error: 'This operation is not allowed',
    variant: 'default',
  },
};

/**
 * With Error object.
 * Demonstrates passing an Error instance instead of a string.
 */
export const WithErrorObject: Story = {
  args: {
    error: new Error('TypeError: Cannot read property "id" of undefined'),
    onRetry: () => alert('Retrying...'),
  },
};

/**
 * Compact inline version.
 * Shows a more compact error message suitable for inline display.
 */
export const Compact: Story = {
  args: {
    error: 'Failed to load user data',
    variant: 'default',
    compact: true,
    onRetry: () => alert('Retrying...'),
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Compact network error.
 * Inline network error with retry button.
 */
export const CompactNetwork: Story = {
  args: {
    error: 'Connection timeout',
    variant: 'network',
    compact: true,
    onRetry: () => alert('Retrying connection...'),
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Compact auth error.
 * Inline authentication error.
 */
export const CompactAuth: Story = {
  args: {
    error: 'Session expired',
    variant: 'auth',
    compact: true,
    onRetry: () => alert('Redirecting to login...'),
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Compact without retry.
 * Inline error without action button.
 */
export const CompactWithoutRetry: Story = {
  args: {
    error: 'Insufficient permissions',
    variant: 'auth',
    compact: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Real-world example: API fetch failure.
 * Shows how to use ErrorState when an API call fails.
 */
export const APIFetchFailure: Story = {
  args: {
    error: 'Failed to fetch: 500 Internal Server Error',
    variant: 'network',
    onRetry: () => alert('Refetching data...'),
  },
};

/**
 * Real-world example: Form submission error.
 * Compact error for form validation or submission failures.
 */
export const FormSubmissionError: Story = {
  args: {
    error: 'Validation failed: Email is already in use',
    variant: 'default',
    compact: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Real-world example: Resource not found.
 * 404 error when a resource doesn't exist.
 */
export const ResourceNotFound: Story = {
  args: {
    error: 'User ID "abc123" not found in database',
    variant: 'notfound',
  },
};

/**
 * All variants comparison.
 * Shows all error variants side by side.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ErrorState
        error="Generic error occurred"
        variant="default"
        onRetry={() => alert('Retry default')}
      />
      <ErrorState
        error="Connection failed"
        variant="network"
        onRetry={() => alert('Retry network')}
      />
      <ErrorState
        error="Authentication failed"
        variant="auth"
        onRetry={() => alert('Retry auth')}
      />
      <ErrorState error="Resource not found" variant="notfound" />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

/**
 * All compact variants.
 * Shows all error variants in compact mode.
 */
export const AllCompactVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <ErrorState
        error="Generic error occurred"
        variant="default"
        compact
        onRetry={() => alert('Retry')}
      />
      <ErrorState
        error="Connection failed"
        variant="network"
        compact
        onRetry={() => alert('Retry')}
      />
      <ErrorState
        error="Authentication failed"
        variant="auth"
        compact
        onRetry={() => alert('Retry')}
      />
      <ErrorState error="Resource not found" variant="notfound" compact />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
