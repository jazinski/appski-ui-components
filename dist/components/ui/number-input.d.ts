import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const numberInputVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    inputSize?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Format presets applied to the displayed value. */
export type NumberInputFormat = 'plain' | 'currency' | 'percent';
export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'step' | 'min' | 'max' | 'onChange' | 'value' | 'defaultValue'>, VariantProps<typeof numberInputVariants> {
    /** Current numeric value (controlled) */
    value?: number | null;
    /** Initial numeric value (uncontrolled) */
    defaultValue?: number | null;
    /** Called with the parsed numeric value on change (null when the field is empty or invalid) */
    onValueChange?: (value: number | null) => void;
    /** Amount added/subtracted by the stepper buttons and arrow keys */
    step?: number;
    /** Smallest allowed value */
    min?: number;
    /** Largest allowed value */
    max?: number;
    /** Display format: raw number, currency, or percent */
    format?: NumberInputFormat;
    /** Currency code used when format="currency" (default "USD") */
    currency?: string;
    /** Locale used for formatting (default browser locale) */
    locale?: string;
    /** Number of fraction digits to display (default derived from step) */
    digits?: number;
    /** Hide the increment/decrement stepper buttons */
    hideSteppers?: boolean;
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
 * NumberInput component - a numeric stepper input with built-in
 * currency/percent/plain formatting, clamping, and keyboard support.
 *
 * @example
 * <NumberInput label="Price" format="currency" step={0.01} defaultValue={19.99} />
 * @example
 * <NumberInput label="Tax rate" format="percent" step={0.5} min={0} max={100} />
 */
declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export { NumberInput, numberInputVariants };
//# sourceMappingURL=number-input.d.ts.map