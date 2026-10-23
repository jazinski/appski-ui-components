import * as React from 'react';
/** A contiguous range of days. `start` is always <= `end` (same-day allowed). */
export interface DateRange {
    start: Date;
    end: Date;
}
/** 6x7 matrix of days covering `month`, padded with outside days. */
export declare function getMonthMatrix(month: Date, weekStartsOn: 0 | 1): Date[][];
export interface CalendarProps {
    /** Controlled visible month (any day within it). */
    month?: Date | undefined;
    /** Initial visible month when uncontrolled. Defaults to today's month. */
    defaultMonth?: Date | undefined;
    /** Fired when the user navigates to a different month. */
    onMonthChange?: ((month: Date) => void) | undefined;
    /** Single selected day. */
    selected?: Date | null | undefined;
    /** Selected (or preview) range — renders in-range, start and end states. */
    selectedRange?: DateRange | null | undefined;
    /** Fired when a day button is clicked. */
    onDayClick?: ((date: Date) => void) | undefined;
    /** Fired when the pointer enters a day button (used for range preview). */
    onDayMouseEnter?: ((date: Date) => void) | undefined;
    /** Earliest selectable day. */
    minDate?: Date | undefined;
    /** Latest selectable day. */
    maxDate?: Date | undefined;
    /** Specific days that are unselectable. */
    disabledDates?: Date[] | undefined;
    /** 0 = Sunday (default), 1 = Monday. */
    weekStartsOn?: 0 | 1;
    /** Weekday header format. */
    weekdayFormat?: 'narrow' | 'short';
    /** BCP-47 locale tag used for month and weekday labels. */
    locale?: string | undefined;
    /** Render days falling outside the current month (muted). Default false. */
    showOutsideDays?: boolean;
    className?: string;
    /** Accessible name for the grid. Defaults to the visible month label. */
    'aria-label'?: string;
}
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=calendar.d.ts.map