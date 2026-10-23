import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Bell, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownSeparator,
} from './dropdown';

/**
 * A single notification entry rendered inside the NotificationMenu panel.
 */
export interface NotificationItem {
  /** Stable identifier passed to interaction callbacks */
  id: string;
  /** Primary line of the notification */
  title: string;
  /** Optional secondary text */
  description?: string;
  /** Preformatted relative or absolute time label */
  timestamp?: string;
  /** Whether the notification is unread (drives the badge and unread dot) */
  unread?: boolean;
  /** Visual tone of the unread dot */
  tone?: 'default' | 'info' | 'success' | 'warning' | 'destructive';
}

const notificationTriggerVariants = cva(
  'relative inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200',
        outline:
          'border border-slate-300 bg-transparent text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700',
        ghost: 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200',
      },
      size: {
        sm: 'h-7 w-7 p-1',
        md: 'h-8 w-8 p-1.5',
        lg: 'h-9 w-9 p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const toneDotClasses: Record<NonNullable<NotificationItem['tone']>, string> = {
  default: 'bg-slate-500 dark:bg-slate-300',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  destructive: 'bg-destructive',
};

export interface NotificationMenuProps
  extends VariantProps<typeof notificationTriggerVariants> {
  /** Notification entries to render in the panel */
  notifications: NotificationItem[];
  /** Control the open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Callback when a notification row is clicked */
  onNotificationClick?: (notification: NotificationItem) => void;
  /** Callback when a single notification is marked as read */
  onMarkAsRead?: (id: string) => void;
  /** Callback when the user marks every notification as read */
  onMarkAllAsRead?: () => void;
  /** Callback when a single notification is dismissed */
  onDismiss?: (id: string) => void;
  /** Panel alignment relative to the trigger */
  align?: 'start' | 'center' | 'end';
  /** Panel side relative to the trigger */
  side?: 'top' | 'bottom';
  /** Max height of the scrollable notification list (CSS value) */
  maxHeight?: number | string;
  /** Custom content when there are no notifications */
  emptyState?: React.ReactNode;
  /** Accessible name for the bell trigger */
  ariaLabelText?: string;
  /** Additional CSS classes for the root */
  className?: string;
  /** Disable the trigger */
  disabled?: boolean;
}

const formatBadge = (count: number) => (count > 99 ? '99+' : String(count));

/**
 * NotificationMenu — a bell button with an unread badge that opens a dropdown
 * panel of notifications with per-item mark-as-read, dismiss, and a
 * mark-all-read action. State stays controlled: the notifications array is
 * data-in, callbacks are data-out.
 *
 * @example
 * ```tsx
 * <NotificationMenu
 *   notifications={[
 *     { id: '1', title: 'Deploy finished', timestamp: '2m ago', unread: true },
 *     { id: '2', title: 'Backup failed', tone: 'destructive', unread: true },
 *   ]}
 *   onMarkAsRead={(id) => console.log('read', id)}
 *   onMarkAllAsRead={() => console.log('all read')}
 *   onDismiss={(id) => console.log('dismiss', id)}
 * />
 * ```
 */
export const NotificationMenu = React.forwardRef<HTMLButtonElement, NotificationMenuProps>(
  (
    {
      notifications,
      open,
      onOpenChange,
      onNotificationClick,
      onMarkAsRead,
      onMarkAllAsRead,
      onDismiss,
      align = 'end',
      side = 'bottom',
      maxHeight = 320,
      emptyState,
      ariaLabelText = 'Notifications',
      className,
      variant,
      size,
      disabled = false,
    },
    ref
  ) => {
    const unreadCount = notifications.filter((n) => n.unread).length;
    const triggerLabel =
      unreadCount > 0
        ? `${ariaLabelText}, ${unreadCount} unread`
        : ariaLabelText;

    return (
      <Dropdown
        {...(open !== undefined && { open })}
        {...(onOpenChange && { onOpenChange })}
      >
        <DropdownTrigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            aria-label={triggerLabel}
            className={cn(
              notificationTriggerVariants({ variant, size }),
              disabled && 'cursor-not-allowed opacity-50',
              className
            )}
          >
            <Bell className="h-full w-full" aria-hidden="true" />
            {unreadCount > 0 && (
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -right-1 -top-1 inline-flex min-w-[1.1rem] items-center justify-center rounded-full bg-destructive px-1 text-[0.6rem] font-semibold leading-4 text-white'
                )}
              >
                {formatBadge(unreadCount)}
              </span>
            )}
          </button>
        </DropdownTrigger>

        <DropdownContent
          align={align}
          side={side}
          className="w-80 p-0"
        >
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Notifications
            </span>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkAllAsRead?.();
                }}
                className="rounded text-xs font-medium text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Mark all as read
              </button>
            )}
          </div>
          <DropdownSeparator />

          {notifications.length === 0 ? (
            <div className="px-3 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
              {emptyState ?? 'No notifications'}
            </div>
          ) : (
            <ul
              role="list"
              className="divide-y divide-slate-100 overflow-y-auto dark:divide-slate-700"
              style={{ maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }}
            >
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={cn(
                    'flex w-full items-start gap-2 px-3 py-2.5 text-left transition-colors',
                    onNotificationClick &&
                      'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50'
                  )}
                  {...(onNotificationClick && {
                    role: 'button',
                    tabIndex: 0,
                    onClick: () => { onNotificationClick(notification); },
                    onKeyDown: (e: React.KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNotificationClick(notification);
                      }
                    },
                  })}
                  data-unread={notification.unread ? 'true' : 'false'}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-1.5 h-2 w-2 shrink-0 rounded-full',
                      notification.unread
                        ? toneDotClasses[notification.tone ?? 'default']
                        : 'bg-transparent'
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className={cn(
                          'truncate text-sm',
                          notification.unread
                            ? 'font-semibold text-slate-900 dark:text-slate-100'
                            : 'font-medium text-slate-600 dark:text-slate-400'
                        )}
                      >
                        {notification.title}
                      </span>
                      {notification.timestamp && (
                        <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
                          {notification.timestamp}
                        </span>
                      )}
                    </div>
                    {notification.description && (
                      <p className="mt-0.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                        {notification.description}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-0.5">
                    {notification.unread && (
                      <button
                        type="button"
                        aria-label={`Mark "${notification.title}" as read`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onMarkAsRead?.(notification.id);
                        }}
                        className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                    <button
                      type="button"
                      aria-label={`Dismiss "${notification.title}"`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onDismiss?.(notification.id);
                      }}
                      className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                    >
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </DropdownContent>
      </Dropdown>
    );
  }
);

NotificationMenu.displayName = 'NotificationMenu';

export { notificationTriggerVariants };
