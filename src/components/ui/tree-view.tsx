import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Spinner } from './spinner';

/**
 * A node in the tree. Children may be provided up front or, when `children`
 * is undefined and lazy loading is enabled, fetched on first expand.
 */
export interface TreeNode {
  /** Stable id used for expansion/selection state. Must be unique. */
  id: string;
  /** Label shown for the node. */
  label: string;
  /** Optional Lucide icon rendered before the label. */
  icon?: React.ComponentType<{ className?: string }>;
  /** Pre-loaded children. `undefined` (vs. `[]`) marks a node whose children load on expand. */
  children?: TreeNode[];
}

export interface TreeViewProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Root-level nodes. */
  nodes: TreeNode[];
  /** Ids of nodes that start expanded (uncontrolled). */
  defaultExpanded?: string[];
  /** Id of the node that starts selected/active (uncontrolled). */
  defaultSelectedId?: string;
  /** Controlled selection: the active node id. */
  selectedId?: string;
  /** Fires when the active node changes. */
  onSelect?: (node: TreeNode) => void;
  /** Controlled expansion: the full list of expanded node ids. */
  expandedIds?: string[];
  /** Fires when a node expands or collapses. */
  onExpandedChange?: (node: TreeNode, expanded: boolean) => void;
  /**
   * Load children on first expand. Called only for nodes whose `children` is
   * undefined. Return an empty array to mark the node a leaf.
   */
  loadChildren?: (node: TreeNode) => Promise<TreeNode[]>;
  /** Enable lazy loading for nodes with undefined `children` (default true when `loadChildren` is set). */
  lazy?: boolean;
  /** Accessible name for the tree (default "Tree"). */
  'aria-label'?: string;
}

/** One rendered row: a visible node plus the state its row needs. */
interface TreeItem {
  node: TreeNode;
  depth: number;
  hasChildren: boolean;
  expanded: boolean;
  loading: boolean;
  tabIndex: 0 | -1;
}

/**
 * Walk the node tree and emit only nodes whose ancestors are all expanded —
 * exactly the set the DOM should contain, in visual order.
 */
function flattenVisible(
  nodes: TreeNode[],
  expanded: Set<string>,
  loading: Set<string>,
  focusId: string | null,
  loadedChildren: Map<string, TreeNode[]>,
  lazy: boolean,
): TreeItem[] {
  const items: TreeItem[] = [];
  let firstEmitted = false;

  const walk = (list: TreeNode[], depth: number) => {
    for (const node of list) {
      // Lazy-loaded children (stored in the map) shadow the prop until the
      // parent is re-rendered with them inline.
      const loaded = loadedChildren.get(node.id);
      const children = loaded ?? node.children;
      // `children === undefined` only means "load on expand" in a lazy tree;
      // otherwise the node is a plain leaf.
      const lazyPending = children === undefined && lazy;
      const hasChildren = lazyPending || (children?.length ?? 0) > 0;
      const isOpen = expanded.has(node.id) && hasChildren;
      items.push({
        node,
        depth,
        hasChildren,
        expanded: isOpen,
        loading: loading.has(node.id),
        tabIndex: focusId === node.id || (focusId === null && !firstEmitted) ? 0 : -1,
      });
      firstEmitted = true;
      if (isOpen) walk(children ?? [], depth + 1);
    }
  };

  walk(nodes, 0);
  return items;
}

const treeViewVariants = {
  root: 'text-sm',
  item: 'flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring',
};

/**
 * TreeView — hierarchical navigation with expand/collapse, icons, active-node
 * selection, full keyboard support (arrows, Home/End, Enter/Space) and
 * optional lazy loading of children on first expand. Grows out of the
 * single-open Accordion into a true nested structure; use it for file
 * browsers, category trees, and API/resource trees.
 *
 * Implements the WAI-ARIA tree pattern (role="tree" / role="treeitem" with
 * aria-level/aria-expanded/aria-selected) with a roving tabindex.
 */
