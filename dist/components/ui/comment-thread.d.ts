import * as React from 'react';
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
export interface CommentThreadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
export declare const CommentThread: React.ForwardRefExoticComponent<CommentThreadProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=comment-thread.d.ts.map