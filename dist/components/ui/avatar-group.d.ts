import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const overflowVariants: (props?: ({
    size?: "sm" | "lg" | "xl" | "md" | "xs" | "2xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarGroupItem {
    /**
     * Image source URL
     */
    src?: string;
    /**
     * Name displayed as initials fallback and used as the tooltip label
     */
    name?: string;
    /**
     * Alt text for the image (accessibility)
     */
    alt?: string;
    /**
     * Custom initials (overrides name-based initials)
     */
    initials?: string;
    /**
     * Status indicator
     */
    status?: 'online' | 'offline' | 'away' | 'busy';
    /**
     * Custom tooltip content (defaults to the item name)
     */
    tooltip?: React.ReactNode;
}
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof overflowVariants> {
    /**
     * Avatars to stack, rendered left to right
     */
    items: AvatarGroupItem[];
    /**
     * Maximum number of avatars shown before the '+N' overflow indicator
     */
    maxCount?: number;
    /**
     * Horizontal overlap between avatars, in pixels
     *
     * @default -8
     */
    overlap?: number;
    /**
     * Show a tooltip with the member name on hover
     *
     * @default true
     */
    showTooltips?: boolean;
}
/**
 * AvatarGroup Component
 *
 * Stacks Avatar components with a negative-margin overlap and collapses
 * excess members behind a '+N' overflow indicator.
 *
 * @example
 * ```tsx
 * <AvatarGroup
 *   items={[
 *     { name: 'Chris Jazinski' },
 *     { name: 'Alex Blanc', status: 'online' },
 *     { src: '/ada.jpg', name: 'Ada Lovelace' },
 *   ]}
 *   maxCount={2}
 * />
 * ```
 */
export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=avatar-group.d.ts.map