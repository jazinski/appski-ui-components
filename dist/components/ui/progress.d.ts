import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
declare const progressVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const progressIndicatorVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressProps extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'className'>, VariantProps<typeof progressVariants> {
    className?: string;
    /** Progress value (0-100) */
    value?: number;
    /** Show progress percentage text */
    showValue?: boolean;
}
/**
 * Progress component - Displays progress of a task or operation.
 *
 * @example
 * <Progress value={60} />
 * <Progress value={75} variant="success" showValue />
 */
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export { Progress, progressVariants, progressIndicatorVariants };
//# sourceMappingURL=progress.d.ts.map