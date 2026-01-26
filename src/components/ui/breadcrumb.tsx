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

const breadcrumbItemVariants = cva('inline-flex items-center gap-1.5 transition-all duration-200', {
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
      // Enhanced: Better visual hierarchy for current page
      true: 'font-semibold text-foreground pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    current: false,
  },
});

const breadcrumbLinkVariants = cva(
  // Enhanced: Add subtle background on hover, better touch targets, improved dark mode contrast
  'rounded-md px-2 py-1 -mx-2 -my-1 transition-all duration-200 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'text-muted-foreground hover:text-foreground hover:bg-accent/50 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-slate-700/50',
        ghost:
          'text-muted-foreground/80 hover:text-foreground/90 hover:bg-accent/30 dark:hover:bg-slate-700/40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const breadcrumbSeparatorVariants = cva(
  // Enhanced: Better visibility in dark mode
  'flex items-center text-muted-foreground/40 dark:text-muted-foreground/60',
  {
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
  }
);

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
      mobileMaxItems = 2,
      className,
      ...props
    },
    ref
  ) => {
    // Responsive: Track if we're on mobile
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640); // sm breakpoint
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);

    // Process items for truncation if maxItems is set
    const processedItems = React.useMemo(() => {
      // Apply mobile-specific truncation
      const effectiveMaxItems = isMobile && mobileMaxItems > 0 ? mobileMaxItems : maxItems;

      if (!effectiveMaxItems || items.length <= effectiveMaxItems) {
        return items;
      }

      // Keep first item, last item, and show ellipsis in between
      if (effectiveMaxItems === 1) {
        return [items[items.length - 1]]; // Just show current page
      }

      if (effectiveMaxItems === 2) {
        return [items[0], items[items.length - 1]]; // First and last
      }

      // Show first item, ellipsis, and remaining items to fill maxItems
      const firstItem = items[0];
      const remainingSlots = effectiveMaxItems - 2; // -2 for first item and ellipsis placeholder
      const lastItems = items.slice(-remainingSlots);

      const ellipsisItem: BreadcrumbItem = { label: '...' };

      return [
        firstItem,
        ellipsisItem, // Ellipsis placeholder
        ...lastItems,
      ];
    }, [items, maxItems, mobileMaxItems, isMobile]);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
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
                    <span className="inline-flex items-center gap-1.5">
                      {item.icon && (
                        <span className="inline-flex items-center" aria-hidden="true">
                          {item.icon}
                        </span>
                      )}
                      <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
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
