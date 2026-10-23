import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheet';
import { Button } from './button';
import { Input } from './input';

describe('Sheet', () => {
  describe('Basic Rendering', () => {
    it('renders the trigger button', () => {
      render(
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.getByRole('button', { name: 'Open Sheet' })).toBeInTheDocument();
    });

    it('does not render sheet content by default', () => {
      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders sheet content when trigger is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders default open with defaultOpen prop', () => {
      render(
        <Sheet defaultOpen>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('renders when controlled open is true', () => {
      render(
        <Sheet open>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('does not render when controlled open is false', () => {
      render(
        <Sheet open={false}>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('shows the close button by default', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('hides the close button when showCloseButton is false', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent showCloseButton={false}>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });
  });

  describe('Sides', () => {
    it.each(['left', 'right', 'top', 'bottom'] as const)('applies %s side classes', async (side) => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent side={side} data-testid="sheet-content">
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      const content = screen.getByTestId('sheet-content');
      expect(content.className).toContain(side === 'left' ? 'left-0' : side === 'right' ? 'right-0' : side === 'top' ? 'top-0' : 'bottom-0');
    });

    it('defaults to the right side', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent data-testid="sheet-content">
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByTestId('sheet-content').className).toContain('right-0');
    });
  });

  describe('Interactions', () => {
    it('closes when the close button is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Close' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('closes when the overlay is clicked', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      const overlay = document.querySelector('.fixed.inset-0');
      expect(overlay).not.toBeNull();
      await user.click(overlay as HTMLElement);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('does not close on overlay click when closeOnOverlayClick is false', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent closeOnOverlayClick={false}>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      const overlay = document.querySelector('.fixed.inset-0');
      await user.click(overlay as HTMLElement);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('closes when escape key is pressed', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.keyboard('{Escape}');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('does not close on escape when closeOnEscape is false', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent closeOnEscape={false}>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.keyboard('{Escape}');
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('closes via SheetClose component', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
            <SheetFooter>
              <SheetClose>Done</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Done' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Trigger asChild', () => {
    it('renders trigger as child element', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open Sheet' }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('supports SheetClose asChild', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Cancel' }));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Controlled State', () => {
    it('calls onOpenChange when opening', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();

      render(
        <Sheet onOpenChange={handleOpenChange}>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(handleOpenChange).toHaveBeenCalledWith(true);
    });

    it('calls onOpenChange when closing', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();

      render(
        <Sheet onOpenChange={handleOpenChange}>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await user.click(screen.getByRole('button', { name: 'Close' }));
      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });

    it('stays open in controlled mode unless parent updates state', () => {
      render(
        <Sheet open>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Focus Management', () => {
    it('locks body scroll while open and restores on close', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(document.body.style.overflow).toBe('hidden');

      await user.click(screen.getByRole('button', { name: 'Close' }));
      expect(document.body.style.overflow).not.toBe('hidden');
    });
  });

  describe('Accessibility', () => {
    it('has role dialog and aria-modal', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });

    it('close button has accessible name', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetTitle>Test Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });
  });

  describe('Sub-components', () => {
    it('renders header, title, description and footer content', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
            <p>Body content</p>
            <SheetFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByText('Edit Profile')).toBeInTheDocument();
      expect(screen.getByText('Make changes to your profile here.')).toBeInTheDocument();
      expect(screen.getByText('Body content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('renders form controls inside the sheet', async () => {
      const user = userEvent.setup();

      render(
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
            </SheetHeader>
            <Input placeholder="Enter name" />
          </SheetContent>
        </Sheet>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
    });
  });

  describe('Context Errors', () => {
    it('throws when SheetTrigger is used outside a Sheet', () => {
      // Suppress React error boundary logging for expected throw
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      expect(() => render(<SheetTrigger>Open</SheetTrigger>)).toThrow(
        'Sheet components must be used within a Sheet'
      );

      consoleSpy.mockRestore();
    });
  });
});
