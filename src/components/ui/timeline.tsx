import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Avatar } from './avatar';
import { EmptyState } from './empty-state';
import { LoadingButton } from './loading-button';
import { Skeleton } from './spinner';

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
  icon?: React.ComponentType<{ className?: string }>;
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

const markerVariants = cva(
  'relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full',
  {
    variants: {
      tone: {
        default: 'text-muted-foreground',
        info: 'text-sky-600 dark:text-sky-400',
        success: 'text-emerald-600 dark:text-emerald-400',
        warning: 'text-amber-600 dark:text-amber-400',
        danger: 'text-red-600 dark:text-red-400',
      },
      withIcon: {
        true: 'border bg-card shadow-sm',
        false: '',
      },
    },
    defaultVariants: { tone: 'default', withIcon: false },
  }
);

const eventButtonVariants =
  '-mx-2 flex min-w-0 flex-1 flex-col gap-1 rounded-lg px-2 py-1 text-start outline-none transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring';

const defaultLabels: TimelineLabels = {
  timeline: 'Activity',
  loadMore: 'Load more activity',
  loadingMore: 'Loading more activity…',
  today: 'Today',
  yesterday: 'Yesterday',
  emptyTitle: 'No activity yet',
  emptyDescription: 'Events will appear here as they happen.',
};

function dayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

