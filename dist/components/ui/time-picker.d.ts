import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const timePickerVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const segmentVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TimePickerFormat = '12h' | '24h';
export interface TimePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof timePickerVariants> {
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
/**
 * TimePicker component - An accessible time input with steppable
 * hours/minutes(/meridiem) segments.
 *
 * @example
 * <TimePicker defaultValue="09:30" format="12h" onChange={(v) => console.log(v)} />
 */
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<HTMLDivElement>>;
/** Parses "HH:mm" or "h:mm AM/PM" into minutes since midnight; null if invalid. */
export declare function parseTimeToMinutes(input: string): number | null;
/** Formats minutes since midnight as "HH:mm". */
export declare function formatMinutes(minutes: number): string;
export interface TimeRangeInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Start time as HH:mm */
    start?: string;
    /** End time as HH:mm */
    end?: string;
    onChange?: (range: {
        start: string;
        end: string;
    }) => void;
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
declare const TimeRangeInput: React.ForwardRefExoticComponent<TimeRangeInputProps & React.RefAttributes<HTMLDivElement>>;
export { TimePicker, TimeRangeInput, timePickerVariants, segmentVariants };
//# sourceMappingURL=time-picker.d.ts.map