import * as React from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchBarProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'type' | 'value'
> {
  /** Current search value */
  value: string;
  /** Callback fired when search value changes (debounced) */
  onChange: (value: string) => void;
  /** Callback fired on Enter key or explicit search action */
  onSearch?: (value: string) => void;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Show loading spinner */
  loading?: boolean;
}

/**
 * SearchBar component with debounced input, icons, and keyboard shortcuts.
 *
 * Features:
 * - Search icon on left
 * - Clear button (X) on right when text is present
 * - Debounced onChange callback (default 300ms)
 * - Loading state with spinner
 * - Keyboard shortcuts: Cmd/Ctrl+K to focus, Escape to clear
 *
 * @example
 * ```tsx
 * <SearchBar
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 *   placeholder="Search..."
 * />
 * ```
 */
export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value,
      onChange,
      onSearch,
      placeholder = 'Search...',
      debounceMs = 300,
      loading = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(value);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

    // Sync internal value when external value changes
    React.useEffect(() => {
      setInternalValue(value);
    }, [value]);

    // Handle keyboard shortcuts
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Focus on Cmd/Ctrl+K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          inputRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout for debounced onChange
      timeoutRef.current = setTimeout(() => {
        onChange(newValue);
      }, debounceMs);
    };

    const handleClear = () => {
      setInternalValue('');
      onChange('');
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        handleClear();
      } else if (e.key === 'Enter' && onSearch) {
        onSearch(internalValue);
      }
      props.onKeyDown?.(e);
    };

    // Cleanup timeout on unmount
    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div className={cn('relative', className)}>
        {/* Search Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="text-muted-foreground h-4 w-4" />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={internalValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={cn(
            'border-input bg-background ring-offset-background flex h-10 w-full rounded-md border py-2 pr-10 pl-10 text-sm',
            'placeholder:text-muted-foreground',
            'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          aria-label="Search"
          {...props}
        />

        {/* Loading Spinner or Clear Button */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {loading ? (
            <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
          ) : internalValue ? (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              className={cn(
                'ring-offset-background rounded-sm opacity-70 transition-opacity',
                'focus:ring-ring hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none',
                'disabled:pointer-events-none'
              )}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
