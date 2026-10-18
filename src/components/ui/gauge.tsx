import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gaugeVariants = cva('inline-block', {
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

/** Tone names map to theme token classes so the dial follows the active palette and mode. */
export const GAUGE_TONE_CLASSES = {
  primary: 'text-primary',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  destructive: 'text-destructive',
} as const;

export type GaugeTone = keyof typeof GAUGE_TONE_CLASSES;

/** Threshold bands default to the green/amber/red ladder, cycling through the palette beyond three. */
export const GAUGE_TONE_CYCLE: readonly GaugeTone[] = [
  'success',
  'warning',
  'destructive',
  'info',
  'primary',
];

function cycleTone(i: number): GaugeTone {
  return GAUGE_TONE_CYCLE[i % GAUGE_TONE_CYCLE.length] ?? 'success';
}

export interface GaugeThreshold {
  /** Upper bound of the band (inclusive), in value units */
  upTo: number;
  /** Band tone; defaults to the green/amber/red ladder by position */
  tone?: GaugeTone;
  /** Override the automatic tone class for this band */
  colorClass?: string;
}

export interface GaugeProps
  extends React.ComponentPropsWithoutRef<'svg'>,
    VariantProps<typeof gaugeVariants> {
  /** Current reading; clamped to [min, max] */
  value: number;
  /** Lower bound of the dial scale */
  min?: number;
  /** Upper bound of the dial scale */
  max?: number;
  /**
   * Threshold bands rendered as an inner scale ring. The value arc takes the tone
   * of the band it lands in; the range beyond the last threshold gets the next
   * tone in the default ladder.
   */
  thresholds?: GaugeThreshold[];
  /** Suffix appended to the auto-generated center label (e.g. "%" or " GB") */
  unit?: string;
  /** Decimal places for the auto-generated center label */
  decimals?: number;
  /** Render the given string as the center label instead of the formatted value */
  centerLabel?: string;
  /** Secondary label rendered under the center value */
  sublabel?: string;
  /** Thickness of the value arc as a fraction of the radius (0-1) */
  thickness?: number;
  /** Accessible description of the gauge; defaults to a summary of the value, range, and band */
  'aria-label'?: string;
}

const VIEWBOX = 100;
const START_ANGLE = -135;
const SWEEP = 270;

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

interface ResolvedBand {
  from: number;
  to: number;
  colorClass: string;
  tone: GaugeTone;
}

function resolveBands(
  min: number,
  max: number,
  thresholds: GaugeThreshold[] | undefined
): ResolvedBand[] {
  if (!thresholds || thresholds.length === 0) return [];
  const sorted = [...thresholds].sort((a, b) => a.upTo - b.upTo);
  const bands: ResolvedBand[] = [];
  let prev = min;
  sorted.forEach((t, i) => {
    const tone = t.tone ?? cycleTone(i);
    bands.push({
      from: prev,
      to: Math.min(t.upTo, max),
      colorClass: t.colorClass ?? GAUGE_TONE_CLASSES[tone],
      tone,
    });
    prev = Math.max(prev, t.upTo);
  });
  if (prev < max) {
    const tone = cycleTone(sorted.length);
    bands.push({ from: prev, to: max, colorClass: GAUGE_TONE_CLASSES[tone], tone });
  }
  return bands.filter((b) => b.to > b.from);
}

/**
 * Gauge component - Radial dial for single-value metrics with threshold bands.
 *
 * Renders as inline SVG using currentColor per arc so tones follow the theme.
 * The value arc takes the tone of the threshold band it falls in.
 *
 * @example
 * <Gauge value={72} sublabel="CPU" unit="%" thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
 * <Gauge value={186} min={100} max={300} sublabel="Avg" thresholds={[
 *   { upTo: 170, tone: 'destructive' }, { upTo: 200, tone: 'warning' }, { upTo: 300, tone: 'success' },
 * ]} />
 */
const Gauge = React.forwardRef<SVGSVGElement, GaugeProps>(
  (
    {
      className,
      size,
      value,
      min = 0,
      max = 100,
      thresholds,
      unit = '',
      decimals = 0,
      centerLabel,
      sublabel,
      thickness = 0.18,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const raw = Number.isFinite(value) ? value : min;
    const safeValue = Math.min(Math.max(raw, min), max);
    const range = max - min;
    const fraction =
      range > 0 ? Math.min(Math.max((safeValue - min) / range, 0), 1) : 0;

    const cx = VIEWBOX / 2;
    const rOuter = VIEWBOX / 2 - 2;
    const rInner = rOuter * (1 - Math.min(Math.max(thickness, 0.05), 0.45));
    const bandOuter = rInner - 3;
    const bandInner = bandOuter - 3;

    const angleOf = (v: number) =>
      START_ANGLE +
      (range > 0 ? Math.min(Math.max((v - min) / range, 0), 1) : 0) * SWEEP;

    const bands = resolveBands(min, max, thresholds);
    const activeBand = bands.find((b) => safeValue <= b.to);
    const valueClass = activeBand?.colorClass ?? GAUGE_TONE_CLASSES.primary;

    const trackArc = describeArc(cx, cx, rOuter, rInner, START_ANGLE, START_ANGLE + SWEEP);
    const valueArc =
      fraction > 0.002
        ? describeArc(cx, cx, rOuter, rInner, START_ANGLE, angleOf(safeValue))
        : null;

    const formatted = `${safeValue.toFixed(decimals)}${unit}`;
    const toneName = bands.length > 0 ? activeBand?.tone : undefined;
    const defaultLabel = `Gauge: ${sublabel ? `${sublabel} ` : ''}${formatted} (range ${min} to ${max}${toneName ? `, ${toneName}` : ''})`;

    return (
      <div className={cn('relative inline-block', className)}>
        <svg
          ref={ref}
          role="img"
          aria-label={ariaLabel ?? defaultLabel}
          viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
          className={cn(gaugeVariants({ size }))}
          {...props}
        >
          <path d={trackArc} className="fill-current text-muted" />
          {bands.map((band, i) => (
            <path
              key={`${band.from}-${band.to}-${i}`}
              d={describeArc(cx, cx, bandOuter, bandInner, angleOf(band.from), angleOf(band.to))}
              className={cn('fill-current', band.colorClass)}
            />
          ))}
          {valueArc && (
            <path d={valueArc} className={cn('fill-current', valueClass)}>
              <title>{`${sublabel ? `${sublabel}: ` : ''}${formatted}`}</title>
            </path>
          )}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-[10%] text-center">
          <span className="text-2xl font-bold tracking-tight tabular-nums text-foreground">
            {centerLabel ?? formatted}
          </span>
          {sublabel && (
            <span className="mt-0.5 text-xs font-medium text-muted-foreground">
              {sublabel}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Gauge.displayName = 'Gauge';

export { Gauge, gaugeVariants };
