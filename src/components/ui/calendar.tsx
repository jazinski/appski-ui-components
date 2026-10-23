import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/** A contiguous range of days. `start` is always <= `end` (same-day allowed). */
export interface DateRange {
  start: Date;
  end: Date;
}

/* ------------------------------------------------------------------ */
/* Date utilities (local-time, zero deps)                              */
/* ------------------------------------------------------------------ */

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, amount: number): Date {
  const next = startOfDay(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

function toDateKey(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${d}`;
}

/** 6x7 matrix of days covering `month`, padded with outside days. */
export function getMonthMatrix(month: Date, weekStartsOn: 0 | 1): Date[][] {
  const first = startOfMonth(month);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  const gridStart = addDays(first, -offset);
  const weeks: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(addDays(gridStart, w * 7 + d));
    }
    weeks.push(week);
  }
  return weeks;
}

function getWeekdayLabels(
  locale: string | undefined,
  weekStartsOn: 0 | 1,
  format: 'narrow' | 'short'
): string[] {
  // 2024-01-07 is a Sunday — stable anchor for weekday names.
  const anchor = new Date(2024, 0, 7 + weekStartsOn);
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format });
  return Array.from({ length: 7 }, (_, i) =>
    formatter.format(addDays(anchor, i))
  );
}

/* ------------------------------------------------------------------ */
/* Calendar                                                            */
/* ------------------------------------------------------------------ */

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

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      month,
      defaultMonth,
      onMonthChange,
      selected,
      selectedRange,
      onDayClick,
      onDayMouseEnter,
      minDate,
      maxDate,
      disabledDates,
      weekStartsOn = 0,
      weekdayFormat = 'short',
      locale,
      showOutsideDays = false,
      className,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const today = startOfDay(new Date());
    const [internalMonth, setInternalMonth] = React.useState<Date>(
      () => startOfMonth(defaultMonth ?? today)
    );
    const visibleMonth = month ? startOfMonth(month) : internalMonth;

    const [focusedDate, setFocusedDate] = React.useState<Date | null>(null);
    const dayRefs = React.useRef(new Map<string, HTMLButtonElement>());
    const gridId = React.useId();

    const setMonth = (next: Date) => {
      const m = startOfMonth(next);
      if (!isSameMonth(m, visibleMonth)) {
        if (!month) setInternalMonth(m);
        onMonthChange?.(m);
      }
    };

    const min = minDate ? startOfDay(minDate) : undefined;
    const max = maxDate ? startOfDay(maxDate) : undefined;

    const isDisabled = (date: Date): boolean => {
      if (min && isBeforeDay(date, min)) return true;
      if (max && isBeforeDay(max, date)) return true;
      return disabledDates?.some((d) => isSameDay(d, date)) ?? false;
    };

    const rangeState = (
      date: Date
    ): 'start' | 'end' | 'in-range' | 'both' | undefined => {
      if (!selectedRange) return undefined;
      const { start, end } = selectedRange;
      const atStart = isSameDay(date, start);
      const atEnd = isSameDay(date, end);
      if (atStart && atEnd) return 'both';
      if (atStart) return 'start';
      if (atEnd) return 'end';
      if (isBeforeDay(start, date) && isBeforeDay(date, end)) return 'in-range';
      return undefined;
    };

    const weekdayLabels = getWeekdayLabels(locale, weekStartsOn, weekdayFormat);
    const monthFormatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
    });
    const dayFormatter = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const weeks = getMonthMatrix(visibleMonth, weekStartsOn);

    const focusDay = (date: Date) => {
      setFocusedDate(date);
      if (!isSameMonth(date, visibleMonth)) setMonth(date);
      // Focus lands after the day button renders.
      requestAnimationFrame(() => {
        dayRefs.current.get(toDateKey(date))?.focus();
      });
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!focusedDate) return;
      let next: Date | undefined;
      switch (event.key) {
        case 'ArrowLeft':
          next = addDays(focusedDate, -1);
          break;
        case 'ArrowRight':
          next = addDays(focusedDate, 1);
          break;
        case 'ArrowUp':
          next = addDays(focusedDate, -7);
          break;
        case 'ArrowDown':
          next = addDays(focusedDate, 7);
          break;
        case 'Home': {
          const offset = (focusedDate.getDay() - weekStartsOn + 7) % 7;
          next = addDays(focusedDate, -offset);
          break;
        }
        case 'End': {
          const offset = (focusedDate.getDay() - weekStartsOn + 7) % 7;
          next = addDays(focusedDate, 6 - offset);
          break;
        }
        case 'PageUp':
          next = addMonths(focusedDate, event.shiftKey ? -12 : -1);
          break;
        case 'PageDown':
          next = addMonths(focusedDate, event.shiftKey ? 12 : 1);
          break;
        default:
          return;
      }
      event.preventDefault();
      focusDay(next);
    };

    const prevMonth = () => { setMonth(addMonths(visibleMonth, -1)); };
    const nextMonth = () => { setMonth(addMonths(visibleMonth, 1)); };
    // Prev is allowed when the previous month still contains a selectable
    // day (minDate < start of the visible month); next when the next month
    // starts on or before maxDate.
    const canPrev = !min || isBeforeDay(min, startOfMonth(visibleMonth));
    const canNext = !max || !isBeforeDay(max, addMonths(visibleMonth, 1));

    const monthLabel = monthFormatter.format(visibleMonth);

    return (
      <div
        ref={ref}
        className={cn('w-[288px] p-3 text-sm select-none', className)}
      >
        <div className="flex items-center justify-between pb-2">
          <button
            type="button"
            aria-label="Previous month"
            onClick={prevMonth}
            disabled={!canPrev}
            className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <h3
            id={gridId}
            aria-live="polite"
            className="text-sm font-medium text-foreground"
          >
            {monthLabel}
          </h3>
          <button
            type="button"
            aria-label="Next month"
            onClick={nextMonth}
            disabled={!canNext}
            className="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div
          role="grid"
          aria-labelledby={gridId}
          aria-label={ariaLabel ?? monthLabel}
          onKeyDown={handleKeyDown}
        >
          <div role="row" className="grid grid-cols-7">
            {weekdayLabels.map((label, i) => (
              <div
                key={`${label}-${i}`}
                role="columnheader"
                aria-label={label}
                className="flex h-8 items-center justify-center text-xs font-medium text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>
          {weeks.map((week, wi) => (
            <div key={wi} role="row" className="grid grid-cols-7">
              {week.map((date) => {
                const key = toDateKey(date);
                const outside = !isSameMonth(date, visibleMonth);
                const disabled = isDisabled(date);
                const isSelected = selected ? isSameDay(date, selected) : false;
                const rState = rangeState(date);
                const isToday = isSameDay(date, today);
                const isFocused =
                  focusedDate !== null && isSameDay(date, focusedDate);
                const tabIndex = isFocused || (!focusedDate && !outside && date.getDate() === 1)
                  ? 0
                  : -1;

                if (outside && !showOutsideDays) {
                  return (
                    <div
                      key={key}
                      role="gridcell"
                      aria-disabled="true"
                      className="flex h-9 items-center justify-center"
                    />
                  );
                }

                return (
                  <div
                    key={key}
                    role="gridcell"
                    aria-selected={isSelected || rState !== undefined}
                    data-range={rState}
                    className={cn(
                      'flex h-9 items-center justify-center',
                      rState === 'in-range' &&
                        'bg-primary/15 rounded-none first:rounded-l-md last:rounded-r-md'
                    )}
                  >
                    <button
                      ref={(node) => {
                        if (node) dayRefs.current.set(key, node);
                        else dayRefs.current.delete(key);
                      }}
                      type="button"
                      tabIndex={tabIndex}
                      disabled={disabled}
                      aria-disabled={disabled}
                      aria-current={isToday ? 'date' : undefined}
                      aria-label={dayFormatter.format(date)}
                      onClick={() => onDayClick?.(date)}
                      onMouseEnter={() => onDayMouseEnter?.(date)}
                      className={cn(
                        'inline-flex size-9 items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
                        outside && 'text-muted-foreground/40',
                        isToday &&
                          !isSelected &&
                          rState === undefined &&
                          'bg-accent font-semibold text-accent-foreground',
                        isSelected && 'bg-primary text-primary-foreground font-semibold',
                        rState === 'start' &&
                          'rounded-r-none bg-primary text-primary-foreground font-semibold',
                        rState === 'end' &&
                          'rounded-l-none bg-primary text-primary-foreground font-semibold',
                        rState === 'both' && 'bg-primary text-primary-foreground font-semibold'
                      )}
                    >
                      {date.getDate()}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';
