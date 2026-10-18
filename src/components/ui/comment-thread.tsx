import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from './avatar';
import { Button } from './button';
import { Textarea } from './textarea';

/** A value that may or may not be awaited. */
type MaybePromise<T> = T | Promise<T>;

export interface CommentThreadLabels {
  /** Accessible name for the thread (e.g. "Comments on Task 12"). */
  thread: string;
  /** Textarea placeholder / accessible name for the composer. */
  composerPlaceholder: string;
  /** Submit button text (used as its aria-label). */
  submit: string;
}

export interface CommentAuthor {
  /** Author's display name. */
  name: string;
  /** Optional avatar image URL. */
  avatarUrl?: string;
}

export interface ThreadComment {
  /** Stable id. */
  id: string;
  /** Author of the comment. */
  author: CommentAuthor;
  /** Body text (plain text, whitespace preserved). */
  body: string;
  /** Timestamp text ("2h ago") or a Date rendered with toLocaleString. */
  timestamp?: string | Date;
}

export interface CommentThreadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Comments in chronological order. */
  comments: ThreadComment[];
  /**
   * Fires when the composer submits. Return a promise to drive the button's
   * pending state; the composer clears only after it resolves.
   */
  onSubmitComment?: (body: string) => MaybePromise<void>;
  /** Current user — drives the composer avatar and own-comment alignment. */
  currentUser?: CommentAuthor;
  /** Show skeleton comments while loading. */
  loading?: boolean;
  /** Number of skeleton comments (default 3). */
  loadingCount?: number;
  /** Disable the composer (e.g. read-only viewer). */
  disabled?: boolean;
  /** Accessible labels, overridable for localization. */
  labels?: Partial<CommentThreadLabels>;
}

const commentRowVariants = cva('flex gap-3', {
  variants: {
    side: {
      start: 'flex-row',
      end: 'flex-row-reverse',
    },
  },
  defaultVariants: { side: 'start' },
});

const bubbleVariants = cva('flex min-w-0 flex-1 flex-col gap-0.5 rounded-lg border p-3', {
  variants: {
    own: {
      true: 'border-primary/30 bg-primary/5',
      false: 'border-border bg-card',
    },
  },
  defaultVariants: { own: false },
});

const defaultLabels: CommentThreadLabels = {
  thread: 'Comments',
  composerPlaceholder: 'Write a comment…',
  submit: 'Comment',
};

function formatTime(timestamp: string | Date): string {
  return typeof timestamp === 'string' ? timestamp : timestamp.toLocaleString();
}

function SkeletonComments({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex gap-3" aria-hidden>
          <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-muted" />
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className="h-3 w-24 animate-pulse rounded bg-muted" />
            <div className="h-3 w-full animate-pulse rounded bg-muted" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
          </div>
        </div>
      ))}
    </>
  );
}

/**
 * CommentThread — a chronological comment list with an inline composer; the
 * core of a kanban card's detail view.
 *
 * Comments authored by `currentUser` are right-aligned with a primary-tinted
 * bubble; everyone else reads left-aligned on cards. Submission is
 * async-aware: return a promise from `onSubmitComment` and the submit button
 * shows its pending state while the composer stays locked. Enter submits,
 * Shift+Enter inserts a newline, and empty input is never submitted.
 *
 * @example
 * ```tsx
 * <CommentThread
 *   comments={comments}
 *   currentUser={{ name: 'Chris' }}
 *   onSubmitComment={async (body) => {
 *     await api.addComment(taskId, body);
 *   }}
 * />
 * ```
 */
export const CommentThread = React.forwardRef<HTMLDivElement, CommentThreadProps>(
  (
    {
      comments,
      onSubmitComment,
      currentUser,
      loading = false,
      loadingCount = 3,
      disabled = false,
      labels: labelOverrides,
      className,
      ...props
    },
    ref
  ) => {
    const labels = { ...defaultLabels, ...labelOverrides };

    const [body, setBody] = React.useState('');
    const [pending, setPending] = React.useState(false);
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const canSubmit = body.trim().length > 0 && !pending && !disabled;

    const submit = React.useCallback(async () => {
      if (!canSubmit || !onSubmitComment) return;
      const text = body.trim();
      setPending(true);
      try {
        const result = onSubmitComment(text);
        if (result instanceof Promise) await result;
        setBody('');
      } catch {
        // A failed submit keeps the text so the user can retry; surface the
        // error through your own toast channel.
      } finally {
        setPending(false);
      }
    }, [body, canSubmit, onSubmitComment]);

    return (
      <div ref={ref} className={cn('flex w-full flex-col gap-4', className)} {...props}>
        <ul role="list" aria-label={labels.thread} className="flex flex-col gap-4">
          {loading ? (
            <SkeletonComments count={loadingCount} />
          ) : comments.length === 0 ? (
            <li>
              <p className="text-sm text-muted-foreground">
                No comments yet. Start the conversation.
              </p>
            </li>
          ) : (
            comments.map((comment) => {
              const own = currentUser != null && comment.author.name === currentUser.name;
              return (
                <li key={comment.id}>
                  <div className={commentRowVariants({ side: own ? 'end' : 'start' })}>
                    <Avatar
                      {...(comment.author.avatarUrl ? { src: comment.author.avatarUrl } : {})}
                      name={comment.author.name}
                      alt={comment.author.name}
                      size="sm"
                    />
                    <div className={bubbleVariants({ own })}>
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-medium text-foreground">
                          {comment.author.name}
                        </span>
                        {comment.timestamp && (
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {formatTime(comment.timestamp)}
                          </span>
                        )}
                      </div>
                      <p className="whitespace-pre-wrap break-words text-sm text-foreground">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        {!loading && (
          <div className="flex items-start gap-3">
            {currentUser && (
              <Avatar
                {...(currentUser.avatarUrl ? { src: currentUser.avatarUrl } : {})}
                name={currentUser.name}
                alt={currentUser.name}
                size="sm"
                className="mt-1"
              />
            )}
            <div className="flex min-w-0 flex-1 items-end gap-2">
              <Textarea
                ref={textareaRef}
                value={body}
                onChange={(e) => { setBody(e.target.value); }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    void submit();
                  }
                }}
                placeholder={labels.composerPlaceholder}
                disabled={disabled || pending}
                rows={2}
                aria-label={labels.composerPlaceholder}
                className="min-h-[2.5rem] resize-none"
                wrapperClassName="flex-1"
              />
              <Button
                variant="default"
                size="icon"
                aria-label={labels.submit}
                disabled={!canSubmit}
                onClick={() => void submit()}
                className="shrink-0"
              >
                <Send aria-hidden className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
);
CommentThread.displayName = 'CommentThread';
