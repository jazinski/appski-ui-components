import { AvatarGroupItem } from './avatar-group';
import * as React from 'react';
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
export interface KanbanBoardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
export declare const KanbanBoard: React.ForwardRefExoticComponent<KanbanBoardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=kanban-board.d.ts.map