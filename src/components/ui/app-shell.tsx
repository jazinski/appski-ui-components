import * as React from 'react';
import { Sidebar } from './sidebar';
import { cn } from '@/lib/utils';

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
export const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  (
    {
      sidebar,
      sidebarLogo,
      sidebarFooter,
      sidebarOpen,
      onSidebarOpenChange,
      sidebarCollapsed,
      onSidebarCollapsedChange,
      header,
      children,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="flex h-screen w-full overflow-hidden bg-slate-950"
        data-testid="app-shell"
      >
        {/* Sidebar */}
        <Sidebar
          {...(sidebarLogo !== undefined && { logo: sidebarLogo })}
          {...(sidebarFooter !== undefined && { footer: sidebarFooter })}
          {...(sidebarOpen !== undefined && { open: sidebarOpen })}
          {...(onSidebarOpenChange !== undefined && { onOpenChange: onSidebarOpenChange })}
          {...(sidebarCollapsed !== undefined && { collapsed: sidebarCollapsed })}
          {...(onSidebarCollapsedChange !== undefined && {
            onCollapsedChange: onSidebarCollapsedChange,
          })}
        >
          {sidebar}
        </Sidebar>

        {/* Main content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Optional header */}
          {header && (
            <header
              className="flex-shrink-0 border-b border-slate-800 bg-slate-900"
              data-testid="app-shell-header"
            >
              {header}
            </header>
          )}

          {/* Main content - scrollable */}
          <main
            className={cn('flex-1 overflow-x-hidden overflow-y-auto bg-slate-950', className)}
            data-testid="app-shell-main"
          >
            {children}
          </main>
        </div>
      </div>
    );
  }
);

AppShell.displayName = 'AppShell';
