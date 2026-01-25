import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const statusIndicatorVariants = cva('inline-flex rounded-full flex-shrink-0', {
  variants: {
    status: {
      online: 'bg-green-500 dark:bg-green-400',
      offline: 'bg-slate-400 dark:bg-slate-500',
      away: 'bg-yellow-500 dark:bg-yellow-400',
      busy: 'bg-red-500 dark:bg-red-400',
      idle: 'bg-blue-500 dark:bg-blue-400',
    },
    size: {
      xs: 'h-1.5 w-1.5',
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-4 w-4',
    },
    variant: {
      dot: '',
      pulsing: 'animate-pulse',
      ring: 'ring-2 ring-white dark:ring-slate-900',
    },
  },
  defaultVariants: {
    status: 'online',
    size: 'md',
    variant: 'dot',
  },
});

const statusLabelVariants = cva('text-sm font-medium', {
  variants: {
    status: {
      online: 'text-green-700 dark:text-green-300',
      offline: 'text-slate-700 dark:text-slate-300',
      away: 'text-yellow-700 dark:text-yellow-300',
      busy: 'text-red-700 dark:text-red-300',
      idle: 'text-blue-700 dark:text-blue-300',
    },
  },
  defaultVariants: {
    status: 'online',
  },
});

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusIndicatorVariants> {
  /**
   * Optional text label to display next to the indicator
   */
  label?: string;
  /**
   * Position of the label relative to the indicator
   * @default 'right'
   */
  labelPosition?: 'left' | 'right';
  /**
   * Whether to show a border ring around the indicator
   * Useful when placing on colored backgrounds
   * @default false
   */
  showRing?: boolean;
}

/**
 * StatusIndicator component displays a colored dot to indicate online status,
 * availability, or other state information.
 *
 * @example
 * ```tsx
 * <StatusIndicator status="online" size="md" />
 * <StatusIndicator status="busy" label="In a meeting" />
 * <StatusIndicator status="away" variant="pulsing" />
 * ```
 */
export const StatusIndicator = React.forwardRef<HTMLSpanElement, StatusIndicatorProps>(
  (
    {
      className,
      status = 'online',
      size = 'md',
      variant = 'dot',
      label,
      labelPosition = 'right',
      showRing = false,
      ...props
    },
    ref
  ) => {
    const indicatorVariant = showRing ? 'ring' : variant;

    // Only show label if explicitly provided
    const displayLabel = label !== undefined ? label : '';

    if (!displayLabel) {
      // Just the indicator dot, no label
      return (
        <span
          ref={ref}
          className={cn(
            statusIndicatorVariants({ status, size, variant: indicatorVariant }),
            className
          )}
          role="status"
          aria-label={`Status: ${status || 'online'}`}
          {...props}
        />
      );
    }

    // Indicator with label
    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center gap-2', className)}
        role="status"
        aria-label={`Status: ${status || 'online'}`}
        {...props}
      >
        {labelPosition === 'left' && (
          <span className={statusLabelVariants({ status })}>{displayLabel}</span>
        )}
        <span
          className={statusIndicatorVariants({ status, size, variant: indicatorVariant })}
          aria-hidden="true"
        />
        {labelPosition === 'right' && (
          <span className={statusLabelVariants({ status })}>{displayLabel}</span>
        )}
      </span>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';

export { statusIndicatorVariants };
