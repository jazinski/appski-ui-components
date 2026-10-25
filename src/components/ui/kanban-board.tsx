import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Button } from './button';
import { Skeleton } from './spinner';
import { AvatarGroup, type AvatarGroupItem } from './avatar-group';

/**
 * A drag expressed relative to the board: put card X before/after card Y, or
 * at the end of column Z. Pointer, keyboard, and menu moves all reduce to
 * this shape before being reported through onCardMove.
 */
interface MoveIntent {
  cardId: string;
  /** 'before'/'after' reference a card id; 'end' references a column id. */
  position: 'before' | 'after' | 'end';
  targetId: string;
}

export interface KanbanCardLabels {
  /** Roledescription for a card (screen readers announce "title, card"). */
  card: string;
  /** Heading for the per-card move menu. */
  moveTo: string;
}

export interface KanbanCard {
  /** Stable id — used as the React key and in move callbacks. */
  id: string;
  /** Card title (plain text). */
  title: string;
  /** Optional description shown under the title. */
  description?: string;
  /** Optional label chips rendered above the title. */
  labels?: string[];
  /** Optional assignees rendered as an avatar stack in the card footer. */
  members?: AvatarGroupItem[];
  /** Optional right-side metadata (points, checklists, dates...). */
  meta?: string;
  /** Highlight the card (e.g. overdue, blocked) with a warning ring. */
  highlighted?: boolean;
}

export interface KanbanColumn {
  /** Stable id — used in move callbacks. */
  id: string;
  /** Column heading. */
  title: string;
  /** Optional accent color for the heading dot (any CSS color; defaults to primary). */
  accentColor?: string;
  /** Cards in display order. */
  cards: KanbanCard[];
}

export interface KanbanBoardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Columns (and their cards) in display order. */
  columns: KanbanColumn[];
  /**
   * Fires whenever a card moves (pointer drop, keyboard drop, or the move
   * menu). The board is fully controlled: apply the move to your data and
   * re-render with updated `columns`.
   */
  onCardMove?: (result: KanbanCardMove) => void;
  /** Click on a column's add-card button. */
  onAddCard?: (columnId: string) => void;
  /** Click (or Enter) on a card, e.g. to open a detail panel. */
  onCardClick?: (card: KanbanCard, columnId: string) => void;
  /** Show skeleton columns while data loads. */
  loading?: boolean;
  /** Number of skeleton columns to show while loading (default 3). */
  loadingColumnCount?: number;
  /** Text for the add-card button (default "Add card"). */
  addCardLabel?: string;
  /** Accessible labels, overridable for localization. */
  labels?: Partial<KanbanCardLabels>;
}

export interface KanbanCardMove {
  /** The moved card. */
  card: KanbanCard;
  /** Column the card came from. */
  sourceColumnId: string;
  /** Column the card lands in. */
  targetColumnId: string;
  /**
   * Index within the target column AFTER the card is removed from its old
   * position — apply it as `splice(targetIndex, 0, card)`.
   */
  targetIndex: number;
  /** How the move was triggered. */
  method: 'pointer' | 'keyboard' | 'menu';
}

const columnVariants = cva('flex w-64 shrink-0 flex-col gap-2 rounded-xl border p-3 sm:w-72', {
  variants: {
    draggingOver: {
      true: 'border-primary/60 bg-primary/5',
      false: 'border-border bg-muted/50',
    },
  },
  defaultVariants: { draggingOver: false },
});

const cardVariants = cva(
  'group relative cursor-grab rounded-lg border border-border bg-card p-3 text-left shadow-sm transition-all duration-150 active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      state: {
        idle: 'hover:border-primary/40 hover:shadow-md',
        dragging: 'rotate-[1.5deg] scale-[1.02] opacity-40 shadow-lg',
      },
    },
    defaultVariants: { state: 'idle' },
  }
);

const dropIndicatorVariants = cva('h-1.5 rounded-full bg-primary/70', {
  variants: {
    side: {
      before: 'mb-1',
      after: 'mt-1',
    },
  },
  defaultVariants: { side: 'before' },
});

const defaultLabels: KanbanCardLabels = {
  card: 'card',
  moveTo: 'Move card to',
};

/** Where a card currently sits. */
interface CardLocation {
  column: number;
  index: number;
}

