import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded border border-input ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary',
        destructive:
          'data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground data-[state=indeterminate]:border-destructive',
        success:
          'data-[state=checked]:bg-green-600 data-[state=checked]:text-white data-[state=checked]:border-green-600 dark:data-[state=checked]:bg-green-500 data-[state=indeterminate]:bg-green-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-green-600',
      },
      size: {
        sm: 'h-3.5 w-3.5',
        default: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const checkboxIconSizes = {
  sm: 'h-3 w-3',
  default: 'h-3.5 w-3.5',
  lg: 'h-4 w-4',
};

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof checkboxVariants> {
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  /** Indeterminate state (takes precedence over checked) */
  indeterminate?: boolean;
  /** Label text for the checkbox */
  label?: string;
  /** Description text below the label */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Whether the checkbox is required */
  required?: boolean;
}

/**
 * Checkbox component for boolean input with optional indeterminate state.
 *
 * @example
 * // Basic usage
 * <Checkbox label="Accept terms" />
 *
 * @example
 * // Controlled with indeterminate
 * <Checkbox
 *   checked={someAreChecked && !allAreChecked ? undefined : allAreChecked}
 *   indeterminate={someAreChecked && !allAreChecked}
 *   onCheckedChange={handleSelectAll}
 *   label="Select all"
 * />
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      checked,
      defaultChecked,
      onCheckedChange,
      indeterminate = false,
      label,
      description,
      error,
      required,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
    const generatedId = React.useId();

    // Combine refs
    React.useImperativeHandle(ref, () => {
      if (!inputRef.current) {
        throw new Error('Input ref is not attached');
      }
      return inputRef.current;
    });

    // Determine if controlled
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    // Update indeterminate property on the input element
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // Determine checkbox state for styling
    const getCheckboxState = () => {
      if (indeterminate) return 'indeterminate';
      return isChecked ? 'checked' : 'unchecked';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
    };

    const checkboxId = id ?? generatedId;
    const iconSize = checkboxIconSizes[size ?? 'default'];

    return (
      <div className="flex items-start gap-2">
        <div className="relative flex items-center justify-center">
          <input
            ref={inputRef}
            type="checkbox"
            id={checkboxId}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            className="sr-only"
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={description || error ? `${checkboxId}-description` : undefined}
            {...props}
          />
          <div
            data-state={getCheckboxState()}
            className={cn(
              checkboxVariants({ variant, size }),
              'flex cursor-pointer items-center justify-center',
              disabled && 'cursor-not-allowed',
              error && 'border-destructive',
              className
            )}
            onClick={() => {
              if (!disabled && inputRef.current) {
                inputRef.current.click();
              }
            }}
            role="presentation"
          >
            {indeterminate ? (
              <Minus className={iconSize} aria-hidden="true" />
            ) : isChecked ? (
              <Check className={iconSize} aria-hidden="true" />
            ) : null}
          </div>
        </div>

        {(label || description || error) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={checkboxId}
                className={cn(
                  'cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                  disabled && 'cursor-not-allowed opacity-70'
                )}
              >
                {label}
                {required && <span className="text-destructive ml-1">*</span>}
              </label>
            )}
            {(description || error) && (
              <p
                id={`${checkboxId}-description`}
                className={cn(
                  'text-sm',
                  error ? 'text-destructive' : 'text-muted-foreground',
                  label && 'mt-1'
                )}
              >
                {error || description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

// ============================================================================
// Checkbox Group
// ============================================================================

export interface CheckboxGroupProps {
  /** Group label */
  label?: string;
  /** Description for the group */
  description?: string;
  /** Error message for the group */
  error?: string;
  /** Whether the group is required */
  required?: boolean;
  /** Checkbox items */
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
  /** Orientation of the checkboxes */
  orientation?: 'horizontal' | 'vertical';
}

/**
 * CheckboxGroup component for grouping related checkboxes.
 *
 * @example
 * <CheckboxGroup label="Select options" orientation="vertical">
 *   <Checkbox label="Option 1" />
 *   <Checkbox label="Option 2" />
 *   <Checkbox label="Option 3" />
 * </CheckboxGroup>
 */
const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      label,
      description,
      error,
      required,
      children,
      className,
      orientation = 'vertical',
      ...props
    },
    ref
  ) => {
    return (
      <fieldset
        ref={ref}
        className={cn('space-y-2', className)}
        aria-describedby={description || error ? 'checkbox-group-description' : undefined}
        {...props}
      >
        {label && (
          <legend className="text-sm leading-none font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </legend>
        )}
        {description && !error && (
          <p id="checkbox-group-description" className="text-muted-foreground text-sm">
            {description}
          </p>
        )}
        <div
          className={cn(
            'flex gap-4',
            orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
          )}
        >
          {children}
        </div>
        {error && (
          <p id="checkbox-group-description" className="text-destructive text-sm">
            {error}
          </p>
        )}
      </fieldset>
    );
  }
);
CheckboxGroup.displayName = 'CheckboxGroup';

export { Checkbox, CheckboxGroup, checkboxVariants };
