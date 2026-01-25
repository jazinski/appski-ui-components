import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownSubmenuContent,
} from './dropdown';
import { Button } from './button';
import { FaUser, FaCog, FaTrash } from 'react-icons/fa';

describe('Dropdown', () => {
  describe('Basic Rendering', () => {
    it('renders trigger button', () => {
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      expect(screen.getByRole('button', { name: 'Open Menu' })).toBeInTheDocument();
    });

    it('does not render content when closed', () => {
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('renders content when opened', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Open Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button', { name: 'Open Menu' }));

      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: 'Item 1' })).toBeInTheDocument();
    });
  });

  describe('DropdownItem', () => {
    it('renders menu items correctly', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Delete</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button', { name: 'Menu' }));

      expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: 'Delete' })).toBeInTheDocument();
    });

    it('renders item with icon', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem icon={<FaUser data-testid="user-icon" />}>Profile</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    });

    it('renders item with shortcut', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem shortcut="⌘S">Save</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByText('⌘S')).toBeInTheDocument();
    });

    it('calls onSelect when item is clicked', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();

      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={onSelect}>Edit</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      await user.click(screen.getByRole('menuitem', { name: 'Edit' }));

      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('closes menu after item is selected', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Edit</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await user.click(screen.getByRole('menuitem', { name: 'Edit' }));
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('renders destructive variant', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem variant="destructive">Delete</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Delete' });
      expect(item).toHaveClass('text-red-600');
    });

    it('does not call onSelect when disabled', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();

      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem disabled onSelect={onSelect}>
              Edit
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Edit' });
      await user.click(item);

      expect(onSelect).not.toHaveBeenCalled();
    });

    it('renders disabled item with opacity', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem disabled>Edit</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Edit' });
      expect(item).toHaveClass('opacity-50');
    });
  });

  describe('DropdownLabel and DropdownSeparator', () => {
    it('renders label', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownLabel>Account</DropdownLabel>
            <DropdownItem>Profile</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByText('Account')).toBeInTheDocument();
    });

    it('renders separator', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Edit</DropdownItem>
            <DropdownSeparator />
            <DropdownItem>Delete</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('opens dropdown with Enter key', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      const trigger = screen.getByRole('button');
      trigger.focus();
      await user.keyboard('{Enter}');

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('opens dropdown with Space key', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      const trigger = screen.getByRole('button');
      trigger.focus();
      await user.keyboard(' ');

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('opens dropdown with ArrowDown key', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      const trigger = screen.getByRole('button');
      trigger.focus();
      await user.keyboard('{ArrowDown}');

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('closes dropdown with Escape key', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('selects item with Enter key', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();

      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={onSelect}>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Item 1' });
      item.focus();
      await user.keyboard('{Enter}');

      expect(onSelect).toHaveBeenCalledTimes(1);
    });

    it('selects item with Space key', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();

      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={onSelect}>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Item 1' });
      item.focus();
      await user.keyboard(' ');

      expect(onSelect).toHaveBeenCalledTimes(1);
    });
  });

  describe('Click Outside', () => {
    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <div data-testid="outside">Outside</div>
          <Dropdown>
            <DropdownTrigger asChild>
              <Button>Menu</Button>
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Item 1</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </div>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await user.click(screen.getByTestId('outside'));
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  describe('Controlled State', () => {
    it('works in controlled mode', async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();

      const { rerender } = render(
        <Dropdown open={false} onOpenChange={onOpenChange}>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      await user.click(screen.getByRole('button'));
      expect(onOpenChange).toHaveBeenCalledWith(true);

      // Simulate parent updating the state
      rerender(
        <Dropdown open={true} onOpenChange={onOpenChange}>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  describe('Submenu', () => {
    it('renders submenu trigger', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownSubmenu>
              <DropdownSubmenuTrigger>Share</DropdownSubmenuTrigger>
              <DropdownSubmenuContent>
                <DropdownItem>Email</DropdownItem>
              </DropdownSubmenuContent>
            </DropdownSubmenu>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menuitem', { name: /Share/ })).toBeInTheDocument();
    });

    it('shows submenu content on hover', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownSubmenu>
              <DropdownSubmenuTrigger>Share</DropdownSubmenuTrigger>
              <DropdownSubmenuContent>
                <DropdownItem>Email</DropdownItem>
              </DropdownSubmenuContent>
            </DropdownSubmenu>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const submenuTrigger = screen.getByRole('menuitem', { name: /Share/ });

      await user.hover(submenuTrigger);

      // Wait for submenu to appear
      expect(await screen.findByRole('menuitem', { name: 'Email' })).toBeInTheDocument();
    });
  });

  describe('ARIA Attributes', () => {
    it('has proper aria-expanded attribute', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      const trigger = screen.getByRole('button');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');

      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('has proper aria-haspopup attribute', () => {
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'menu');
    });

    it('has proper role attributes', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(screen.getByRole('menuitem')).toBeInTheDocument();
    });

    it('has aria-disabled on disabled items', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem disabled>Disabled Item</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const item = screen.getByRole('menuitem', { name: 'Disabled Item' });
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Content Alignment', () => {
    it('applies start alignment class', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent align="start">
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('left-0');
    });

    it('applies end alignment class', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent align="end">
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('right-0');
    });

    it('applies center alignment class', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent align="center">
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('left-1/2');
    });

    it('applies bottom side class', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent side="bottom">
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('top-full');
    });

    it('applies top side class', async () => {
      const user = userEvent.setup();
      render(
        <Dropdown>
          <DropdownTrigger asChild>
            <Button>Menu</Button>
          </DropdownTrigger>
          <DropdownContent side="top">
            <DropdownItem>Item 1</DropdownItem>
          </DropdownContent>
        </Dropdown>
      );

      await user.click(screen.getByRole('button'));
      const menu = screen.getByRole('menu');
      expect(menu).toHaveClass('bottom-full');
    });
  });
});
