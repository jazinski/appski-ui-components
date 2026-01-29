import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Avatar, type AvatarProps } from './avatar';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownSeparator,
} from './dropdown';
import { FaChevronDown, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

/**
 * UserMenu Variants
 *
 * Defines the visual styles for the user menu component.
 */
const userMenuVariants = cva(
  'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-800 dark:hover:bg-slate-700',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        active: 'bg-slate-800 dark:bg-slate-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

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
export const UserMenu = React.forwardRef<HTMLButtonElement, UserMenuProps>(
  (
    {
      name,
      email,
      avatarSrc,
      avatarStatus,
      avatarSize = 'sm',
      onProfileClick,
      onSettingsClick,
      onSignOutClick,
      className,
      variant,
      disabled = false,
      open,
      onOpenChange,
    },
    ref
  ) => {
    return (
      <Dropdown {...(open !== undefined && { open })} {...(onOpenChange && { onOpenChange })}>
        <DropdownTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            className={cn(
              userMenuVariants({ variant }),
              disabled && 'cursor-not-allowed opacity-50',
              className
            )}
            aria-label="User menu"
          >
            <Avatar
              {...(avatarSrc && { src: avatarSrc })}
              name={name}
              alt={name}
              {...(avatarStatus && { status: avatarStatus })}
              size={avatarSize}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
              <span className="truncate text-sm font-medium text-white">{name}</span>
              <span className="truncate text-xs text-slate-400">{email}</span>
            </div>
            <FaChevronDown
              className="h-4 w-4 text-slate-400 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>
        </DropdownTrigger>

        <DropdownContent align="start" side="top" className="w-56">
          {/* User info label */}
          <DropdownLabel>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {name}
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400">{email}</span>
            </div>
          </DropdownLabel>

          <DropdownSeparator />

          {/* Profile */}
          <DropdownItem
            icon={<FaUser className="h-4 w-4" />}
            {...(onProfileClick && { onSelect: onProfileClick })}
          >
            Profile
          </DropdownItem>

          {/* Settings */}
          <DropdownItem
            icon={<FaCog className="h-4 w-4" />}
            {...(onSettingsClick && { onSelect: onSettingsClick })}
          >
            Settings
          </DropdownItem>

          <DropdownSeparator />

          {/* Sign out */}
          <DropdownItem
            icon={<FaSignOutAlt className="h-4 w-4" />}
            {...(onSignOutClick && { onSelect: onSignOutClick })}
            variant="destructive"
          >
            Sign out
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  }
);

UserMenu.displayName = 'UserMenu';

export { userMenuVariants };
