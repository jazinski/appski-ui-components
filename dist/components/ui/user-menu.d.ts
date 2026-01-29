import { VariantProps } from 'class-variance-authority';
import { AvatarProps } from './avatar';
import * as React from 'react';
/**
 * UserMenu Variants
 *
 * Defines the visual styles for the user menu component.
 */
declare const userMenuVariants: (props?: ({
    variant?: "default" | "active" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * UserMenu Props
 */
export interface UserMenuProps extends VariantProps<typeof userMenuVariants> {
    /**
     * User's display name
     */
    name: string;
    /**
     * User's email address
     */
    email: string;
    /**
     * Avatar image URL (optional)
     */
    avatarSrc?: string;
    /**
     * Avatar status indicator (optional)
     */
    avatarStatus?: AvatarProps['status'];
    /**
     * Custom avatar size (optional, defaults to 'sm')
     */
    avatarSize?: AvatarProps['size'];
    /**
     * Callback when Profile is clicked
     */
    onProfileClick?: () => void;
    /**
     * Callback when Settings is clicked
     */
    onSettingsClick?: () => void;
    /**
     * Callback when Sign out is clicked
     */
    onSignOutClick?: () => void;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Disable the menu
     */
    disabled?: boolean;
    /**
     * Control the open state
     */
    open?: boolean;
    /**
     * Callback when open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Whether the menu is in collapsed mode (shows avatar only)
     */
    collapsed?: boolean;
}
/**
 * UserMenu Component
 *
 * A user profile menu with avatar, name, email, and dropdown actions.
 * Composed from Avatar and Dropdown components.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <UserMenu
 *   name="John Doe"
 *   email="john@example.com"
 *   onProfileClick={() => console.log('Profile')}
 *   onSettingsClick={() => console.log('Settings')}
 *   onSignOutClick={() => console.log('Sign out')}
 * />
 *
 * // With avatar image
 * <UserMenu
 *   name="Jane Smith"
 *   email="jane@example.com"
 *   avatarSrc="/avatar.jpg"
 *   avatarStatus="online"
 * />
 *
 * // Controlled state
 * const [open, setOpen] = useState(false);
 * <UserMenu
 *   name="Bob Wilson"
 *   email="bob@example.com"
 *   open={open}
 *   onOpenChange={setOpen}
 * />
 * ```
 */
export declare const UserMenu: React.ForwardRefExoticComponent<UserMenuProps & React.RefAttributes<HTMLButtonElement>>;
export { userMenuVariants };
//# sourceMappingURL=user-menu.d.ts.map