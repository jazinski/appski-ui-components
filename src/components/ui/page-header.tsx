import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Home, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Breadcrumb, type BreadcrumbItem as BreadcrumbItemType } from './breadcrumb';
import { Button } from './button';

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
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>,
    VariantProps<typeof pageHeaderVariants> {
  /** Page title */
  title: string | React.ReactNode;
  /** Optional description below the title */
  description?: string | React.ReactNode;
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
  /** Link component to use for navigation (e.g., react-router Link) */
  LinkComponent?: React.ComponentType<{ to: string; className?: string; children: React.ReactNode }>;
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

const statColorClasses = {
  default: 'text-foreground',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  destructive: 'text-red-600 dark:text-red-400',
};

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
      LinkComponent,
      isLive,
      onToggleLive,
      liveLabel,
      uptime,
      helpText,
      helpLink,
      actionsPosition = 'inline',
      controls,
      ...props
    },
    ref
  ) => {
    // Convert BreadcrumbItem with ComponentType icons to BreadcrumbItemType with ReactNode icons
    const breadcrumbItems: BreadcrumbItemType[] = React.useMemo(() => {
      if (!breadcrumbs) return [];

      const items: BreadcrumbItemType[] = breadcrumbs.map((crumb) => {
        const BreadcrumbIcon = crumb.icon;
        const item: BreadcrumbItemType = {
          label: crumb.label,
          icon: BreadcrumbIcon ? <BreadcrumbIcon className="h-4 w-4" /> : undefined,
        };
        if (crumb.href) {
          item.href = crumb.href;
        }
        return item;
      });

      // Add home icon at the beginning if requested
      if (showHomeInBreadcrumbs) {
        return [
          {
            label: 'Home',
            href: '/',
            icon: <Home className="h-4 w-4" aria-label="Home" />,
          },
          ...items,
        ];
      }

      return items;
    }, [breadcrumbs, showHomeInBreadcrumbs]);

    return (
      <header
        ref={ref}
        className={cn(pageHeaderVariants({ variant, sticky, className }))}
        {...props}
      >
        <div className="px-4 py-4 sm:px-6 sm:py-6">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="mb-3">
              <Breadcrumb
                items={breadcrumbItems}
                separator={breadcrumbSeparator}
                className="text-muted-foreground"
                {...(LinkComponent && { LinkComponent })}
              />
            </div>
          )}

          {/* Title Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              {Icon && (
                <div className="bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h1 className="text-foreground flex items-center gap-2 text-2xl font-semibold">
                  {title}
                  {helpText && (
                    <div className="group relative">
                      <Button variant="ghost" size="icon" type="button" className="h-5 w-5">
                        <Info className="h-5 w-5" />
                        <span className="sr-only">Help</span>
                      </Button>
                      <div className="absolute left-0 top-6 z-50 hidden w-64 max-w-sm whitespace-normal break-words rounded-lg bg-slate-800 p-3 text-xs text-white shadow-lg group-hover:block dark:bg-slate-700">
                        {helpText}
                        {helpLink && (
                          <a
                            href={helpLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block break-all text-blue-300 underline hover:text-blue-200"
                          >
                            Learn more →
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </h1>
                {description && (
                  <p className="text-muted-foreground mt-1 text-sm">{description}</p>
                )}
              </div>
            </div>

            {/* Right: Live Indicator + Actions */}
            <div className="flex flex-shrink-0 flex-col items-end gap-3">
              {/* Top row: Live Indicator + inline actions */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-3">
                  {/* Live Indicator - Toggleable when onToggleLive is provided */}
                  {onToggleLive !== undefined && (
                    <Button
                      variant="ghost"
                      onClick={onToggleLive}
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
                        isLive
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/40'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'
                      )}
                      aria-label={isLive ? 'Pause live updates' : 'Resume live updates'}
                    >
                      {/* Pulsing Dot */}
                      <span className="relative flex h-2.5 w-2.5">
                        {isLive && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span
                          className={cn(
                            'relative inline-flex h-2.5 w-2.5 rounded-full',
                            isLive ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-500'
                          )}
                        />
                      </span>
                      <span>{liveLabel || (isLive ? 'Live' : 'Paused')}</span>
                    </Button>
                  )}

                  {/* Live Indicator - Static (non-toggleable) when isLive is true but no toggle handler */}
                  {isLive && onToggleLive === undefined && (
                    <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      {/* Pulsing Dot */}
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </span>
                      <span>{liveLabel || 'Live'}</span>
                    </div>
                  )}

                  {/* Action Buttons (inline position) */}
                  {actions && actionsPosition === 'inline' && (
                    <div className="flex items-center gap-2">{actions}</div>
                  )}
                </div>

                {/* Uptime Display (below Live indicator) */}
                {uptime && (
                  <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Uptime: {uptime}</span>
                  </div>
                )}
              </div>

              {/* Second row: Actions (below position) - right-aligned under Live button */}
              {actions && actionsPosition === 'below' && (
                <div className="flex items-center gap-2">{actions}</div>
              )}
            </div>
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

          {/* Controls Section */}
          {controls && (
            <div className="border-border mt-4 border-t pt-4">{controls}</div>
          )}
        </div>
      </header>
    );
  }
);
PageHeader.displayName = 'PageHeader';

export { PageHeader, pageHeaderVariants };
