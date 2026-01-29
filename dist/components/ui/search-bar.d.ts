import * as React from 'react';
export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'> {
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
export declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=search-bar.d.ts.map