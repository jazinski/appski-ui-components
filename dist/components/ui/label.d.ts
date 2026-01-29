import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
declare const labelVariants: (props?: ({
    variant?: "default" | "success" | "error" | "muted" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface LabelProps extends Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'className' | 'children'>, VariantProps<typeof labelVariants> {
    className?: string;
    children?: React.ReactNode;
    /** Show required indicator */
    required?: boolean;
}
/**
 * Label component for form fields with accessible labeling.
 *
 * @example
 * <Label htmlFor="email">Email Address</Label>
 * <Label required>Username</Label>
 */
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Label, labelVariants };
//# sourceMappingURL=label.d.ts.map