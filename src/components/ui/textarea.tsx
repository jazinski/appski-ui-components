import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const textareaVariants = cva(
  [
    'flex w-full rounded-md border px-3 py-2 text-base transition-colors',
    'placeholder:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:bg-background dark:border-input',
  ],
  {
    variants: {
      variant: {
        default: 'border-input bg-background',
        destructive: 'border-destructive bg-destructive/10 focus-visible:ring-destructive',
      },
      textareaSize: {
        sm: 'text-sm px-2.5 py-1.5 min-h-[60px]',
        default: 'text-base px-3 py-2 min-h-[80px]',
        lg: 'text-lg px-4 py-3 min-h-[100px]',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      textareaSize: 'default',
      resize: 'vertical',
    },
  }
);

export interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {
  /** Label text displayed above the textarea */
  label?: string;
  /** Helper text displayed below the textarea */
  description?: string;
  /** Error message to display */
  error?: string;
  /** Show character count */
  showCharacterCount?: boolean;
  /** Maximum character length */
  maxLength?: number;
  /** Auto-resize to fit content */
  autoResize?: boolean;
  /** Minimum number of rows when auto-resizing */
  minRows?: number;
  /** Maximum number of rows when auto-resizing */
  maxRows?: number;
  /** Custom class for the wrapper div */
  wrapperClassName?: string;
  /** Custom class for the label */
  labelClassName?: string;
}

/**
 * Textarea component for multi-line text input
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Description"
 *   description="Tell us about yourself"
 *   maxLength={500}
 *   showCharacterCount
 *   autoResize
 *   rows={4}
 * />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      textareaSize,
      resize,
      label,
      description,
      error,
      showCharacterCount,
      maxLength,
      autoResize = false,
      minRows = 2,
      maxRows,
      wrapperClassName,
      labelClassName,
      value,
      defaultValue,
      onChange,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      (value !== undefined ? value : defaultValue || '') as string
    );
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const characterCount = String(currentValue || '').length;

    // Handle auto-resize
    const handleResize = React.useCallback(() => {
      if (!autoResize || !textareaRef.current) return;

      const textarea = textareaRef.current;

      // Reset height to get accurate scrollHeight
      textarea.style.height = 'auto';

      // Calculate new height
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
      const paddingTop = parseInt(window.getComputedStyle(textarea).paddingTop);
      const paddingBottom = parseInt(window.getComputedStyle(textarea).paddingBottom);

      const minHeight = lineHeight * minRows + paddingTop + paddingBottom;
      const maxHeight = maxRows ? lineHeight * maxRows + paddingTop + paddingBottom : Infinity;

      const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);

      textarea.style.height = `${newHeight}px`;
    }, [autoResize, minRows, maxRows]);

    // Auto-resize on mount and value change
    React.useEffect(() => {
      if (autoResize) {
        handleResize();
      }
    }, [currentValue, autoResize, handleResize]);

    // Set up refs
    const setRefs = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        textareaRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);

      if (autoResize) {
        handleResize();
      }
    };

    const hasError = Boolean(error);
    const effectiveVariant = hasError ? 'destructive' : variant;

    // Calculate if over max length
    const isOverMaxLength = maxLength !== undefined && characterCount > maxLength;

    return (
      <div className={cn('w-full', wrapperClassName)}>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              'mb-2 block text-sm font-medium text-foreground',
              disabled && 'cursor-not-allowed opacity-50',
              labelClassName
            )}
          >
            {label}
            {props.required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}

        <div className="relative">
          <textarea
            ref={setRefs}
            className={cn(
              textareaVariants({
                variant: effectiveVariant,
                textareaSize,
                resize: autoResize ? 'none' : resize,
              }),
              hasError && 'border-destructive focus-visible:ring-destructive',
              className
            )}
            value={currentValue}
            onChange={handleChange}
            disabled={disabled}
            maxLength={maxLength}
            rows={autoResize ? minRows : rows}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={
              error || description || showCharacterCount
                ? `${props.id}-description ${props.id}-error ${props.id}-count`
                : undefined
            }
            {...props}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between gap-2">
          <div className="flex-1">
            {description && !error && (
              <p
                id={`${props.id}-description`}
                className={cn('text-sm text-muted-foreground', disabled && 'opacity-50')}
              >
                {description}
              </p>
            )}

            {error && (
              <p
                id={`${props.id}-error`}
                className="text-sm font-medium text-destructive"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>

          {showCharacterCount && (
            <p
              id={`${props.id}-count`}
              className={cn(
                'text-sm tabular-nums',
                isOverMaxLength ? 'font-medium text-destructive' : 'text-muted-foreground',
                disabled && 'opacity-50'
              )}
              aria-live="polite"
            >
              {characterCount}
              {maxLength !== undefined && ` / ${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
