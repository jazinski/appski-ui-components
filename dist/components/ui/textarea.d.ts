import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export declare const textareaVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
    textareaSize?: "default" | "sm" | "lg" | null | undefined;
    resize?: "none" | "both" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, VariantProps<typeof textareaVariants> {
    /** Label text displayed above the textarea */
    label?: string;
    /** Helper text displayed below the textarea */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Show character count */
    showCharacterCount?: boolean;
    /** Maximum character length */
    maxLength?: number;
    /** Auto-resize to fit content */
    autoResize?: boolean;
    /** Minimum number of rows when auto-resizing */
    minRows?: number;
    /** Maximum number of rows when auto-resizing */
    maxRows?: number;
    /** Custom class for the wrapper div */
    wrapperClassName?: string;
    /** Custom class for the label */
    labelClassName?: string;
}
/**
 * Textarea component for multi-line text input
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Description"
 *   description="Tell us about yourself"
 *   maxLength={500}
 *   showCharacterCount
 *   autoResize
 *   rows={4}
 * />
 * ```
 */
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=textarea.d.ts.map