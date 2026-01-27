import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';

const statusDotVariants = cva('h-2.5 w-2.5 rounded-full', {
  variants: {
    status: {
      online: 'bg-emerald-500',
      offline: 'bg-slate-400',
      connecting: 'bg-amber-500',
      error: 'bg-rose-500',
    },
    animate: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    status: 'offline',
    animate: false,
  },
});

export interface ConnectionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The current connection status */
  status: 'online' | 'offline' | 'connecting' | 'error';
  /** Label to display next to the indicator */
  label?: string;
  /** Whether to show the pulse animation */
  pulse?: boolean;
  /** Display as a badge instead of plain text */
  asBadge?: boolean;
  /** Show the label (default: true) */
  showLabel?: boolean;
}

/**
 * ConnectionStatus component to indicate real-time connectivity state.
 * Use for server status, WebSocket connections, or heartbeat indicators.
 */
export function ConnectionStatus({
  status,
  label,
  pulse,
  asBadge = false,
  showLabel = true,
  className,
  ...props
}: ConnectionStatusProps) {
  const defaultLabels = {
    online: 'Online',
    offline: 'Offline',
    connecting: 'Connecting...',
    error: 'Error',
  };

  const displayLabel = label || defaultLabels[status];
  const shouldPulse = pulse ?? (status === 'online' || status === 'connecting');

  if (asBadge) {
    const badgeVariants = {
      online: 'success',
      offline: 'secondary',
      connecting: 'warning',
      error: 'destructive',
    } as const;

    return (
      <Badge variant={badgeVariants[status]} className={cn('gap-1.5', className)} {...props}>
        <span
          className={cn(statusDotVariants({ status, animate: shouldPulse }), 'h-2 w-2')}
          aria-hidden="true"
        />
        {showLabel && <span>{displayLabel}</span>}
      </Badge>
    );
  }

  return (
    <div className={cn('flex items-center gap-2 text-sm', className)} {...props}>
      <span
        className={cn(statusDotVariants({ status, animate: shouldPulse }))}
        aria-hidden="true"
      />
      {showLabel && (
        <span
          className={cn(
            'font-medium',
            status === 'online' && 'text-emerald-700 dark:text-emerald-400',
            status === 'offline' && 'text-slate-600 dark:text-slate-400',
            status === 'connecting' && 'text-amber-700 dark:text-amber-400',
            status === 'error' && 'text-rose-700 dark:text-rose-400'
          )}
        >
          {displayLabel}
        </span>
      )}
    </div>
  );
}
