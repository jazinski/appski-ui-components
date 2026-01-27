import * as React from 'react';
export interface TooltipProps {
    /** The content to display inside the tooltip */
    content: React.ReactNode;
    /** The element that triggers the tooltip */
    children: React.ReactElement;
    /** Preferred side to display the tooltip */
    side?: 'top' | 'right' | 'bottom' | 'left';
    /** Whether the tooltip is disabled */
    disabled?: boolean;
    /** Whether the user can interact with the tooltip content */
    interactive?: boolean;
    /** Additional CSS classes for the tooltip content */
    className?: string;
}
/**
 * Tooltip component for displaying contextual information.
 * Uses custom positioning logic to avoid heavy dependencies.
 */
export declare function Tooltip({ content, children, side, disabled, interactive, className, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=tooltip.d.ts.map