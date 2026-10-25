import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const progressRingTrackVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const progressRingIndicatorVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressRingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof progressRingTrackVariants>, VariantProps<typeof progressRingIndicatorVariants> {
    /** Progress value (0-100). Omit for indeterminate (spinner) mode. */
    value?: number;
    /** Ring stroke thickness in pixels */
    thickness?: number;
    /** Content centered inside the ring (e.g. a percentage label) */
    label?: React.ReactNode;
    /** Accessible name announced by screen readers */
    'aria-label'?: string;
}
/**
 * ProgressRing - Circular progress indicator.
 *
 * Determinate when `value` is provided; indeterminate (spinner) otherwise.
 * Color and size variants mirror the linear Progress component; the arcs use
 * currentColor so variants stay in sync with the theme tokens.
 *
 * @example
 * <ProgressRing value={60} />
 * <ProgressRing value={75} variant="success" label="75%" />
 * <ProgressRing aria-label="Loading" />
 */
declare const ProgressRing: React.ForwardRefExoticComponent<ProgressRingProps & React.RefAttributes<HTMLDivElement>>;
export { ProgressRing, progressRingTrackVariants, progressRingIndicatorVariants };
//# sourceMappingURL=progress-ring.d.ts.map