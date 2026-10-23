export interface SkeletonLoaderProps {
    /** Visual variant of the skeleton loader */
    variant?: 'card' | 'list' | 'table' | 'stats' | 'text' | 'metric-card';
    /** Number of items to repeat */
    count?: number;
    /** Additional CSS classes */
    className?: string;
}
/**
 * SkeletonLoader component for complex loading states.
 * Provides preset layouts for common UI patterns (cards, lists, tables).
 */
export declare function SkeletonLoader({ variant, count, className }: SkeletonLoaderProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=skeleton-loader.d.ts.map