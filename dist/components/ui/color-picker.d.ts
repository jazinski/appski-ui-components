import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const colorPickerTriggerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const swatchVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Default curated palette used when no swatches are provided. */
export declare const DEFAULT_COLOR_SWATCHES: string[];
export interface ColorPickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof colorPickerTriggerVariants> {
    /** Controlled value as a CSS hex string */
    value?: string;
    /** Initial value */
    defaultValue?: string;
    /** Fired on every change with the selected hex */
    onChange?: (value: string) => void;
    /** Swatch colors to offer; defaults to DEFAULT_COLOR_SWATCHES */
    swatches?: string[];
    /** Also allow free-form hex entry via text input */
    allowCustom?: boolean;
    /** Placeholder when no color selected */
    placeholder?: string;
    disabled?: boolean;
    'aria-label'?: string;
}
/** Validates a #RGB / #RRGGBB hex string. */
export declare function isValidHex(value: string): boolean;
/** Normalizes a hex string to lowercase #rrggbb form. */
export declare function normalizeHex(value: string): string;
/**
 * ColorPicker component — swatch-based color selection with optional
 * free-form hex input, in a popover.
 *
 * @example
 * <ColorPicker defaultValue="#2563eb" onChange={(hex) => console.log(hex)} />
 */
export declare const ColorPicker: React.ForwardRefExoticComponent<ColorPickerProps & React.RefAttributes<HTMLDivElement>>;
/** A compact set of read-only color swatches (no picker). */
export interface ColorSwatchSetProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Colors to render */
    colors: string[];
    /** Swatch size in px */
    size?: number;
}
export declare const ColorSwatchSet: React.ForwardRefExoticComponent<ColorSwatchSetProps & React.RefAttributes<HTMLDivElement>>;
export { colorPickerTriggerVariants, swatchVariants };
//# sourceMappingURL=color-picker.d.ts.map