import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChipLabels {
  /** Prefix for the remove button's accessible name ("Remove bug"). */
  remove: string;
}

const chipVariants = cva(
  'inline-flex max-w-full items-center gap-1 rounded-full border text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-secondary text-secondary-foreground',
        primary: 'border-primary/25 bg-primary/10 text-primary',
        success: 'border-success/25 bg-success/10 text-success',
        warning: 'border-warning/30 bg-warning/10 text-warning',
        destructive: 'border-destructive/25 bg-destructive/10 text-destructive',
        info: 'border-info/25 bg-info/10 text-info',
        outline: 'border-border bg-background text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const chipTriggerVariants = cva(
  'truncate py-0.5 text-left text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      interactive: {
        true: 'cursor-pointer rounded-l-full pl-2.5 pr-0.5 hover:bg-foreground/5',
        false: '',
      },
    },
    defaultVariants: {
      interactive: false,
    },
  }
);

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'>,
    VariantProps<typeof chipVariants> {
  /** Chip text (plain string recommended — used in the remove button's label). */
  children: React.ReactNode;
  /**
   * Show the "×" affordance and fire this handler on click. Removable chips
   * stay accessible: the button carries an "Remove <chip>" accessible name.
   */
  onRemove?: () => void;
  /** Makes the whole chip clickable (e.g. toggling a filter). */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Disables a clickable chip. */
  disabled?: boolean;
  /** Accessible labels, overridable for localization. */
  labels?: Partial<ChipLabels>;
}

/**
 * Chip — a compact removable token, the visual unit for tags and active
 * filters. Purely presentational on its own: it reports `onRemove` and
 * optional `onClick` and stays out of data management.
 *
 * Rendered as a span wrapper so the interactive label and the remove control
 * are sibling buttons (valid HTML even when both are present). Theme tokens
 * only — light and dark mode come automatically.
 *
 * @example
 * ```tsx
 * <Chip variant="primary" onRemove={() => removeTag('bug')}>bug</Chip>
 * <Chip variant="outline" onClick={toggle}>Urgent</Chip>
 * ```
 */
export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  (
    { className, variant, onRemove, onClick, disabled, labels, children, ...props },
    ref
  ) => {
    const removeLabel = labels?.remove ?? 'Remove';
    const text = typeof children === 'string' ? children : '';
    const interactive = onClick !== undefined;
    const removable = onRemove !== undefined && !disabled;

    return (
      <span
        ref={ref}
        className={cn(
          chipVariants({ variant }),
          removable ? 'py-0.5 pl-2.5 pr-1' : 'py-0.5 px-2.5',
          interactive && 'pl-0 pr-1',
          className
        )}
        {...props}
      >
        {interactive ? (
          <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(chipTriggerVariants({ interactive: true }), !removable && 'pr-2.5')}
          >
            {children}
          </button>
        ) : (
          <span className="truncate">{children}</span>
        )}
        {removable && (
          <button
            type="button"
            onClick={() => { onRemove?.(); }}
            aria-label={text ? `${removeLabel} ${text}` : removeLabel}
            className="shrink-0 rounded-full p-0.5 transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        )}
      </span>
    );
  }
);
Chip.displayName = 'Chip';

export { chipVariants };
