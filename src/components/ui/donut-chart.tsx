import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const donutChartVariants = cva('inline-block', {
  variants: {
    size: {
      default: 'h-40 w-40',
      sm: 'h-28 w-28',
      lg: 'h-56 w-56',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

/** Series color slots; values are Tailwind text-color classes so segments follow the theme. */
export const DONUT_COLOR_CLASSES = [
  'text-primary',
  'text-info',
  'text-warning',
  'text-success',
  'text-destructive',
  'text-secondary',
] as const;

export interface DonutChartSegment {
  /** Name shown in the center label and used for accessibility */
  label: string;
  /** Numeric value; slice size is proportional to the share of the total */
  value: number;
  /** Override the automatic color slot for this segment */
  colorClass?: string;
}

export interface DonutChartProps
  extends React.ComponentPropsWithoutRef<'svg'>,
    VariantProps<typeof donutChartVariants> {
  /** Segments to render, clockwise from the top */
  data: DonutChartSegment[];
  /** Thickness of the ring as a fraction of the radius (0-1) */
  thickness?: number;
  /** Render the given string in the center of the donut */
  centerLabel?: string;
  /** Accessible description of the chart; defaults to a summary of the data */
  'aria-label'?: string;
}

const VIEWBOX = 100;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startAngle: number,
  endAngle: number
): string {
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  const p1 = polarToCartesian(cx, cy, rOuter, startAngle);
  const p2 = polarToCartesian(cx, cy, rOuter, endAngle);
  const p3 = polarToCartesian(cx, cy, rInner, endAngle);
  const p4 = polarToCartesian(cx, cy, rInner, startAngle);
  return [
    `M${p1.x.toFixed(3)},${p1.y.toFixed(3)}`,
    `A${rOuter},${rOuter} 0 ${largeArc} 1 ${p2.x.toFixed(3)},${p2.y.toFixed(3)}`,
    `L${p3.x.toFixed(3)},${p3.y.toFixed(3)}`,
    `A${rInner},${rInner} 0 ${largeArc} 0 ${p4.x.toFixed(3)},${p4.y.toFixed(3)}`,
    'Z',
  ].join(' ');
}

/**
 * DonutChart component - Displays part-to-whole relationships as ring segments.
 *
 * Renders as inline SVG using currentColor per segment so colors follow the theme.
 *
 * @example
 * <DonutChart data={[{ label: 'Direct', value: 60 }, { label: 'Organic', value: 40 }]} />
 * <DonutChart data={segments} centerLabel="132 visits" size="lg" />
 */
const DonutChart = React.forwardRef<SVGSVGElement, DonutChartProps>(
  (
    {
      className,
      size,
      data,
      thickness = 0.25,
      centerLabel,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const cx = VIEWBOX / 2;
    const rOuter = VIEWBOX / 2 - 2;
    const rInner = rOuter * (1 - Math.min(Math.max(thickness, 0.05), 0.95));

    let angle = 0;
    const segments = data.map((d, i) => {
      const sweep = total > 0 ? (d.value / total) * 360 : 0;
      const seg = {
        ...d,
        colorClass: d.colorClass ?? DONUT_COLOR_CLASSES[i % DONUT_COLOR_CLASSES.length],
        path:
          sweep >= 360
            ? // Full circle: two half-arcs, since a single 360° arc renders as nothing
              `${describeArc(cx, cx, rOuter, rInner, 0, 180)} ${describeArc(cx, cx, rOuter, rInner, 180, 360)}`
            : describeArc(cx, cx, rOuter, rInner, angle, angle + sweep),
        percentage: total > 0 ? Math.round((d.value / total) * 100) : 0,
      };
      angle += sweep;
      return seg;
    });

    const defaultLabel =
      data.length > 0
        ? `Donut chart: ${data.map((d) => `${d.label} ${d.value}`).join(', ')}`
        : 'Donut chart with no data';

    return (
      <div className={cn('relative inline-block', className)}>
        <svg
          ref={ref}
          role="img"
          aria-label={ariaLabel ?? defaultLabel}
          viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
          className={cn(donutChartVariants({ size }))}
          {...props}
        >
          {segments.map((seg) => (
            <path
              key={seg.label}
              d={seg.path}
              className={cn('fill-current', seg.colorClass)}
            >
              <title>{`${seg.label}: ${seg.value} (${seg.percentage}%)`}</title>
            </path>
          ))}
        </svg>
        {centerLabel !== undefined && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm font-medium text-foreground">{centerLabel}</span>
          </div>
        )}
      </div>
    );
  }
);
DonutChart.displayName = 'DonutChart';

export { DonutChart, donutChartVariants };
