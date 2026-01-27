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
        default: 'text-slate-900 dark:text-slate-100',
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
  /** Array of options for the select (alternative to children) */
  options?: SelectOption[];
  /** Label text displayed above the select */
  label?: string;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Error message displayed below the select */
  error?: string;
  /** Helper text displayed below the select (when no error) */
  helperText?: string;
  /** Custom option elements (alternative to options prop) */
  children?: React.ReactNode;
}

/**
 * Select dropdown component with label and error support.
 * Supports both controlled options prop or children pattern.
 *
 * @example
 * // Using options prop
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 *
 * @example
 * // Using children
 * <Select label="Country">
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 * </Select>
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
      children,
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

    // Support both options prop and children pattern
    const renderOptions = () => {
      if (children) {
        return children;
      }
      if (options) {
        return (
          <>
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
          </>
        );
      }
      return null;
    };

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
              'cursor-pointer appearance-none pr-10',
              // Ensure dropdown options have proper background/text colors
              '[&>option]:bg-background [&>option]:text-foreground'
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : helperText ? helperTextId : undefined}
            {...props}
          >
            {renderOptions()}
          </select>
          <ChevronDown
            className="text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2"
            aria-hidden="true"
          />
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
Select.displayName = 'Select';

export { Select, selectVariants };
