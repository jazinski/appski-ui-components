import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TreeView, type TreeNode } from './tree-view';

const tree: TreeNode[] = [
  {
    id: 'src',
    label: 'src',
    children: [
      {
        id: 'components',
        label: 'components',
        children: [
          { id: 'button', label: 'button.tsx' },
          { id: 'input', label: 'input.tsx' },
        ],
      },
      { id: 'utils', label: 'utils.ts' },
    ],
  },
  { id: 'readme', label: 'README.md' },
];

function getItem(id: string) {
  return screen.getByRole('treeitem', { name: new RegExp(id, 'i') });
}

describe('TreeView', () => {
  it('renders a tree with an accessible name', () => {
    render(<TreeView nodes={tree} aria-label="Project files" />);
    expect(screen.getByRole('tree', { name: 'Project files' })).toBeInTheDocument();
  });

  it('renders root nodes collapsed by default; children hidden until expanded', async () => {
    const user = userEvent.setup();
    render(<TreeView nodes={tree} />);

    expect(getItem('src')).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('treeitem', { name: /components/ })).not.toBeInTheDocument();

    await user.click(getItem('src'));
    expect(getItem('src')).toHaveAttribute('aria-expanded', 'true');
    expect(getItem('components')).toBeInTheDocument();
    expect(getItem('utils')).toBeInTheDocument();
  });

  it('expands nested levels and collapses the whole branch', async () => {
    const user = userEvent.setup();
    render(<TreeView nodes={tree} />);
    await user.click(getItem('src'));
    await user.click(getItem('components'));
    expect(getItem('button')).toBeInTheDocument();

    await user.click(getItem('src'));
    expect(screen.queryByRole('treeitem', { name: /components/ })).not.toBeInTheDocument();
    expect(screen.queryByRole('treeitem', { name: /button/ })).not.toBeInTheDocument();
  });

  it('respects defaultExpanded for the initial open set', () => {
    render(<TreeView nodes={tree} defaultExpanded={['src', 'components']} />);
    expect(getItem('button')).toBeInTheDocument();
    expect(getItem('src')).toHaveAttribute('aria-expanded', 'true');
  });

  it('marks the active node with aria-selected and fires onSelect', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<TreeView nodes={tree} onSelect={onSelect} />);

    await user.click(getItem('readme'));
    expect(getItem('readme')).toHaveAttribute('aria-selected', 'true');
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'readme' }));
  });

  it('supports controlled selection', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<TreeView nodes={tree} selectedId="utils" onSelect={onSelect} />);
    expect(getItem('src')).toHaveAttribute('aria-expanded', 'false');

    await user.click(getItem('src'));
    expect(getItem('utils')).toBeInTheDocument();
    // Controlled: internal state does not change, onSelect still fires.
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'src' }));
  });

  it('sets aria-level from nesting depth and aria-expanded only on parents', async () => {
    const user = userEvent.setup();
    render(<TreeView nodes={tree} defaultExpanded={['src']} />);
    expect(getItem('src')).toHaveAttribute('aria-level', '1');
    expect(getItem('components')).toHaveAttribute('aria-level', '2');
    await user.click(getItem('components'));
    expect(getItem('button')).toHaveAttribute('aria-level', '3');
    expect(getItem('readme')).not.toHaveAttribute('aria-expanded');
    expect(getItem('src')).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders custom icons per node', () => {
    const FolderIcon = () => <svg data-testid="folder-icon" />;
    render(
      <TreeView
        nodes={[{ id: 'a', label: 'Folder A', icon: FolderIcon, children: [{ id: 'b', label: 'B' }] }]}
      />,
    );
    expect(screen.getByTestId('folder-icon')).toBeInTheDocument();
  });

  it('fires onExpandedChange with the node and next state', async () => {
    const user = userEvent.setup();
    const onExpandedChange = vi.fn();
    render(<TreeView nodes={tree} onExpandedChange={onExpandedChange} />);
    await user.click(getItem('src'));
    expect(onExpandedChange).toHaveBeenCalledWith(expect.objectContaining({ id: 'src' }), true);
    await user.click(getItem('src'));
    expect(onExpandedChange).toHaveBeenCalledWith(expect.objectContaining({ id: 'src' }), false);
  });

  it('does not toggle leaf nodes on click', async () => {
    const user = userEvent.setup();
    const onExpandedChange = vi.fn();
    render(<TreeView nodes={tree} onExpandedChange={onExpandedChange} />);
    await user.click(getItem('readme'));
    expect(onExpandedChange).not.toHaveBeenCalled();
    expect(getItem('readme')).not.toHaveAttribute('aria-expanded');
  });

  it('supports controlled expansion', async () => {
    const user = userEvent.setup();
    render(<TreeView nodes={tree} expandedIds={['src']} />);
    expect(getItem('components')).toBeInTheDocument();
    await user.click(getItem('src'));
    // Controlled: state comes from the prop, so it stays expanded.
    expect(getItem('components')).toBeInTheDocument();
  });

  describe('keyboard navigation', () => {
    it('ArrowRight expands a collapsed parent; ArrowLeft collapses', async () => {
      const user = userEvent.setup();
      render(<TreeView nodes={tree} />);
      getItem('src').focus();
      await user.keyboard('{ArrowRight}');
      expect(getItem('src')).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard('{ArrowLeft}');
      expect(getItem('src')).toHaveAttribute('aria-expanded', 'false');
    });

    it('ArrowDown/ArrowUp move focus through visible items', async () => {
      const user = userEvent.setup();
      render(<TreeView nodes={tree} defaultExpanded={['src', 'components']} />);
      getItem('src').focus();
      await user.keyboard('{ArrowDown}');
      expect(getItem('components')).toHaveFocus();
      await user.keyboard('{ArrowDown}');
      expect(getItem('button')).toHaveFocus();
      await user.keyboard('{ArrowUp}');
      expect(getItem('components')).toHaveFocus();
    });

    it('ArrowLeft on a deep child focuses its parent', async () => {
      const user = userEvent.setup();
      render(<TreeView nodes={tree} defaultExpanded={['src', 'components']} />);
      getItem('input').focus();
      await user.keyboard('{ArrowLeft}');
      expect(getItem('components')).toHaveFocus();
    });

    it('ArrowRight on an expanded node moves into its children', async () => {
      const user = userEvent.setup();
      render(<TreeView nodes={tree} defaultExpanded={['src']} />);
      getItem('src').focus();
      await user.keyboard('{ArrowRight}');
      expect(getItem('components')).toHaveFocus();
    });

    it('Home/End jump to the first/last visible item', async () => {
      const user = userEvent.setup();
      render(<TreeView nodes={tree} defaultExpanded={['src', 'components']} />);
      getItem('src').focus();
      await user.keyboard('{End}');
      expect(getItem('readme')).toHaveFocus();
      await user.keyboard('{Home}');
      expect(getItem('src')).toHaveFocus();
    });

    it('Enter selects and toggles', async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      render(<TreeView nodes={tree} onSelect={onSelect} />);
      getItem('src').focus();
      await user.keyboard('{Enter}');
      expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 'src' }));
      expect(getItem('src')).toHaveAttribute('aria-expanded', 'true');
    });

    it('only the focused item is tabbable (roving tabindex)', () => {
      render(<TreeView nodes={tree} defaultExpanded={['src']} />);
      const tabbables = screen
        .getAllByRole('treeitem')
        .filter((el) => el.getAttribute('tabindex') === '0');
      expect(tabbables).toHaveLength(1);
      expect(tabbables[0]).toBe(getItem('src'));
    });
  });

  describe('lazy loading', () => {
    it('loads children on first expand and renders them', async () => {
      const user = userEvent.setup();
      const loadChildren = vi.fn().mockResolvedValue([{ id: 'c1', label: 'Child 1' }]);
      render(
        <TreeView nodes={[{ id: 'lazy', label: 'Lazy' }]} loadChildren={loadChildren} />,
      );

      await user.click(getItem('lazy'));
      expect(await screen.findByRole('treeitem', { name: /Child 1/ })).toBeInTheDocument();
      expect(loadChildren).toHaveBeenCalledTimes(1);
      expect(loadChildren).toHaveBeenCalledWith(expect.objectContaining({ id: 'lazy' }));
    });

    it('does not reload children on second expand', async () => {
      const user = userEvent.setup();
      const loadChildren = vi.fn().mockResolvedValue([{ id: 'c1', label: 'Child 1' }]);
      render(
        <TreeView nodes={[{ id: 'lazy', label: 'Lazy' }]} loadChildren={loadChildren} />,
      );

      await user.click(getItem('lazy'));
      await screen.findByRole('treeitem', { name: /Child 1/ });
      await user.click(getItem('lazy'));
      await user.click(getItem('lazy'));
      expect(loadChildren).toHaveBeenCalledTimes(1);
    });

    it('resolves a failed load to an empty leaf instead of a stuck spinner', async () => {
      const user = userEvent.setup();
      const loadChildren = vi.fn().mockRejectedValue(new Error('boom'));
      render(
        <TreeView nodes={[{ id: 'lazy', label: 'Lazy' }]} loadChildren={loadChildren} />,
      );

      await user.click(getItem('lazy'));
      // A failed load resolves to a leaf: no aria-expanded, no stuck spinner.
      await waitFor(() => {
        expect(getItem('lazy')).not.toHaveAttribute('aria-expanded');
      });
    });

    it('shows a spinner while loading', async () => {
      const user = userEvent.setup();
      let resolveLoad: (nodes: TreeNode[]) => void = () => {};
      const loadChildren = vi.fn().mockImplementation(
        () => new Promise<TreeNode[]>((resolve) => (resolveLoad = resolve)),
      );
      render(
        <TreeView nodes={[{ id: 'lazy', label: 'Lazy' }]} loadChildren={loadChildren} />,
      );

      await user.click(getItem('lazy'));
      expect(getItem('lazy').querySelector('[role="status"]')).not.toBeNull();
      resolveLoad([{ id: 'c1', label: 'Child 1' }]);
      await screen.findByRole('treeitem', { name: /Child 1/ });
    });
  });
});
