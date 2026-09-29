import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const kbdVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface KbdProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
}
/**
 * Keyboard key hint, e.g. `<Kbd>⌘</Kbd> <Kbd>K</Kbd>`.
 * Renders a semantic `<kbd>` element.
 */
export declare const Kbd: React.ForwardRefExoticComponent<KbdProps & React.RefAttributes<HTMLElement>>;
declare const copyButtonVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CopyButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onCopy'>, VariantProps<typeof copyButtonVariants> {
    /** Text to copy to the clipboard */
    value: string;
    /** Reset the "Copied" feedback after this many ms (default 2000) */
    feedbackDuration?: number;
    /** Show a "Copied!" tooltip on success instead of an inline icon swap */
    showFeedbackTooltip?: boolean;
    /** Accessible label announced for the button (default "Copy to clipboard") */
    ariaLabelText?: string;
    /** Keyboard key hint rendered as a Kbd; when focused, pressing it copies */
    shortcutHint?: string;
    /** Called after a copy attempt; receives true on success */
    onCopy?: (copied: boolean) => void;
}
/**
 * Copy-to-clipboard icon button with success feedback and an optional
 * keyboard shortcut hint. Keyboard interaction is opt-in: the shortcut
 * fires on the keydown event of the button itself (press when focused),
 * e.g. `<CopyButton value={url} shortcutHint="C" />` copies while the
 * button has focus and C is pressed.
 */
export declare const CopyButton: React.ForwardRefExoticComponent<CopyButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=copy-button.d.ts.map