import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const inputVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
    /** Label text displayed above the input */
    label?: string;
    /** Error message displayed below the input */
    error?: string;
    /** Helper text displayed below the input (when no error) */
    helperText?: string;
    /** ID for the input element (auto-generated if not provided) */
    id?: string;
}
/**
 * Text input component with optional label and error handling.
 *
 * @example
 * <Input label="Email" placeholder="Enter your email" />
 * <Input label="Username" error="Username is required" />
 * <Input inputSize="sm" placeholder="Small input" />
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input, inputVariants };
//# sourceMappingURL=input.d.ts.map