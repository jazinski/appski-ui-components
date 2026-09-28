import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const timePickerVariants = cva(
  'inline-flex items-center rounded-md border border-border bg-background text-foreground',
  {
    variants: {
      variant: {
        default: '',
        outline: 'shadow-sm',
        ghost: 'border-transparent bg-transparent',
      },
      size: {
        sm: 'h-8 text-xs',
        default: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const segmentVariants = cva(
  'bg-transparent p-0 text-center font-medium tabular-nums outline-none focus:bg-accent focus:text-accent-foreground rounded-sm',
  {
    variants: {
      size: {
        sm: 'w-7',
        default: 'w-9',
        lg: 'w-11',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export type TimePickerFormat = '12h' | '24h';

export interface TimePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof timePickerVariants> {
  /** Controlled value as HH:mm (24h) string */
  value?: string;
  /** Initial value as HH:mm (24h) string */
  defaultValue?: string;
  /** Fired on every change with HH:mm (24h), plus meridiem when 12h */
  onChange?: (value: string, meridiem?: 'AM' | 'PM') => void;
  /** 12-hour with AM/PM segment, or 24-hour (default) */
  format?: TimePickerFormat;
  /** Step in minutes applied on increment/decrement of the minutes segment */
  minuteStep?: number;
  /** Disabled state for the whole picker */
  disabled?: boolean;
  /** Show a trailing clock icon */
  showIcon?: boolean;
  /** aria-label for the root */
  'aria-label'?: string;
}

function parseTime(value: string | undefined): { hours: number; minutes: number } {
  const match = value ? /^(\d{1,2}):(\d{2})$/.exec(value) : null;
  if (!match) return { hours: 0, minutes: 0 };
  return {
    hours: Math.min(23, parseInt(match[1] ?? '0', 10)),
    minutes: Math.min(59, parseInt(match[2] ?? '0', 10)),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

/**
 * TimePicker component - An accessible time input with steppable
 * hours/minutes(/meridiem) segments.
 *
 * @example
 * <TimePicker defaultValue="09:30" format="12h" onChange={(v) => console.log(v)} />
 */
const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (
    {
      className,
      variant,
      size,
      value: controlledValue,
      defaultValue,
      onChange,
      format = '24h',
      minuteStep = 1,
      disabled = false,
      showIcon = false,
      'aria-label': ariaLabel = 'Time picker',
      ...props
    },
    ref
  ) => {
    const is24h = format === '24h';
    const [internalValue, setInternalValue] = React.useState<string>(defaultValue ?? '00:00');
    const value = controlledValue ?? internalValue;

    const { hours, minutes } = parseTime(value);
    const displayHours = is24h ? hours : hours % 12 === 0 ? 12 : hours % 12;
    const meridiem: 'AM' | 'PM' = hours < 12 ? 'AM' : 'PM';

    const commit = (h: number, m: number) => {
      h = ((h % 24) + 24) % 24;
      m = ((m % 60) + 60) % 60;
      const next = `${pad(h)}:${pad(m)}`;
      setInternalValue(next);
      onChange?.(next, is24h ? undefined : h < 12 ? 'AM' : 'PM');
    };

    const stepSegment = (segment: 'hours' | 'minutes' | 'meridiem', delta: number) => {
      if (segment === 'hours') commit(hours + delta, minutes);
      else if (segment === 'minutes') commit(hours, minutes + delta * minuteStep);
      else commit((hours + 12) % 24, minutes);
    };

    const handleSegmentKeyDown = (
      event: React.KeyboardEvent<HTMLSpanElement>,
      segment: 'hours' | 'minutes' | 'meridiem'
    ) => {
      const keyActions: Record<string, () => void> = {
        ArrowUp: () => { stepSegment(segment, 1); },
        ArrowDown: () => { stepSegment(segment, -1); },
        PageUp: () => { stepSegment(segment, 5); },
        PageDown: () => { stepSegment(segment, -5); },
      };
      if (disabled) return;
      const action = keyActions[event.key];
      if (action) {
        event.preventDefault();
        action();
      }
    };

    const segment = (
      segmentKind: 'hours' | 'minutes' | 'meridiem',
      content: string
    ) => (
      <span
        role="spinbutton"
        aria-label={
          segmentKind === 'hours'
            ? 'Hours'
            : segmentKind === 'minutes'
              ? 'Minutes'
              : 'AM/PM'
        }
        aria-valuenow={segmentKind === 'hours' ? displayHours : segmentKind === 'minutes' ? minutes : undefined}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => { handleSegmentKeyDown(e, segmentKind); }}
        className={cn(
          segmentVariants({ size }),
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-default'
        )}
      >
        {content}
      </span>
    );

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        data-disabled={disabled ? '' : undefined}
        className={cn(
          timePickerVariants({ variant, size }),
          disabled && 'opacity-50',
          'gap-1 px-3',
          className
        )}
        {...props}
      >
        {segment('hours', pad(displayHours))}
        <span className="text-muted-foreground">:</span>
        {segment('minutes', pad(minutes))}
        {!is24h && (
          <span className="ml-1 flex flex-col">
            <button
              type="button"
              aria-label="Increase hours"
              disabled={disabled}
              onClick={() => { stepSegment('hours', 1); }}
              className="text-muted-foreground hover:text-foreground disabled:opacity-50"
            >
              <ChevronUp className="h-3 w-3" />
            </button>
            <button
              type="button"
              aria-label="Decrease hours"
              disabled={disabled}
              onClick={() => { stepSegment('hours', -1); }}
              className="text-muted-foreground hover:text-foreground disabled:opacity-50"
            >
              <ChevronDown className="h-3 w-3" />
            </button>
          </span>
        )}
        {!is24h && segment('meridiem', meridiem)}
        {showIcon && <Clock className="ml-2 h-4 w-4 text-muted-foreground" />}
      </div>
    );
  }
);
TimePicker.displayName = 'TimePicker';

/** Parses "HH:mm" or "h:mm AM/PM" into minutes since midnight; null if invalid. */
export function parseTimeToMinutes(input: string): number | null {
  const m = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i.exec(input.trim());
  if (!m) return null;
  let h = parseInt(m[1] ?? '-1', 10);
  const min = parseInt(m[2] ?? '-1', 10);
  const mer = m[3]?.toUpperCase();
  if (h > 23 || min > 59) return null;
  if (mer === 'PM' && h < 12) h += 12;
  if (mer === 'AM' && h === 12) h = 0;
  return h * 60 + min;
}

/** Formats minutes since midnight as "HH:mm". */
export function formatMinutes(minutes: number): string {
  const m = ((minutes % 1440) + 1440) % 1440;
  return `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
}

export interface TimeRangeInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Start time as HH:mm */
  start?: string;
  /** End time as HH:mm */
  end?: string;
  onChange?: (range: { start: string; end: string }) => void;
  format?: TimePickerFormat;
  disabled?: boolean;
  'aria-label'?: string;
}

/**
 * TimeRangeInput - paired TimePickers for a start/end range.
 *
 * @example
 * <TimeRangeInput start="09:00" end="17:00" onChange={(r) => console.log(r)} />
 */
const TimeRangeInput = React.forwardRef<HTMLDivElement, TimeRangeInputProps>(
  (
    {
      className,
      start = '09:00',
      end = '17:00',
      onChange,
      format = '24h',
      disabled = false,
      'aria-label': ariaLabel = 'Time range',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className={cn('flex items-center gap-2', className)}
        {...props}
      >
        <TimePicker
          format={format}
          disabled={disabled}
          value={start}
          aria-label="Start time"
          onChange={(v) => onChange?.({ start: v, end })}
          showIcon
        />
        <span className="text-sm text-muted-foreground">→</span>
        <TimePicker
          format={format}
          disabled={disabled}
          value={end}
          aria-label="End time"
          onChange={(v) => onChange?.({ start, end: v })}
          showIcon
        />
      </div>
    );
  }
);
TimeRangeInput.displayName = 'TimeRangeInput';

export { TimePicker, TimeRangeInput, timePickerVariants, segmentVariants };
