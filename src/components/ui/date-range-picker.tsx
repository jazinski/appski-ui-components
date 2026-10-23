import * as React from 'react';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar, type DateRange } from './calendar';

export type { DateRange } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, amount: number): Date {
  const next = startOfDay(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDate(date: Date, locale: string | undefined): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(date);
}

function normalizeRange(start: Date, end: Date): DateRange {
  return startOfDay(start).getTime() <= startOfDay(end).getTime()
    ? { start: startOfDay(start), end: startOfDay(end) }
    : { start: startOfDay(end), end: startOfDay(start) };
}

export interface DateRangePreset {
  /** Stable key used as the list value. */
  label: string;
  /** Computes the range from "today" at click time. */
  getRange: (today: Date) => DateRange;
}

const defaultPresets: DateRangePreset[] = [
  {
    label: 'Last 7 days',
    getRange: (today) => normalizeRange(addDays(today, -6), today),
  },
  {
    label: 'Last 30 days',
    getRange: (today) => normalizeRange(addDays(today, -29), today),
  },
  {
    label: 'This month',
    getRange: (today) =>
      normalizeRange(new Date(today.getFullYear(), today.getMonth(), 1), today),
  },
  {
    label: 'Last month',
    getRange: (today) =>
      normalizeRange(
        new Date(today.getFullYear(), today.getMonth() - 1, 1),
        new Date(today.getFullYear(), today.getMonth(), 0)
      ),
  },
  {
    label: 'This year',
    getRange: (today) =>
      normalizeRange(new Date(today.getFullYear(), 0, 1), today),
  },
];

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

type SelectionPhase = 'idle' | 'picking-end';

/**
 * DateRangePicker — popover with dual month calendars and optional presets.
 *
 * Interaction: click a start day, hover previews the range, click an end day
 * (clicking a day before the start re-starts selection). Selecting a complete
 * range closes the popover.
 */
export const DateRangePicker = React.forwardRef<
  HTMLButtonElement,
  DateRangePickerProps
>(
  (
    {
      value,
      defaultValue = null,
      onChange,
      presets = defaultPresets,
      showPresets = true,
      placeholder = 'Pick a date range',
      minDate,
      maxDate,
      locale,
      weekStartsOn = 0,
      disabled = false,
      clearButtonLabel = 'Clear date range',
      className,
      'aria-label': ariaLabel = 'Choose date range',
    },
    ref
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<DateRange | null>(defaultValue);
    const range = value !== undefined ? value : internalValue;

    const [open, setOpen] = React.useState(false);
    const [phase, setPhase] = React.useState<SelectionPhase>('idle');
    const [pendingStart, setPendingStart] = React.useState<Date | null>(null);
    const [hovered, setHovered] = React.useState<Date | null>(null);

    // Month shown by the left calendar; right = left + 1.
    const [leftMonth, setLeftMonth] = React.useState<Date>(() =>
      range
        ? new Date(range.start.getFullYear(), range.start.getMonth(), 1)
        : new Date()
    );

    const commit = (next: DateRange | null) => {
      if (value === undefined) setInternalValue(next);
      onChange?.(next);
    };

    const applyRange = (next: DateRange) => {
      commit(next);
      setPendingStart(null);
      setPhase('idle');
      setHovered(null);
      setOpen(false);
    };

    const handleDayClick = (date: Date) => {
      if (phase === 'idle' || !pendingStart) {
        // Start a new selection.
        setPendingStart(date);
        setPhase('picking-end');
        return;
      }
      if (isSameDay(date, pendingStart)) {
        // Same day clicked twice: single-day range.
        applyRange({ start: pendingStart, end: pendingStart });
        return;
      }
      applyRange(normalizeRange(pendingStart, date));
    };

    const previewRange: DateRange | null =
      phase === 'picking-end' && pendingStart && hovered
        ? normalizeRange(pendingStart, hovered)
        : null;

    const displayRange = previewRange ?? range;
    const rangeLabel = range
      ? range.start.getTime() === range.end.getTime()
        ? formatDate(range.start, locale)
        : `${formatDate(range.start, locale)} – ${formatDate(range.end, locale)}`
      : placeholder;

    const handlePresetClick = (preset: DateRangePreset) => {
      const today = startOfDay(new Date());
      const next = preset.getRange(today);
      commit(next);
      setPendingStart(null);
      setPhase('idle');
      setHovered(null);
      setLeftMonth(new Date(next.start.getFullYear(), next.start.getMonth(), 1));
    };

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (!next) {
        // Abandon an in-flight selection on close.
        setPendingStart(null);
        setPhase('idle');
        setHovered(null);
      }
      if (next && range) {
        setLeftMonth(
          new Date(range.start.getFullYear(), range.start.getMonth(), 1)
        );
      }
    };

    const rightMonth = new Date(
      leftMonth.getFullYear(),
      leftMonth.getMonth() + 1,
      1
    );

    const activePresetLabel = (() => {
      if (!range || !showPresets || presets.length === 0) return null;
      const today = startOfDay(new Date());
      return (
        presets.find((p) => {
          const r = p.getRange(today);
          return (
            isSameDay(r.start, range.start) && isSameDay(r.end, range.end)
          );
        })?.label ?? null
      );
    })();

    return (
      <div className={cn('inline-flex items-center gap-2', className)}>
        <Popover open={open} onOpenChange={handleOpenChange}>
          <PopoverTrigger asChild>
            <button
              ref={ref}
              type="button"
              disabled={disabled}
              aria-label={ariaLabel}
              className={cn(
                'inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                !range && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="truncate">{rangeLabel}</span>
            </button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-auto p-0">
            <div className="flex">
              {showPresets && presets.length > 0 && (
                <div className="flex w-36 flex-col gap-1 border-r border-border p-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => { handlePresetClick(preset); }}
                      aria-pressed={activePresetLabel === preset.label}
                      className={cn(
                        'rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer',
                        activePresetLabel === preset.label
                          ? 'bg-primary/10 font-medium text-primary'
                          : 'text-foreground'
                      )}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-1 p-1">
                <Calendar
                  month={leftMonth}
                  onMonthChange={setLeftMonth}
                  selectedRange={displayRange}
                  onDayClick={handleDayClick}
                  onDayMouseEnter={setHovered}
                  minDate={minDate}
                  maxDate={maxDate}
                  weekStartsOn={weekStartsOn}
                  locale={locale}
                />
                <Calendar
                  month={rightMonth}
                  selectedRange={displayRange}
                  onDayClick={handleDayClick}
                  onDayMouseEnter={setHovered}
                  minDate={minDate}
                  maxDate={maxDate}
                  weekStartsOn={weekStartsOn}
                  locale={locale}
                />
              </div>
            </div>
            {(range || phase === 'picking-end') && (
              <div className="flex items-center justify-between border-t border-border p-2">
                <span className="px-1 text-xs text-muted-foreground">
                  {phase === 'picking-end' && pendingStart
                    ? 'Pick an end date'
                    : rangeLabel}
                </span>
                {range && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      commit(null);
                      setPendingStart(null);
                      setPhase('idle');
                    }}
                  >
                    {clearButtonLabel}
                  </Button>
                )}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';
