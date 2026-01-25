import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog';

describe('Dialog', () => {
  describe('Basic Rendering', () => {
    it('renders the trigger button', () => {
      render(
        <Dialog>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByRole('button', { name: 'Open Dialog' })).toBeInTheDocument();
    });

    it('does not render dialog content by default', () => {
      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders dialog content when trigger is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test Title</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });
  });

  describe('Dialog Parts', () => {
    it('renders header, title, description, and footer', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title Text</DialogTitle>
              <DialogDescription>Description Text</DialogDescription>
            </DialogHeader>
            <p>Body content</p>
            <DialogFooter>
              <button>Footer Button</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));

      expect(screen.getByText('Title Text')).toBeInTheDocument();
      expect(screen.getByText('Description Text')).toBeInTheDocument();
      expect(screen.getByText('Body content')).toBeInTheDocument();
      expect(screen.getByText('Footer Button')).toBeInTheDocument();
    });

    it('renders close button by default', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('hides close button when showCloseButton is false', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });
  });

  describe('Closing Behavior', () => {
    it('closes when close button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Close' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('closes when ESC key is pressed', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('does not close on ESC when closeOnEscape is false', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent closeOnEscape={false}>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.keyboard('{Escape}');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('closes when DialogClose is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
            <DialogClose>Cancel</DialogClose>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Cancel' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Controlled Mode', () => {
    it('respects controlled open state', () => {
      render(
        <Dialog open={true}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('calls onOpenChange when state changes', async () => {
      const handleOpenChange = vi.fn();
      const user = userEvent.setup();

      render(
        <Dialog onOpenChange={handleOpenChange}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(handleOpenChange).toHaveBeenCalledWith(true);

      await user.click(screen.getByRole('button', { name: 'Close' }));
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });

    it('respects defaultOpen prop', () => {
      render(
        <Dialog defaultOpen>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="dialog" and aria-modal="true"', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      const dialog = screen.getByRole('dialog');

      expect(dialog).toHaveAttribute('role', 'dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('traps focus within the dialog', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogTitle>Test</DialogTitle>
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));

      // Wait for focus to be set
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Tab through elements - start from wherever focus landed
      await user.tab();
      await user.tab();
      await user.tab();

      // After tabbing through, we should cycle back
      // Just verify focus is still within the dialog
      const dialog = screen.getByRole('dialog');
      expect(dialog.contains(document.activeElement)).toBe(true);
    });

    it('restores focus after closing', async () => {
      const user = userEvent.setup();

      render(
        <>
          <button>Outside Button</button>
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
              <DialogTitle>Test</DialogTitle>
            </DialogContent>
          </Dialog>
        </>
      );

      // Focus and click the trigger
      const trigger = screen.getByRole('button', { name: 'Open' });
      trigger.focus();
      await user.click(trigger);

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Close the dialog
      await user.keyboard('{Escape}');

      // Focus should be restored to trigger
      expect(trigger).toHaveFocus();
    });
  });

  describe('Sizes', () => {
    it('applies small size class', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent size="sm" data-testid="dialog">
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByTestId('dialog')).toHaveClass('max-w-sm');
    });

    it('applies large size class', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent size="lg" data-testid="dialog">
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByTestId('dialog')).toHaveClass('max-w-2xl');
    });

    it('applies extra large size class', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent size="xl" data-testid="dialog">
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByTestId('dialog')).toHaveClass('max-w-4xl');
    });
  });

  describe('DialogTrigger asChild', () => {
    it('works with asChild prop', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger asChild>
            <button className="custom-button">Custom Trigger</button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Custom Trigger' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('DialogClose asChild', () => {
    it('works with asChild prop', async () => {
      const user = userEvent.setup();

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
            <DialogClose asChild>
              <button className="custom-close">Custom Close</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Custom Close' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Body Scroll Lock', () => {
    it('locks body scroll when open', async () => {
      const user = userEvent.setup();
      const originalOverflow = document.body.style.overflow;

      render(
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Test</DialogTitle>
          </DialogContent>
        </Dialog>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(document.body.style.overflow).toBe('hidden');

      await user.keyboard('{Escape}');
      expect(document.body.style.overflow).toBe(originalOverflow);
    });
  });
});
