import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-destructive focus-visible:ring-destructive',
      },
      inputSize: {
        default: 'h-10',
        sm: 'h-9 px-2 text-xs',
        lg: 'h-11 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
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

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
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
 * Text input component with optional label and error handling.
 *
 * @example
 * <Input label="Email" placeholder="Enter your email" />
 * <Input label="Username" error="Username is required" />
 * <Input inputSize="sm" placeholder="Small input" />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant, inputSize, label, error, helperText, id, type = 'text', ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperTextId = `${inputId}-helper`;

    const hasError = Boolean(error);
    const effectiveVariant = hasError ? 'error' : variant;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className={cn(labelVariants({ variant: effectiveVariant }))}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(inputVariants({ variant: effectiveVariant, inputSize, className }))}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : helperText ? helperTextId : undefined}
          {...props}
        />
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
Input.displayName = 'Input';

export { Input, inputVariants };
