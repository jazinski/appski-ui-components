import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const checkboxVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, VariantProps<typeof checkboxVariants> {
    /** Controlled checked state */
    checked?: boolean;
    /** Default checked state for uncontrolled usage */
    defaultChecked?: boolean;
    /** Callback when checked state changes */
    onCheckedChange?: (checked: boolean | 'indeterminate') => void;
    /** Indeterminate state (takes precedence over checked) */
    indeterminate?: boolean;
    /** Label text for the checkbox */
    label?: string;
    /** Description text below the label */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Whether the checkbox is required */
    required?: boolean;
}
/**
 * Checkbox component for boolean input with optional indeterminate state.
 *
 * @example
 * // Basic usage
 * <Checkbox label="Accept terms" />
 *
 * @example
 * // Controlled with indeterminate
 * <Checkbox
 *   checked={someAreChecked && !allAreChecked ? undefined : allAreChecked}
 *   indeterminate={someAreChecked && !allAreChecked}
 *   onCheckedChange={handleSelectAll}
 *   label="Select all"
 * />
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface CheckboxGroupProps {
    /** Group label */
    label?: string;
    /** Description for the group */
    description?: string;
    /** Error message for the group */
    error?: string;
    /** Whether the group is required */
    required?: boolean;
    /** Checkbox items */
    children: React.ReactNode;
    /** Additional classes */
    className?: string;
    /** Orientation of the checkboxes */
    orientation?: 'horizontal' | 'vertical';
}
/**
 * CheckboxGroup component for grouping related checkboxes.
 *
 * @example
 * <CheckboxGroup label="Select options" orientation="vertical">
 *   <Checkbox label="Option 1" />
 *   <Checkbox label="Option 2" />
 *   <Checkbox label="Option 3" />
 * </CheckboxGroup>
 */
declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
export { Checkbox, CheckboxGroup, checkboxVariants };
//# sourceMappingURL=checkbox.d.ts.map