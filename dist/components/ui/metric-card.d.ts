import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const metricCardVariants: (props?: ({
    variant?: "default" | "emerald" | "blue" | "purple" | "amber" | "rose" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof metricCardVariants> {
    /** The icon to display */
    icon?: React.ReactNode;
    /** The main numeric or text value */
    value: string | number;
    /** The label describing the value */
    label: string;
    /** Optional trend indicator (e.g. "+5%") */
    trend?: {
        value: string;
        direction: 'up' | 'down' | 'neutral';
        label?: string;
    };
}
/**
 * MetricCard component for displaying statistics and key performance indicators.
 * Supports various color themes and layouts.
 */
export declare function MetricCard({ className, variant, icon, value, label, trend, ...props }: MetricCardProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=metric-card.d.ts.map