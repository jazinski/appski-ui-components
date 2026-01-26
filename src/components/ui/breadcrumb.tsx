import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FaChevronRight } from 'react-icons/fa';
import { cn } from '../../lib/utils';

// Breadcrumb variants
const breadcrumbVariants = cva(
  'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground',
  {
    variants: {
      size: {
        sm: 'text-xs gap-1',
        md: 'text-sm gap-1.5',
        lg: 'text-base gap-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const breadcrumbItemVariants = cva('inline-flex items-center gap-1.5 transition-colors', {
  variants: {
    variant: {
      default: 'hover:text-foreground',
      ghost: 'hover:text-foreground/80',
    },
    size: {
      sm: 'text-xs gap-1',
      md: 'text-sm gap-1.5',
      lg: 'text-base gap-2',
    },
    current: {
      true: 'font-medium text-foreground pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    current: false,
  },
});

const breadcrumbLinkVariants = cva('hover:underline transition-colors', {
  variants: {
    variant: {
      default: 'hover:text-foreground',
      ghost: 'hover:text-foreground/80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const breadcrumbSeparatorVariants = cva('flex items-center text-muted-foreground/50', {
  variants: {
    size: {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

// Types
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof breadcrumbVariants> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  variant?: 'default' | 'ghost';
  /**
   * Custom Link component for client-side routing (e.g., React Router's Link)
   * If not provided, uses standard <a> tags
   */
  LinkComponent?: React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
}

// Breadcrumb Component
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = <FaChevronRight />,
      maxItems,
      size,
      variant = 'default',
      LinkComponent,
      className,
      ...props
    },
    ref
  ) => {
    // Process items for truncation if maxItems is set
    const processedItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      // Keep first item, last item, and show ellipsis in between
      if (maxItems === 1) {
        return [items[items.length - 1]]; // Just show current page
      }

      if (maxItems === 2) {
        return [items[0], items[items.length - 1]]; // First and last
      }

      // Show first item, ellipsis, and remaining items to fill maxItems
      const firstItem = items[0];
      const remainingSlots = maxItems - 2; // -2 for first item and ellipsis placeholder
      const lastItems = items.slice(-remainingSlots);

      const ellipsisItem: BreadcrumbItem = { label: '...' };

      return [
        firstItem,
        ellipsisItem, // Ellipsis placeholder
        ...lastItems,
      ];
    }, [items, maxItems]);

    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn(breadcrumbVariants({ size }), className)}
        {...props}
      >
        <ol className="flex list-none flex-wrap items-center gap-1.5">
          {processedItems.map((item, index) => {
            if (!item) return null; // Safety check

            const isLast = index === processedItems.length - 1;
            const isCurrent = isLast && !item.href;
            const isEllipsis = item.label === '...';

            return (
              <React.Fragment key={`${item.label}-${String(index)}`}>
                <li
                  className={cn(
                    breadcrumbItemVariants({
                      variant,
                      size,
                      current: isCurrent,
                    })
                  )}
                >
                  {isEllipsis ? (
                    <span className="px-1">{item.label}</span>
                  ) : item.href && !isCurrent ? (
                    LinkComponent ? (
                      <LinkComponent
                        to={item.href}
                        className={cn(
                          breadcrumbLinkVariants({ variant }),
                          'inline-flex items-center gap-1.5'
                        )}
                      >
                        {item.icon && (
                          <span className="inline-flex items-center" aria-hidden="true">
                            {item.icon}
                          </span>
                        )}
                        <span>{item.label}</span>
                      </LinkComponent>
                    ) : (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        className={cn(
                          breadcrumbLinkVariants({ variant }),
                          'inline-flex items-center gap-1.5'
                        )}
                      >
                        {item.icon && (
                          <span className="inline-flex items-center" aria-hidden="true">
                            {item.icon}
                          </span>
                        )}
                        <span>{item.label}</span>
                      </a>
                    )
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5"
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {item.icon && (
                        <span className="inline-flex items-center" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </span>
                  )}
                </li>

                {/* Separator */}
                {!isLast && (
                  <li className={cn(breadcrumbSeparatorVariants({ size }))} aria-hidden="true">
                    {separator}
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

// Export variants for external use
export { breadcrumbVariants, breadcrumbItemVariants, breadcrumbSeparatorVariants };