function findCard(columns: KanbanColumn[], cardId: string): CardLocation | null {
  for (let c = 0; c < columns.length; c++) {
    const idx = columns[c]?.cards.findIndex((card) => card.id === cardId) ?? -1;
    if (idx !== -1) return { column: c, index: idx };
  }
  return null;
}

/**
 * Resolve an intent against a board snapshot: which column the card leaves,
 * where it lands, and the splice index that expresses it once the card is
 * removed from its old position. Returns null for unknown ids.
 */
function resolveMove(
  columns: KanbanColumn[],
  intent: MoveIntent
): { sourceColumnId: string; targetColumnId: string; targetIndex: number } | null {
  const source = findCard(columns, intent.cardId);
  if (!source) return null;
  const sourceColumn = columns[source.column];
  if (!sourceColumn) return null;

  if (intent.position === 'end') {
    const target = columns.find((col) => col.id === intent.targetId);
    if (!target) return null;
    // Within the same column the removal shifts indices, so the end is len-1.
    const targetIndex =
      sourceColumn.id === target.id ? target.cards.length - 1 : target.cards.length;
    return { sourceColumnId: sourceColumn.id, targetColumnId: target.id, targetIndex };
  }

  for (const column of columns) {
    const idx = column.cards.findIndex((card) => card.id === intent.targetId);
    if (idx === -1) continue;
    let targetIndex = intent.position === 'before' ? idx : idx + 1;
    if (column.id === sourceColumn.id && targetIndex > source.index) targetIndex -= 1;
    return { sourceColumnId: sourceColumn.id, targetColumnId: column.id, targetIndex };
  }
  return null;
}

/** Apply a resolved move to a board snapshot, immutably. */
function applyMove(
  columns: KanbanColumn[],
  resolved: { sourceColumnId: string; targetColumnId: string; targetIndex: number },
  cardId: string
): KanbanColumn[] {
  const card =
    columns
      .find((col) => col.id === resolved.sourceColumnId)
      ?.cards.find((c) => c.id === cardId) ?? null;
  if (!card) return columns;

  return columns.map((column) => {
    if (column.id === resolved.sourceColumnId && column.id === resolved.targetColumnId) {
      const cards = column.cards.filter((c) => c.id !== cardId);
      cards.splice(resolved.targetIndex, 0, card);
      return { ...column, cards };
    }
    if (column.id === resolved.sourceColumnId) {
      return { ...column, cards: column.cards.filter((c) => c.id !== cardId) };
    }
    if (column.id === resolved.targetColumnId) {
      const cards = [...column.cards];
      cards.splice(resolved.targetIndex, 0, card);
      return { ...column, cards };
    }
    return column;
  });
}

/**
 * The intent that visually moves a card one step right (delta 1) or left
 * (delta -1) on the given board: past its neighbor within the column, or to
 * the end of the adjacent column when it runs past its own column's edge.
 * Returns null at the board's edge.
 */
function neighborIntent(
  columns: KanbanColumn[],
  cardId: string,
  delta: 1 | -1
): MoveIntent | null {
  const loc = findCard(columns, cardId);
  if (!loc) return null;
  const column = columns[loc.column];
  if (!column) return null;

  if (delta === 1) {
    const next = column.cards[loc.index + 1];
    if (next) return { cardId, position: 'after', targetId: next.id };
    const target = columns[loc.column + 1];
    if (target) return { cardId, position: 'end', targetId: target.id };
    return null;
  }

  const prev = column.cards[loc.index - 1];
  if (prev) return { cardId, position: 'before', targetId: prev.id };
  const target = columns[loc.column - 1];
  if (target) return { cardId, position: 'end', targetId: target.id };
  return null;
}

function capturePointerSafe(el: Element, pointerId: number) {
  // jsdom and a few embedded browsers lack pointer capture; without it the
  // drag still works, it just doesn't retarget events outside the element.
  if (typeof el.setPointerCapture === 'function') {
    try {
      el.setPointerCapture(pointerId);
    } catch {
      // Capture can fail for stale pointer ids; not fatal.
    }
  }
}