export const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      nodes,
      defaultExpanded = [],
      defaultSelectedId = null,
      selectedId: controlledSelectedId,
      onSelect,
      expandedIds: controlledExpandedIds,
      onExpandedChange,
      loadChildren,
      lazy = loadChildren != null,
      'aria-label': ariaLabel = 'Tree',
      className,
      ...props
    },
    ref,
  ) => {
    const [internalExpanded, setInternalExpanded] = React.useState<string[]>(defaultExpanded);
    const expansionControlled = controlledExpandedIds != null;
    const expandedList = expansionControlled ? controlledExpandedIds : internalExpanded;
    const expanded = React.useMemo(() => new Set(expandedList), [expandedList]);

    const [internalSelectedId, setInternalSelectedId] =
      React.useState<string | null>(defaultSelectedId);
    const selectedId = controlledSelectedId ?? internalSelectedId;

    const [loadingIds, setLoadingIds] = React.useState<string[]>([]);
    const loading = React.useMemo(() => new Set(loadingIds), [loadingIds]);

    const [focusId, setFocusId] = React.useState<string | null>(null);

    // Lazily loaded children live in a ref map; `loadedVersion` forces a
    // re-render when new children land without mutating the `nodes` prop.
    const loadedChildrenRef = React.useRef(new Map<string, TreeNode[]>());
    const [loadedVersion, setLoadedVersion] = React.useState(0);

    const items = React.useMemo(
      () =>
        flattenVisible(
          nodes,
          expanded,
          loading,
          focusId,
          loadedChildrenRef.current,
          lazy,
        ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [nodes, expanded, loading, focusId, loadedVersion],
    );

    // Latest callbacks in refs so the keyboard handler stays stable.
    const onExpandedChangeRef = React.useRef(onExpandedChange);
    onExpandedChangeRef.current = onExpandedChange;
    const onSelectRef = React.useRef(onSelect);
    onSelectRef.current = onSelect;
    const loadChildrenRef = React.useRef(loadChildren);
    loadChildrenRef.current = loadChildren;

    const setExpandedIds = React.useCallback(
      (next: Set<string>) => {
        if (!expansionControlled) setInternalExpanded([...next]);
      },
      [expansionControlled],
    );

    const ensureLoaded = React.useCallback(
      async (node: TreeNode) => {
        const loader = loadChildrenRef.current;
        if (!lazy || !loader || node.children !== undefined) return;
        if (loadedChildrenRef.current.has(node.id)) return;
        setLoadingIds((prev) => (prev.includes(node.id) ? prev : [...prev, node.id]));
        let children: TreeNode[];
        try {
          children = (await loader(node)) ?? [];
        } catch {
          children = []; // a failed load resolves to a leaf rather than a stuck spinner
        }
        loadedChildrenRef.current.set(node.id, children);
        setLoadingIds((prev) => prev.filter((id) => id !== node.id));
        setLoadedVersion((v) => v + 1);
      },
      [lazy],
    );

    const toggle = React.useCallback(
      (node: TreeNode, hasChildren: boolean) => {
        if (!hasChildren) return;
        const next = new Set(expanded);
        const opening = !next.has(node.id);
        if (opening) next.add(node.id);
        else next.delete(node.id);
        setExpandedIds(next);
        if (opening) void ensureLoaded(node);
        onExpandedChangeRef.current?.(node, opening);
      },
      [expanded, ensureLoaded, setExpandedIds],
    );

    const select = React.useCallback((node: TreeNode) => {
      setInternalSelectedId(node.id);
      onSelectRef.current?.(node);
    }, []);

    // Roving tabindex: keep the DOM focus in sync with focusId.
    const rootRef = React.useRef<HTMLDivElement | null>(null);
    React.useEffect(() => {
      if (focusId == null || !rootRef.current) return;
      const el = rootRef.current.querySelector<HTMLElement>(`[data-tree-id="${CSS.escape(focusId)}"]`);
      el?.focus();
    }, [focusId, items]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const idx = items.findIndex((i) => i.node.id === focusId);
      const current = idx >= 0 ? items[idx] : undefined;
      let handled = true;

      switch (event.key) {
        case 'ArrowDown':
          setFocusId(items[Math.min(idx + 1, items.length - 1)]?.node.id ?? focusId ?? '');
          break;
        case 'ArrowUp':
          setFocusId(items[Math.max(idx - 1, 0)]?.node.id ?? focusId ?? '');
          break;
        case 'ArrowRight': {
          const next = items[idx + 1];
          if (current && current.hasChildren && !current.expanded) {
            toggle(current.node, true);
          } else if (current && current.expanded && next) {
            setFocusId(next.node.id);
          } else {
            handled = false;
          }
          break;
        }
        case 'ArrowLeft':
          if (current && current.expanded) {
            toggle(current.node, true);
          } else if (current && current.depth > 0) {
            // Focus the closest visible ancestor.
            for (let i = idx - 1; i >= 0; i--) {
              const ancestor = items[i];
              if (ancestor && ancestor.depth < current.depth) {
                setFocusId(ancestor.node.id);
                break;
              }
            }
          } else {
            handled = false;
          }
          break;
        case 'Home':
          setFocusId(items[0]?.node.id ?? '');
          break;
        case 'End':
          setFocusId(items[items.length - 1]?.node.id ?? '');
          break;
        case 'Enter':
        case ' ':
          if (current) {
            select(current.node);
            toggle(current.node, current.hasChildren);
          } else {
            handled = false;
          }
          break;
        default:
          handled = false;
      }

      if (handled) event.preventDefault();
    };

    return (
      <div
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="tree"
        aria-label={ariaLabel}
        className={cn(treeViewVariants.root, className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {items.map(({ node, depth, hasChildren, expanded: isOpen, loading: isLoading, tabIndex }) => {
          const Icon = node.icon;
          const selected = node.id === selectedId;
          return (
            <button
              key={node.id}
              type="button"
              role="treeitem"
              data-tree-id={node.id}
              aria-level={depth + 1}
              aria-selected={selected}
              aria-expanded={hasChildren ? isOpen : undefined}
              tabIndex={tabIndex}
              onFocus={() => {
                setFocusId(node.id);
              }}
              onClick={() => {
                setFocusId(node.id);
                select(node);
                toggle(node, hasChildren);
              }}
              style={{ paddingLeft: `${depth * 16 + 8}px` }}
              className={cn(
                treeViewVariants.item,
                'font-normal',
                selected &&
                  'bg-primary/10 font-medium text-primary ring-1 ring-inset ring-primary/30',
                !selected && 'hover:bg-accent hover:text-accent-foreground',
              )}
            >
              {hasChildren ? (
                isLoading ? (
                  <Spinner className="h-4 w-4 shrink-0" />
                ) : (
                  <ChevronRight
                    aria-hidden
                    className={cn(
                      'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
                      isOpen && 'rotate-90',
                    )}
                  />
                )
              ) : (
                <span aria-hidden className="h-4 w-4 shrink-0" />
              )}
              {Icon ? <Icon aria-hidden className="h-4 w-4 shrink-0 text-muted-foreground" /> : null}
              <span className="truncate">{node.label}</span>
            </button>
          );
        })}
      </div>
    );
  },
);
TreeView.displayName = 'TreeView';
