import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "outline" | "outline-muted" | "secondary" | "ghost" | "link" | "gradient-purple" | "gradient-success" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Show loading spinner and disable button */
    isLoading?: boolean;
    /** Text to show when loading (replaces children) */
    loadingText?: string;
}
/**
 * Primary button component for user actions.
 *
 * @example
 * <Button variant="default" onClick={handleClick}>Click me</Button>
 * <Button variant="destructive" isLoading>Deleting...</Button>
 */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map