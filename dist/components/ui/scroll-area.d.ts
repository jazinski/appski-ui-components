import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
declare const scrollAreaVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "auto" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const scrollAreaScrollbarVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const scrollAreaThumbVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>, VariantProps<typeof scrollAreaVariants> {
    /** Height of the scrollable region. Any CSS value, e.g. "300px" or "100%" */
    height?: string;
    /** Render a horizontal scrollbar as well */
    scrollbarOrientation?: 'vertical' | 'horizontal' | 'both';
}
/**
 * ScrollArea component - A custom-styled scrollable region.
 *
 * @example
 * <ScrollArea height="220px">
 *   <div className="p-4">Long content…</div>
 * </ScrollArea>
 */
declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;
export interface ScrollBarProps extends Omit<React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, 'orientation'> {
    /** Scrollbar direction — also drives the size/shape classes. */
    orientation?: 'vertical' | 'horizontal';
}
declare const ScrollBar: React.ForwardRefExoticComponent<ScrollBarProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar, scrollAreaVariants, scrollAreaScrollbarVariants, scrollAreaThumbVariants, };
//# sourceMappingURL=scroll-area.d.ts.map