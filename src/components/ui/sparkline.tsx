import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sparklineVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'text-primary',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-destructive',
    },
    size: {
      default: 'h-8',
      sm: 'h-5',
      lg: 'h-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface SparklineProps
  extends React.ComponentPropsWithoutRef<'svg'>,
    VariantProps<typeof sparklineVariants> {
  /** Numeric series to plot, in order */
  data: number[];
  /** Fill the area between the line and the baseline */
  showArea?: boolean;
  /** Accessible description; defaults to trend direction and range */
  'aria-label'?: string;
}

const VIEWBOX_WIDTH = 100;
const VIEWBOX_HEIGHT = 30;

function buildPath(points: Array<{ x: number; y: number }>, closeToBottom: boolean): string {
  if (points.length === 0) return '';
  const segments = points.map(
    (p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`
  );
  if (closeToBottom) {
    const bottom = VIEWBOX_HEIGHT;
    const first = points[0];
    const last = points[points.length - 1];
    if (first && last) {
      segments.push(`L${last.x.toFixed(2)},${bottom}`);
      segments.push(`L${first.x.toFixed(2)},${bottom}`);
      segments.push('Z');
    }
  }
  return segments.join(' ');
}

function trendDirection(data: number[]): string {
  if (data.length < 2) return 'insufficient data';
  const first = data[0];
  const last = data[data.length - 1];
  if (first === undefined || last === undefined) return 'insufficient data';
  const delta = last - first;
  if (delta > 0) return 'trending up';
  if (delta < 0) return 'trending down';
  return 'flat';
}

/**
 * Sparkline component - Compact trend line for embedding in tables, cards, and lists.
 *
 * Renders as inline SVG using currentColor so it follows the theme variant.
 *
 * @example
 * <Sparkline data={[3, 7, 4, 9, 6]} />
 * <Sparkline data={series} variant="success" showArea size="sm" />
 */
const Sparkline = React.forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      className,
      variant,
      size,
      data,
      showArea = true,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const maxValue = Math.max(...data, 0);
    const minValue = Math.min(...data, 0);
    const range = maxValue - minValue || 1;

    const points = data.map((value, i) => ({
      x: data.length === 1 ? VIEWBOX_WIDTH / 2 : (i / (data.length - 1)) * VIEWBOX_WIDTH,
      y: VIEWBOX_HEIGHT - ((value - minValue) / range) * VIEWBOX_HEIGHT,
    }));

    const defaultLabel =
      data.length > 0
        ? `Sparkline, ${trendDirection(data)}, from ${Math.min(...data)} to ${Math.max(...data)}`
        : 'Sparkline with no data';

    return (
      <svg
        ref={ref}
        role="img"
        aria-label={ariaLabel ?? defaultLabel}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        preserveAspectRatio="none"
        className={cn(sparklineVariants({ variant, size }), className)}
        {...props}
      >
        {showArea && points.length > 0 && (
          <path
            d={buildPath(points, true)}
            fill="currentColor"
            className="opacity-10"
            data-testid="sparkline-area"
          />
        )}
        {points.length > 0 && (
          <path
            d={buildPath(points, false)}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-testid="sparkline-line"
          />
        )}
      </svg>
    );
  }
);
Sparkline.displayName = 'Sparkline';

export { Sparkline, sparklineVariants };
