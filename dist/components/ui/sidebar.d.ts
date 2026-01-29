import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
/**
 * Sidebar Variants
 *
 * Defines the visual styles for the sidebar component.
 */
declare const sidebarVariants: (props?: ({
    position?: "fixed" | "static" | null | undefined;
    state?: "open" | "closed" | null | undefined;
    collapsed?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sidebarOverlayVariants: (props?: ({
    visible?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * Sidebar Props
 */
export interface SidebarProps extends VariantProps<typeof sidebarVariants> {
    /**
     * Logo content (typically an image or text)
     */
    logo?: React.ReactNode;
    /**
     * Main navigation content
     */
    children?: React.ReactNode;
    /**
     * Footer content (typically UserMenu)
     */
    footer?: React.ReactNode;
    /**
     * Whether the sidebar is open (mobile only)
     */
    open?: boolean;
    /**
     * Callback when sidebar open state changes
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Whether the sidebar is collapsed (desktop only)
     */
    collapsed?: boolean;
    /**
     * Callback when sidebar collapsed state changes
     */
    onCollapsedChange?: (collapsed: boolean) => void;
    /**
     * Width of the sidebar when expanded
     */
    width?: string;
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Show mobile overlay when open
     */
    showOverlay?: boolean;
    /**
     * Show close button on mobile
     */
    showCloseButton?: boolean;
    /**
     * Show collapse toggle button (desktop only)
     */
    showCollapseButton?: boolean;
}
/**
 * Sidebar Component
 *
 * A navigation sidebar with logo, main content, and footer.
 * Responsive: fixed width on desktop, slide-out drawer on mobile.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Sidebar
 *   logo={<img src="/logo.svg" alt="Logo" />}
 *   footer={<UserMenu name="John" email="john@example.com" />}
 * >
 *   <MainNav items={navItems} />
 * </Sidebar>
 *
 * // Mobile with controlled state
 * const [open, setOpen] = useState(false);
 * <Sidebar
 *   open={open}
 *   onOpenChange={setOpen}
 *   logo={<img src="/logo.svg" alt="Logo" />}
 * >
 *   <MainNav items={navItems} />
 * </Sidebar>
 *
 * // Custom width
 * <Sidebar width="280px">
 *   <MainNav items={navItems} />
 * </Sidebar>
 * ```
 */
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export { sidebarVariants, sidebarOverlayVariants };
//# sourceMappingURL=sidebar.d.ts.map