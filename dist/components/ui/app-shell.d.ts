import * as React from 'react';
export interface AppShellProps {
    /**
     * Content for the sidebar (typically MainNav)
     */
    sidebar: React.ReactNode;
    /**
     * Optional logo section at the top of the sidebar
     */
    sidebarLogo?: React.ReactNode;
    /**
     * Optional footer section at the bottom of the sidebar (typically UserMenu)
     */
    sidebarFooter?: React.ReactNode;
    /**
     * Controlled sidebar open state (optional)
     */
    sidebarOpen?: boolean;
    /**
     * Callback when sidebar open state changes
     */
    onSidebarOpenChange?: (open: boolean) => void;
    /**
     * Controlled sidebar collapsed state (optional, desktop only)
     */
    sidebarCollapsed?: boolean;
    /**
     * Callback when sidebar collapsed state changes
     */
    onSidebarCollapsedChange?: (collapsed: boolean) => void;
    /**
     * Optional header content (shown above main content area)
     * Useful for mobile hamburger menu, page title, actions, etc.
     */
    header?: React.ReactNode;
    /**
     * Main content area
     */
    children: React.ReactNode;
    /**
     * Additional classes for the main content wrapper
     */
    className?: string;
}
/**
 * AppShell - Main application layout wrapper
 *
 * Provides a complete application layout with:
 * - Responsive sidebar (fixed on desktop, drawer on mobile)
 * - Optional header section
 * - Scrollable main content area
 * - Dark mode support
 *
 * The sidebar automatically handles responsive behavior:
 * - Desktop: Fixed 240px width
 * - Mobile: Slide-out drawer with overlay
 *
 * @example
 * ```tsx
 * <AppShell
 *   sidebar={<MainNav items={navItems} />}
 *   sidebarLogo={<Logo />}
 *   sidebarFooter={<UserMenu user={user} />}
 *   header={<PageHeader title="Dashboard" />}
 * >
 *   <YourContent />
 * </AppShell>
 * ```
 */
export declare const AppShell: React.ForwardRefExoticComponent<AppShellProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=app-shell.d.ts.map