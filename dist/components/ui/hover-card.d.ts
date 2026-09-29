import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
declare const hoverCardContentVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "auto" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface HoverCardProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root> {
}
/**
 * HoverCard component - A rich preview container shown on hover.
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="https://example.com">@chris</a>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <HoverCardHeader>
 *       <HoverCardTitle>Chris Jazinski</HoverCardTitle>
 *       <HoverCardDescription>Homelab self-hoster</HoverCardDescription>
 *     </HoverCardHeader>
 *   </HoverCardContent>
 * </HoverCard>
 */
declare const HoverCard: React.FC<HoverCardPrimitive.HoverCardProps>;
export interface HoverCardTriggerProps extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger> {
}
declare const HoverCardTrigger: React.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
export interface HoverCardContentProps extends Omit<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>, 'className' | 'children'>, VariantProps<typeof hoverCardContentVariants> {
    className?: string;
    children?: React.ReactNode;
}
declare const HoverCardContent: React.ForwardRefExoticComponent<HoverCardContentProps & React.RefAttributes<HTMLDivElement>>;
export interface HoverCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const HoverCardHeader: {
    ({ className, ...props }: HoverCardHeaderProps): React.JSX.Element;
    displayName: string;
};
export interface HoverCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare const HoverCardTitle: {
    ({ className, ...props }: HoverCardTitleProps): React.JSX.Element;
    displayName: string;
};
export interface HoverCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
declare const HoverCardDescription: {
    ({ className, ...props }: HoverCardDescriptionProps): React.JSX.Element;
    displayName: string;
};
export interface HoverCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const HoverCardFooter: {
    ({ className, ...props }: HoverCardFooterProps): React.JSX.Element;
    displayName: string;
};
export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardHeader, HoverCardTitle, HoverCardDescription, HoverCardFooter, hoverCardContentVariants, };
//# sourceMappingURL=hover-card.d.ts.map