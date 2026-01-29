import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ConfirmDialog, useConfirmDialog } from './confirm-dialog';
import { Button } from './button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A confirmation dialog component with variant styling for different types of confirmation prompts.
Built on top of the Dialog component with a simplified API for common confirmation patterns.

## Features

- **Multiple Variants**: Danger, Warning, Info, and Default variants with unique styling
- **Loading State**: Built-in loading state with spinner and disabled buttons
- **Customizable**: Configurable button text and callbacks
- **Accessible**: Built on Radix UI Dialog with proper ARIA attributes
- **Hook Pattern**: Includes \`useConfirmDialog\` hook for async/await pattern

## Usage

### Basic Usage

\`\`\`tsx
import { ConfirmDialog } from '@/components/ui/confirm-dialog';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleConfirm = () => {
    // Handle confirmation
    console.log('Confirmed!');
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
      <ConfirmDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={handleConfirm}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        variant="danger"
      />
    </>
  );
}
\`\`\`

### Using the Hook

\`\`\`tsx
import { useConfirmDialog } from '@/components/ui/confirm-dialog';

function MyComponent() {
  const { confirm, ConfirmDialogComponent } = useConfirmDialog({
    title: 'Delete Account',
    message: 'This action is permanent and cannot be undone.',
    variant: 'danger'
  });

  const handleDelete = async () => {
    if (await confirm()) {
      // User confirmed - proceed with deletion
      await deleteAccount();
    }
  };

  return (
    <>
      <Button onClick={handleDelete}>Delete Account</Button>
      <ConfirmDialogComponent />
    </>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the dialog is open',
    },
    variant: {
      control: 'select',
      options: ['danger', 'warning', 'info', 'default'],
      description: 'Visual variant of the dialog',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state - shows spinner and disables buttons',
    },
    title: {
      control: 'text',
      description: 'Dialog title',
    },
    message: {
      control: 'text',
      description: 'Dialog message/description',
    },
    confirmText: {
      control: 'text',
      description: 'Confirm button text',
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
function InteractiveDialog(props: Partial<React.ComponentProps<typeof ConfirmDialog>>) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      alert('Confirmed!');
    }, 1500);
  };

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dialog
      </Button>
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={handleConfirm}
        loading={loading}
        title="Confirm Action"
        message="Are you sure you want to proceed?"
        {...props}
      />
    </>
  );
}

/**
 * Danger variant for destructive actions like deleting items.
 * Features red gradient header and prominent destructive styling.
 */
export const Danger: Story = {
  render: () => (
    <InteractiveDialog
      variant="danger"
      title="Delete Item"
      message="Are you sure you want to delete this item? This action cannot be undone."
      confirmText="Delete"
    />
  ),
};

/**
 * Warning variant for actions that require user attention.
 * Features amber gradient header and cautionary styling.
 */
export const Warning: Story = {
  render: () => (
    <InteractiveDialog
      variant="warning"
      title="Unsaved Changes"
      message="You have unsaved changes. Are you sure you want to leave this page?"
      confirmText="Leave Page"
      cancelText="Stay"
    />
  ),
};

/**
 * Info variant for informational confirmations.
 * Features blue gradient header and neutral styling.
 */
export const Info: Story = {
  render: () => (
    <InteractiveDialog
      variant="info"
      title="Update Available"
      message="A new version is available. Would you like to update now?"
      confirmText="Update Now"
      cancelText="Later"
    />
  ),
};

/**
 * Default variant for general confirmations.
 * Features purple gradient header and balanced styling.
 */
export const Default: Story = {
  render: () => (
    <InteractiveDialog
      variant="default"
      title="Confirm Action"
      message="Are you sure you want to proceed with this action?"
      confirmText="Proceed"
      cancelText="Cancel"
    />
  ),
};

/**
 * Loading state demonstration.
 * Shows spinner and disables buttons during async operations.
 */
export const Loading: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          onConfirm={() => {}}
          title="Processing"
          message="Please wait while we process your request..."
          loading={true}
          variant="info"
        />
      </>
    );
  },
};

/**
 * Delete user account example.
 * Real-world usage of danger variant for permanent actions.
 */
export const DeleteAccount: Story = {
  render: () => (
    <InteractiveDialog
      variant="danger"
      title="Delete Account"
      message="This will permanently delete your account and all associated data. This action cannot be undone."
      confirmText="Delete Account"
      cancelText="Keep Account"
    />
  ),
};

/**
 * Logout confirmation example.
 * Using warning variant for action that loses current state.
 */
export const Logout: Story = {
  render: () => (
    <InteractiveDialog
      variant="warning"
      title="Logout"
      message="Are you sure you want to logout? Any unsaved changes will be lost."
      confirmText="Logout"
      cancelText="Stay Logged In"
    />
  ),
};

/**
 * Submit form example.
 * Using default variant for standard confirmation.
 */
export const SubmitForm: Story = {
  render: () => (
    <InteractiveDialog
      variant="default"
      title="Submit Form"
      message="Please review your information before submitting. Once submitted, you cannot edit this form."
      confirmText="Submit"
      cancelText="Review"
    />
  ),
};

/**
 * useConfirmDialog hook example.
 * Demonstrates async/await pattern for easier usage.
 */
export const WithHook: Story = {
  render: () => {
    const HookExample = () => {
      const { confirm, ConfirmDialogComponent } = useConfirmDialog({
        title: 'Delete File',
        message: 'This file will be permanently deleted. Continue?',
        variant: 'danger',
        confirmText: 'Delete',
      });

      const handleDelete = async () => {
        const confirmed = await confirm();
        if (confirmed) {
          alert('File deleted!');
        } else {
          alert('Cancelled');
        }
      };

      return (
        <>
          <Button onClick={() => void handleDelete()} variant="destructive">
            Delete File (with Hook)
          </Button>
          <ConfirmDialogComponent />
        </>
      );
    };

    return <HookExample />;
  },
};

/**
 * Custom button text example.
 * Shows how to customize confirm and cancel button labels.
 */
export const CustomButtonText: Story = {
  render: () => (
    <InteractiveDialog
      variant="info"
      title="Enable Notifications"
      message="Would you like to receive notifications about important updates?"
      confirmText="Yes, Enable"
      cancelText="No Thanks"
    />
  ),
};

/**
 * All variants comparison.
 * Shows all four variants side by side for comparison.
 */
export const AllVariants: Story = {
  render: () => {
    const [dangerOpen, setDangerOpen] = useState(false);
    const [warningOpen, setWarningOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [defaultOpen, setDefaultOpen] = useState(false);

    return (
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => {
            setDangerOpen(true);
          }}
          variant="destructive"
        >
          Danger
        </Button>
        <Button
          onClick={() => {
            setWarningOpen(true);
          }}
          className="bg-amber-600 hover:bg-amber-700"
        >
          Warning
        </Button>
        <Button
          onClick={() => {
            setInfoOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Info
        </Button>
        <Button
          onClick={() => {
            setDefaultOpen(true);
          }}
        >
          Default
        </Button>

        <ConfirmDialog
          open={dangerOpen}
          onOpenChange={setDangerOpen}
          onConfirm={() => {
            setDangerOpen(false);
          }}
          variant="danger"
          title="Danger"
          message="This is a danger variant with destructive styling."
        />
        <ConfirmDialog
          open={warningOpen}
          onOpenChange={setWarningOpen}
          onConfirm={() => {
            setWarningOpen(false);
          }}
          variant="warning"
          title="Warning"
          message="This is a warning variant with cautionary styling."
        />
        <ConfirmDialog
          open={infoOpen}
          onOpenChange={setInfoOpen}
          onConfirm={() => {
            setInfoOpen(false);
          }}
          variant="info"
          title="Info"
          message="This is an info variant with informational styling."
        />
        <ConfirmDialog
          open={defaultOpen}
          onOpenChange={setDefaultOpen}
          onConfirm={() => {
            setDefaultOpen(false);
          }}
          variant="default"
          title="Default"
          message="This is the default variant with balanced styling."
        />
      </div>
    );
  },
};
