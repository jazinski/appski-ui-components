import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const paginationVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const paginationItemVariants: (props?: ({
    variant?: "default" | "active" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'>, VariantProps<typeof paginationVariants> {
    /** Current page number (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Show first/last page buttons */
    showFirstLast?: boolean;
    /** Show previous/next buttons */
    showPrevNext?: boolean;
    /** Number of page buttons to show on each side of current */
    siblingCount?: number;
    /** Disabled state */
    disabled?: boolean;
}
/**
 * Pagination component - Navigation for paginated content.
 *
 * @example
 * <Pagination
 *   currentPage={5}
 *   totalPages={10}
 *   onPageChange={setPage}
 *   showFirstLast
 * />
 */
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export { paginationVariants, paginationItemVariants };
//# sourceMappingURL=pagination.d.ts.map