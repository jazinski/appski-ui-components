import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const pageHeaderVariants: (props?: ({
    variant?: "default" | "elevated" | "transparent" | null | undefined;
    sticky?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BreadcrumbItem {
    /** Display label for the breadcrumb */
    label: string;
    /** URL to navigate to (optional for current page) */
    href?: string;
    /** Icon to display before the label */
    icon?: React.ComponentType<{
        className?: string;
    }>;
}
export interface StatItem {
    /** Label for the stat */
    label: string;
    /** Value to display */
    value: string | number;
    /** Optional icon */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** Optional color for the value */
    color?: 'default' | 'success' | 'warning' | 'destructive';
}
export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>, VariantProps<typeof pageHeaderVariants> {
    /** Page title */
    title: string | React.ReactNode;
    /** Optional description below the title */
    description?: string | React.ReactNode;
    /** Icon to display next to the title */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** Breadcrumb navigation items */
    breadcrumbs?: BreadcrumbItem[];
    /** Action buttons/elements to display on the right */
    actions?: React.ReactNode;
    /** Stats to display below the header */
    stats?: StatItem[];
    /** Show home icon in breadcrumbs */
    showHomeInBreadcrumbs?: boolean;
    /** Custom breadcrumb separator */
    breadcrumbSeparator?: React.ReactNode;
    /** Link component to use for navigation (e.g., react-router Link) */
    LinkComponent?: React.ComponentType<any>;
    /** Live indicator for auto-refresh pages */
    isLive?: boolean;
    /** Callback when live toggle is clicked */
    onToggleLive?: () => void;
    /** Custom label for live indicator (default: "Live" / "Paused") */
    liveLabel?: string;
    /** Server uptime display */
    uptime?: string;
    /** Help text to display in tooltip */
    helpText?: string;
    /** Link for help text */
    helpLink?: string;
    /** Position of action buttons: "inline" (next to title) or "below" (on second row, right-aligned) */
    actionsPosition?: 'inline' | 'below';
    /** Additional controls (below title, e.g., filters, time range) */
    controls?: React.ReactNode;
}
/**
 * PageHeader component for consistent page layouts with title, breadcrumbs, actions, and stats.
 * Supports live indicators, help tooltips, and flexible action positioning.
 *
 * @example
 * <PageHeader
 *   title="Users"
 *   icon={Users}
 *   description="Manage user accounts"
 *   breadcrumbs={[{ label: 'Admin' }, { label: 'Users' }]}
 *   actions={<Button>Add User</Button>}
 *   stats={[{ label: 'Total', value: 142 }]}
 *   isLive={isLive}
 *   onToggleLive={() => setIsLive(!isLive)}
 * />
 */
declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
export { PageHeader, pageHeaderVariants };
//# sourceMappingURL=page-header.d.ts.map