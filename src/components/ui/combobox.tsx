import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const comboboxVariants = cva('w-full justify-between', {
  variants: {
    variant: {
      default: '',
      outline: '',
    },
    size: {
      default: 'h-10',
      sm: 'h-9',
      lg: 'h-11',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'default',
  },
});

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps extends VariantProps<typeof comboboxVariants> {
  /** Array of options to display */
  options: ComboboxOption[];
  /** Currently selected value */
  value?: string;
  /** Callback when value changes */
  onValueChange?: (value: string) => void;
  /** Placeholder text when no value selected */
  placeholder?: string;
  /** Text to show when no results found */
  emptyText?: string;
  /** Enable search/filter functionality */
  searchable?: boolean;
  /** Custom search placeholder */
  searchPlaceholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom className */
  className?: string;
}

/**
 * Combobox component - A searchable select dropdown with autocomplete.
 *
 * @example
 * <Combobox
 *   options={[
 *     { value: "1", label: "Option 1" },
 *     { value: "2", label: "Option 2" }
 *   ]}
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Select an option"
 *   searchable
 * />
 */
export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = 'Select an option...',
      emptyText = 'No results found.',
      searchable = true,
      searchPlaceholder = 'Search...',
      disabled,
      className,
      variant,
      size,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const selectedOption = options.find((option) => option.value === value);

    const filteredOptions = React.useMemo(() => {
      if (!searchable || !searchQuery) return options;
      return options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [options, searchQuery, searchable]);

    const handleSelect = (optionValue: string) => {
      onValueChange?.(optionValue === value ? '' : optionValue);
      setOpen(false);
      setSearchQuery('');
    };

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(comboboxVariants({ variant, size }), className)}
          >
            <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <div className="flex flex-col">
            {searchable && (
              <div className="border-border border-b p-2">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); }}
                  className="border-border bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-2"
                />
              </div>
            )}
            <div className="max-h-[300px] overflow-y-auto">
              {filteredOptions.length === 0 ? (
                <div className="text-muted-foreground py-6 text-center text-sm">{emptyText}</div>
              ) : (
                <div className="p-1">
                  {filteredOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        if (!option.disabled) {
                          handleSelect(option.value);
                        }
                      }}
                      disabled={option.disabled}
                      className={cn(
                        'relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none',
                        'hover:bg-accent hover:text-accent-foreground',
                        'disabled:pointer-events-none disabled:opacity-50',
                        value === option.value && 'bg-accent text-accent-foreground'
                      )}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === option.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      <span className="truncate">{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);
Combobox.displayName = 'Combobox';

export { comboboxVariants };
