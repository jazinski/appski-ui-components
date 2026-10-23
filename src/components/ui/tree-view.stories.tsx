import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { TreeView, type TreeNode } from './tree-view';

const fileTree: TreeNode[] = [
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
          { id: 'card', label: 'card.tsx' },
        ],
      },
      { id: 'lib', label: 'lib', children: [{ id: 'utils', label: 'utils.ts' }] },
      { id: 'hooks', label: 'hooks', children: [{ id: 'use-media', label: 'use-media.ts' }] },
    ],
  },
  {
    id: 'public',
    label: 'public',
    children: [{ id: 'favicon', label: 'favicon.ico' }],
  },
  { id: 'package', label: 'package.json' },
  { id: 'readme', label: 'README.md' },
];

const categoryTree: TreeNode[] = [
  {
    id: 'homelab',
    label: 'Homelab',
    children: [
      {
        id: 'compute',
        label: 'Compute',
        children: [{ id: 'proxmox', label: 'Proxmox VE' }, { id: 'lxc', label: 'LXC containers' }],
      },
      {
        id: 'network',
        label: 'Network',
        children: [
          { id: 'opnsense', label: 'OpenWrt routers' },
          { id: 'wg', label: 'WireGuard tunnels' },
        ],
      },
    ],
  },
  {
    id: 'media',
    label: 'Media',
    children: [{ id: 'arr', label: '*arr stack' }, { id: 'kodi', label: 'Kodi' }],
  },
];

const apiTree: TreeNode[] = [
  {
    id: 'api',
    label: '/api/v1',
    children: [
      {
        id: 'tasks',
        label: 'tasks',
        children: [{ id: 'get-tasks', label: 'GET /' }, { id: 'post-task', label: 'POST /' }],
      },
      {
        id: 'projects',
        label: 'projects',
        children: [{ id: 'get-projects', label: 'GET /' }],
      },
    ],
  },
];

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    'aria-label': { control: 'text' },
  },
  args: {
    nodes: fileTree,
    'aria-label': 'Project files',
  },
  render: (args) => (
    <div className="w-72 rounded-lg border border-border p-2">
      <TreeView {...args} />
    </div>
  ),
};
export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {};

export const PreExpanded: Story = {
  args: {
    nodes: fileTree,
    defaultExpanded: ['src', 'components'],
  },
};

export const WithIcons: Story = {
  args: {
    nodes: categoryTree,
    defaultExpanded: ['homelab'],
    'aria-label': 'Categories',
  },
  render: (args) => (
    <div className="w-72 rounded-lg border border-border p-2">
      <TreeView
        {...args}
        nodes={categoryTree.map((node) => ({ ...node, icon: ChevronRight }))}
      />
    </div>
  ),
};

export const ApiResourceTree: Story = {
  args: {
    nodes: apiTree,
    defaultExpanded: ['api'],
    'aria-label': 'API resources',
  },
};

const lazyTree: TreeNode[] = [
  { id: 'root-a', label: 'Region A' },
  { id: 'root-b', label: 'Region B' },
];

export const LazyLoaded: Story = {
  args: { 'aria-label': 'Lazy tree' },
  render: (args) => (
    <div className="w-72 rounded-lg border border-border p-2">
      <TreeView
        {...args}
        nodes={lazyTree}
        defaultExpanded={[]}
        loadChildren={async (node) => {
          // Simulate a network round-trip per level.
          await new Promise((r) => {
            setTimeout(r, 600);
          });
          return [
            { id: `${node.id}-1`, label: `${node.label} ▸ item 1` },
            { id: `${node.id}-2`, label: `${node.label} ▸ item 2` },
            { id: `${node.id}-3`, label: `${node.label} ▸ item 3`, children: undefined },
          ];
        }}
      />
    </div>
  ),
};

export const ControlledSelection: Story = {
  name: 'Controlled Selection',
  render: () => {
    const [selected, setSelected] = React.useState<string | undefined>('input');
    return (
      <div className="flex w-96 gap-4">
        <div className="w-64 rounded-lg border border-border p-2">
          <TreeView
            aria-label="Controlled tree"
            nodes={fileTree}
            defaultExpanded={['src', 'components']}
            selectedId={selected}
            onSelect={(node) => {
              setSelected(node.id);
            }}
          />
        </div>
        <div className="pt-2 text-xs text-muted-foreground">
          selectedId: <code>{selected ?? 'undefined'}</code>
        </div>
      </div>
    );
  },
};
