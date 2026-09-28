import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const colorPickerTriggerVariants = cva(
  'inline-flex items-center justify-between gap-2 rounded-md border border-border bg-background text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-10 px-3',
        sm: 'h-8 px-2 text-xs',
        lg: 'h-12 px-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const swatchVariants = cva('rounded-md border border-border/60', {
  variants: {
    size: {
      default: 'h-5 w-5',
      sm: 'h-4 w-4',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

/** Default curated palette used when no swatches are provided. */
export const DEFAULT_COLOR_SWATCHES: string[] = [
  '#dc2626',
  '#ea580c',
  '#d97706',
  '#16a34a',
  '#0891b2',
  '#2563eb',
  '#7c3aed',
  '#db2777',
  '#0d0d0d',
  '#525252',
  '#a3a3a3',
  '#fafafa',
];

export interface ColorPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof colorPickerTriggerVariants> {
  /** Controlled value as a CSS hex string */
  value?: string;
  /** Initial value */
  defaultValue?: string;
  /** Fired on every change with the selected hex */
  onChange?: (value: string) => void;
  /** Swatch colors to offer; defaults to DEFAULT_COLOR_SWATCHES */
  swatches?: string[];
  /** Also allow free-form hex entry via text input */
  allowCustom?: boolean;
  /** Placeholder when no color selected */
  placeholder?: string;
  disabled?: boolean;
  'aria-label'?: string;
}

/** Validates a #RGB / #RRGGBB hex string. */
export function isValidHex(value: string): boolean {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);
}

/** Normalizes a hex string to lowercase #rrggbb form. */
export function normalizeHex(value: string): string {
  const v = value.trim();
  if (!v.startsWith('#')) return `#${v}`.toLowerCase();
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    const [r = '0', g = '0', b = '0'] = v.slice(1).split('');
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }
  return v.toLowerCase();
}

/**
 * ColorPicker component — swatch-based color selection with optional
 * free-form hex input, in a popover.
 *
 * @example
 * <ColorPicker defaultValue="#2563eb" onChange={(hex) => console.log(hex)} />
 */
export const ColorPicker = React.forwardRef<HTMLDivElement, ColorPickerProps>(
  (
    {
      className,
      size,
      value: controlled,
      defaultValue,
      onChange,
      swatches = DEFAULT_COLOR_SWATCHES,
      allowCustom = true,
      placeholder = 'Pick a color',
      disabled = false,
      'aria-label': ariaLabel = 'Color picker',
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState<string | undefined>(defaultValue);
    const value = controlled ?? internal;
    const [open, setOpen] = React.useState(false);
    const [customInput, setCustomInput] = React.useState('');

    const select = (hex: string) => {
      setInternal(hex);
      onChange?.(hex);
    };

    const submitCustom = () => {
      const candidate = customInput.trim();
      if (candidate && isValidHex(normalizeHex(candidate))) {
        select(normalizeHex(candidate));
        setCustomInput('');
        setOpen(false);
      }
    };

    return (
      <div ref={ref} className={cn('inline-block', className)} {...props}>
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <PopoverPrimitive.Trigger
            disabled={disabled}
            aria-label={ariaLabel}
            className={cn(colorPickerTriggerVariants({ size }), 'w-[160px] font-medium')}
          >
            <span className="flex items-center gap-2 overflow-hidden">
              <span
                aria-hidden="true"
                className={swatchVariants({ size })}
                style={value ? { backgroundColor: value } : { background: 'transparent' }}
              />
              <span className="truncate font-mono text-xs text-muted-foreground">
                {value ?? placeholder}
              </span>
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              sideOffset={4}
              className="z-50 w-56 rounded-md border border-border bg-popover p-3 text-popover-foreground shadow-md outline-none"
            >
              <div className="grid grid-cols-6 gap-1.5" role="listbox" aria-label="Color swatches">
                {swatches.map((swatch) => {
                  const selected = value === swatch;
                  return (
                    <button
                      key={swatch}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      aria-label={swatch}
                      title={swatch}
                      onClick={() => {
                        select(swatch);
                        setOpen(false);
                      }}
                      className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-md border transition-transform hover:scale-105',
                        selected ? 'border-foreground' : 'border-transparent'
                      )}
                      style={{ backgroundColor: swatch }}
                    >
                      {selected && <Check className="h-4 w-4 text-white mix-blend-difference" />}
                    </button>
                  );
                })}
              </div>
              {allowCustom && (
                <div className="mt-3 flex items-center gap-2">
                  <input
                    value={customInput}
                    onChange={(e) => { setCustomInput(e.target.value); }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        submitCustom();
                      }
                    }}
                    placeholder="#rrggbb"
                    aria-label="Custom hex color"
                    disabled={disabled}
                    className={cn(
                      'h-8 w-full rounded-md border border-border bg-background px-2 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    )}
                  />
                </div>
              )}
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </div>
    );
  }
);
ColorPicker.displayName = 'ColorPicker';

/** A compact set of read-only color swatches (no picker). */
export interface ColorSwatchSetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colors to render */
  colors: string[];
  /** Swatch size in px */
  size?: number;
}

export const ColorSwatchSet = React.forwardRef<HTMLDivElement, ColorSwatchSetProps>(
  ({ className, colors, size = 20, ...props }, ref) => (
    <div
      ref={ref}
      role="list"
      aria-label="Color swatches"
      className={cn('flex flex-wrap items-center gap-1.5', className)}
      {...props}
    >
      {colors.map((color) => (
        <span
          key={color}
          role="listitem"
          title={color}
          className="rounded-md border border-border/60"
          style={{ backgroundColor: color, width: size, height: size }}
        />
      ))}
    </div>
  )
);
ColorSwatchSet.displayName = 'ColorSwatchSet';

export { colorPickerTriggerVariants, swatchVariants };
