import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';
import { render, screen, within, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { KanbanBoard, type KanbanColumn, type KanbanCardMove } from './kanban-board';

/**
 * jsdom has no PointerEvent constructor; this carries the one extra field
 * (pointerId) the board's handlers read beyond MouseEvent.
 */
class PointerEventPolyfill extends MouseEvent {
  pointerId: number;
  constructor(type: string, init: MouseEventInit & { pointerId?: number } = {}) {
    super(type, init);
    this.pointerId = init.pointerId ?? 0;
  }
}

/**
 * jsdom also lacks document.elementsFromPoint. Tests stub it to return a
 * fixed hit target so intentFromPoint resolves against a real DOM element.
 */
let hitTarget: HTMLElement | null = null;
beforeAll(() => {
  Object.defineProperty(document, 'elementsFromPoint', {
    configurable: true,
    writable: true,
    value: () => (hitTarget ? [hitTarget] : []),
  });
});
afterEach(() => {
  hitTarget = null;
});

const columns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    cards: [
      { id: 'c1', title: 'Research competitors' },
      { id: 'c2', title: 'Draft landing page', labels: ['design'], meta: '3 points' },
    ],
  },
  {
    id: 'doing',
    title: 'In Progress',
    accentColor: 'hsl(191 90% 45%)',
    cards: [{ id: 'c3', title: 'Build kanban board' }],
  },
  { id: 'done', title: 'Done', cards: [] },
];

function renderBoard(props: Partial<React.ComponentProps<typeof KanbanBoard>> = {}) {
  return render(<KanbanBoard columns={columns} {...props} />);
}

function cardEl(title: string): HTMLElement {
  const el = screen.getByText(title).closest<HTMLElement>('[data-kanban-card]');
  if (!el) throw new Error(`card not found: ${title}`);
  return el;
}

function firstMove(spy: ReturnType<typeof vi.fn>): KanbanCardMove {
  const call = spy.mock.calls[0]?.[0] as KanbanCardMove | undefined;
  if (!call) throw new Error('onCardMove was not called');
  return call;
}

