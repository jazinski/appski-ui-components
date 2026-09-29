import { DateRange } from './calendar';
import * as React from 'react';
export type { DateRange } from './calendar';
export interface DateRangePreset {
    /** Stable key used as the list value. */
    label: string;
    /** Computes the range from "today" at click time. */
    getRange: (today: Date) => DateRange;
}
export interface DateRangePickerProps {
    /** Controlled selected range. `null` clears. */
    value?: DateRange | null | undefined;
    /** Initial range when uncontrolled. */
    defaultValue?: DateRange | null | undefined;
    /** Fired whenever the user completes, changes, or clears a range. */
    onChange?: ((range: DateRange | null) => void) | undefined;
    /** Quick-select ranges shown beside the calendars. */
    presets?: DateRangePreset[] | undefined;
    /** Show the presets panel. Default true when `presets` is not empty. */
    showPresets?: boolean;
    /** Placeholder text when no range is selected. */
    placeholder?: string;
    /** Earliest selectable day. */
    minDate?: Date | undefined;
    /** Latest selectable day. */
    maxDate?: Date | undefined;
    /** BCP-47 locale tag for formatting. */
    locale?: string | undefined;
    /** 0 = Sunday (default), 1 = Monday. */
    weekStartsOn?: 0 | 1;
    /** Disable the trigger entirely. */
    disabled?: boolean;
    /** Text for the clear button (screen readers + tooltip). */
    clearButtonLabel?: string;
    className?: string;
    /** Accessible name for the trigger button. */
    'aria-label'?: string;
}
/**
 * DateRangePicker — popover with dual month calendars and optional presets.
 *
 * Interaction: click a start day, hover previews the range, click an end day
 * (clicking a day before the start re-starts selection). Selecting a complete
 * range closes the popover.
 */
export declare const DateRangePicker: React.ForwardRefExoticComponent<DateRangePickerProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=date-range-picker.d.ts.map