import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Bookmark, Check, ListFilter, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Chip } from './chip';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownTrigger,
} from './dropdown';

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

const filtersBarVariants = cva(
  'flex w-full flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-2'
);

const selectTriggerVariants = cva(
  'inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50'
);

const defaultLabels: FiltersBarLabels = {
  bar: 'Filters',
  filters: 'Active filters',
  views: 'Views',
  noViews: 'No saved views yet',
  clearAll: 'Clear all',
  remove: 'Remove',
  empty: 'No filters applied',
  saveView: 'Save current view…',
};

function FilterSelectMenu({
  select,
  disabled = false,
}: {
  select: FilterSelect;
  disabled?: boolean;
}) {
  const current = select.choices.find((c) => c.value === select.value);
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <button
          type="button"
          data-testid={`filters-select-${select.id}`}
          disabled={disabled}
          className={cn(selectTriggerVariants(), select.value && 'border-primary/50 text-primary')}
          aria-label={`${select.label} filter, ${current?.label ?? 'any'}`}
        >
          <ListFilter className="h-3.5 w-3.5" aria-hidden="true" />
          {select.label}
          {current && (
            <span className="text-muted-foreground normal-case">: {current.label}</span>
          )}
        </button>
      </DropdownTrigger>
      <DropdownContent align="start">
        <DropdownLabel>{select.label}</DropdownLabel>
        <DropdownItem onSelect={() => { select.onValueChange(''); }}>Any</DropdownItem>
        {select.choices.map((choice) => (
          <DropdownItem key={choice.value} onSelect={() => { select.onValueChange(choice.value); }}>
            <span className="flex w-full items-center justify-between gap-3">
              {choice.label}
              {select.value === choice.value && (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </span>
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}

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
export const FiltersBar = React.forwardRef<HTMLDivElement, FiltersBarProps>(
  (
    {
      filters,
      selects = [],
      views,
      activeViewId,
      onViewSelect,
      onSaveView,
      onClearAll,
      disabled,
      labels,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const merged = { ...defaultLabels, ...labels };
    const hasAnyControl =
      selects.length > 0 || (views !== undefined && views.length > 0) || onClearAll !== undefined;

    return (
      <div
        ref={ref}
        role="toolbar"
        aria-label={merged.bar}
        className={cn(filtersBarVariants(), className)}
        {...props}
      >
      {selects.map((select) => (
        <FilterSelectMenu key={select.id} select={select} disabled={disabled ?? false} />
      ))}

        {filters.length > 0 ? (
          <ul className="flex flex-wrap items-center gap-1.5" aria-label={merged.filters}>
            {filters.map((filter) => (
              <li key={filter.id}>
                <Chip
                  variant={filter.variant}
                  labels={{ remove: merged.remove }}
                  data-testid={`filter-chip-${filter.id}`}
                  {...(disabled || !filter.onRemove ? {} : { onRemove: filter.onRemove })}
                >
                  {filter.label}
                </Chip>
              </li>
            ))}
          </ul>
        ) : (
          hasAnyControl && <span className="text-xs text-muted-foreground px-1">{merged.empty}</span>
        )}

        {views !== undefined && (
          <Dropdown>
            <DropdownTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={disabled}
                className="text-muted-foreground"
              >
                <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
                {views.find((v) => v.id === activeViewId)?.label ?? merged.views}
              </Button>
            </DropdownTrigger>
            <DropdownContent align="end">
              <DropdownLabel>{merged.views}</DropdownLabel>
              {views.length === 0 && (
                <div className="px-2 py-1.5 text-xs text-muted-foreground">{merged.noViews}</div>
              )}
              {views.map((view) => (
                <DropdownItem key={view.id} onSelect={() => onViewSelect?.(view.id)}>
                  <span className="flex w-full items-center justify-between gap-3">
                    {view.label}
                    {view.id === activeViewId && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                  </span>
                </DropdownItem>
              ))}
              {onSaveView && (
                <>
                  <DropdownSeparator />
                  <DropdownItem onSelect={onSaveView}>
                    <span className="flex w-full items-center gap-2">
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                      {merged.saveView}
                    </span>
                  </DropdownItem>
                </>
              )}
            </DropdownContent>
          </Dropdown>
        )}

        {filters.length > 0 && onClearAll !== undefined && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={disabled}
            onClick={onClearAll}
            className="ml-auto text-muted-foreground"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            {merged.clearAll}
          </Button>
        )}

        {children && <div className="ml-auto flex items-center gap-2">{children}</div>}
      </div>
    );
  }
);
FiltersBar.displayName = 'FiltersBar';

export { filtersBarVariants };
