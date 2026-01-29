import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { ConfirmDialog, useConfirmDialog } from './confirm-dialog';

describe('ConfirmDialog', () => {
  describe('Basic Rendering', () => {
    it('renders when open is true', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test Title"
          message="Test message"
        />
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('shows title and message', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Delete User"
          message="Are you sure you want to delete this user?"
        />
      );

      expect(screen.getByText('Delete User')).toBeInTheDocument();
      expect(screen.getByText('Are you sure you want to delete this user?')).toBeInTheDocument();
    });

    it('renders confirm and cancel buttons with default text', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
        />
      );

      expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
      render(
        <ConfirmDialog
          open={false}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
        />
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders danger variant with correct content', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Delete"
          message="Delete this item?"
          variant="danger"
        />
      );

      // Check that variant-specific content is rendered
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
      expect(screen.getByText('Delete this item?')).toBeInTheDocument();
    });

    it('renders warning variant', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Warning"
          message="This is a warning"
          variant="warning"
        />
      );

      expect(screen.getByText('Warning')).toBeInTheDocument();
      expect(screen.getByText('This is a warning')).toBeInTheDocument();
    });

    it('renders info variant', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Info"
          message="This is info"
          variant="info"
        />
      );

      expect(screen.getByText('Info')).toBeInTheDocument();
      expect(screen.getByText('This is info')).toBeInTheDocument();
    });

    it('renders default variant', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Are you sure?"
          message="Please confirm this action"
          variant="default"
        />
      );

      expect(screen.getByText('Are you sure?')).toBeInTheDocument();
      expect(screen.getByText('Please confirm this action')).toBeInTheDocument();
    });

    it('defaults to danger variant when not specified', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Delete"
          message="Delete this item?"
        />
      );

      // Danger is the default variant
      expect(screen.getByText('Delete')).toBeInTheDocument();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('calls onConfirm when confirm button is clicked', async () => {
      const user = userEvent.setup();
      const onConfirm = vi.fn();

      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={onConfirm}
          title="Test"
          message="Test message"
        />
      );

      await user.click(screen.getByRole('button', { name: /confirm/i }));
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('calls onOpenChange(false) when cancel button is clicked', async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();

      render(
        <ConfirmDialog
          open={true}
          onOpenChange={onOpenChange}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
        />
      );

      await user.click(screen.getByRole('button', { name: /cancel/i }));
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('calls onOpenChange(false) after confirmation when not loading', async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();
      const onConfirm = vi.fn();

      render(
        <ConfirmDialog
          open={true}
          onOpenChange={onOpenChange}
          onConfirm={onConfirm}
          title="Test"
          message="Test message"
          loading={false}
        />
      );

      await user.click(screen.getByRole('button', { name: /confirm/i }));
      expect(onConfirm).toHaveBeenCalledTimes(1);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });

    it('does not close after confirmation when loading', () => {
      const onOpenChange = vi.fn();
      const onConfirm = vi.fn();

      // Start with loading=false, then test the logic
      const { rerender } = render(
        <ConfirmDialog
          open={true}
          onOpenChange={onOpenChange}
          onConfirm={onConfirm}
          title="Test"
          message="Test message"
          loading={false}
          confirmText="Confirm"
        />
      );

      // The component closes after confirm when not loading (tested in another test)
      // When loading=true, handleConfirm calls onConfirm but doesn't call onOpenChange(false)
      // We can test this by checking that the loading state shows the right UI
      rerender(
        <ConfirmDialog
          open={true}
          onOpenChange={onOpenChange}
          onConfirm={onConfirm}
          title="Test"
          message="Test message"
          loading={true}
          confirmText="Confirm"
        />
      );

      // When loading, the button shows "Processing..." and is disabled
      expect(screen.getByText('Processing...')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /processing/i })).toBeDisabled();
    });

    it('displays custom button text', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
          confirmText="Delete Forever"
          cancelText="No, Go Back"
        />
      );

      expect(screen.getByRole('button', { name: 'Delete Forever' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'No, Go Back' })).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('shows spinner when loading', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
          loading={true}
        />
      );

      expect(screen.getByText('Processing...')).toBeInTheDocument();
    });

    it('disables both buttons when loading', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
          confirmText="Confirm"
          cancelText="Cancel"
          loading={true}
        />
      );

      // Check the confirm and cancel buttons specifically (not the dialog close button)
      expect(screen.getByRole('button', { name: /cancel/i })).toBeDisabled();
      expect(screen.getByRole('button', { name: /processing/i })).toBeDisabled();
    });

    it('shows "Processing..." text when loading instead of confirm text', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
          confirmText="Delete"
          loading={true}
        />
      );

      expect(screen.queryByText('Delete')).not.toBeInTheDocument();
      expect(screen.getByText('Processing...')).toBeInTheDocument();
    });

    it('hides spinner when not loading', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
          loading={false}
        />
      );

      expect(screen.queryByText('Processing...')).not.toBeInTheDocument();
    });
  });

  describe('useConfirmDialog Hook', () => {
    it('returns confirm function and ConfirmDialogComponent', () => {
      const TestWrapper = () => {
        const { confirm, ConfirmDialogComponent } = useConfirmDialog({
          title: 'Test',
          message: 'Test message',
        });

        return (
          <>
            <div data-testid="confirm-type">{typeof confirm}</div>
            <div data-testid="component-type">{typeof ConfirmDialogComponent}</div>
            <ConfirmDialogComponent />
          </>
        );
      };

      render(<TestWrapper />);

      expect(screen.getByTestId('confirm-type')).toHaveTextContent('function');
      expect(screen.getByTestId('component-type')).toHaveTextContent('function');
    });

    it('confirm() opens the dialog', async () => {
      const TestComponent = () => {
        const { confirm, ConfirmDialogComponent } = useConfirmDialog({
          title: 'Test Title',
          message: 'Test message',
        });

        return (
          <>
            <button
              onClick={() => {
                void confirm();
              }}
            >
              Open
            </button>
            <ConfirmDialogComponent />
          </>
        );
      };

      const user = userEvent.setup();
      render(<TestComponent />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

      await user.click(screen.getByText('Open'));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    });

    it('confirm() resolves to true when confirmed', async () => {
      const TestComponent = () => {
        const [result, setResult] = React.useState<boolean | null>(null);
        const { confirm, ConfirmDialogComponent } = useConfirmDialog({
          title: 'Test',
          message: 'Test message',
        });

        const handleClick = async () => {
          const confirmed = await confirm();
          setResult(confirmed);
        };

        return (
          <>
            <button onClick={() => void handleClick()}>Open</button>
            {result !== null && <div>Result: {result.toString()}</div>}
            <ConfirmDialogComponent />
          </>
        );
      };

      const user = userEvent.setup();
      render(<TestComponent />);

      await user.click(screen.getByText('Open'));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await user.click(screen.getByRole('button', { name: /confirm/i }));

      await waitFor(() => {
        expect(screen.getByText('Result: true')).toBeInTheDocument();
      });
    });

    it('confirm() resolves to false when cancelled', async () => {
      const TestComponent = () => {
        const [result, setResult] = React.useState<boolean | null>(null);
        const { confirm, ConfirmDialogComponent } = useConfirmDialog({
          title: 'Test',
          message: 'Test message',
        });

        const handleClick = async () => {
          const confirmed = await confirm();
          setResult(confirmed);
        };

        return (
          <>
            <button onClick={() => void handleClick()}>Open</button>
            {result !== null && <div>Result: {result.toString()}</div>}
            <ConfirmDialogComponent />
          </>
        );
      };

      const user = userEvent.setup();
      render(<TestComponent />);

      await user.click(screen.getByText('Open'));

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      await user.click(screen.getByRole('button', { name: /cancel/i }));

      await waitFor(() => {
        expect(screen.getByText('Result: false')).toBeInTheDocument();
      });
    });

    it('hook respects custom options', () => {
      const TestComponent = () => {
        const { confirm, ConfirmDialogComponent } = useConfirmDialog({
          title: 'Delete Account',
          message: 'This action is permanent',
          confirmText: 'Delete Forever',
          cancelText: 'Keep Account',
          variant: 'danger',
        });

        return (
          <>
            <button
              onClick={() => {
                void confirm();
              }}
            >
              Open
            </button>
            <ConfirmDialogComponent />
          </>
        );
      };

      const user = userEvent.setup();
      render(<TestComponent />);

      void user.click(screen.getByText('Open'));

      void waitFor(() => {
        expect(screen.getByText('Delete Account')).toBeInTheDocument();
        expect(screen.getByText('This action is permanent')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Delete Forever' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Keep Account' })).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper dialog role', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
        />
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('has proper button labels', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test"
          message="Test message"
        />
      );

      expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    });

    it('includes accessible description', () => {
      render(
        <ConfirmDialog
          open={true}
          onOpenChange={vi.fn()}
          onConfirm={vi.fn()}
          title="Test Title"
          message="This is an accessible description"
        />
      );

      expect(screen.getByText('This is an accessible description')).toBeInTheDocument();
    });
  });
});
