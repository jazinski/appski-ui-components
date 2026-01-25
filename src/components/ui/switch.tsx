import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        destructive: 'data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input',
        success:
          'data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input',
        warning:
          'data-[state=checked]:bg-yellow-600 dark:data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-input',
      },
      size: {
        sm: 'h-4 w-7',
        default: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
        default: 'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        lg: 'h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface SwitchProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof switchVariants> {
  /** Controlled checked state */
  checked?: boolean;
  /** Default checked state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Callback when checked state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Label text for the switch */
  label?: string;
  /** Description text below the label */
  description?: string;
  /** Position of the label relative to the switch */
  labelPosition?: 'left' | 'right';
  /** Whether the switch is required */
  required?: boolean;
  /** Name attribute for form submission */
  name?: string;
  /** Value attribute for form submission */
  value?: string;
}

/**
 * Switch component for toggling between on/off states.
 *
 * @example
 * // Basic usage
 * <Switch label="Enable notifications" />
 *
 * @example
 * // Controlled
 * <Switch
 *   checked={isEnabled}
 *   onCheckedChange={setIsEnabled}
 *   label="Dark mode"
 * />
 */
const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      variant,
      size,
      checked,
      defaultChecked = false,
      onCheckedChange,
      label,
      description,
      labelPosition = 'right',
      disabled,
      required,
      name,
      value,
      id,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const generatedId = React.useId();

    // Determine if controlled
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleClick = () => {
      if (disabled) return;

      const newChecked = !isChecked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onCheckedChange?.(newChecked);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // Toggle on Space or Enter
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleClick();
      }
    };

    const switchId = id ?? generatedId;
    const state = isChecked ? 'checked' : 'unchecked';

    const switchElement = (
      <button
        ref={ref}
        type="button"
        role="switch"
        id={switchId}
        aria-checked={isChecked}
        aria-required={required}
        aria-describedby={description ? `${switchId}-description` : undefined}
        data-state={state}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(switchVariants({ variant, size }), className)}
        {...props}
      >
        <span data-state={state} className={cn(switchThumbVariants({ size }))} />
      </button>
    );

    // Hidden input for form submission
    const hiddenInput = name ? (
      <input
        type="checkbox"
        name={name}
        value={value ?? 'on'}
        checked={isChecked}
        onChange={() => {}} // Handled by button
        aria-hidden="true"
        tabIndex={-1}
        className="sr-only"
      />
    ) : null;

    if (!label && !description) {
      return (
        <>
          {hiddenInput}
          {switchElement}
        </>
      );
    }

    const labelContent = (
      <div className="flex flex-col">
        {label && (
          <label
            htmlFor={switchId}
            className={cn(
              'cursor-pointer text-sm font-medium leading-none',
              disabled && 'cursor-not-allowed opacity-70'
            )}
          >
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}
        {description && (
          <p
            id={`${switchId}-description`}
            className={cn('text-sm text-muted-foreground', label && 'mt-1')}
          >
            {description}
          </p>
        )}
      </div>
    );

    return (
      <div className="flex items-center gap-3">
        {hiddenInput}
        {labelPosition === 'left' && labelContent}
        {switchElement}
        {labelPosition === 'right' && labelContent}
      </div>
    );
  }
);
Switch.displayName = 'Switch';

// ============================================================================
// Switch Group
// ============================================================================

export interface SwitchGroupProps {
  /** Group label */
  label?: string;
  /** Description for the group */
  description?: string;
  /** Switch items */
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
}

/**
 * SwitchGroup component for grouping related switches.
 *
 * @example
 * <SwitchGroup label="Notification Settings">
 *   <Switch label="Email notifications" />
 *   <Switch label="Push notifications" />
 *   <Switch label="SMS notifications" />
 * </SwitchGroup>
 */
const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ label, description, children, className, ...props }, ref) => {
    return (
      <div ref={ref} role="group" className={cn('space-y-4', className)} {...props}>
        {(label || description) && (
          <div className="space-y-1">
            {label && <h3 className="text-sm font-medium leading-none">{label}</h3>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    );
  }
);
SwitchGroup.displayName = 'SwitchGroup';

export { Switch, SwitchGroup, switchVariants, switchThumbVariants };
