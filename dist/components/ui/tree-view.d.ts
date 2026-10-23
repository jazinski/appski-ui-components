import * as React from 'react';
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
    icon?: React.ComponentType<{
        className?: string;
    }>;
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
export declare const TreeView: React.ForwardRefExoticComponent<TreeViewProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=tree-view.d.ts.map