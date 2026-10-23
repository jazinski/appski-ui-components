import * as React from 'react';
/**
 * One active filter, expressed as data. `id` is stable across renders and
 * drives reconciliation of the chip row; `label` is the chip text;
 * `onRemove` fires when the chip's × is activated (or clear-all).
 */
export interface ActiveFilter {
    id: string;
    /** Chip text, e.g. "Label: bug" or "Assignee: Chris". */
    label: string;
    /** Optional tone for the chip variant. */
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'info' | 'outline';
    /** Fires when the chip's × is activated. */
    onRemove?: () => void;
}
export interface FilterChoice {
    value: string;
    label: string;
}
export interface FilterSelect {
    /** Stable id for the control's test id / element id. */
    id: string;
    /** Control caption shown inside the dropdown. */
    label: string;
    /** Icon name hint (currently unused; reserved for future tone mapping). */
    choices: FilterChoice[];
    /** Current value ('' = unset). */
    value: string;
    /** Fires with the picked value ('' when reset). */
    onValueChange: (value: string) => void;
}
export interface SavedView {
    id: string;
    label: string;
}
export interface FiltersBarLabels {
    /** Accessible name for the whole bar. */
    bar: string;
    /** Accessible name for the active-filter chip list. */
    filters: string;
    /** Caption for saved views. */
    views: string;
    /** Shown when no saved views exist. */
    noViews: string;
    /** Clear-all button text. */
    clearAll: string;
    /** Prefix for chip remove buttons. */
    remove: string;
    /** Text when no filters are active. */
    empty: string;
    /** Save-current-view menu item text. */
    saveView: string;
}
export interface FiltersBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Active filters rendered as chips; empty array shows the empty state. */
    filters: ActiveFilter[];
    /** Optional filter menus (label/assignee/status…), each a simple picker. */
    selects?: FilterSelect[];
    /** Optional saved views: pick one, or manage via `views` slot. */
    views?: SavedView[];
    /** Currently-applied saved view id (highlighted in the menu). */
    activeViewId?: string;
    /** Fires when a saved view is picked. */
    onViewSelect?: (viewId: string) => void;
    /**
     * Fires when "Save current view…" is activated. When omitted the item is
     * not rendered — the bar never shows a control it cannot wire up.
     */
    onSaveView?: () => void;
    /** Fires when clear-all is activated. */
    onClearAll?: () => void;
    /** Disable every control. */
    disabled?: boolean;
    /** Accessible labels, overridable for localization. */
    labels?: Partial<FiltersBarLabels>;
    /** Optional trailing slot (export buttons, result counts). */
    children?: React.ReactNode;
}
declare const filtersBarVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
/**
 * FiltersBar — the active-filter toolbar that sits above a DataTable or
 * KanbanBoard: filter menus on the left, removable chips for active filters,
 * saved views, and clear-all. Composed from Chip, Dropdown, and Button.
 *
 * Fully controlled and data-driven: you own `filters` (chip row) and each
 * select's `value`; the bar only reports intents (`onValueChange`,
 * `onRemove` via chip ids you resolve, `onViewSelect`, `onClearAll`).
 * The trailing `children` slot fits result counts or export buttons.
 *
 * @example
 * ```tsx
 * <FiltersBar
 *   filters={[{ id: 'label-bug', label: 'Label: bug', variant: 'destructive' }]}
 *   selects={[{ id: 'assignee', label: 'Assignee', choices: people, value: a, onValueChange: setA }]}
 *   views={savedViews}
 *   activeViewId={viewId}
 *   onViewSelect={setViewId}
 *   onClearAll={reset}
 * />
 * ```
 */
export declare const FiltersBar: React.ForwardRefExoticComponent<FiltersBarProps & React.RefAttributes<HTMLDivElement>>;
export { filtersBarVariants };
//# sourceMappingURL=filters-bar.d.ts.map