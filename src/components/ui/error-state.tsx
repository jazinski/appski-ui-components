import { cn } from '@/lib/utils';
import { Button } from './button';
import { AlertTriangle, Wifi, XCircle, RefreshCw } from 'lucide-react';

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
export function ErrorState({
  error,
  onRetry,
  variant = 'default',
  className,
  compact = false,
}: ErrorStateProps) {
  const errorMessage = error instanceof Error ? error.message : error;

  const getIcon = () => {
    switch (variant) {
      case 'network':
        return Wifi;
      case 'auth':
        return XCircle;
      case 'notfound':
        return AlertTriangle; // Or a specific not-found icon if available
      default:
        return AlertTriangle;
    }
  };

  const getTitle = () => {
    switch (variant) {
      case 'network':
        return 'Connection Error';
      case 'auth':
        return 'Authentication Required';
      case 'notfound':
        return 'Not Found';
      default:
        return 'Something Went Wrong';
    }
  };

  const getDescription = () => {
    switch (variant) {
      case 'network':
        return 'Unable to connect to the server. Please check your internet connection and try again.';
      case 'auth':
        return 'You need to be logged in to access this resource. Please log in and try again.';
      case 'notfound':
        return "The resource you're looking for could not be found. It may have been moved or deleted.";
      default:
        return 'An unexpected error occurred. Please try again or contact support if the problem persists.';
    }
  };

  const Icon = getIcon();

  if (compact) {
    return (
      <div
        className={cn(
          'flex items-center justify-between rounded-lg border p-4',
          'bg-destructive/5 dark:bg-destructive/10 border-destructive/20 dark:border-destructive/30',
          className
        )}
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center space-x-3">
          <Icon className="text-destructive h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-destructive-foreground text-sm font-medium">{getTitle()}</p>
            <p className="text-destructive-foreground/80 mt-0.5 text-sm">
              {errorMessage || getDescription()}
            </p>
          </div>
        </div>
        {onRetry && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRetry}
            className="hover:bg-destructive/10 text-destructive hover:text-destructive ml-4"
            aria-label="Retry operation"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Retry
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-background flex flex-col items-center justify-center rounded-lg border px-4 py-12',
        'border-border/60',
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
        <Icon className="text-destructive h-8 w-8" aria-hidden="true" />
      </div>

      <h3 className="text-foreground mb-2 text-lg font-semibold">{getTitle()}</h3>

      <p className="text-muted-foreground mb-4 max-w-md text-center text-sm">{getDescription()}</p>

      {errorMessage && (
        <div className="bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3">
          <p className="text-muted-foreground text-center font-mono text-xs break-words">
            {errorMessage}
          </p>
        </div>
      )}

      {onRetry && (
        <Button
          variant="default"
          onClick={onRetry}
          className="min-w-[120px]"
          aria-label="Retry operation"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
}
