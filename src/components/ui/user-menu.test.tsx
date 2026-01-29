import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserMenu } from './user-menu';

describe('UserMenu', () => {
  const defaultProps = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('renders user information', () => {
    render(<UserMenu {...defaultProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('renders avatar with user initials', () => {
    render(<UserMenu {...defaultProps} />);

    const avatar = screen.getByText('JD');
    expect(avatar).toBeInTheDocument();
  });

  it('renders avatar with image when provided', () => {
    render(<UserMenu {...defaultProps} avatarSrc="https://example.com/avatar.jpg" />);

    const avatarImage = screen.getByAltText('John Doe');
    expect(avatarImage).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders avatar with status indicator', () => {
    render(<UserMenu {...defaultProps} avatarStatus="online" />);

    const status = screen.getByLabelText('Status: online');
    expect(status).toBeInTheDocument();
  });

  it('opens dropdown menu when clicked', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('displays menu items when dropdown is open', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getAllByRole('menuitem')).toHaveLength(3);
      expect(screen.getByRole('menuitem', { name: /profile/i })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: /settings/i })).toBeInTheDocument();
      expect(screen.getByRole('menuitem', { name: /sign out/i })).toBeInTheDocument();
    });
  });

  it('displays user info in dropdown header', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toHaveTextContent('John Doe');
      expect(menu).toHaveTextContent('john@example.com');
    });
  });

  it('calls onProfileClick when Profile is clicked', async () => {
    const user = userEvent.setup();
    const onProfileClick = vi.fn();
    render(<UserMenu {...defaultProps} onProfileClick={onProfileClick} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: /profile/i })).toBeInTheDocument();
    });

    const profileItem = screen.getByRole('menuitem', { name: /profile/i });
    await user.click(profileItem);

    expect(onProfileClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSettingsClick when Settings is clicked', async () => {
    const user = userEvent.setup();
    const onSettingsClick = vi.fn();
    render(<UserMenu {...defaultProps} onSettingsClick={onSettingsClick} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: /settings/i })).toBeInTheDocument();
    });

    const settingsItem = screen.getByRole('menuitem', { name: /settings/i });
    await user.click(settingsItem);

    expect(onSettingsClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSignOutClick when Sign out is clicked', async () => {
    const user = userEvent.setup();
    const onSignOutClick = vi.fn();
    render(<UserMenu {...defaultProps} onSignOutClick={onSignOutClick} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menuitem', { name: /sign out/i })).toBeInTheDocument();
    });

    const signOutItem = screen.getByRole('menuitem', { name: /sign out/i });
    await user.click(signOutItem);

    expect(onSignOutClick).toHaveBeenCalledTimes(1);
  });

  it('closes dropdown after menu item is selected', async () => {
    const user = userEvent.setup();
    const onProfileClick = vi.fn();
    render(<UserMenu {...defaultProps} onProfileClick={onProfileClick} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    const profileItem = screen.getByRole('menuitem', { name: /profile/i });
    await user.click(profileItem);

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('supports keyboard navigation with Enter', async () => {
    const user = userEvent.setup();
    const onProfileClick = vi.fn();
    render(<UserMenu {...defaultProps} onProfileClick={onProfileClick} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    trigger.focus();
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('supports keyboard navigation with Space', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    trigger.focus();
    await user.keyboard(' ');

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('closes dropdown with Escape key', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('can be disabled', () => {
    render(<UserMenu {...defaultProps} disabled />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    expect(trigger).toBeDisabled();
  });

  it('supports controlled open state', async () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <UserMenu {...defaultProps} open={false} onOpenChange={onOpenChange} />
    );

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    rerender(<UserMenu {...defaultProps} open={true} onOpenChange={onOpenChange} />);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });
  });

  it('calls onOpenChange when menu is toggled', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<UserMenu {...defaultProps} onOpenChange={onOpenChange} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });

  it('renders with custom className', () => {
    render(<UserMenu {...defaultProps} className="custom-class" />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    expect(trigger).toHaveClass('custom-class');
  });

  it('renders with active variant', () => {
    render(<UserMenu {...defaultProps} variant="active" />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    expect(trigger).toHaveClass('bg-slate-800');
  });

  it('renders chevron icon', () => {
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    const chevron = trigger.querySelector('svg');
    expect(chevron).toBeInTheDocument();
  });

  it('truncates long names and emails', () => {
    render(
      <UserMenu
        name="Very Long User Name That Should Be Truncated"
        email="verylongemailaddress@example.com"
      />
    );

    const nameElement = screen.getByText('Very Long User Name That Should Be Truncated');
    const emailElement = screen.getByText('verylongemailaddress@example.com');

    expect(nameElement).toHaveClass('truncate');
    expect(emailElement).toHaveClass('truncate');
  });

  it('renders with custom avatar size', () => {
    render(<UserMenu {...defaultProps} avatarSize="lg" />);

    const avatar = screen.getByText('JD').parentElement;
    expect(avatar).toHaveClass('h-12', 'w-12');
  });

  it('displays icons in menu items', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      const icons = menu.querySelectorAll('svg');
      // Should have 3 icons (Profile, Settings, Sign out)
      expect(icons.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('applies destructive variant to Sign out item', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      const signOutItem = screen.getByRole('menuitem', { name: /sign out/i });
      expect(signOutItem).toHaveClass('text-red-600');
    });
  });

  it('has proper ARIA attributes', () => {
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    expect(trigger).toHaveAttribute('aria-label', 'User menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
  });

  it('works without callback handlers', async () => {
    const user = userEvent.setup();
    render(<UserMenu {...defaultProps} />);

    const trigger = screen.getByRole('button', { name: /user menu/i });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    const profileItem = screen.getByRole('menuitem', { name: /profile/i });

    // Should not throw error when clicking without handler
    await expect(user.click(profileItem)).resolves.not.toThrow();
  });
});
