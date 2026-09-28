import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Skeleton } from './spinner';

/* ------------------------------------------------------------------ */
/* Time range selector                                                 */
/* ------------------------------------------------------------------ */

export interface TimeRangeOption {
  /** Stable value passed to onChange (e.g. "24h") */
  value: string;
  /** Display label (e.g. "24h") */
  label: string;
}

export interface TimeRangeSelectorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selectable time ranges */
  options: TimeRangeOption[];
  /** Currently selected range value */
  value: string;
  /** Called with the option value when the user selects a range */
  onChange: (value: string) => void;
  /** Accessible name for the group */
  'aria-label'?: string;
}

const timeRangeTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      selected: {
        true: 'bg-background text-foreground shadow-sm',
        false: 'text-muted-foreground hover:text-foreground',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

/**
 * Segmented control for choosing a dashboard time range.
 * Renders as a radiogroup so screen readers announce the selected range.
 *
 * @example
 * <TimeRangeSelector
 *   aria-label="Time range"
 *   options={[{ value: '24h', label: '24h' }, { value: '7d', label: '7d' }]}
 *   value="24h"
 *   onChange={setRange}
 * />
 */
export const TimeRangeSelector = React.forwardRef<HTMLDivElement, TimeRangeSelectorProps>(
  ({ className, options, value, onChange, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel ?? 'Time range'}
        className={cn(
          'inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
          className
        )}
        {...props}
      >
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              data-state={selected ? 'checked' : 'unchecked'}
              className={cn(timeRangeTriggerVariants({ selected: selected || undefined }))}
              onClick={() => {
                if (!selected) onChange(option.value);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    );
  }
);
TimeRangeSelector.displayName = 'TimeRangeSelector';

/* ------------------------------------------------------------------ */
/* Refresh control                                                     */
/* ------------------------------------------------------------------ */

export interface AutoRefreshInterval {
  /** Interval duration in seconds */
  seconds: number;
  /** Display label (e.g. "30s") */
  label: string;
}

export interface RefreshControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Called when the user requests a refresh */
  onRefresh: () => void | Promise<void>;
  /** Whether a refresh is currently in flight; shows a spinner and disables the button */
  isRefreshing?: boolean;
  /** Time of the last successful refresh, rendered as a relative "x ago" hint */
  lastRefreshedAt?: Date | string | number | null;
  /** Offered auto-refresh intervals; omit to hide the interval picker */
  intervals?: AutoRefreshInterval[];
  /** Currently selected auto-refresh interval in seconds, or 0/null for off */
  autoRefreshSeconds?: number | null;
  /** Called with the selected interval in seconds (0 = off) */
  onAutoRefreshChange?: (seconds: number) => void;
}

function formatRelativeTime(date: Date | string | number): string {
  const then = new Date(date).getTime();
  if (Number.isNaN(then)) return '';
  const seconds = Math.max(0, Math.round((Date.now() - then) / 1000));
  if (seconds < 10) return 'just now';
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

/**
 * Refresh button with optional auto-refresh interval picker and a
 * relative "last updated" hint. Composes with the library Button.
 */
export const RefreshControl = React.forwardRef<HTMLDivElement, RefreshControlProps>(
  (
    {
      className,
      onRefresh,
      isRefreshing = false,
      lastRefreshedAt = null,
      intervals,
      autoRefreshSeconds = 0,
      onAutoRefreshChange,
      ...props
    },
    ref
  ) => {
    // Keep the latest callback without re-arming the interval timer.
    const onRefreshRef = React.useRef(onRefresh);
    onRefreshRef.current = onRefresh;

    React.useEffect(() => {
      if (!autoRefreshSeconds || autoRefreshSeconds <= 0) return;
      const id = window.setInterval(() => {
        void onRefreshRef.current();
      }, autoRefreshSeconds * 1000);
      return () => {
        window.clearInterval(id);
      };
    }, [autoRefreshSeconds]);

    const lastRefreshedLabel = lastRefreshedAt ? formatRelativeTime(lastRefreshedAt) : null;

    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)} {...props}>
        {lastRefreshedLabel ? (
          <span className="hidden text-xs text-muted-foreground sm:inline" data-testid="last-refreshed">
            Updated {lastRefreshedLabel}
          </span>
        ) : null}
        {intervals && intervals.length > 0 ? (
          <div
            role="radiogroup"
            aria-label="Auto refresh interval"
            className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
          >
            {AUTO_REFRESH_OFF.concat(intervals).map((interval) => {
              const selected = interval.seconds === (autoRefreshSeconds ?? 0);
              return (
                <button
                  key={interval.label}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  data-state={selected ? 'checked' : 'unchecked'}
                  className={cn(timeRangeTriggerVariants({ selected: selected || undefined }))}
                  onClick={() => onAutoRefreshChange?.(interval.seconds)}
                >
                  {interval.label}
                </button>
              );
            })}
          </div>
        ) : null}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => {
            void onRefresh();
          }}
          disabled={isRefreshing}
          aria-label={isRefreshing ? 'Refreshing' : 'Refresh'}
        >
          <RefreshCw
            className={cn('h-4 w-4', isRefreshing && 'animate-spin')}
            aria-hidden="true"
          />
          Refresh
        </Button>
      </div>
    );
  }
);
RefreshControl.displayName = 'RefreshControl';

const AUTO_REFRESH_OFF: AutoRefreshInterval[] = [{ seconds: 0, label: 'Off' }];

/* ------------------------------------------------------------------ */
/* Widget                                                              */
/* ------------------------------------------------------------------ */

