import * as React from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './spinner';

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
export function SkeletonLoader({ variant = 'card', count = 1, className }: SkeletonLoaderProps) {
  // Helper to render multiple items
  const renderItems = (itemRenderer: (key: number) => React.ReactNode) => {
    return Array.from({ length: count }).map((_, i) => (
      <React.Fragment key={i}>{itemRenderer(i)}</React.Fragment>
    ));
  };

  switch (variant) {
    case 'card':
      return (
        <div className={cn('space-y-4', className)}>
          {renderItems((i) => (
            <div
              key={i}
              className="bg-card rounded-lg border p-6 shadow-sm"
              data-testid="skeleton-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          ))}
        </div>
      );

    case 'list':
      return (
        <div className={cn('space-y-3', className)}>
          {renderItems((i) => (
            <div
              key={i}
              className="bg-card flex items-center justify-between rounded-lg border p-4"
              data-testid="skeleton-list-item"
            >
              <div className="flex flex-1 items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
              <Skeleton className="h-8 w-20" />
            </div>
          ))}
        </div>
      );

    case 'table':
      return (
        <div
          className={cn('bg-card overflow-hidden rounded-lg border', className)}
          data-testid="skeleton-table"
        >
          {/* Header */}
          <div className="bg-muted/50 grid grid-cols-4 gap-4 border-b p-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
          {/* Rows */}
          {renderItems((i) => (
            <div key={i} className="grid grid-cols-4 gap-4 border-b p-4 last:border-b-0">
              {Array.from({ length: 4 }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          ))}
        </div>
      );

    case 'stats':
      return (
        <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4', className)}>
          {renderItems((i) => (
            <div key={i} className="bg-card rounded-lg border p-6" data-testid="skeleton-stat">
              <Skeleton className="mb-3 h-4 w-24" />
              <Skeleton className="mb-2 h-8 w-16" />
              <Skeleton className="h-3 w-20" />
            </div>
          ))}
        </div>
      );

    case 'text':
      return (
        <div className={cn('space-y-2', className)}>
          {renderItems((i) => (
            <Skeleton key={i} className={cn('h-4', i === count - 1 ? 'w-3/4' : 'w-full')} />
          ))}
        </div>
      );

    case 'metric-card':
      return (
        <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4', className)}>
          {renderItems((i) => (
            <div
              key={i}
              className="bg-card rounded-lg border p-6"
              data-testid="skeleton-metric-card"
            >
              {/* Title */}
              <Skeleton className="mb-4 h-4 w-32" />

              {/* Value and Icon */}
              <div className="mb-4 flex items-center justify-between">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-8 rounded" />
              </div>

              {/* Trend indicator */}
              <div className="flex items-center space-x-2">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
