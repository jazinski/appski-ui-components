import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const pageHeaderVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'bg-background border-b border-border',
      transparent: 'bg-transparent',
      elevated: 'bg-background shadow-sm',
    },
    sticky: {
      true: 'sticky top-0 z-10',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    sticky: false,
  },
});

export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string;
  /** URL to navigate to (optional for current page) */
  href?: string;
  /** Icon to display before the label */
  icon?: React.ComponentType<{ className?: string }>;
}

export interface StatItem {
  /** Label for the stat */
  label: string;
  /** Value to display */
  value: string | number;
  /** Optional icon */
  icon?: React.ComponentType<{ className?: string }>;
  /** Optional color for the value */
  color?: 'default' | 'success' | 'warning' | 'destructive';
}

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof pageHeaderVariants> {
  /** Page title */
  title: string;
  /** Optional description below the title */
  description?: string;
  /** Icon to display next to the title */
  icon?: React.ComponentType<{ className?: string }>;
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

const statColorClasses = {
  default: 'text-foreground',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  destructive: 'text-red-600 dark:text-red-400',
};

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
const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      className,
      variant,
      sticky,
      title,
      description,
      icon: Icon,
      breadcrumbs,
      actions,
      stats,
      showHomeInBreadcrumbs = true,
      breadcrumbSeparator,
      ...props
    },
    ref
  ) => {
    const separator = breadcrumbSeparator ?? (
      <ChevronRight className="h-4 w-4 text-slate-500 dark:text-slate-500" aria-hidden="true" />
    );

    return (
      <header
        ref={ref}
        className={cn(pageHeaderVariants({ variant, sticky, className }))}
        {...props}
      >
        <div className="px-4 py-4 sm:px-6 sm:py-6">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center space-x-2 text-sm">
                {showHomeInBreadcrumbs && (
                  <>
                    <li>
                      <a
                        href="/"
                        className="hover:text-foreground flex items-center text-slate-600 transition-colors dark:text-slate-400"
                      >
                        <Home className="h-4 w-4" aria-label="Home" />
                      </a>
                    </li>
                    <li aria-hidden="true">{separator}</li>
                  </>
                )}
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  const CrumbIcon = crumb.icon;

                  return (
                    <React.Fragment key={index}>
                      <li>
                        {crumb.href && !isLast ? (
                          <a
                            href={crumb.href}
                            className="hover:text-foreground flex items-center gap-1 text-slate-600 transition-colors dark:text-slate-400"
                          >
                            {CrumbIcon && <CrumbIcon className="h-4 w-4" />}
                            {crumb.label}
                          </a>
                        ) : (
                          <span
                            className={cn(
                              'flex items-center gap-1',
                              isLast
                                ? 'text-foreground font-medium'
                                : 'text-slate-600 dark:text-slate-400'
                            )}
                            aria-current={isLast ? 'page' : undefined}
                          >
                            {CrumbIcon && <CrumbIcon className="h-4 w-4" />}
                            {crumb.label}
                          </span>
                        )}
                      </li>
                      {!isLast && <li aria-hidden="true">{separator}</li>}
                    </React.Fragment>
                  );
                })}
              </ol>
            </nav>
          )}

          {/* Title Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              )}
              <div>
                <h1 className="text-foreground text-2xl font-semibold">{title}</h1>
                {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
              </div>
            </div>

            {/* Actions */}
            {actions && <div className="flex flex-shrink-0 items-center gap-2">{actions}</div>}
          </div>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="border-border mt-4 border-t pt-4">
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {StatIcon && (
                        <div className="bg-muted flex-shrink-0 rounded-md p-1.5">
                          <StatIcon className="text-muted-foreground h-4 w-4" aria-hidden="true" />
                        </div>
                      )}
                      <div>
                        <dt className="text-muted-foreground text-xs">{stat.label}</dt>
                        <dd
                          className={cn(
                            'text-lg font-semibold',
                            statColorClasses[stat.color ?? 'default']
                          )}
                        >
                          {stat.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          )}
        </div>
      </header>
    );
  }
);
PageHeader.displayName = 'PageHeader';

export { PageHeader, pageHeaderVariants };
