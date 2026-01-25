import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      default: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * Loading spinner component for indicating async operations.
 *
 * @example
 * <Spinner />
 * <Spinner size="lg" />
 * <Spinner label="Loading data..." />
 */
const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, label = 'Loading...', ...props }, ref) => {
    return (
      <Loader2
        ref={ref}
        className={cn(spinnerVariants({ size, className }))}
        aria-label={label}
        role="status"
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';

// Loading overlay component for full-screen or container loading states
export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner */
  size?: 'sm' | 'default' | 'lg' | 'xl';
  /** Loading message to display */
  message?: string;
  /** Whether to show as a full-screen overlay */
  fullScreen?: boolean;
}

/**
 * Loading component with optional message and overlay support.
 *
 * @example
 * <Loading />
 * <Loading message="Loading data..." />
 * <Loading fullScreen message="Please wait..." />
 */
const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = 'default', message, fullScreen = false, ...props }, ref) => {
    const containerClasses = fullScreen
      ? 'fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
      : 'flex items-center justify-center p-4';

    return (
      <div
        ref={ref}
        className={cn(containerClasses, className)}
        role="status"
        aria-busy="true"
        {...props}
      >
        <div className="flex flex-col items-center gap-2">
          <Spinner size={size} label={message ?? 'Loading...'} />
          {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </div>
      </div>
    );
  }
);
Loading.displayName = 'Loading';

// Skeleton component for placeholder loading states
const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
  variants: {
    variant: {
      default: '',
      text: 'h-4 w-full',
      title: 'h-6 w-3/4',
      avatar: 'h-10 w-10 rounded-full',
      thumbnail: 'h-24 w-24',
      card: 'h-32 w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}

/**
 * Skeleton component for placeholder loading states.
 *
 * @example
 * <Skeleton className="h-4 w-[200px]" />
 * <Skeleton variant="avatar" />
 * <Skeleton variant="text" />
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, className }))}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export { Spinner, spinnerVariants, Loading, Skeleton, skeletonVariants };
