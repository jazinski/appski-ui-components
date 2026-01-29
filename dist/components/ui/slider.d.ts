import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
declare const sliderVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sliderTrackVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sliderRangeVariants: (props?: ({
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sliderThumbVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "success" | "error" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SliderProps extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'className'>, VariantProps<typeof sliderVariants>, VariantProps<typeof sliderRangeVariants> {
    className?: string;
    /** Show current value(s) above the slider */
    showValue?: boolean;
}
/**
 * Slider component - A control for selecting a value from a range.
 *
 * @example
 * <Slider defaultValue={[50]} max={100} step={1} />
 * <Slider defaultValue={[25, 75]} max={100} step={1} showValue />
 */
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLSpanElement>>;
export { Slider, sliderVariants, sliderTrackVariants, sliderRangeVariants, sliderThumbVariants };
//# sourceMappingURL=slider.d.ts.map