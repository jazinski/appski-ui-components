import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Card } from './card';

const metricCardVariants = cva(
  'relative overflow-hidden transition-all duration-200 hover:shadow-md',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground border-border',
        emerald: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800',
        blue: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
        purple: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
        amber: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800',
        rose: 'bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconVariants = cva('flex items-center justify-center rounded-full p-2', {
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground',
      emerald: 'text-emerald-600 dark:text-emerald-400 bg-white/50 dark:bg-emerald-900/30',
      blue: 'text-blue-600 dark:text-blue-400 bg-white/50 dark:bg-blue-900/30',
      purple: 'text-purple-600 dark:text-purple-400 bg-white/50 dark:bg-purple-900/30',
      amber: 'text-amber-600 dark:text-amber-400 bg-white/50 dark:bg-amber-900/30',
      rose: 'text-rose-600 dark:text-rose-400 bg-white/50 dark:bg-rose-900/30',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const valueVariants = cva('text-2xl font-bold tracking-tight', {
  variants: {
    variant: {
      default: 'text-foreground',
      emerald: 'text-emerald-900 dark:text-emerald-100',
      blue: 'text-blue-900 dark:text-blue-100',
      purple: 'text-purple-900 dark:text-purple-100',
      amber: 'text-amber-900 dark:text-amber-100',
      rose: 'text-rose-900 dark:text-rose-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const labelVariants = cva('text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-muted-foreground',
      emerald: 'text-emerald-600 dark:text-emerald-400',
      blue: 'text-blue-600 dark:text-blue-400',
      purple: 'text-purple-600 dark:text-purple-400',
      amber: 'text-amber-600 dark:text-amber-400',
      rose: 'text-rose-600 dark:text-rose-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface MetricCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof metricCardVariants> {
  /** The icon to display */
  icon?: React.ReactNode;
  /** The main numeric or text value */
  value: string | number;
  /** The label describing the value */
  label: string;
  /** Optional trend indicator (e.g. "+5%") */
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
}

/**
 * MetricCard component for displaying statistics and key performance indicators.
 * Supports various color themes and layouts.
 */
export function MetricCard({
  className,
  variant,
  icon,
  value,
  label,
  trend,
  ...props
}: MetricCardProps) {
  return (
    <Card className={cn(metricCardVariants({ variant, className }))} {...props}>
      <div className="p-6 flex items-start justify-between space-x-4">
        <div className="space-y-1">
          <p className={cn(valueVariants({ variant }))}>{value}</p>
          <p className={cn(labelVariants({ variant }))}>{label}</p>
          
          {trend && (
            <div className="flex items-center text-xs mt-2 space-x-1">
              <span
                className={cn(
                  'font-medium',
                  trend.direction === 'up' && 'text-emerald-600 dark:text-emerald-400',
                  trend.direction === 'down' && 'text-rose-600 dark:text-rose-400',
                  trend.direction === 'neutral' && 'text-slate-500'
                )}
              >
                {trend.value}
              </span>
              {trend.label && (
                <span className="text-slate-500 dark:text-slate-400">
                  {trend.label}
                </span>
              )}
            </div>
          )}
        </div>
        
        {icon && (
          <div className={cn(iconVariants({ variant }))}>
            <div className="h-6 w-6">
              {icon}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
