import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const lineChartVariants = cva('w-full', {
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

export interface LineChartDataPoint {
  /** Label displayed on the x-axis and used for accessibility */
  label: string;
  /** Numeric value plotted on the y-axis */
  value: number;
}

export interface LineChartProps
  extends React.ComponentPropsWithoutRef<'svg'>,
    VariantProps<typeof lineChartVariants> {
  /** Data points to plot, in x-axis order */
  data: LineChartDataPoint[];
  /** Draw a dot at each data point */
  showDots?: boolean;
  /** Fill the area between the line and the x-axis */
  showArea?: boolean;
  /** Draw horizontal grid lines */
  showGrid?: boolean;
  /** Accessible description of the chart; defaults to a summary of the data */
  'aria-label'?: string;
}

const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 300;
const PADDING = { top: 20, right: 20, bottom: 40, left: 40 };
const GRID_LINE_COUNT = 4;

function buildPath(
  points: Array<{ x: number; y: number }>,
  closeToBottom: boolean
): string {
  if (points.length === 0) return '';
  const segments = points.map(
    (p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`
  );
  if (closeToBottom) {
    const bottom = VIEWBOX_HEIGHT - PADDING.bottom;
    const first = points[0]!;
    const last = points[points.length - 1]!;
    segments.push(`L${last.x.toFixed(2)},${bottom}`);
    segments.push(`L${first.x.toFixed(2)},${bottom}`);
    segments.push('Z');
  }
  return segments.join(' ');
}

/**
 * LineChart component - Displays trends over time as a line plot.
 *
 * Renders as inline SVG using currentColor so it follows the theme variant.
 *
 * @example
 * <LineChart data={[{ label: 'Mon', value: 4 }, { label: 'Tue', value: 7 }]} />
 * <LineChart data={points} variant="success" showArea showDots />
 */
const LineChart = React.forwardRef<SVGSVGElement, LineChartProps>(
  (
    {
      className,
      variant,
      data,
      showDots = true,
      showArea = false,
      showGrid = true,
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

    const points = data.map((d, i) => ({
      x:
        PADDING.left +
        (data.length === 1 ? innerWidth / 2 : (i / (data.length - 1)) * innerWidth),
      y: PADDING.top + innerHeight - ((d.value - minValue) / range) * innerHeight,
      ...d,
    }));

    const linePath = buildPath(points, false);
    const areaPath = buildPath(points, true);

    const defaultLabel =
      data.length > 0
        ? `Line chart: ${data[0]!.label} ${data[0]!.value} to ${data[data.length - 1]!.label} ${data[data.length - 1]!.value}`
        : 'Line chart with no data';

    return (
      <svg
        ref={ref}
        role="img"
        aria-label={ariaLabel ?? defaultLabel}
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className={cn(lineChartVariants({ variant }), className)}
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
        {showArea && points.length > 0 && (
          <path
            d={areaPath}
            fill="currentColor"
            className="opacity-10"
            data-testid="line-chart-area"
          />
        )}
        {points.length > 0 && (
          <path
            d={linePath}
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-testid="line-chart-line"
          />
        )}
        {showDots &&
          points.map((p) => (
            <circle
              key={p.label}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="currentColor"
              className="stroke-background"
              strokeWidth={2}
            >
              <title>{`${p.label}: ${p.value}`}</title>
            </circle>
          ))}
        {points.map((p) => (
          <text
            key={`label-${p.label}`}
            x={p.x}
            y={VIEWBOX_HEIGHT - PADDING.bottom + 20}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            {p.label}
          </text>
        ))}
      </svg>
    );
  }
);
LineChart.displayName = 'LineChart';

export { LineChart, lineChartVariants };
