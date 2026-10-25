import * as React from 'react';
/** Actor shown beside an event (drives the Avatar and name). */
export interface TimelineActor {
    /** Actor's display name. */
    name: string;
    /** Optional avatar image URL. */
    avatarUrl?: string;
}
export type TimelineTone = 'default' | 'info' | 'success' | 'warning' | 'danger';
/** A single entry on the timeline. */
export interface TimelineEvent {
    /** Stable id (React key). */
    id: string;
    /** Primary text (what happened). */
    title: string;
    /** Optional supporting text below the title. */
    description?: string;
    /**
     * Preformatted timestamp text ("2h ago") or a Date rendered via Intl.
     * Only Date timestamps participate in day grouping.
     */
    timestamp?: string | Date;
    /** Optional actor shown with the event. */
    actor?: TimelineActor;
    /** Optional Lucide icon rendered in the event marker. */
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** Marker accent (default 'default'). */
    tone?: TimelineTone;
}
export interface TimelineLabels {
    /** Accessible name for the feed (default "Activity"). */
    timeline: string;
    /** Load-more button text. */
    loadMore: string;
    /** Announcement while fetching the next page. */
    loadingMore: string;
    /** Header for today's group (default "Today"). */
    today: string;
    /** Header for yesterday's group (default "Yesterday"). */
    yesterday: string;
    /** Empty-state heading. */
    emptyTitle: string;
    /** Empty-state description. */
    emptyDescription: string;
}
export interface TimelineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    /** Events in chronological order (oldest first is typical). */
    events: TimelineEvent[];
    /** Insert a header whenever the calendar day changes (default true). */
    groupByDay?: boolean;
    /** Locale passed to Intl formatters (default host locale). */
    locale?: string;
    /** Show skeleton entries instead of the feed. */
    loading?: boolean;
    /** Number of skeleton entries (default 4). */
    loadingCount?: number;
    /** More pages exist behind `onLoadMore`. */
    hasMore?: boolean;
    /** A page fetch is in flight; disables the trigger. */
    loadingMore?: boolean;
    /** Fetch the next page. */
    onLoadMore?: () => void;
    /** How the next page is requested: explicit button or automatic scroll (default 'button'). */
    loadMoreTrigger?: 'button' | 'auto';
    /** Makes each event a button that fires with the event payload. */
    onEventClick?: (event: TimelineEvent) => void;
    /** Accessible labels, overridable for localization. */
    labels?: Partial<TimelineLabels>;
}
/**
 * Timeline — a vertical activity feed: one marker per event (icon + tone),
 * actor avatars, timestamps, day grouping, and paginated loading via a
 * load-more button or automatic infinite scroll. Use it for audit logs,
 * deployment history, and notification history; pair with EmptyState-driven
 * empty skeletons while data loads.
 *
 * The feed is a WAI-ARIA list (role="list"/"listitem") with an accessible
 * name, aria-busy during page fetches, and a polite live region announcing
 * load-more activity.
 */
export declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
/** Alias kept for the ActivityFeed name used across task docs. */
export declare const ActivityFeed: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
export declare const timelineMarkerVariants: (props?: ({
    tone?: "default" | "success" | "warning" | "info" | "danger" | null | undefined;
    withIcon?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
//# sourceMappingURL=timeline.d.ts.map