function releasePointerSafe(el: Element, pointerId: number) {
  if (typeof el.releasePointerCapture === 'function') {
    try {
      el.releasePointerCapture(pointerId);
    } catch {
      // Capture may already be released by the browser.
    }
  }
}

function SkeletonColumns({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="flex w-64 shrink-0 flex-col gap-3 rounded-xl border border-border bg-muted/50 p-3 sm:w-72"
        >
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      ))}
    </>
  );
}

/**
 * KanbanBoard — columns of draggable cards, built as the flagship dogfooding
 * surface for this library's kanban board system.
 *
 * A card can be moved three ways, and all three report the same onCardMove
 * event with a ready-to-apply splice index:
 *
 * - Pointer: press and drag a card; a drop indicator previews the slot and
 *   the column highlights while hovering. Release to drop.
 * - Keyboard: focus a card, press Space to grab, ArrowLeft/ArrowRight to
 *   preview the move (the card visually relocates), Space to drop, Escape to
 *   cancel.
 * - Menu: the card's "⋯" button opens a "Move card to" list of other columns.
 *
 * The board is fully controlled — keep `columns` in state, apply the reported
 * move, and pass the new array back down. Moves that would land a card where
 * it already sits report nothing.
 *
 * Semantics follow the WAI-ARIA drag-and-drop pattern: cards are focusable
 * list items with `aria-roledescription`, and `aria-grabbed` marks the card
 * in flight.
 *
 * @example
 * ```tsx
 * const [columns, setColumns] = useState(initialColumns);
 *
 * <KanbanBoard
 *   columns={columns}
 *   onCardMove={(move) =>
 *     setColumns((prev) =>
 *       prev.map((col) => {
 *         if (col.id === move.sourceColumnId && col.id === move.targetColumnId) {
 *           const cards = col.cards.filter((c) => c.id !== move.card.id);
 *           cards.splice(move.targetIndex, 0, move.card);
 *           return { ...col, cards };
 *         }
 *         if (col.id === move.sourceColumnId)
 *           return { ...col, cards: col.cards.filter((c) => c.id !== move.card.id) };
 *         if (col.id === move.targetColumnId) {
 *           const cards = [...col.cards];
 *           cards.splice(move.targetIndex, 0, move.card);
 *           return { ...col, cards };
 *         }
 *         return col;
 *       })
 *     )
 *   }
 *   onAddCard={(columnId) => openComposer(columnId)}
 *   onCardClick={(card) => openDetail(card)}
 * />
 * ```
 */
