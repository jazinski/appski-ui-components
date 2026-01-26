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
export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof pageHeaderVariants> {
    /** Page title */
    title: string;
    /** Optional description below the title */
    description?: string;
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
}
/**
 * PageHeader component for consistent page layouts with title, breadcrumbs, actions, and stats.
 *
 * @example
 * <PageHeader
 *   title="Users"
 *   icon={Users}
 *   description="Manage user accounts"
 *   breadcrumbs={[{ label: 'Admin' }, { label: 'Users' }]}
 *   actions={<Button>Add User</Button>}
 *   stats={[{ label: 'Total', value: 142 }]}
 * />
 */
declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLElement>>;
export { PageHeader, pageHeaderVariants };
//# sourceMappingURL=page-header.d.ts.map