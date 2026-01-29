import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
declare const accordionItemVariants: (props?: ({
    variant?: "default" | "ghost" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const accordionTriggerVariants: (props?: ({
    variant?: "default" | "ghost" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const accordionContentVariants: (props?: ({
    variant?: "default" | "ghost" | "bordered" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
/**
 * Accordion component - A vertically stacked set of interactive headings that reveal content.
 *
 * @example
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
export interface AccordionItemProps extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>, 'className'>, VariantProps<typeof accordionItemVariants> {
    className?: string;
}
declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
export interface AccordionTriggerProps extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, 'className' | 'children'>, VariantProps<typeof accordionTriggerVariants> {
    className?: string;
    children?: React.ReactNode;
}
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface AccordionContentProps extends Omit<React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>, 'className' | 'children'>, VariantProps<typeof accordionContentVariants> {
    className?: string;
    children?: React.ReactNode;
}
declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, accordionItemVariants, accordionTriggerVariants, accordionContentVariants, };
//# sourceMappingURL=accordion.d.ts.map