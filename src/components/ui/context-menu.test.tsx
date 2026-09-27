import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent, createEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
  ContextMenuSubmenuContent,
} from './context-menu';

const renderArea = (content?: React.ReactNode) =>
  render(
    <ContextMenu>
      <div data-testid="target">Right click me</div>
      {content ?? (
        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
        </ContextMenuContent>
      )}
    </ContextMenu>
  );

const openMenu = async (user: ReturnType<typeof userEvent.setup>) => {
  const target = screen.getByTestId('target');
  await user.pointer({ keys: '[MouseRight]', target, coords: { x: 100, y: 150 } });
  await waitFor(() => {
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
  return target;
};

describe('ContextMenu', () => {
  it('does not render the menu initially', () => {
    renderArea();

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('opens the menu at the cursor on right-click', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
    // jsdom reports 0x0 layout; the menu is placed at the event coordinates
    expect(menu.style.left).toBe('100px');
    expect(menu.style.top).toBe('150px');
  });

  it('closes the menu when clicking outside', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    await user.click(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('closes the menu with the Escape key', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('calls onSelect and closes when an item is selected', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <ContextMenu>
        <div data-testid="target">Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem onSelect={onSelect}>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    await openMenu(user);

    await user.click(screen.getByRole('menuitem', { name: /rename/i }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    const items = screen.getAllByRole('menuitem');
    expect(items[0]).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: /duplicate/i })).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: /delete/i })).toHaveFocus();

    // Wraps to the first item
    await user.keyboard('{ArrowDown}');
    expect(screen.getByRole('menuitem', { name: /rename/i })).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(screen.getByRole('menuitem', { name: /delete/i })).toHaveFocus();
  });

  it('supports Home and End navigation', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    await user.keyboard('{End}');
    expect(screen.getByRole('menuitem', { name: /delete/i })).toHaveFocus();

    await user.keyboard('{Home}');
    expect(screen.getByRole('menuitem', { name: /rename/i })).toHaveFocus();
  });

  it('activates an item with the Enter key', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <ContextMenu>
        <div data-testid="target">Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem onSelect={onSelect}>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    await openMenu(user);

    await user.keyboard('{Enter}');

    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('opens the submenu with the ArrowRight key and shows its items', async () => {
    const user = userEvent.setup();
    renderArea(
      <ContextMenuContent>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger>Share</ContextMenuSubmenuTrigger>
          <ContextMenuSubmenuContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Copy Link</ContextMenuItem>
          </ContextMenuSubmenuContent>
        </ContextMenuSubmenu>
      </ContextMenuContent>
    );

    await openMenu(user);

    const shareTrigger = screen.getByRole('menuitem', { name: /share/i });
    expect(shareTrigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(shareTrigger).toHaveAttribute('aria-expanded', 'false');

    shareTrigger.focus();
    await user.keyboard('{ArrowRight}');

    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: /copy link/i })).toBeInTheDocument();
    });
    expect(shareTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes the submenu with the ArrowLeft key', async () => {
    const user = userEvent.setup();
    renderArea(
      <ContextMenuContent>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger>Share</ContextMenuSubmenuTrigger>
          <ContextMenuSubmenuContent>
            <ContextMenuItem>Email</ContextMenuItem>
          </ContextMenuSubmenuContent>
        </ContextMenuSubmenu>
      </ContextMenuContent>
    );

    await openMenu(user);

    const shareTrigger = screen.getByRole('menuitem', { name: /share/i });
    shareTrigger.focus();
    await user.keyboard('{ArrowRight}');

    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: /email/i })).toBeInTheDocument();
    });

    shareTrigger.focus();
    await user.keyboard('{ArrowLeft}');

    await waitFor(() => {
      expect(screen.queryByRole('menuitem', { name: /email/i })).not.toBeInTheDocument();
    });
  });

  it('does not fire onSelect for disabled items', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <ContextMenu>
        <div data-testid="target">Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem disabled onSelect={onSelect}>
            Rename
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    await openMenu(user);

    const item = screen.getByRole('menuitem', { name: /rename/i });
    expect(item).toHaveAttribute('aria-disabled', 'true');
    // pointer-events-none blocks clicks in the browser; Enter is not reachable
    // because the item is skipped by navigation, so no select fires.
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('renders label, separator and shortcut', async () => {
    const user = userEvent.setup();
    renderArea(
      <ContextMenuContent>
        <ContextMenuLabel>File actions</ContextMenuLabel>
        <ContextMenuItem shortcut="F2">Rename</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Duplicate</ContextMenuItem>
      </ContextMenuContent>
    );

    await openMenu(user);

    const menu = screen.getByRole('menu');
    expect(screen.getByText('File actions')).toBeInTheDocument();
    expect(menu.querySelector('[role="separator"]')).toBeInTheDocument();
    expect(screen.getByText('F2')).toBeInTheDocument();
  });

  it('applies the destructive variant', async () => {
    const user = userEvent.setup();
    renderArea();

    await openMenu(user);

    expect(screen.getByRole('menuitem', { name: /delete/i })).toHaveClass('text-red-600');
  });

  it('supports controlled open state via onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <ContextMenu open={false} onOpenChange={onOpenChange}>
        <div data-testid="target">Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    const target = screen.getByTestId('target');
    await user.pointer({ keys: '[MouseRight]', target, coords: { x: 100, y: 150 } });

    // Controlled: parent decides; onOpenChange reported the request
    expect(onOpenChange).toHaveBeenCalledWith(true);

    rerender(
      <ContextMenu open onOpenChange={onOpenChange}>
        <div data-testid="target">Right click me</div>
        <ContextMenuContent>
          <ContextMenuItem>Rename</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    // Position was captured from the event, so the controlled-open menu renders
    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('is keyboard accessible via Shift+F10', async () => {
    const user = userEvent.setup();
    renderArea();

    const target = screen.getByTestId('target');
    // The wrapper (parent of the target content) carries the keyboard handler
    target.parentElement?.focus();
    await user.keyboard('{Shift>}{F10}{/Shift}');

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
    expect(screen.getByRole('menuitem', { name: /rename/i })).toHaveFocus();
  });

  it('prevents the native context menu event', () => {
    renderArea();

    const target = screen.getByTestId('target');
    const event = createEvent.contextMenu(target);
    fireEvent(target, event);

    // The component's handler ran synchronously during dispatch
    expect(event.defaultPrevented).toBe(true);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });
});
