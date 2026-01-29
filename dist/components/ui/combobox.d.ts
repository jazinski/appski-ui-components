import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const comboboxVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxProps extends VariantProps<typeof comboboxVariants> {
    /** Array of options to display */
    options: ComboboxOption[];
    /** Currently selected value */
    value?: string;
    /** Callback when value changes */
    onValueChange?: (value: string) => void;
    /** Placeholder text when no value selected */
    placeholder?: string;
    /** Text to show when no results found */
    emptyText?: string;
    /** Enable search/filter functionality */
    searchable?: boolean;
    /** Custom search placeholder */
    searchPlaceholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Custom className */
    className?: string;
}
/**
 * Combobox component - A searchable select dropdown with autocomplete.
 *
 * @example
 * <Combobox
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]}
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Select an option"
 *   searchable
 * />
 */
export declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLButtonElement>>;
export { comboboxVariants };
//# sourceMappingURL=combobox.d.ts.map