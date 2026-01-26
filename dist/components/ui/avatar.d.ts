import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
/**
 * Avatar Variants
 *
 * Defines the visual styles for the avatar component.
 */
declare const avatarVariants: (props?: ({
    size?: "sm" | "lg" | "xl" | "md" | "xs" | "2xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    /**
     * Image source URL
     */
    src?: string;
    /**
     * Name to display as initials fallback
     */
    name?: string;
    /**
     * Alt text for the image (accessibility)
     */
    alt?: string;
    /**
     * Status indicator
     */
    status?: 'online' | 'offline' | 'away' | 'busy';
    /**
     * Show loading skeleton
     */
    loading?: boolean;
    /**
     * Custom initials (overrides name-based initials)
     */
    initials?: string;
}
/**
 * Avatar Component
 *
 * Displays a user profile image with fallback to initials.
 *
 * @example
 * ```tsx
 * // With image
 * <Avatar src="/user.jpg" name="John Doe" alt="John Doe" />
 *
 * // With initials fallback
 * <Avatar name="Jane Smith" />
 *
 * // With status indicator
 * <Avatar name="Alice" status="online" />
 *
 * // Different sizes
 * <Avatar name="Bob" size="xs" />
 * <Avatar name="Carol" size="xl" />
 *
 * // Square variant
 * <Avatar name="David" shape="square" />
 *
 * // Loading state
 * <Avatar loading />
 * ```
 */
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=avatar.d.ts.map