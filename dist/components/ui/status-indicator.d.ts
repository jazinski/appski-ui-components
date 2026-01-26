import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const statusIndicatorVariants: (props?: ({
    status?: "offline" | "online" | "away" | "busy" | "idle" | null | undefined;
    size?: "sm" | "lg" | "xl" | "md" | "xs" | null | undefined;
    variant?: "dot" | "pulsing" | "ring" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusIndicatorVariants> {
    /**
     * Optional text label to display next to the indicator
     */
    label?: string;
    /**
     * Position of the label relative to the indicator
     * @default 'right'
     */
    labelPosition?: 'left' | 'right';
    /**
     * Whether to show a border ring around the indicator
     * Useful when placing on colored backgrounds
     * @default false
     */
    showRing?: boolean;
}
/**
 * StatusIndicator component displays a colored dot to indicate online status,
 * availability, or other state information.
 *
 * @example
 * ```tsx
 * <StatusIndicator status="online" size="md" />
 * <StatusIndicator status="busy" label="In a meeting" />
 * <StatusIndicator status="away" variant="pulsing" />
 * ```
 */
export declare const StatusIndicator: React.ForwardRefExoticComponent<StatusIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export { statusIndicatorVariants };
//# sourceMappingURL=status-indicator.d.ts.map