import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  FiltersBar,
  type ActiveFilter,
  type FilterSelect,
  type SavedView,
} from './filters-bar';

const meta: Meta<typeof FiltersBar> = {
  title: 'Components/FiltersBar',
  component: FiltersBar,
  parameters: {
    docs: {
      description: {
        component: `
The active-filter toolbar that sits above a DataTable or KanbanBoard:
filter menus on the left, removable chips for active filters, saved views,
and clear-all. Composed from Chip, Dropdown, and Button.

Fully controlled and data-driven: you own \`filters\` (the chip row) and each
select's \`value\`; the bar only reports intents (\`onValueChange\`,
\`onRemove\`, \`onViewSelect\`, \`onSaveView\`, \`onClearAll\`). The trailing
\`children\` slot fits result counts or export buttons.

\`\`\`tsx
import { FiltersBar } from '@blancski/ui';

<FiltersBar
  filters={[{ id: 'label-bug', label: 'Label: bug', variant: 'destructive', onRemove }]}
  selects={[{ id: 'assignee', label: 'Assignee', choices, value, onValueChange }]}
  views={savedViews}
  activeViewId={viewId}
  onViewSelect={setViewId}
  onClearAll={reset}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const people = [
  { value: 'chris', label: 'Chris Jazinski' },
  { value: 'ola', label: 'Ola Wiśniewska' },
  { value: 'alex', label: 'Alex Blanc' },
];

const labelChoices = [
  { value: 'bug', label: 'bug' },
  { value: 'feature', label: 'feature' },
  { value: 'chore', label: 'chore' },
];

const savedViews: SavedView[] = [
  { id: 'v1', label: 'My open bugs' },
  { id: 'v2', label: 'This sprint' },
  { id: 'v3', label: 'Needs review' },
];

function useFilterState() {
  const [assignee, setAssignee] = React.useState('');
  const [label, setLabel] = React.useState('bug');
  const [viewId, setViewId] = React.useState('v1');

  const selects: FilterSelect[] = [
    { id: 'label', label: 'Label', choices: labelChoices, value: label, onValueChange: setLabel },
    { id: 'assignee', label: 'Assignee', choices: people, value: assignee, onValueChange: setAssignee },
  ];

  const filters: ActiveFilter[] = [
    ...(label ? [{ id: 'label', label: `Label: ${label}`, variant: 'destructive' as const }] : []),
    ...(assignee
      ? [{ id: 'assignee', label: `Assignee: ${people.find((p) => p.value === assignee)?.label ?? 'any'}` }]
      : []),
  ];

  const removeFilter = (id: string) => {
    if (id === 'label') setLabel('');
    if (id === 'assignee') setAssignee('');
  };

  return {
    selects,
    filters: filters.map((f) => ({ ...f, onRemove: () => { removeFilter(f.id); } })),
    viewId,
    setViewId,
    clearAll: () => { setLabel(''); setAssignee(''); },
  };
}

export const Default: Story = {
  name: 'Default',
  render: () => {
    const state = useFilterState();
    return (
      <div className="p-4">
        <FiltersBar
          filters={state.filters}
          selects={state.selects}
          views={savedViews}
          activeViewId={state.viewId}
          onViewSelect={state.setViewId}
          onSaveView={() => {}}
          onClearAll={state.clearAll}
        />
      </div>
    );
  },
};

export const WithResultCount: Story = {
  name: 'With result count',
  render: () => {
    const state = useFilterState();
    return (
      <div className="p-4">
        <FiltersBar
          filters={state.filters}
          selects={state.selects}
          onClearAll={state.clearAll}
        >
          <span className="text-xs text-muted-foreground">7 of 23 cards</span>
        </FiltersBar>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => {
    const state = useFilterState();
    return (
      <div className="p-4">
        <FiltersBar
          filters={state.filters}
          selects={state.selects}
          views={savedViews}
          activeViewId={state.viewId}
          onViewSelect={state.setViewId}
          onClearAll={state.clearAll}
          disabled
        />
      </div>
    );
  },
};
