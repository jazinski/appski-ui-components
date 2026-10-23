import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export interface ChipLabels {
    /** Prefix for the remove button's accessible name ("Remove bug"). */
    remove: string;
}
declare const chipVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "outline" | "warning" | "info" | "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'>, VariantProps<typeof chipVariants> {
    /** Chip text (plain string recommended — used in the remove button's label). */
    children: React.ReactNode;
    /**
     * Show the "×" affordance and fire this handler on click. Removable chips
     * stay accessible: the button carries an "Remove <chip>" accessible name.
     */
    onRemove?: () => void;
    /** Makes the whole chip clickable (e.g. toggling a filter). */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Disables a clickable chip. */
    disabled?: boolean;
    /** Accessible labels, overridable for localization. */
    labels?: Partial<ChipLabels>;
}
/**
 * Chip — a compact removable token, the visual unit for tags and active
 * filters. Purely presentational on its own: it reports `onRemove` and
 * optional `onClick` and stays out of data management.
 *
 * Rendered as a span wrapper so the interactive label and the remove control
 * are sibling buttons (valid HTML even when both are present). Theme tokens
 * only — light and dark mode come automatically.
 *
 * @example
 * ```tsx
 * <Chip variant="primary" onRemove={() => removeTag('bug')}>bug</Chip>
 * <Chip variant="outline" onClick={toggle}>Urgent</Chip>
 * ```
 */
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>;
export { chipVariants };
//# sourceMappingURL=chip.d.ts.map