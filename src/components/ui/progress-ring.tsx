import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const progressRingTrackVariants = cva('text-secondary', {
  variants: {
    size: {
      sm: 'h-8 w-8',
      default: 'h-12 w-12',
      lg: 'h-20 w-20',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const progressRingIndicatorVariants = cva('', {
  variants: {
    variant: {
      default: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type Size = NonNullable<VariantProps<typeof progressRingTrackVariants>['size']>;

const labelSizeClasses: Record<Size, string> = {
  sm: 'text-[10px]',
  default: 'text-xs',
  lg: 'text-sm',
};

export interface ProgressRingProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof progressRingTrackVariants>,
    VariantProps<typeof progressRingIndicatorVariants> {
  /** Progress value (0-100). Omit for indeterminate (spinner) mode. */
  value?: number;
  /** Ring stroke thickness in pixels */
  thickness?: number;
  /** Content centered inside the ring (e.g. a percentage label) */
  label?: React.ReactNode;
  /** Accessible name announced by screen readers */
  'aria-label'?: string;
}

const clamp = (value: number) => Math.min(100, Math.max(0, value));

/**
 * ProgressRing - Circular progress indicator.
 *
 * Determinate when `value` is provided; indeterminate (spinner) otherwise.
 * Color and size variants mirror the linear Progress component; the arcs use
 * currentColor so variants stay in sync with the theme tokens.
 *
 * @example
 * <ProgressRing value={60} />
 * <ProgressRing value={75} variant="success" label="75%" />
 * <ProgressRing aria-label="Loading" />
 */
const ProgressRing = React.forwardRef<HTMLDivElement, ProgressRingProps>(
  (
    { className, value, size, variant, thickness = 4, label, 'aria-label': ariaLabel, ...props },
    ref
  ) => {
    const indeterminate = value === undefined;
    const clampedValue = clamp(value ?? 0);
    const radius = 50 - thickness / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (clampedValue / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn(progressRingTrackVariants({ size }), 'relative inline-flex', className)}
        {...props}
      >
        <svg
          viewBox="0 0 100 100"
          className={indeterminate ? 'animate-spin' : undefined}
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth={thickness}
            stroke="currentColor"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth={thickness}
            strokeLinecap="round"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? circumference * 0.75 : offset}
            transform="rotate(-90 50 50)"
            className={cn(
              progressRingIndicatorVariants({ variant }),
              'transition-[stroke-dashoffset] duration-300'
            )}
          />
        </svg>
        {label != null && (
          <span
            className={cn(
              'text-foreground absolute inset-0 flex items-center justify-center font-medium',
              labelSizeClasses[size ?? 'default']
            )}
          >
            {label}
          </span>
        )}
        <span
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={indeterminate ? undefined : clampedValue}
          className="sr-only"
        >
          {indeterminate ? 'Loading' : `${clampedValue}%`}
        </span>
      </div>
    );
  }
);
ProgressRing.displayName = 'ProgressRing';

export { ProgressRing, progressRingTrackVariants, progressRingIndicatorVariants };
