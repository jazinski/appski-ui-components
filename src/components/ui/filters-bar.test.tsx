import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltersBar, type ActiveFilter, type FilterSelect, type SavedView } from './filters-bar';

const filters: ActiveFilter[] = [
  { id: 'label-bug', label: 'Label: bug', variant: 'destructive', onRemove: vi.fn() },
  { id: 'assignee-ola', label: 'Assignee: Ola', onRemove: vi.fn() },
];

const selects: FilterSelect[] = [
  {
    id: 'label',
    label: 'Label',
    value: '',
    choices: [
      { value: 'bug', label: 'bug' },
      { value: 'feature', label: 'feature' },
    ],
    onValueChange: vi.fn(),
  },
  {
    id: 'assignee',
    label: 'Assignee',
    value: 'chris',
    choices: [
      { value: 'chris', label: 'Chris' },
      { value: 'ola', label: 'Ola' },
    ],
    onValueChange: vi.fn(),
  },
];

const views: SavedView[] = [
  { id: 'v1', label: 'My open bugs' },
  { id: 'v2', label: 'This sprint' },
];

function renderBar(props = {}) {
  return render(
    <FiltersBar
      filters={filters.map((f) => ({ ...f, onRemove: vi.fn() }))}
      selects={selects.map((s) => ({ ...s, onValueChange: vi.fn() }))}
      views={views}
      activeViewId="v1"
      onViewSelect={vi.fn()}
      onClearAll={vi.fn()}
      labels={{}}
      {...props}
    />
  );
}

describe('FiltersBar', () => {
  it('renders a chip per active filter', () => {
    renderBar();
    expect(screen.getByText('Label: bug')).toBeInTheDocument();
    expect(screen.getByText('Assignee: Ola')).toBeInTheDocument();
  });

  it('marks the bar as a labelled toolbar', () => {
    renderBar();
    expect(screen.getByRole('toolbar', { name: 'Filters' })).toBeInTheDocument();
  });

  it('fires onRemove from the chip ×', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    renderBar({ filters: [{ id: 'a', label: 'Label: bug', onRemove }] });
    await user.click(screen.getByRole('button', { name: 'Remove Label: bug' }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('shows the empty state when no filters are active', () => {
    renderBar({ filters: [] });
    expect(screen.getByText('No filters applied')).toBeInTheDocument();
  });

  it('hides the empty state when there are no controls and no filters', () => {
    render(<FiltersBar filters={[]} />);
    expect(screen.queryByText('No filters applied')).not.toBeInTheDocument();
  });

  it('renders one trigger per select and reflects the current value', () => {
    renderBar();
    const labelTrigger = screen.getByTestId('filters-select-label');
    expect(labelTrigger).toHaveTextContent('Label');
    const assigneeTrigger = screen.getByTestId('filters-select-assignee');
    expect(assigneeTrigger).toHaveTextContent('Chris');
  });

  it('picks a value from a select dropdown', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderBar({
      selects: [
        {
          id: 'label',
          label: 'Label',
          value: '',
          choices: [{ value: 'bug', label: 'bug' }],
          onValueChange,
        },
      ],
    });
    await user.click(screen.getByTestId('filters-select-label'));
    await user.click(screen.getByRole('menuitem', { name: /bug/ }));
    expect(onValueChange).toHaveBeenCalledWith('bug');
  });

  it('resets a select to any via the Any item', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    renderBar({
      selects: [
        {
          id: 'assignee',
          label: 'Assignee',
          value: 'chris',
          choices: [{ value: 'chris', label: 'Chris' }],
          onValueChange,
        },
      ],
    });
    await user.click(screen.getByTestId('filters-select-assignee'));
    await user.click(screen.getByRole('menuitem', { name: 'Any' }));
    expect(onValueChange).toHaveBeenCalledWith('');
  });

  it('highlights the active saved view in the views menu', async () => {
    const user = userEvent.setup();
    renderBar();
    await user.click(screen.getByRole('button', { name: /My open bugs/ }));
    expect(screen.getByRole('menuitem', { name: /This sprint/ })).toBeInTheDocument();
  });

  it('fires onViewSelect when a saved view is picked', async () => {
    const user = userEvent.setup();
    const onViewSelect = vi.fn();
    renderBar({ onViewSelect });
    await user.click(screen.getByRole('button', { name: /My open bugs/ }));
    await user.click(screen.getByRole('menuitem', { name: /This sprint/ }));
    expect(onViewSelect).toHaveBeenCalledWith('v2');
  });

  it('fires onSaveView when save-current-view is activated', async () => {
    const user = userEvent.setup();
    const onSaveView = vi.fn();
    renderBar({ onSaveView });
    await user.click(screen.getByRole('button', { name: /My open bugs/ }));
    await user.click(screen.getByRole('menuitem', { name: /Save current view/ }));
    expect(onSaveView).toHaveBeenCalledTimes(1);
  });

  it('omits save-current-view when onSaveView is not provided', async () => {
    const user = userEvent.setup();
    renderBar({ onSaveView: undefined });
    await user.click(screen.getByRole('button', { name: /My open bugs/ }));
    expect(screen.queryByRole('menuitem', { name: /Save current view/ })).not.toBeInTheDocument();
  });

  it('fires onClearAll from the clear-all button', async () => {
    const user = userEvent.setup();
    const onClearAll = vi.fn();
    renderBar({ onClearAll });
    await user.click(screen.getByRole('button', { name: 'Clear all' }));
    expect(onClearAll).toHaveBeenCalledTimes(1);
  });

  it('renders the trailing children slot', () => {
    renderBar({ children: <span>12 results</span> });
    expect(screen.getByText('12 results')).toBeInTheDocument();
  });

  it('disables every control when disabled', () => {
    renderBar({ disabled: true });
    expect(screen.getByTestId('filters-select-label')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Clear all' })).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Remove Label: bug' })).not.toBeInTheDocument();
  });
});

