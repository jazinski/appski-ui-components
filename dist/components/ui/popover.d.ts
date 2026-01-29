import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
declare const popoverContentVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "auto" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PopoverProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
}
/**
 * Popover component - A floating container for interactive content.
 *
 * @example
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button variant="outline">Open</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <div>Content goes here</div>
 *   </PopoverContent>
 * </Popover>
 */
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger> {
}
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface PopoverContentProps extends Omit<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, 'className' | 'children'>, VariantProps<typeof popoverContentVariants> {
    className?: string;
    children?: React.ReactNode;
}
declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
export interface PopoverAnchorProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor> {
}
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export interface PopoverCloseProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> {
}
declare const PopoverClose: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose, popoverContentVariants, };
//# sourceMappingURL=popover.d.ts.map