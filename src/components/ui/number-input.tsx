import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const numberInputVariants = cva(
  'flex w-full rounded-md border bg-background text-sm ring-offset-background transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-destructive focus-within:ring-destructive',
      },
      inputSize: {
        default: 'h-10',
        sm: 'h-9 text-xs',
        lg: 'h-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

const numberInputLabelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        error: 'text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const stepperButtonVariants = cva(
  'inline-flex shrink-0 items-center justify-center rounded-none text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      inputSize: {
        default: 'h-full w-10',
        sm: 'h-full w-8',
        lg: 'h-full w-12',
      },
    },
    defaultVariants: {
      inputSize: 'default',
    },
  }
);

const iconSizes = {
  sm: 'h-3.5 w-3.5',
  default: 'h-4 w-4',
  lg: 'h-5 w-5',
} as const;

/** Format presets applied to the displayed value. */
export type NumberInputFormat = 'plain' | 'currency' | 'percent';

export interface NumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'step' | 'min' | 'max' | 'onChange' | 'value' | 'defaultValue'
  >,
  VariantProps<typeof numberInputVariants> {
  /** Current numeric value (controlled) */
  value?: number | null;
  /** Initial numeric value (uncontrolled) */
  defaultValue?: number | null;
  /** Called with the parsed numeric value on change (null when the field is empty or invalid) */
  onValueChange?: (value: number | null) => void;
  /** Amount added/subtracted by the stepper buttons and arrow keys */
  step?: number;
  /** Smallest allowed value */
  min?: number;
  /** Largest allowed value */
  max?: number;
  /** Display format: raw number, currency, or percent */
  format?: NumberInputFormat;
  /** Currency code used when format="currency" (default "USD") */
  currency?: string;
  /** Locale used for formatting (default browser locale) */
  locale?: string;
  /** Number of fraction digits to display (default derived from step) */
  digits?: number;
  /** Hide the increment/decrement stepper buttons */
  hideSteppers?: boolean;
  /** Label text displayed above the input */
  label?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Helper text displayed below the input (when no error) */
  helperText?: string;
  /** ID for the input element (auto-generated if not provided) */
  id?: string;
}

/**
 * NumberInput component - a numeric stepper input with built-in
 * currency/percent/plain formatting, clamping, and keyboard support.
 *
 * @example
 * <NumberInput label="Price" format="currency" step={0.01} defaultValue={19.99} />
 * @example
 * <NumberInput label="Tax rate" format="percent" step={0.5} min={0} max={100} />
 */
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      variant,
      inputSize,
      value,
      defaultValue = null,
      onValueChange,
      step = 1,
      min,
      max,
      format = 'plain',
      currency = 'USD',
      locale,
      digits,
      hideSteppers = false,
      label,
      error,
      helperText,
      id,
      disabled,
      placeholder,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperTextId = `${inputId}-helper`;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<number | null>(defaultValue);
    const [inputText, setInputText] = React.useState<string>(
      defaultValue === null ? '' : String(defaultValue)
    );

    const current = isControlled ? value : internalValue;

    // Keep the text field in sync when the controlled value changes externally
    React.useEffect(() => {
      if (isControlled) {
        setInputText(value === null ? '' : String(value));
      }
    }, [value, isControlled]);

    const fractionDigits = React.useMemo(() => {
      if (typeof digits === 'number') return digits;
      if (Number.isInteger(step)) return 0;
      const stepStr = String(step);
      const dot = stepStr.indexOf('.');
      return dot === -1 ? 0 : stepStr.length - dot - 1;
    }, [digits, step]);

    const formatter = React.useMemo(() => {
      try {
        if (format === 'currency') {
          return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits,
          });
        }
        if (format === 'percent') {
          return new Intl.NumberFormat(locale, {
            style: 'percent',
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits,
          });
        }
      } catch {
        // fall through to plain on invalid locale/currency
      }
      return new Intl.NumberFormat(locale, {
        maximumFractionDigits: fractionDigits,
      });
    }, [format, currency, locale, fractionDigits]);

    const clamp = React.useCallback(
      (n: number): number => {
        let result = n;
        if (typeof min === 'number') result = Math.max(min, result);
        if (typeof max === 'number') result = Math.min(max, result);
        return result;
      },
      [min, max]
    );

    const commit = React.useCallback(
      (next: number | null) => {
        const clamped = next === null ? null : clamp(next);
        if (!isControlled) setInternalValue(clamped);
        setInputText(clamped === null ? '' : String(clamped));
        onValueChange?.(clamped);
      },
      [clamp, isControlled, onValueChange]
    );

    /** Parse raw user text; returns null for empty/invalid input. */
    const parseInput = (text: string): number | null => {
      const cleaned = text.replace(/[^0-9.-]/g, '');
      if (cleaned === '' || cleaned === '-' || cleaned === '.') return null;
      const parsed = Number(cleaned);
      return Number.isFinite(parsed) ? parsed : null;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(event.target.value);
    };

    const handleBlur = () => {
      commit(parseInput(inputText));
    };

    const stepBy = (direction: 1 | -1) => {
      const base = current === null ? (typeof min === 'number' ? min : 0) : current;
      // Avoid float drift: round to the step's precision
      const precision = Math.max(fractionDigits, 0);
      const factor = Math.pow(10, precision);
      const next = Math.round((base + direction * step) * factor) / factor;
      commit(clamp(next));
    };

    const handleStepperMouseDown = (direction: 1 | -1) => (event: React.MouseEvent) => {
      event.preventDefault(); // keep focus on the input
      stepBy(direction);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        stepBy(1);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        stepBy(-1);
      }
    };

    const hasError = Boolean(error);
    const effectiveVariant = hasError ? 'error' : variant;

    const displayValue =
      current === null ? '' : format === 'plain' ? inputText : formatter.format(current);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(numberInputLabelVariants({ variant: effectiveVariant }))}
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            numberInputVariants({ variant: effectiveVariant, inputSize, className })
          )}
          data-disabled={disabled ? '' : undefined}
        >
          {!hideSteppers && (
            <button
              type="button"
              aria-label="Decrease value"
              aria-keyshortcuts="ArrowDown"
              className={cn(stepperButtonVariants({ inputSize }))}
              onMouseDown={handleStepperMouseDown(-1)}
              disabled={disabled}
              tabIndex={-1}
            >
              <Minus className={iconSizes[inputSize ?? 'default']} />
            </button>
          )}
          <input
            type="text"
            inputMode="decimal"
            role="spinbutton"
            id={inputId}
            ref={ref}
            value={format === 'plain' ? inputText : displayValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : helperText ? helperTextId : undefined}
            aria-valuenow={current === null ? undefined : current}
            aria-valuemin={typeof min === 'number' ? min : undefined}
            aria-valuemax={typeof max === 'number' ? max : undefined}
            {...props}
          />
          {!hideSteppers && (
            <button
              type="button"
              aria-label="Increase value"
              aria-keyshortcuts="ArrowUp"
              className={cn(stepperButtonVariants({ inputSize }))}
              onMouseDown={handleStepperMouseDown(1)}
              disabled={disabled}
              tabIndex={-1}
            >
              <Plus className={iconSizes[inputSize ?? 'default']} />
            </button>
          )}
        </div>
        {hasError && (
          <p id={errorId} className="text-destructive text-sm" role="alert">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={helperTextId} className="text-muted-foreground text-sm">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
NumberInput.displayName = 'NumberInput';

export { NumberInput, numberInputVariants };
