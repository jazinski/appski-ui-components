import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paginationVariants = cva('flex items-center justify-center gap-1', {
  variants: {
    size: {
      default: '',
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const paginationItemVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-accent hover:text-accent-foreground',
        active: 'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      size: {
        default: 'h-9 w-9',
        sm: 'h-8 w-8 text-xs',
        lg: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface PaginationProps
  extends React.ComponentPropsWithoutRef<'nav'>, VariantProps<typeof paginationVariants> {
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
export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      showPrevNext = true,
      siblingCount = 1,
      disabled,
      className,
      size,
      ...props
    },
    ref
  ) => {
    const pages = React.useMemo(() => {
      const range = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
      };

      const totalNumbers = siblingCount * 2 + 3; // siblings + current + first + last
      const totalBlocks = totalNumbers + 2; // + 2 ellipsis

      if (totalPages <= totalBlocks) {
        return range(1, totalPages);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = range(1, leftItemCount);
        return [...leftRange, 'dots', totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = range(totalPages - rightItemCount + 1, totalPages);
        return [1, 'dots', ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [1, 'dots', ...middleRange, 'dots', totalPages];
      }

      return range(1, totalPages);
    }, [currentPage, totalPages, siblingCount]);

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage && !disabled) {
        onPageChange(page);
      }
    };

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn(paginationVariants({ size }), className)}
        {...props}
      >
        {showFirstLast && (
          <button
            onClick={() => { handlePageChange(1); }}
            disabled={currentPage === 1 || disabled}
            aria-label="Go to first page"
            className={cn(paginationItemVariants({ size }))}
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
        )}

        {showPrevNext && (
          <button
            onClick={() => { handlePageChange(currentPage - 1); }}
            disabled={currentPage === 1 || disabled}
            aria-label="Go to previous page"
            className={cn(paginationItemVariants({ size }))}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {pages.map((page, index) => {
          if (page === 'dots') {
            return (
              <span
                key={`dots-${index}`}
                className={cn(paginationItemVariants({ size }), 'pointer-events-none')}
              >
                <MoreHorizontal className="h-4 w-4" />
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => { handlePageChange(page as number); }}
              disabled={disabled}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
              className={cn(
                paginationItemVariants({
                  size,
                  variant: currentPage === page ? 'active' : 'default',
                })
              )}
            >
              {page}
            </button>
          );
        })}

        {showPrevNext && (
          <button
            onClick={() => { handlePageChange(currentPage + 1); }}
            disabled={currentPage === totalPages || disabled}
            aria-label="Go to next page"
            className={cn(paginationItemVariants({ size }))}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        {showFirstLast && (
          <button
            onClick={() => { handlePageChange(totalPages); }}
            disabled={currentPage === totalPages || disabled}
            aria-label="Go to last page"
            className={cn(paginationItemVariants({ size }))}
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        )}
      </nav>
    );
  }
);
Pagination.displayName = 'Pagination';

export { paginationVariants, paginationItemVariants };
