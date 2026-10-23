export interface ErrorStateProps {
    /** The error object or message to display */
    error: Error | string;
    /** Callback function when retry button is clicked */
    onRetry?: () => void;
    /** Visual variant of the error state */
    variant?: 'default' | 'network' | 'auth' | 'notfound';
    /** Additional CSS classes */
    className?: string;
    /** Whether to show a compact inline version */
    compact?: boolean;
}
/**
 * ErrorState component for displaying user-friendly error messages.
 * Supports different variants for common error types (network, auth, not found).
 */
export declare function ErrorState({ error, onRetry, variant, className, compact, }: ErrorStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=error-state.d.ts.map