type Row =
  | { kind: 'header'; key: string; label: string }
  | { kind: 'event'; key: string; event: TimelineEvent; isLast: boolean };

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
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  (
    {
      events,
      groupByDay = true,
      locale,
      loading = false,
      loadingCount = 4,
      hasMore = false,
      loadingMore = false,
      onLoadMore,
      loadMoreTrigger = 'button',
      onEventClick,
      labels: labelOverrides,
      className,
      ...props
    },
    ref
  ) => {
    const labels = { ...defaultLabels, ...labelOverrides };

    const timeFormatter = React.useMemo(
      () =>
        locale ? new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' }) : null,
      [locale]
    );
    const fullFormatter = React.useMemo(
      () =>
        locale
          ? new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' })
          : null,
      [locale]
    );
    const dayFormatter = React.useMemo(
      () =>
        locale
          ? new Intl.DateTimeFormat(locale, {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : null,
      [locale]
    );

    const formatTime = (date: Date) =>
      timeFormatter?.format(date) ??
      date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const formatFull = (date: Date) => fullFormatter?.format(date) ?? date.toLocaleString();
    const formatDay = (date: Date) =>
      dayFormatter?.format(date) ??
      date.toLocaleDateString([], {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

    const rows = React.useMemo<Row[]>(() => {
      const out: Row[] = [];
      let lastDay: string | null = null;
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);

      events.forEach((event, index) => {
        const isLast = index === events.length - 1;
        if (groupByDay && event.timestamp instanceof Date) {
          const key = dayKey(event.timestamp);
          if (key !== lastDay) {
            const label =
              key === dayKey(now)
                ? labels.today
                : key === dayKey(yesterday)
                  ? labels.yesterday
                  : formatDay(event.timestamp);
            out.push({ kind: 'header', key: `day-${key}`, label });
            lastDay = key;
          }
        }
        out.push({ kind: 'event', key: event.id, event, isLast });
      });
      return out;
      // Formatters are derived from locale; labels from a spread of overrides.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [events, groupByDay, locale, labels.today, labels.yesterday]);

    const sentinelRef = React.useRef<HTMLDivElement | null>(null);

    // Auto mode: fetch the next page when the sentinel scrolls into view.
    React.useEffect(() => {
      if (loadMoreTrigger !== 'auto' || !hasMore || loadingMore || loading || !onLoadMore) return;
      if (typeof IntersectionObserver === 'undefined') return;
      const node = sentinelRef.current;
      if (!node) return;
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          onLoadMore();
        }
      });
      observer.observe(node);
      return () => {
        observer.disconnect();
      };
    }, [loadMoreTrigger, hasMore, loadingMore, loading, onLoadMore, events.length]);

    const showLoadMoreButton =
      loadMoreTrigger === 'button' &&
      hasMore &&
      !loading &&
      events.length > 0 &&
      Boolean(onLoadMore);

    return (
      <div
        ref={ref}
        className={cn('w-full text-sm', className)}
        aria-busy={loading || loadingMore}
        {...props}
      >
        {loading ? (
          <div className="space-y-6" aria-hidden>
            {Array.from({ length: loadingCount }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-2 pt-1">
                  <Skeleton variant="title" />
                  <Skeleton variant="text" className="w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <EmptyState
            variant="no-data"
            title={labels.emptyTitle}
            description={labels.emptyDescription}
          />
        ) : (
          <ol role="list" aria-label={labels.timeline} className="space-y-0">
            {rows.map((row) =>
              row.kind === 'header' ? (
                <li
                  key={row.key}
                  role="presentation"
                  className="text-muted-foreground py-2 text-xs font-medium tracking-wide uppercase first:pt-0"
                >
                  {row.label}
                </li>
              ) : (
                <li key={row.key} role="listitem" className="relative flex gap-3 pb-6 last:pb-0">
                  {!row.isLast && (
                    <span aria-hidden className="bg-border absolute top-9 bottom-0 left-4 w-px" />
                  )}
                  <span
                    className={cn(
                      markerVariants({ tone: row.event.tone, withIcon: Boolean(row.event.icon) })
                    )}
                  >
                    {row.event.icon ? (
                      <row.event.icon className="h-4 w-4" />
                    ) : (
                      <span className="h-2.5 w-2.5 rounded-full bg-current" />
                    )}
                  </span>
                  {onEventClick ? (
                    <button
                      type="button"
                      className={eventButtonVariants}
                      onClick={() => {
                        onEventClick(row.event);
                      }}
                    >
                      {renderEventBody(row.event, groupByDay, formatTime, formatFull)}
                    </button>
                  ) : (
                    renderEventBody(row.event, groupByDay, formatTime, formatFull)
                  )}
                </li>
              )
            )}
          </ol>
        )}

        {loadMoreTrigger === 'auto' && hasMore && !loading && (
          <div ref={sentinelRef} aria-hidden className="h-px" />
        )}

        {(showLoadMoreButton || loadingMore) && (
          <div aria-live="polite" className="mt-2 flex justify-center">
            {showLoadMoreButton && onLoadMore ? (
              <LoadingButton
                variant="outline"
                size="sm"
                loading={loadingMore}
                loadingText={labels.loadingMore}
                onClick={() => {
                  onLoadMore();
                }}
              >
                {labels.loadMore}
              </LoadingButton>
            ) : (
              <span className="sr-only">{labels.loadingMore}</span>
            )}
          </div>
        )}
      </div>
    );

    function renderEventBody(
      event: TimelineEvent,
      grouped: boolean,
      formatTime: (date: Date) => string,
      formatFull: (date: Date) => string
    ): React.ReactNode {
      const timeText =
        event.timestamp === undefined
          ? null
          : typeof event.timestamp === 'string'
            ? event.timestamp
            : grouped
              ? formatTime(event.timestamp)
              : formatFull(event.timestamp);
      return (
        <div className="min-w-0 flex-1">
          {(event.actor || timeText) && (
            <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              {event.actor && (
                <>
                  <Avatar
                    {...(event.actor.avatarUrl ? { src: event.actor.avatarUrl } : {})}
                    name={event.actor.name}
                    alt={event.actor.name}
                    size="xs"
                  />
                  <span className="text-foreground font-medium">{event.actor.name}</span>
                </>
              )}
              {timeText !== null && (
                <time
                  dateTime={
                    event.timestamp instanceof Date ? event.timestamp.toISOString() : undefined
                  }
                >
                  {timeText}
                </time>
              )}
            </div>
          )}
          <p className="text-foreground mt-0.5 font-medium">{event.title}</p>
          {event.description && <p className="text-muted-foreground mt-0.5">{event.description}</p>}
        </div>
      );
    }
  }
);

Timeline.displayName = 'Timeline';

/** Alias kept for the ActivityFeed name used across task docs. */
export const ActivityFeed = Timeline;

export const timelineMarkerVariants = markerVariants;