export interface DashboardWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Widget heading */
  title?: string;
  /** Optional supporting text under the title */
  description?: string;
  /** Content in the widget footer */
  footer?: React.ReactNode;
  /** Column span on the 12-column grid at lg and up. Default 4 (third). */
  colSpan?: number;
  /** Grid row span. Default 1. */
  rowSpan?: number;
  /** Renders a skeleton in place of the widget content */
  loading?: boolean;
  variant?: VariantProps<typeof Card>['variant'];
}

/**
 * A single grid cell in a Dashboard. Wraps content in a Card and
 * claims `colSpan` columns of the 12-column grid (responsive below lg).
 */
export const DashboardWidget = React.forwardRef<HTMLDivElement, DashboardWidgetProps>(
  (
    {
      className,
      title,
      description,
      footer,
      colSpan = 4,
      rowSpan = 1,
      loading = false,
      variant,
      children,
      ...props
    },
    ref
  ) => {
    const safeSpan = Math.min(12, Math.max(1, Math.round(colSpan)));
    const style = {
      gridColumn: `span ${safeSpan} / span ${safeSpan}`,
      gridRow: `span ${Math.max(1, Math.round(rowSpan))} / span ${Math.max(1, Math.round(rowSpan))}`,
    };
    return (
      <Card
        ref={ref}
        variant={variant}
        className={cn('flex flex-col', className)}
        style={style}
        data-col-span={safeSpan}
        {...props}
      >
        {title ? (
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description ? <CardDescription>{description}</CardDescription> : null}
          </CardHeader>
        ) : null}
        <CardContent className="flex-1">
          {loading ? (
            <div className="space-y-3" data-testid="widget-skeleton" aria-busy="true">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-[72px] w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : (
            children
          )}
        </CardContent>
        {footer ? <CardFooter className="text-xs text-muted-foreground">{footer}</CardFooter> : null}
      </Card>
    );
  }
);
DashboardWidget.displayName = 'DashboardWidget';

/* ------------------------------------------------------------------ */
/* Dashboard                                                           */
/* ------------------------------------------------------------------ */

export interface DashboardTimeRangeConfig {
  options: TimeRangeOption[];
  value: string;
  onChange: (value: string) => void;
}

export interface DashboardRefreshConfig {
  onRefresh: () => void | Promise<void>;
  isRefreshing?: boolean;
  lastRefreshedAt?: Date | string | number | null;
  intervals?: AutoRefreshInterval[];
  autoRefreshSeconds?: number | null;
  onAutoRefreshChange?: (seconds: number) => void;
}

export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Dashboard heading, rendered in the header row */
  title?: string;
  /** Supporting text under the title */
  description?: string;
  /** Extra content on the right of the header row (after time range / refresh) */
  actions?: React.ReactNode;
  /** Enables the TimeRangeSelector in the header */
  timeRange?: DashboardTimeRangeConfig;
  /** Enables the RefreshControl in the header */
  refresh?: DashboardRefreshConfig;
  /** Renders a skeleton grid instead of children */
  loading?: boolean;
  /** Number of skeleton widgets while loading. Default 3. */
  loadingCount?: number;
  /** Gap between widgets. Default 'default'. */
  gap?: 'none' | 'sm' | 'default' | 'lg';
  children?: React.ReactNode;
}

const gapVariants = cva('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12', {
  variants: {
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      default: 'gap-4',
      lg: 'gap-6',
    },
  },
  defaultVariants: {
    gap: 'default',
  },
});

/**
 * Dashboard composition: a header with title, time-range selector and
 * refresh control, above a 12-column responsive widget grid of
 * DashboardWidget children.
 *
 * @example
 * <Dashboard
 *   title="Overview"
 *   timeRange={{ options: DEFAULT_TIME_RANGES, value, onChange: setValue }}
 *   refresh={{ onRefresh, isRefreshing }}
 * >
 *   <DashboardWidget title="Requests" colSpan={4}>…</DashboardWidget>
 *   <DashboardWidget title="Latency" colSpan={8}>…</DashboardWidget>
 * </Dashboard>
 */
export const Dashboard = React.forwardRef<HTMLDivElement, DashboardProps>(
  (
    {
      className,
      title,
      description,
      actions,
      timeRange,
      refresh,
      loading = false,
      loadingCount = 3,
      gap = 'default',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('flex w-full flex-col gap-4', className)} {...props}>
        {(title || description || timeRange || refresh || actions) && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {(title || description) && (
              <div className="min-w-0">
                {title ? <h2 className="text-lg font-semibold text-foreground">{title}</h2> : null}
                {description ? (
                  <p className="text-sm text-muted-foreground">{description}</p>
                ) : null}
              </div>
            )}
            <div className="flex flex-wrap items-center gap-2">
              {timeRange ? (
                <TimeRangeSelector
                  options={timeRange.options}
                  value={timeRange.value}
                  onChange={timeRange.onChange}
                />
              ) : null}
              {refresh ? <RefreshControl {...refresh} /> : null}
              {actions}
            </div>
          </div>
        )}
        <div className={cn(gapVariants({ gap }))}>
          {loading
            ? Array.from({ length: loadingCount }).map((_, i) => (
                <DashboardWidget key={i} loading colSpan={4} />
              ))
            : children}
        </div>
      </div>
    );
  }
);
Dashboard.displayName = 'Dashboard';

/** Common time range presets for dashboards. */
export const DEFAULT_TIME_RANGES: TimeRangeOption[] = [
  { value: '1h', label: '1h' },
  { value: '24h', label: '24h' },
  { value: '7d', label: '7d' },
  { value: '30d', label: '30d' },
];

/** Common auto-refresh intervals for dashboards. */
export const DEFAULT_AUTO_REFRESH_INTERVALS: AutoRefreshInterval[] = [
  { seconds: 30, label: '30s' },
  { seconds: 60, label: '1m' },
  { seconds: 300, label: '5m' },
];
