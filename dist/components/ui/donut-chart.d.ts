import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const donutChartVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Series color slots; values are Tailwind text-color classes so segments follow the theme. */
export declare const DONUT_COLOR_CLASSES: readonly ["text-primary", "text-info", "text-warning", "text-success", "text-destructive", "text-secondary"];
export interface DonutChartSegment {
    /** Name shown in the center label and used for accessibility */
    label: string;
    /** Numeric value; slice size is proportional to the share of the total */
    value: number;
    /** Override the automatic color slot for this segment */
    colorClass?: string;
}
export interface DonutChartProps extends React.ComponentPropsWithoutRef<'svg'>, VariantProps<typeof donutChartVariants> {
    /** Segments to render, clockwise from the top */
    data: DonutChartSegment[];
    /** Thickness of the ring as a fraction of the radius (0-1) */
    thickness?: number;
    /** Render the given string in the center of the donut */
    centerLabel?: string;
    /** Accessible description of the chart; defaults to a summary of the data */
    'aria-label'?: string;
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
declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<SVGSVGElement>>;
export { DonutChart, donutChartVariants };
//# sourceMappingURL=donut-chart.d.ts.map