import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const metricCardVariants: (props?: ({
    variant?: "default" | "blue" | "purple" | "emerald" | "amber" | "rose" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface MetricCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'loading'>, VariantProps<typeof metricCardVariants> {
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
    /** Show loading skeleton state */
    loading?: boolean;
}
/**
 * MetricCard component for displaying statistics and key performance indicators.
 * Supports various color themes, trend indicators, and loading states.
 */
export declare function MetricCard({ className, variant, icon, value, label, trend, loading, ...props }: MetricCardProps): React.JSX.Element;
export {};
//# sourceMappingURL=metric-card.d.ts.map