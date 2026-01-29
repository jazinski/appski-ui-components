import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const mainNavVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const mainNavItemVariants: (props?: ({
    variant?: "default" | "active" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const mainNavSectionVariants: (props?: ({
    spacing?: "default" | "none" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface NavItem {
    /** Label text for the navigation item */
    label: string;
    /** URL or path for the navigation item */
    href: string;
    /** Icon component (from lucide-react or similar) */
    icon: React.ComponentType<{
        className?: string;
    }>;
    /** Optional badge text or number */
    badge?: string | number;
    /** Whether this item is currently active */
    active?: boolean;
    /** Optional click handler (overrides href navigation) */
    onClick?: () => void;
    /** Whether the item is disabled */
    disabled?: boolean;
}
export interface NavSection {
    /** Optional section header text */
    title?: string;
    /** Navigation items in this section */
    items: NavItem[];
}
export interface MainNavProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof mainNavVariants> {
    /** Navigation items or sections */
    items: NavItem[] | NavSection[];
    /** Callback when a nav item is clicked */
    onItemClick?: (item: NavItem) => void;
    /** Whether the sidebar is collapsed (shows icons only) */
    collapsed?: boolean;
}
/**
 * MainNav component for vertical navigation with icons, labels, and badges.
 *
 * Features:
 * - Icon + label for each item
 * - Active state with indigo background and left border
 * - Hover states
 * - Optional badge/count indicators
 * - Section headers with dividers
 * - Keyboard navigation support
 * - Accessible with proper ARIA roles
 *
 * @example
 * ```tsx
 * <MainNav
 *   items={[
 *     { label: 'Home', href: '/', icon: Home, active: true },
 *     { label: 'Settings', href: '/settings', icon: Settings, badge: '3' }
 *   ]}
 * />
 * ```
 */
export declare const MainNav: React.ForwardRefExoticComponent<MainNavProps & React.RefAttributes<HTMLElement>>;
export { mainNavVariants, mainNavItemVariants, mainNavSectionVariants };
//# sourceMappingURL=main-nav.d.ts.map