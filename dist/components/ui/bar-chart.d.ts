import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const barChartVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BarChartDataPoint {
    /** Label displayed under the bar and used for accessibility */
    label: string;
    /** Numeric value represented by the bar height */
    value: number;
}
export interface BarChartProps extends React.ComponentPropsWithoutRef<'svg'>, VariantProps<typeof barChartVariants> {
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
/**
 * BarChart component - Displays values as vertical bars for category comparison.
 *
 * Renders as inline SVG using currentColor so it follows the theme variant.
 *
 * @example
 * <BarChart data={[{ label: 'Mon', value: 4 }, { label: 'Tue', value: 7 }]} />
 * <BarChart data={points} variant="success" showValues />
 */
declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<SVGSVGElement>>;
export { BarChart, barChartVariants };
//# sourceMappingURL=bar-chart.d.ts.map