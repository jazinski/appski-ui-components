import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const spinnerVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
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
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
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
declare const Loading: React.ForwardRefExoticComponent<LoadingProps & React.RefAttributes<HTMLDivElement>>;
declare const skeletonVariants: (props?: ({
    variant?: "default" | "title" | "text" | "avatar" | "thumbnail" | "card" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
}
/**
 * Skeleton component for placeholder loading states.
 *
 * @example
 * <Skeleton className="h-4 w-[200px]" />
 * <Skeleton variant="avatar" />
 * <Skeleton variant="text" />
 */
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export { Spinner, spinnerVariants, Loading, Skeleton, skeletonVariants };
//# sourceMappingURL=spinner.d.ts.map