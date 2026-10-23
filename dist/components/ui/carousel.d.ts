import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const carouselVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const carouselSlideVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const carouselArrowVariants: (props?: ({
    side?: "left" | "right" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const carouselDotVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>, VariantProps<typeof carouselVariants> {
    children: React.ReactNode;
    /** Accessible name for the carousel region */
    ariaLabel?: string;
    /** Wrap around at the ends instead of stopping */
    loop?: boolean;
    /** Show prev/next arrow buttons */
    showArrows?: boolean;
    /** Show dot indicators */
    showDots?: boolean;
    /**
     * Partial-peek: slides take less than the full width so the next slide
     * peeks at the right edge. `true` = 85% width, or pass an explicit
     * percentage (e.g. 60).
     */
    peek?: boolean | number;
    /** Extra classes applied to each slide wrapper */
    slideClassName?: string;
    /** Called with the new active slide index */
    onSlideChange?: (index: number) => void;
    /** Initially active slide index (uncontrolled) */
    defaultActive?: number;
}
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
export { carouselVariants, carouselSlideVariants, carouselArrowVariants, carouselDotVariants };
//# sourceMappingURL=carousel.d.ts.map