export const KanbanBoard = React.forwardRef<HTMLDivElement, KanbanBoardProps>(
  (
    {
      columns,
      onCardMove,
      onAddCard,
      onCardClick,
      loading = false,
      loadingColumnCount = 3,
      addCardLabel = 'Add card',
      labels: labelOverrides,
      className,
      ...props
    },
    ref
  ) => {
    const rootRef = React.useRef<HTMLDivElement | null>(null);
    const labels = { ...defaultLabels, ...labelOverrides };

    const commit = (method: KanbanCardMove['method'], intent: MoveIntent) => {
      const resolved = resolveMove(columns, intent);
      if (!resolved) return;
      const source = findCard(columns, intent.cardId);
      // A move that lands the card exactly where it already sits is a no-op.
      if (
        source &&
        resolved.sourceColumnId === resolved.targetColumnId &&
        resolved.targetIndex === source.index
      ) {
        return;
      }
      const card =
        columns
          .find((col) => col.id === resolved.sourceColumnId)
          ?.cards.find((c) => c.id === intent.cardId) ?? null;
      if (!card) return;
      onCardMove?.({
        card,
        sourceColumnId: resolved.sourceColumnId,
        targetColumnId: resolved.targetColumnId,
        targetIndex: resolved.targetIndex,
        method,
      });
    };

    // ---- keyboard drag: uncontrolled preview, commits on drop ----
    // The intent is null until an arrow key actually moves the card, so
    // grabbing never displaces the card by itself.
    const [keyboardDrag, setKeyboardDrag] = React.useState<{
      cardId: string;
      intent: MoveIntent | null;
    } | null>(null);


    // ---- pointer drag: uncontrolled preview, commits on drop ----
    const [pointerDrag, setPointerDrag] = React.useState<MoveIntent | null>(null);
    const lastPointerIntentRef = React.useRef<MoveIntent | null>(null);

    const keyboardIntent = keyboardDrag?.intent ?? null;

    // What the board should look like if the in-flight keyboard move landed.
    // Pointer drags deliberately do NOT reorder the live board: re-parenting
    // the dragged card's DOM node mid-drag would detach the element holding
    // pointer capture (the browser then fires lostpointercapture). Pointer
    // previews use the drop indicator and column highlight instead.
    const previewColumns = React.useMemo(() => {
      if (!keyboardIntent) return columns;
      const resolved = resolveMove(columns, keyboardIntent);
      return resolved ? applyMove(columns, resolved, keyboardIntent.cardId) : columns;
    }, [columns, keyboardIntent]);

    const dragOverColumn = React.useMemo(() => {
      if (!pointerDrag) return null;
      const resolved = resolveMove(columns, pointerDrag);
      return resolved?.targetColumnId ?? null;
    }, [columns, pointerDrag]);

    // A cross-column preview re-parents the card's DOM node, which drops
    // focus to <body> — restore it so the keyboard drag can continue.
    React.useEffect(() => {
      if (!keyboardDrag) return;
      const el = rootRef.current?.querySelector<HTMLElement>(
        `[data-kanban-card="${CSS.escape(keyboardDrag.cardId)}"]`
      );
      if (el && document.activeElement !== el && !el.contains(document.activeElement)) {
        el.focus();
      }
    }, [keyboardDrag, previewColumns]);

    const startKeyboardDrag = (cardId: string) => {
      setKeyboardDrag({ cardId, intent: null });
    };

    const previewKeyboardMove = (cardId: string, delta: 1 | -1) => {
      setKeyboardDrag((prev) => {
        if (prev?.cardId !== cardId) return prev;
        // neighborIntent runs against the previewed board so repeated arrows
        // keep stepping in the same direction.
        const next = neighborIntent(previewColumns, cardId, delta);
        return next ? { cardId, intent: next } : prev;
      });
    };

    const handleCardKeyDown = (
      event: React.KeyboardEvent<HTMLElement>,
      cardId: string,
      columnId: string
    ) => {
      const isDraggingThis = keyboardDrag?.cardId === cardId;
      switch (event.key) {
        case ' ':
          event.preventDefault();
          if (isDraggingThis && keyboardDrag) {
            if (keyboardDrag.intent) commit('keyboard', keyboardDrag.intent);
            setKeyboardDrag(null);
          } else if (!keyboardDrag) {
            startKeyboardDrag(cardId);
          }
          break;
        case 'Escape':
          if (isDraggingThis) {
            event.preventDefault();
            setKeyboardDrag(null);
          }
          break;
        case 'ArrowRight':
          if (isDraggingThis) {
            event.preventDefault();
            previewKeyboardMove(cardId, 1);
          }
          break;
        case 'ArrowLeft':
          if (isDraggingThis) {
            event.preventDefault();
            previewKeyboardMove(cardId, -1);
          }
          break;
        case 'Enter':
          if (!keyboardDrag && onCardClick) {
            event.preventDefault();
            const card = columns
              .find((col) => col.id === columnId)
              ?.cards.find((c) => c.id === cardId);
            if (card) onCardClick(card, columnId);
          }
          break;
        default:
          break;
      }
    };

    const handleCardPointerDown = (event: React.PointerEvent<HTMLElement>, cardId: string) => {
      if (event.button !== 0 || keyboardDrag) return;
      // Dragging starts on the card surface but not from the move menu.
      if ((event.target as HTMLElement).closest('[data-kanban-menu-surface]')) return;
      capturePointerSafe(event.currentTarget, event.pointerId);
      // Empty targetId means "pressing, not yet over anything droppable".
      setPointerDrag({ cardId, position: 'end', targetId: '' });
    };

    const handleCardPointerMove = (event: React.PointerEvent<HTMLElement>) => {
      if (!pointerDrag) return;
      const intent = intentFromPoint(event.clientX, event.clientY, pointerDrag.cardId);
      if (intent) {
        lastPointerIntentRef.current = intent;
        // Mirror the intent into state so the drop indicator and target
        // column highlight render live during the drag.
        setPointerDrag((prev) =>
          prev && prev.targetId === intent.targetId && prev.position === intent.position
            ? prev
            : intent
        );
      }
    };

    const handleCardPointerUp = (event: React.PointerEvent<HTMLElement>) => {
      if (!pointerDrag) return;
      releasePointerSafe(event.currentTarget, event.pointerId);
      const intent = lastPointerIntentRef.current;
      setPointerDrag(null);
      lastPointerIntentRef.current = null;
      if (intent && intent.targetId !== '') commit('pointer', intent);
    };

    const handleCardPointerCancel = (event: React.PointerEvent<HTMLElement>) => {
      if (!pointerDrag) return;
      releasePointerSafe(event.currentTarget, event.pointerId);
      setPointerDrag(null);
      lastPointerIntentRef.current = null;
    };

    const columnsToRender = keyboardIntent ? previewColumns : columns;
    const draggedCardId = keyboardDrag?.cardId ?? pointerDrag?.cardId ?? null;

    return (
      <div
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn('flex items-start gap-4 overflow-x-auto pb-2', className)}
        {...props}
      >
        {loading ? (
          <SkeletonColumns count={loadingColumnCount} />
        ) : (
          columnsToRender.map((column) => {
            const isDragOver = dragOverColumn === column.id && pointerDrag != null;
            return (
              <section
                key={column.id}
                data-kanban-column={column.id}
                aria-label={`${column.title}, ${column.cards.length} cards`}
                className={columnVariants({ draggingOver: isDragOver })}
              >
                <header className="flex items-center gap-2 px-1">
                  <span
                    aria-hidden
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: column.accentColor || 'hsl(var(--primary))' }}
                  />
                  <h3 className="truncate text-sm font-semibold text-foreground">
                    {column.title}
                  </h3>
                  <Badge variant="outline" className="ml-auto shrink-0 tabular-nums">
                    {column.cards.length}
                  </Badge>
                </header>

                <ul className="flex min-h-8 flex-col gap-2 py-1">
                  {column.cards.map((card, index) => {
                    const dragging = draggedCardId === card.id;
                    const showDropBefore =
                      pointerDrag != null &&
                      !dragging &&
                      pointerDrag.position === 'before' &&
                      pointerDrag.targetId === card.id;
                    const showDropAfter =
                      pointerDrag != null &&
                      !dragging &&
                      pointerDrag.position === 'after' &&
                      pointerDrag.targetId === card.id;
                    const isLast = index === column.cards.length - 1;
                    const showDropEnd =
                      pointerDrag != null &&
                      !dragging &&
                      pointerDrag.position === 'end' &&
                      pointerDrag.targetId === column.id &&
                      isLast;
                    return (
                      <React.Fragment key={card.id}>
                        {showDropBefore && (
                          <div
                            aria-hidden
                            data-drop-indicator="before"
                            className={dropIndicatorVariants({ side: 'before' })}
                          />
                        )}
                        <li role="listitem" className="relative">
                          <div
                            role="button"
                            tabIndex={0}
                            aria-roledescription={labels.card}
                            aria-label={
                              dragging
                                ? `${card.title}. Moving. Arrow keys to reposition, Space to drop, Escape to cancel.`
                                : `${card.title}. Space to move.`
                            }
                            data-kanban-card={card.id}
                            data-droppable-card={card.id}
                            onKeyDown={(e) => { handleCardKeyDown(e, card.id, column.id); }}
                            onPointerDown={(e) => { handleCardPointerDown(e, card.id); }}
                            onPointerMove={handleCardPointerMove}
                            onPointerUp={handleCardPointerUp}
                            onPointerCancel={handleCardPointerCancel}
                            onClick={() => onCardClick?.(card, column.id)}
                            className={cn(
                              cardVariants({ state: dragging ? 'dragging' : 'idle' }),
                              card.highlighted &&
                                'border-warning/60 ring-1 ring-inset ring-warning/40'
                            )}
                          >
                            <div
                              data-kanban-menu-surface
                              onClick={(e) => { e.stopPropagation(); }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') e.stopPropagation();
                              }}
                              className="absolute right-1 top-1 opacity-0 transition-opacity duration-150 focus-within:opacity-100 group-hover:opacity-100"
                            >
                              <MoveMenu
                                columns={columns}
                                cardTitle={card.title}
                                currentColumnId={column.id}
                                moveToLabel={labels.moveTo}
                                onSelect={(targetColumnId) => { commit('menu', {
                                    cardId: card.id,
                                    position: 'end',
                                    targetId: targetColumnId,
                                  }); }
                                }
                              />
                            </div>
                            {card.labels && card.labels.length > 0 && (
                              <div className="mb-2 flex flex-wrap gap-1.5">
                                {card.labels.map((label) => (
                                  <Badge key={label} variant="secondary">
                                    {label}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            <div className="pr-6 text-sm font-medium leading-snug text-foreground">
                              {card.title}
                            </div>
                            {card.description && (
                              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                {card.description}
                              </p>
                            )}
                            {(card.members || card.meta) && (
                              <div className="mt-3 flex items-center justify-between gap-2">
                                {card.members && card.members.length > 0 ? (
                                  <AvatarGroup items={card.members} size="xs" maxCount={3} />
                                ) : (
                                  <span />
                                )}
                                {card.meta && (
                                  <span className="text-xs font-medium tabular-nums text-muted-foreground">
                                    {card.meta}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </li>
                        {(showDropAfter || showDropEnd) && (
                          <div
                            aria-hidden
                            data-drop-indicator="after"
                            className={dropIndicatorVariants({ side: 'after' })}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </ul>

                {onAddCard && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-1.5 text-muted-foreground"
                    onClick={() => { onAddCard(column.id); }}
                  >
                    <Plus aria-hidden className="h-4 w-4" />
                    {addCardLabel}
                  </Button>
                )}
              </section>
            );
          })
        )}
      </div>
    );
  }
);
KanbanBoard.displayName = 'KanbanBoard';

/**
 * Turn a viewport point into a drop intent. Cards provide "before/after card
 * X" slots split at their vertical midpoint; a point over a column's chrome
 * or empty area targets "end of column Z". The dragged card is never its own
 * target.
 */
function intentFromPoint(x: number, y: number, cardId: string): MoveIntent | null {
  if (typeof document.elementsFromPoint !== 'function') return null;
  const elements = document.elementsFromPoint(x, y);
  for (const element of elements) {
    const node = element as HTMLElement;
    const cardEl = node.closest<HTMLElement>('[data-droppable-card]');
    const cardTarget = cardEl?.dataset.droppableCard;
    if (cardTarget === cardId) {
      // Still hovering the dragged card itself: keep the last valid intent
      // rather than retargeting to the card's own column end.
      return null;
    }
    if (cardTarget) {
      const rect = cardEl.getBoundingClientRect();
      const before = y < rect.top + rect.height / 2;
      return { cardId, position: before ? 'before' : 'after', targetId: cardTarget };
    }
    const columnEl = node.closest<HTMLElement>('[data-kanban-column]');
    const columnTarget = columnEl?.dataset.kanbanColumn;
    if (columnTarget && columnTarget !== cardId) {
      return { cardId, position: 'end', targetId: columnTarget };
    }
  }
  return null;
}

/**
 * Compact per-card move menu (a visible affordance alongside keyboard drag):
 * "⋯" opens a list of the board's other columns.
 */
function MoveMenu({
  columns,
  cardTitle,
  currentColumnId,
  moveToLabel,
  onSelect,
}: {
  columns: KanbanColumn[];
  cardTitle: string;
  currentColumnId: string;
  moveToLabel: string;
  onSelect: (targetColumnId: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const menuId = React.useId();
  const wrapRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const options = columns.filter((col) => col.id !== currentColumnId);
  if (options.length === 0) return null;

  return (
    <div ref={wrapRef} className="relative">
      <Button
        variant="icon-ghost"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${moveToLabel} (${cardTitle})`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="h-6 w-6"
      >
        <span aria-hidden className="text-base leading-none text-muted-foreground">
          ⋯
        </span>
      </Button>
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label={moveToLabel}
          className="absolute right-0 top-7 z-20 min-w-36 overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-md"
        >
          {options.map((column) => (
            <button
              key={column.id}
              type="button"
              role="menuitem"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                onSelect(column.id);
              }}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-popover-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                aria-hidden
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: column.accentColor || 'hsl(var(--primary))' }}
              />
              {column.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
