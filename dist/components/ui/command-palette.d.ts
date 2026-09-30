import * as React from 'react';
export interface CommandPaletteCommand {
    /** Unique id for the command */
    id: string;
    /** Label shown in the list; also the primary search target */
    label: string;
    /** Optional secondary text shown next to / under the label */
    description?: string;
    /** Grouping label. Commands with the same group render together */
    group?: string;
    /** Additional strings matched by the filter (e.g. aliases) */
    keywords?: string[];
    /** Icon element rendered before the label */
    icon?: React.ReactNode;
    /** Keyboard shortcut hint, e.g. "Mod+S" or "⇧D" */
    shortcut?: string;
    /** Disable selection while keeping the command visible */
    disabled?: boolean;
    /** Called when the command is chosen (Enter or click) */
    onSelect?: (command: CommandPaletteCommand) => void;
}
export interface CommandPaletteProps {
    /** Controlled open state */
    open?: boolean;
    /** Default open state for uncontrolled usage */
    defaultOpen?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Command list */
    commands: CommandPaletteCommand[];
    /** Input placeholder */
    placeholder?: string;
    /** Empty state text when no command matches */
    emptyText?: string;
    /** Enable the global Cmd/Ctrl+K hotkey that toggles the palette */
    enableHotkey?: boolean;
    /** Custom hotkey (lower-case key) used with Mod (Cmd/Ctrl). Default "k" */
    hotkey?: string;
    /** Max rendered results */
    maxResults?: number;
    /** Portal container. Defaults to document.body */
    container?: HTMLElement;
    /** Accessible label for the dialog */
    'aria-label'?: string;
    /** Additional class name on the palette root */
    className?: string;
}
/**
 * Returns a match score (higher is better) or -1 when the query does not
 * fuzzy-match the candidate. Matching is a subsequence match: every query
 * character must appear in order. Consecutive matches and word-boundary
 * matches score higher, mirroring the behaviour users expect from a
 * command palette.
 */
export declare function fuzzyScore(query: string, candidate: string): number;
/** Filter and rank commands against a query. Exported for reuse and testing. */
export declare function filterCommands(commands: CommandPaletteCommand[], query: string, maxResults?: number): CommandPaletteCommand[];
declare const commandPaletteOverlayVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare const commandPaletteContentVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
/**
 * CommandPalette is a Cmd+K style quick-actions dialog: type to fuzzy-search
 * a command list, navigate with arrows, run with Enter.
 *
 * Follows the library's Dialog/Sheet conventions: controlled or uncontrolled
 * open state via context, portal to document.body, ESC to close, body scroll
 * lock, focus restored on close.
 *
 * @example
 * <CommandPalette
 *   enableHotkey
 *   commands={[
 *     { id: 'home', label: 'Go to Home', group: 'Navigation', onSelect: () => router.push('/') },
 *     { id: 'theme', label: 'Toggle theme', group: 'Appearance', onSelect: toggleTheme },
 *   ]}
 * />
 */
declare function CommandPalette({ open: controlledOpen, defaultOpen, onOpenChange, commands, placeholder, emptyText, enableHotkey, hotkey, maxResults, container, className, ...props }: CommandPaletteProps): React.ReactPortal | null;
export { CommandPalette, commandPaletteOverlayVariants, commandPaletteContentVariants };
export default CommandPalette;
//# sourceMappingURL=command-palette.d.ts.map