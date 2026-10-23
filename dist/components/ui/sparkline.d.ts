import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const sparklineVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SparklineProps extends React.ComponentPropsWithoutRef<'svg'>, VariantProps<typeof sparklineVariants> {
    /** Numeric series to plot, in order */
    data: number[];
    /** Fill the area between the line and the baseline */
    showArea?: boolean;
    /** Accessible description; defaults to trend direction and range */
    'aria-label'?: string;
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
declare const Sparkline: React.ForwardRefExoticComponent<SparklineProps & React.RefAttributes<SVGSVGElement>>;
export { Sparkline, sparklineVariants };
//# sourceMappingURL=sparkline.d.ts.map