describe('KanbanBoard', () => {
  it('renders every column with its title', () => {
    renderBoard();

    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });

  it('renders every card title, labels, and meta', () => {
    renderBoard();

    expect(screen.getByText('Research competitors')).toBeInTheDocument();
    expect(screen.getByText('Draft landing page')).toBeInTheDocument();
    expect(screen.getByText('design')).toBeInTheDocument();
    expect(screen.getByText('3 points')).toBeInTheDocument();
  });

  it('renders members as avatar initials', () => {
    render(
      <KanbanBoard
        columns={[
          {
            id: 'col',
            title: 'Column',
            cards: [{ id: 'm1', title: 'Card with members', members: [{ name: 'Ola' }] }],
          },
        ]}
      />
    );

    // Avatar renders the name's initials ("Ola" -> "OL"), not the full name.
    expect(screen.getByText('OL')).toBeInTheDocument();
  });

  it('labels columns as regions with their card counts', () => {
    renderBoard();

    expect(screen.getByRole('region', { name: 'To Do, 2 cards' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'In Progress, 1 cards' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Done, 0 cards' })).toBeInTheDocument();
  });

  it('renders skeleton columns instead of content while loading', () => {
    renderBoard({ loading: true, loadingColumnCount: 2 });

    expect(screen.queryByText('To Do')).not.toBeInTheDocument();
    expect(screen.queryByText('Research competitors')).not.toBeInTheDocument();
  });

  it('fires onCardClick when a card is clicked', async () => {
    const user = userEvent.setup();
    const onCardClick = vi.fn();
    renderBoard({ onCardClick });

    await user.click(cardEl('Research competitors'));

    expect(onCardClick).toHaveBeenCalledWith(expect.objectContaining({ id: 'c1' }), 'todo');
  });

  it('fires onCardClick via Enter on a focused card', async () => {
    const user = userEvent.setup();
    const onCardClick = vi.fn();
    renderBoard({ onCardClick });

    cardEl('Build kanban board').focus();
    await user.keyboard('{Enter}');

    expect(onCardClick).toHaveBeenCalledWith(expect.objectContaining({ id: 'c3' }), 'doing');
  });

  it('fires onAddCard with the column id', async () => {
    const user = userEvent.setup();
    const onAddCard = vi.fn();
    renderBoard({ onAddCard });

    const done = screen.getByRole('region', { name: 'Done, 0 cards' });
    await user.click(within(done).getByRole('button', { name: /add card/i }));

    expect(onAddCard).toHaveBeenCalledWith('done');
  });

  it('hides the add-card button when no handler is given', () => {
    renderBoard();

    expect(screen.queryByRole('button', { name: /add card/i })).not.toBeInTheDocument();
  });

  // ---- keyboard drag ----

  it('grabs a card with Space and announces the drag in its label', async () => {
    const user = userEvent.setup();
    renderBoard();

    const card = cardEl('Research competitors');
    card.focus();
    await user.keyboard(' ');

    expect(card).toHaveAccessibleName(/moving\. arrow keys to reposition/i);
  });

  it('moving nowhere reports nothing (grab then drop in place)', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Research competitors').focus();
    await user.keyboard(' ');
    await user.keyboard(' ');

    expect(onCardMove).not.toHaveBeenCalled();
  });

  it('steps a card right within its column with Space ArrowRight Space', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Research competitors').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowRight}');
    await user.keyboard(' ');

    expect(onCardMove).toHaveBeenCalledTimes(1);
    const move = firstMove(onCardMove);
    expect(move.card.id).toBe('c1');
    expect(move.sourceColumnId).toBe('todo');
    expect(move.targetColumnId).toBe('todo');
    // c1 lands after c2: splice index 1 once c1 is removed.
    expect(move.targetIndex).toBe(1);
    expect(move.method).toBe('keyboard');
  });

  it('repeated arrows keep stepping in the same direction', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Research competitors').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowRight}'); // after c2
    await user.keyboard('{ArrowRight}'); // end of In Progress (next column)
    await user.keyboard(' ');

    const move = firstMove(onCardMove);
    expect(move.targetColumnId).toBe('doing');
    expect(move.targetIndex).toBe(1);
  });

  it('moves the last card of a column into the next column', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Draft landing page').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowRight}');
    await user.keyboard(' ');

    const move = firstMove(onCardMove);
    expect(move.card.id).toBe('c2');
    expect(move.targetColumnId).toBe('doing');
    expect(move.targetIndex).toBe(1); // after c3
  });

  it('moves a card left into the previous column', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Build kanban board').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowLeft}');
    await user.keyboard(' ');

    const move = firstMove(onCardMove);
    expect(move.card.id).toBe('c3');
    expect(move.targetColumnId).toBe('todo');
    expect(move.targetIndex).toBe(2); // end of To Do
  });

  it('moves a card into an empty column at the board edge', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Build kanban board').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowRight}');
    await user.keyboard(' ');

    const move = firstMove(onCardMove);
    expect(move.targetColumnId).toBe('done');
    expect(move.targetIndex).toBe(0);
  });

  it('ArrowLeft at the left board edge is a no-op', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    cardEl('Research competitors').focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowLeft}');
    await user.keyboard(' ');

    expect(onCardMove).not.toHaveBeenCalled();
  });

  it('Escape cancels a keyboard drag without reporting a move', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    const card = cardEl('Research competitors');
    card.focus();
    await user.keyboard(' ');
    await user.keyboard('{ArrowRight}');
    await user.keyboard('{Escape}');

    expect(onCardMove).not.toHaveBeenCalled();
    expect(card).toHaveAccessibleName(/space to move\.?$/i);
  });

  // ---- move menu ----

  it('moves a card to another column via the move menu', async () => {
    const user = userEvent.setup();
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    await user.click(
      within(cardEl('Research competitors')).getByRole('button', { name: /move card to/i })
    );

    const menu = screen.getByRole('menu', { name: 'Move card to' });
    await user.click(within(menu).getByRole('menuitem', { name: 'Done' }));

    expect(onCardMove).toHaveBeenCalledTimes(1);
    const move = firstMove(onCardMove);
    expect(move.card.id).toBe('c1');
    expect(move.sourceColumnId).toBe('todo');
    expect(move.targetColumnId).toBe('done');
    expect(move.targetIndex).toBe(0);
    expect(move.method).toBe('menu');
  });

  it('omits the current column from the move menu', async () => {
    const user = userEvent.setup();
    renderBoard();

    await user.click(
      within(cardEl('Research competitors')).getByRole('button', { name: /move card to/i })
    );

    const menu = screen.getByRole('menu', { name: 'Move card to' });
    expect(within(menu).queryByRole('menuitem', { name: 'To Do' })).not.toBeInTheDocument();
    expect(within(menu).getByRole('menuitem', { name: 'In Progress' })).toBeInTheDocument();
    expect(within(menu).getByRole('menuitem', { name: 'Done' })).toBeInTheDocument();
  });

  it('closes the move menu on Escape', async () => {
    const user = userEvent.setup();
    renderBoard();

    await user.click(
      within(cardEl('Research competitors')).getByRole('button', { name: /move card to/i })
    );
    expect(screen.getByRole('menu')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders no move menu when the board has a single column', () => {
    render(
      <KanbanBoard
        columns={[{ id: 'solo', title: 'Only', cards: [{ id: 'c1', title: 'Lone card' }] }]}
      />
    );

    expect(screen.queryByRole('button', { name: /move card to/i })).not.toBeInTheDocument();
  });

  // ---- pointer drag ----

  function pointerDragOver(from: HTMLElement, to: HTMLElement, clientY: number) {
    // jsdom rects are all zero; give the target a real box so the
    // before/after midpoint split is deterministic.
    vi.spyOn(to, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      width: 200,
      height: 20,
      right: 200,
      bottom: 20,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    hitTarget = to;
    act(() => {
      from.dispatchEvent(
        new PointerEventPolyfill('pointerdown', { button: 0, pointerId: 1, bubbles: true })
      );
    });
    act(() => {
      from.dispatchEvent(
        new PointerEventPolyfill('pointermove', {
          pointerId: 1,
          bubbles: true,
          clientX: 100,
          clientY,
        })
      );
    });
  }

  function pointerRelease(from: HTMLElement) {
    act(() => {
      from.dispatchEvent(
        new PointerEventPolyfill('pointerup', { pointerId: 1, bubbles: true })
      );
    });
  }

  it('reports a pointer drop before another card', () => {
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    const drag = cardEl('Research competitors');
    pointerDragOver(drag, cardEl('Build kanban board'), 4); // top half → before
    pointerRelease(drag);

    expect(onCardMove).toHaveBeenCalledTimes(1);
    const move = firstMove(onCardMove);
    expect(move.card.id).toBe('c1');
    expect(move.sourceColumnId).toBe('todo');
    expect(move.targetColumnId).toBe('doing');
    expect(move.targetIndex).toBe(0);
    expect(move.method).toBe('pointer');
  });

  it('reports a pointer drop after another card (bottom half)', () => {
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    const drag = cardEl('Research competitors');
    pointerDragOver(drag, cardEl('Build kanban board'), 16); // bottom half → after
    pointerRelease(drag);

    const move = firstMove(onCardMove);
    expect(move.targetColumnId).toBe('doing');
    expect(move.targetIndex).toBe(1);
  });

  it('shows a drop indicator while hovering a target card', () => {
    renderBoard();

    const drag = cardEl('Research competitors');
    pointerDragOver(drag, cardEl('Build kanban board'), 4);

    expect(document.querySelector('[data-drop-indicator="before"]')).not.toBeNull();

    pointerRelease(drag);
  });

  it('highlights the drop-target column while dragging over it', () => {
    renderBoard();

    const drag = cardEl('Research competitors');
    pointerDragOver(drag, cardEl('Build kanban board'), 4);

    const column = screen.getByRole('region', { name: /In Progress/ });
    expect(column.className).toContain('border-primary');

    pointerRelease(drag);
  });

  it('a press without movement commits nothing', () => {
    const onCardMove = vi.fn();
    renderBoard({ onCardMove });

    const card = cardEl('Research competitors');
    act(() => {
      card.dispatchEvent(
        new PointerEventPolyfill('pointerdown', { button: 0, pointerId: 1, bubbles: true })
      );
      card.dispatchEvent(
        new PointerEventPolyfill('pointerup', { pointerId: 1, bubbles: true })
      );
    });

    expect(onCardMove).not.toHaveBeenCalled();
  });

  // ---- customization ----

  it('supports custom labels for localization', () => {
    renderBoard({
      onAddCard: () => undefined,
      addCardLabel: 'Neue Karte',
      labels: { card: 'Karte', moveTo: 'Verschieben nach' },
    });

    const todo = screen.getByRole('region', { name: /To Do/ });
    expect(within(todo).getByRole('button', { name: /neue karte/i })).toBeInTheDocument();
    expect(
      within(cardEl('Research competitors')).getByRole('button', {
        name: /verschieben nach/i,
      })
    ).toBeInTheDocument();
  });

  it('styles highlighted cards with the warning accent', () => {
    render(
      <KanbanBoard
        columns={[
          {
            id: 'col',
            title: 'Column',
            cards: [{ id: 'urgent', title: 'Overdue card', highlighted: true }],
          },
        ]}
      />
    );

    expect(cardEl('Overdue card').className).toContain('border-warning');
  });
});
