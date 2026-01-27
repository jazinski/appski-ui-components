import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const selectVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    selectSize?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SelectOption {
    /** The value to be used when the option is selected */
    value: string;
    /** The display label for the option */
    label: string;
    /** Whether the option is disabled */
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>, VariantProps<typeof selectVariants> {
    /** Array of options for the select (alternative to children) */
    options?: SelectOption[];
    /** Label text displayed above the select */
    label?: string;
    /** Placeholder text when no option is selected */
    placeholder?: string;
    /** Error message displayed below the select */
    error?: string;
    /** Helper text displayed below the select (when no error) */
    helperText?: string;
    /** Custom option elements (alternative to options prop) */
    children?: React.ReactNode;
}
/**
 * Select dropdown component with label and error support.
 * Supports both controlled options prop or children pattern.
 *
 * @example
 * // Using options prop
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 *
 * @example
 * // Using children
 * <Select label="Country">
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 * </Select>
 */
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export { Select, selectVariants };
//# sourceMappingURL=select.d.ts.map