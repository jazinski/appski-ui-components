import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const breadcrumbVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const breadcrumbItemVariants: (props?: ({
    variant?: "default" | "ghost" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
    current?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const breadcrumbSeparatorVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof breadcrumbVariants> {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    maxItems?: number;
    variant?: 'default' | 'ghost';
    /**
     * Custom Link component for client-side routing (e.g., React Router's Link)
     * If not provided, uses standard <a> tags
     */
    LinkComponent?: React.ComponentType<{
        to: string;
        className?: string;
        children: React.ReactNode;
    }>;
    /**
     * Auto-collapse breadcrumbs on mobile to show only last N items
     * Set to 0 to disable mobile collapsing (default: 2)
     */
    mobileMaxItems?: number;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export { breadcrumbVariants, breadcrumbItemVariants, breadcrumbSeparatorVariants };
//# sourceMappingURL=breadcrumb.d.ts.map