import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const lineChartVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface LineChartDataPoint {
    /** Label displayed on the x-axis and used for accessibility */
    label: string;
    /** Numeric value plotted on the y-axis */
    value: number;
}
export interface LineChartProps extends React.ComponentPropsWithoutRef<'svg'>, VariantProps<typeof lineChartVariants> {
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
/**
 * LineChart component - Displays trends over time as a line plot.
 *
 * Renders as inline SVG using currentColor so it follows the theme variant.
 *
 * @example
 * <LineChart data={[{ label: 'Mon', value: 4 }, { label: 'Tue', value: 7 }]} />
 * <LineChart data={points} variant="success" showArea showDots />
 */
declare const LineChart: React.ForwardRefExoticComponent<LineChartProps & React.RefAttributes<SVGSVGElement>>;
export { LineChart, lineChartVariants };
//# sourceMappingURL=line-chart.d.ts.map