import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './alert';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert component for displaying important messages to users. Supports different variants (info, success, warning, error) with optional icons and dismiss functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Visual style variant of the alert',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon for the alert variant',
    },
    dismissible: {
      control: 'boolean',
      description: 'Allow alert to be dismissed',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when alert is dismissed',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default alert with neutral styling.
 */
export const Default: Story = {
  args: {
    showIcon: true,
    children: (
      <>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </>
    ),
  },
};

/**
 * Info alert for informational messages.
 */
export const Info: Story = {
  args: {
    variant: 'info',
    showIcon: true,
    children: (
      <>
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          We've added a new way to manage your MCP server connections. Check out the settings page
          to learn more.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Success alert for positive confirmations.
 */
export const Success: Story = {
  args: {
    variant: 'success',
    showIcon: true,
    children: (
      <>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your MCP server has been connected successfully.</AlertDescription>
      </>
    ),
  },
};

/**
 * Warning alert for cautionary messages.
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    showIcon: true,
    children: (
      <>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your MCP server connection is unstable. Some features may not work properly.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Error alert for critical error messages.
 */
export const Error: Story = {
  args: {
    variant: 'error',
    showIcon: true,
    children: (
      <>
        <AlertTitle>Connection Failed</AlertTitle>
        <AlertDescription>
          Unable to connect to the MCP server. Please check your configuration and try again.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Alert without an icon.
 */
export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    showIcon: false,
    children: (
      <>
        <AlertTitle>No Icon</AlertTitle>
        <AlertDescription>This alert doesn't display an icon.</AlertDescription>
      </>
    ),
  },
};

/**
 * Dismissible alert that can be closed by the user.
 */
export const Dismissible: Story = {
  args: {
    variant: 'info',
    showIcon: true,
    dismissible: true,
    children: (
      <>
        <AlertTitle>Dismissible Alert</AlertTitle>
        <AlertDescription>
          Click the X button to dismiss this alert. It will disappear from view.
        </AlertDescription>
      </>
    ),
  },
};

/**
 * Alert with only a title, no description.
 */
export const TitleOnly: Story = {
  args: {
    variant: 'success',
    showIcon: true,
    children: <AlertTitle>Operation completed successfully</AlertTitle>,
  },
};

/**
 * Alert with only a description, no title.
 */
export const DescriptionOnly: Story = {
  args: {
    variant: 'warning',
    showIcon: true,
    children: <AlertDescription>This is a simple warning message.</AlertDescription>,
  },
};

/**
 * Alert with longer content to demonstrate text wrapping.
 */
export const LongContent: Story = {
  args: {
    variant: 'error',
    showIcon: true,
    dismissible: true,
    children: (
      <>
        <AlertTitle>Multiple Validation Errors</AlertTitle>
        <AlertDescription>
          <p className="mb-2">
            Your MCP server configuration contains several errors that need to be resolved:
          </p>
          <ul className="ml-2 list-inside list-disc space-y-1">
            <li>Server URL is not valid - must start with http:// or https://</li>
            <li>API key is missing or invalid</li>
            <li>Connection timeout value must be between 1000 and 30000 milliseconds</li>
            <li>Selected protocol version is not supported by this server</li>
          </ul>
        </AlertDescription>
      </>
    ),
  },
};

/**
 * All alert variants displayed together for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" showIcon>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>

      <Alert variant="info" showIcon>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </Alert>

      <Alert variant="success" showIcon>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>This is a success message.</AlertDescription>
      </Alert>

      <Alert variant="warning" showIcon>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning message.</AlertDescription>
      </Alert>

      <Alert variant="error" showIcon>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This is an error message.</AlertDescription>
      </Alert>
    </div>
  ),
};

/**
 * MCP Server specific use cases.
 */
export const MCPServerExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="success" showIcon dismissible>
        <AlertTitle>Server Connected</AlertTitle>
        <AlertDescription>
          Successfully connected to MCP server "azure-devops" running on localhost:3000
        </AlertDescription>
      </Alert>

      <Alert variant="warning" showIcon>
        <AlertTitle>Rate Limit Warning</AlertTitle>
        <AlertDescription>
          You're approaching the rate limit for this MCP server (45/50 requests per minute). Please
          slow down your requests.
        </AlertDescription>
      </Alert>

      <Alert variant="error" showIcon dismissible>
        <AlertTitle>Authentication Failed</AlertTitle>
        <AlertDescription>
          Unable to authenticate with the MCP server. Please check your API key in the environment
          variables and restart the server.
        </AlertDescription>
      </Alert>

      <Alert variant="info" showIcon>
        <AlertTitle>Tool Execution</AlertTitle>
        <AlertDescription>
          The tool "azure-devops_wit_get_work_item" is currently executing. This may take a few
          seconds...
        </AlertDescription>
      </Alert>
    </div>
  ),
};
