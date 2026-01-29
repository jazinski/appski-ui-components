import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider, useToast } from './toast';
import { Button } from './button';

// Helper component to test toast functionality
const ToastTester = () => {
  const toast = useToast();

  return (
    <div>
      <Button onClick={() => toast.success('Success message')}>Show Success</Button>
      <Button onClick={() => toast.error('Error message')}>Show Error</Button>
      <Button onClick={() => toast.warning('Warning message')}>Show Warning</Button>
      <Button onClick={() => toast.info('Info message')}>Show Info</Button>
      <Button onClick={() => toast.addToast({ description: 'Default message' })}>
        Show Default
      </Button>
      <Button onClick={() => toast.success('With title', { title: 'Success Title' })}>
        Show With Title
      </Button>
      <Button
        onClick={() =>
          toast.info('With action', {
            action: { label: 'Action', onClick: () => {} },
          })
        }
      >
        Show With Action
      </Button>
      <Button onClick={() => toast.success('Quick toast', { duration: 100 })}>
        Show Quick Toast
      </Button>
      <Button onClick={() => toast.error('Persistent', { duration: 0 })}>Show Persistent</Button>
    </div>
  );
};

describe('Toast', () => {
  describe('ToastProvider', () => {
    it('renders children without toasts', () => {
      render(
        <ToastProvider>
          <div>Test Content</div>
        </ToastProvider>
      );

      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('provides toast context to children', () => {
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      expect(screen.getByText('Show Success')).toBeInTheDocument();
    });

    it('throws error when useToast is used outside provider', () => {
      // Suppress console errors for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const TestComponent = () => {
        useToast();
        return null;
      };

      expect(() => {
        render(<TestComponent />);
      }).toThrow('useToast must be used within a ToastProvider');

      consoleSpy.mockRestore();
    });
  });

  describe('Toast Variants', () => {
    it('renders success toast', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders error toast', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Error'));

      await waitFor(() => {
        expect(screen.getByText('Error message')).toBeInTheDocument();
      });
    });

    it('renders warning toast', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Warning'));

      await waitFor(() => {
        expect(screen.getByText('Warning message')).toBeInTheDocument();
      });
    });

    it('renders info toast', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Info'));

      await waitFor(() => {
        expect(screen.getByText('Info message')).toBeInTheDocument();
      });
    });

    it('renders default toast', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Default'));

      await waitFor(() => {
        expect(screen.getByText('Default message')).toBeInTheDocument();
      });
    });
  });

  describe('Toast with Title', () => {
    it('renders toast with title', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show With Title'));

      await waitFor(() => {
        expect(screen.getByText('Success Title')).toBeInTheDocument();
        expect(screen.getByText('With title')).toBeInTheDocument();
      });
    });
  });

  describe('Toast with Action', () => {
    it('renders toast with action button', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show With Action'));

      await waitFor(() => {
        expect(screen.getByText('With action')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
      });
    });

    it('calls action onClick when clicked', async () => {
      const user = userEvent.setup({ delay: null });
      const onAction = vi.fn();

      const ActionTester = () => {
        const toast = useToast();
        return (
          <Button
            onClick={() =>
              toast.info('Test', {
                action: { label: 'Test Action', onClick: onAction },
              })
            }
          >
            Show
          </Button>
        );
      };

      render(
        <ToastProvider>
          <ActionTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show'));

      const actionButton = await screen.findByRole('button', { name: 'Test Action' });
      await user.click(actionButton);

      expect(onAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Toast Close', () => {
    it('renders close button', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('removes toast when close button is clicked', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      await user.click(screen.getByRole('button', { name: 'Close' }));

      await waitFor(() => {
        expect(screen.queryByText('Success message')).not.toBeInTheDocument();
      });
    });
  });

  describe('Toast Auto-dismiss', () => {
    it('auto-dismisses toast after default duration', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider duration={200}>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      // Wait for auto-dismiss
      await waitFor(
        () => {
          expect(screen.queryByText('Success message')).not.toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });

    it('auto-dismisses toast after custom duration', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Quick Toast'));

      await waitFor(() => {
        expect(screen.getByText('Quick toast')).toBeInTheDocument();
      });

      // Wait for auto-dismiss (duration is 100ms in the button)
      await waitFor(
        () => {
          expect(screen.queryByText('Quick toast')).not.toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });

    it('does not auto-dismiss when duration is 0', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Persistent'));

      await waitFor(() => {
        expect(screen.getByText('Persistent')).toBeInTheDocument();
      });

      // Wait to make sure it doesn't dismiss
      await new Promise((resolve) => setTimeout(resolve, 300));

      expect(screen.getByText('Persistent')).toBeInTheDocument();
    });
  });

  describe('Multiple Toasts', () => {
    it('can show multiple toasts at once', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));
      await user.click(screen.getByText('Show Error'));
      await user.click(screen.getByText('Show Warning'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
        expect(screen.getByText('Error message')).toBeInTheDocument();
        expect(screen.getByText('Warning message')).toBeInTheDocument();
      });
    });

    it('limits toasts to max prop', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider max={2}>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));
      await user.click(screen.getByText('Show Error'));
      await user.click(screen.getByText('Show Warning'));

      await waitFor(() => {
        expect(screen.queryByText('Success message')).not.toBeInTheDocument();
        expect(screen.getByText('Error message')).toBeInTheDocument();
        expect(screen.getByText('Warning message')).toBeInTheDocument();
      });
    });
  });

  describe('Toast Positions', () => {
    it('renders toast in top-right position (default)', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('top-0', 'right-0');
    });

    it('renders toast in top-left position', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider position="top-left">
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('top-0', 'left-0');
    });

    it('renders toast in bottom-right position', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider position="bottom-right">
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('bottom-0', 'right-0');
    });

    it('renders toast in bottom-left position', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider position="bottom-left">
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('bottom-0', 'left-0');
    });

    it('renders toast in top-center position', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider position="top-center">
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('top-0');
    });

    it('renders toast in bottom-center position', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider position="bottom-center">
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const container = screen.getByRole('alert').parentElement;
      expect(container).toHaveClass('bottom-0');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      const toast = await screen.findByRole('alert');

      expect(toast).toHaveAttribute('aria-live', 'polite');
      expect(toast).toHaveAttribute('aria-atomic', 'true');
    });

    it('close button has accessible label', async () => {
      const user = userEvent.setup({ delay: null });
      render(
        <ToastProvider>
          <ToastTester />
        </ToastProvider>
      );

      await user.click(screen.getByText('Show Success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });

      const closeButton = screen.getByRole('button', { name: 'Close' });
      expect(closeButton).toHaveAttribute('aria-label', 'Close');
    });
  });
});
