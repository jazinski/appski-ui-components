import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const cardVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | "elevated" | null | undefined;
    padding?: "default" | "sm" | "lg" | "none" | null | undefined;
    status?: "default" | "active" | "inactive" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
/**
 * Card container component for grouping related content.
 *
 * @example
 * // Basic card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Title</CardTitle>
 *     <CardDescription>Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content goes here</CardContent>
 *   <CardFooter>Footer actions</CardFooter>
 * </Card>
 *
 * @example
 * // Card with active status (pink left border accent)
 * <Card status="active">...</Card>
 *
 * @example
 * // Card with inactive status (gray left border accent)
 * <Card status="inactive">...</Card>
 */
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** The heading level to use (h1-h6) */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
//# sourceMappingURL=card.d.ts.map