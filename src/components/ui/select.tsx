import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const selectVariants = cva(
  'flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-destructive focus:ring-destructive',
      },
      selectSize: {
        default: 'h-10',
        sm: 'h-9 px-2 text-xs',
        lg: 'h-11 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      selectSize: 'default',
    },
  }
);

const labelVariants = cva(
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

export interface SelectOption {
  /** The value to be used when the option is selected */
  value: string;
  /** The display label for the option */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  /** Array of options for the select */
  options: SelectOption[];
  /** Label text displayed above the select */
  label?: string;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Error message displayed below the select */
  error?: string;
  /** Helper text displayed below the select (when no error) */
  helperText?: string;
}

/**
 * Select dropdown component with label and error support.
 *
 * @example
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      selectSize,
      options,
      label,
      placeholder,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    const helperTextId = `${selectId}-helper`;

    const hasError = Boolean(error);
    const effectiveVariant = hasError ? 'error' : variant;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={selectId} className={cn(labelVariants({ variant: effectiveVariant }))}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={selectId}
            className={cn(
              selectVariants({ variant: effectiveVariant, selectSize, className }),
              'cursor-pointer appearance-none pr-10'
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : helperText ? helperTextId : undefined}
            defaultValue=""
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
        {hasError && (
          <p id={errorId} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        {!hasError && helperText && (
          <p id={helperTextId} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select, selectVariants };
