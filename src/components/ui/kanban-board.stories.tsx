import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KanbanBoard, type KanbanColumn, type KanbanCardMove } from './kanban-board';

const initialColumns: KanbanColumn[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    cards: [
      {
        id: 'b1',
        title: 'Support multiple boards per project',
        description: 'Boards switcher in the sidebar, per-board column presets.',
      },
      {
        id: 'b2',
        title: 'Card templates',
        labels: ['feature'],
        meta: '5 pts',
      },
      {
        id: 'b3',
        title: 'Fix scroll locking on Safari',
        labels: ['bug'],
        highlighted: true,
        meta: '2 pts',
      },
    ],
  },
  {
    id: 'todo',
    title: 'To Do',
    accentColor: 'hsl(217 91% 60%)',
    cards: [
      {
        id: 't1',
        title: 'Design the card detail drawer',
        labels: ['design'],
        members: [{ name: 'Alex Blanc' }, { name: 'Chris Jazinski' }],
      },
      { id: 't2', title: 'Wire up the Vikunja sync worker', meta: '3 pts' },
    ],
  },
  {
    id: 'doing',
    title: 'In Progress',
    accentColor: 'hsl(191 90% 45%)',
    cards: [
      {
        id: 'd1',
        title: 'Dogfood KanbanBoard in the household board',
        description: 'Move real chores across columns for a week and note the friction.',
        members: [{ name: 'Ola Wiśniewska' }],
        meta: '8 pts',
      },
    ],
  },
  { id: 'done', title: 'Done', accentColor: 'hsl(142 76% 36%)', cards: [
    { id: 'x1', title: 'Pick the component list for v1', meta: '1 pt' },
  ] },
];

function useBoardState() {
  const [columns, setColumns] = React.useState(initialColumns);
  const [lastMove, setLastMove] = React.useState<string | null>(null);

  const onCardMove = React.useCallback((move: KanbanCardMove) => {
    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === move.sourceColumnId && col.id === move.targetColumnId) {
          const cards = col.cards.filter((c) => c.id !== move.card.id);
          cards.splice(move.targetIndex, 0, move.card);
          return { ...col, cards };
        }
        if (col.id === move.sourceColumnId)
          return { ...col, cards: col.cards.filter((c) => c.id !== move.card.id) };
        if (col.id === move.targetColumnId) {
          const cards = [...col.cards];
          cards.splice(move.targetIndex, 0, move.card);
          return { ...col, cards };
        }
        return col;
      })
    );
    setLastMove(
      `${move.card.title}: ${move.sourceColumnId} → ${move.targetColumnId}[${move.targetIndex}] (${move.method})`
    );
  }, []);

  return { columns, onCardMove, lastMove };
}

const meta: Meta<typeof KanbanBoard> = {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Columns of draggable cards — the flagship dogfooding surface for the kanban
board system. Cards move three ways, all reporting the same controlled
\`onCardMove\` event with a ready-to-apply splice index:

- **Pointer**: press and drag; a drop indicator previews the slot.
- **Keyboard**: focus a card → Space to grab → ArrowLeft/ArrowRight to preview → Space to drop → Escape to cancel.
- **Menu**: the card's "⋯" button → "Move card to".

\`\`\`tsx
import { KanbanBoard } from '@blancski/ui';

<KanbanBoard
  columns={columns}
  onCardMove={(move) => applyMoveAndSetState(move)}
  onAddCard={(columnId) => openComposer(columnId)}
  onCardClick={(card) => openDetail(card)}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    loadingColumnCount: { control: 'number' },
    addCardLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => {
    const { columns, onCardMove, lastMove } = useBoardState();
    return (
      <div className="p-6">
        <KanbanBoard {...args} columns={columns} onCardMove={onCardMove} />
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {lastMove ? `last move: ${lastMove}` : 'drag a card (mouse or keyboard) — moves are live'}
        </p>
      </div>
    );
  },
};

export const WithCallbacks: Story = {
  name: 'With add-card and card click',
  render: (args) => {
    const { columns, onCardMove, lastMove } = useBoardState();
    return (
      <div className="p-6">
        <KanbanBoard
          {...args}
          columns={columns}
          onCardMove={onCardMove}
          onAddCard={(columnId) => { alert(`composer for ${columnId}`); }}
          onCardClick={(card) => { alert(`open detail: ${card.title}`); }}
        />
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          {lastMove ? `last move: ${lastMove}` : 'click a card to "open" it; + Add card works per column'}
        </p>
      </div>
    );
  },
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    loading: true,
    loadingColumnCount: 4,
  },
  render: (args) => (
    <div className="p-6">
      <KanbanBoard {...args} columns={[]} />
    </div>
  ),
};

export const Localized: Story = {
  name: 'Localized labels (German)',
  render: (args) => {
    const { columns, onCardMove } = useBoardState();
    return (
      <div className="p-6">
        <KanbanBoard
          {...args}
          columns={columns.map((col) => ({
            ...col,
            title: { Backlog: 'Rückstand', 'To Do': 'Offen', 'In Progress': 'Läuft', Done: 'Fertig' }[col.title] ?? col.title,
          }))}
          onCardMove={onCardMove}
          onAddCard={() => undefined}
          addCardLabel="Karte hinzufügen"
          labels={{ card: 'Karte', moveTo: 'Karte verschieben nach' }}
        />
      </div>
    );
  },
};

export const EmptyBoard: Story = {
  name: 'Single empty column',
  render: () => (
    <div className="p-6">
      <KanbanBoard
        columns={[{ id: 'only', title: 'Ideas', cards: [] }]}
        onAddCard={() => undefined}
      />
    </div>
  ),
};
