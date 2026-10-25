import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
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
declare const notificationTriggerVariants: (props?: ({
    variant?: "default" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface NotificationMenuProps extends VariantProps<typeof notificationTriggerVariants> {
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
export declare const NotificationMenu: React.ForwardRefExoticComponent<NotificationMenuProps & React.RefAttributes<HTMLButtonElement>>;
export { notificationTriggerVariants };
//# sourceMappingURL=notification-menu.d.ts.map