import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const barChartVariants = cva('w-full', {
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

export interface BarChartDataPoint {
  /** Label displayed under the bar and used for accessibility */
  label: string;
  /** Numeric value represented by the bar height */
  value: number;
}

export interface BarChartProps
  extends React.ComponentPropsWithoutRef<'svg'>,
    VariantProps<typeof barChartVariants> {
  /** Data points to plot, in x-axis order */
  data: BarChartDataPoint[];
  /** Draw horizontal grid lines */
  showGrid?: boolean;
  /** Show the numeric value above each bar */
  showValues?: boolean;
  /** Space between bars, in viewBox units */
  barGap?: number;
  /** Accessible description of the chart; defaults to a summary of the data */
  'aria-label'?: string;
}

const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 40 };
const GRID_LINE_COUNT = 4;

/**
 * BarChart component - Displays values as vertical bars for category comparison.
 *
 * Renders as inline SVG using currentColor so it follows the theme variant.
 *
 * @example
 * <BarChart data={[{ label: 'Mon', value: 4 }, { label: 'Tue', value: 7 }]} />
 * <BarChart data={points} variant="success" showValues />
 */
const BarChart = React.forwardRef<SVGSVGElement, BarChartProps>(
  (
    {
      className,
      variant,
      data,
      showGrid = true,
      showValues = false,
      barGap = 8,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const innerWidth = VIEWBOX_WIDTH - PADDING.left - PADDING.right;
    const innerHeight = VIEWBOX_HEIGHT - PADDING.top - PADDING.bottom;

    const values = data.map((d) => d.value);
    const maxValue = Math.max(...values, 0);
    const minValue = Math.min(...values, 0);
    const range = maxValue - minValue || 1;

    const slotWidth = data.length > 0 ? innerWidth / data.length : innerWidth;
    const barWidth = Math.max(slotWidth - barGap, 2);

    const bars = data.map((d, i) => {
      const barHeight = ((d.value - minValue) / range) * innerHeight;
      return {
        ...d,
        x: PADDING.left + i * slotWidth + barGap / 2,
        y: PADDING.top + innerHeight - barHeight,
        height: barHeight,
        width: barWidth,
      };
    });

    const defaultLabel =
      data.length > 0
        ? `Bar chart with ${data.length} categories, ranging from ${Math.min(...values)} to ${Math.max(...values)}`
        : 'Bar chart with no data';

    return (
      <svg
        ref={ref}
        role="img"
        aria-label={ariaLabel ?? defaultLabel}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className={cn(barChartVariants({ variant }), className)}
        {...props}
      >
        {showGrid &&
          Array.from({ length: GRID_LINE_COUNT + 1 }, (_, i) => {
            const y = PADDING.top + (i / GRID_LINE_COUNT) * innerHeight;
            return (
              <line
                key={i}
                x1={PADDING.left}
                x2={VIEWBOX_WIDTH - PADDING.right}
                y1={y}
                y2={y}
                className="stroke-border"
                strokeWidth={1}
              />
            );
          })}
        {bars.map((bar) => (
          <React.Fragment key={bar.label}>
            <rect
              x={bar.x}
              y={bar.y}
              width={bar.width}
              height={bar.height}
              fill="currentColor"
              className="rounded-sm"
              rx={Math.min(4, bar.width / 2)}
            >
              <title>{`${bar.label}: ${bar.value}`}</title>
            </rect>
            {showValues && (
              <text
                x={bar.x + bar.width / 2}
                y={bar.y - 6}
                textAnchor="middle"
                className="fill-foreground text-xs"
              >
                {bar.value}
              </text>
            )}
            <text
              x={bar.x + bar.width / 2}
              y={VIEWBOX_HEIGHT - PADDING.bottom + 20}
              textAnchor="middle"
              className="fill-muted-foreground text-xs"
            >
              {bar.label}
            </text>
          </React.Fragment>
        ))}
      </svg>
    );
  }
);
BarChart.displayName = 'BarChart';

export { BarChart, barChartVariants };
