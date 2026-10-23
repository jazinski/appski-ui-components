import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
  ContextMenuSubmenuContent,
} from './context-menu';
import {
  FaEdit,
  FaTrash,
  FaCopy,
  FaArchive,
  FaShareAlt,
  FaDownload,
  FaFolder,
  FaFile,
  FaICursor,
} from 'react-icons/fa';

const meta = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click anywhere in this area
      </div>
    </ContextMenu>
  ),
};

export const FileActions: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        <FaFile className="h-8 w-8" />
        Right-click for file actions
      </div>
      <ContextMenuContent>
        <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
        <ContextMenuItem icon={<FaDownload />}>Download</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem icon={<FaArchive />}>Archive</ContextMenuItem>
        <ContextMenuItem variant="destructive" icon={<FaTrash />}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const TableRowActions: Story = {
  render: () => (
    <ContextMenu>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-700">
            <th className="px-3 py-2 font-semibold">File</th>
            <th className="px-3 py-2 font-semibold">Size</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'report-q3.pdf', size: '2.4 MB' },
            { name: 'budget.xlsx', size: '88 KB' },
            { name: 'logo.svg', size: '12 KB' },
          ].map((file) => (
            <tr key={file.name} className="border-b border-slate-100 dark:border-slate-800">
              <td className="px-3 py-2">{file.name}</td>
              <td className="px-3 py-2 text-slate-500">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContextMenuContent>
        <ContextMenuLabel>Row actions</ContextMenuLabel>
        <ContextMenuItem icon={<FaEdit />}>Edit row</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />} shortcut="⌘D">
          Duplicate
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" icon={<FaTrash />}>
          Delete row
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click for labeled menu
      </div>
      <ContextMenuContent>
        <ContextMenuLabel>File</ContextMenuLabel>
        <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Actions</ContextMenuLabel>
        <ContextMenuItem icon={<FaShareAlt />}>Share</ContextMenuItem>
        <ContextMenuItem icon={<FaDownload />}>Download</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click for shortcuts
      </div>
      <ContextMenuContent>
        <ContextMenuItem icon={<FaEdit />} shortcut="F2">
          Rename
        </ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />} shortcut="⌘D">
          Duplicate
        </ContextMenuItem>
        <ContextMenuItem icon={<FaDownload />} shortcut="⌘S">
          Download
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" icon={<FaTrash />} shortcut="⌫">
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click for menu with submenu
      </div>
      <ContextMenuContent>
        <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger icon={<FaShareAlt />}>Share</ContextMenuSubmenuTrigger>
          <ContextMenuSubmenuContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>Copy Link</ContextMenuItem>
            <ContextMenuItem>Share to Twitter</ContextMenuItem>
          </ContextMenuSubmenuContent>
        </ContextMenuSubmenu>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger icon={<FaFolder />}>Move to</ContextMenuSubmenuTrigger>
          <ContextMenuSubmenuContent>
            <ContextMenuItem>Documents</ContextMenuItem>
            <ContextMenuItem>Downloads</ContextMenuItem>
            <ContextMenuItem>Archive</ContextMenuItem>
          </ContextMenuSubmenuContent>
        </ContextMenuSubmenu>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" icon={<FaTrash />}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const NestedSubmenus: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click for nested submenus
      </div>
      <ContextMenuContent>
        <ContextMenuItem icon={<FaICursor />}>Rename</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger icon={<FaShareAlt />}>Share</ContextMenuSubmenuTrigger>
          <ContextMenuSubmenuContent>
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuSubmenu>
              <ContextMenuSubmenuTrigger>Social Media</ContextMenuSubmenuTrigger>
              <ContextMenuSubmenuContent>
                <ContextMenuItem>Twitter</ContextMenuItem>
                <ContextMenuItem>Facebook</ContextMenuItem>
                <ContextMenuItem>LinkedIn</ContextMenuItem>
              </ContextMenuSubmenuContent>
            </ContextMenuSubmenu>
            <ContextMenuItem>Copy Link</ContextMenuItem>
          </ContextMenuSubmenuContent>
        </ContextMenuSubmenu>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive" icon={<FaTrash />}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <ContextMenu>
      <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
        Right-click for menu with disabled items
      </div>
      <ContextMenuContent>
        <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
        <ContextMenuItem icon={<FaCopy />} disabled>
          Duplicate (Pro)
        </ContextMenuItem>
        <ContextMenuItem icon={<FaShareAlt />} disabled>
          Share (Pro)
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem icon={<FaArchive />}>Archive</ContextMenuItem>
        <ContextMenuItem variant="destructive" icon={<FaTrash />}>
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Menu is {open ? 'open' : 'closed'} (right-click still positions it)
        </div>
        <ContextMenu open={open} onOpenChange={setOpen}>
          <div className="flex h-32 w-72 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
            Right-click this area
          </div>
          <ContextMenuContent>
            <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
            <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="rounded-md border px-3 py-1.5 text-sm"
        >
          Toggle Menu
        </button>
      </div>
    );
  },
};

export const WithCallbacks: Story = {
  render: () => {
    const handleRename = () => {
      alert('Rename clicked');
    };
    const handleDuplicate = () => {
      alert('Duplicate clicked');
    };
    const handleDelete = () => {
      if (confirm('Are you sure you want to delete?')) {
        alert('Deleted!');
      }
    };

    return (
      <ContextMenu>
        <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-300 text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
          Right-click for actions with callbacks
        </div>
        <ContextMenuContent>
          <ContextMenuItem icon={<FaEdit />} onSelect={handleRename}>
            Rename
          </ContextMenuItem>
          <ContextMenuItem icon={<FaCopy />} onSelect={handleDuplicate}>
            Duplicate
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive" icon={<FaTrash />} onSelect={handleDelete}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const InDarkMode: Story = {
  render: () => (
    <div className="dark min-h-[300px] bg-slate-900 p-8">
      <ContextMenu>
        <div className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed border-slate-600 text-sm text-slate-400">
          Right-click for dark mode menu
        </div>
        <ContextMenuContent>
          <ContextMenuLabel>File</ContextMenuLabel>
          <ContextMenuItem icon={<FaEdit />}>Rename</ContextMenuItem>
          <ContextMenuItem icon={<FaCopy />}>Duplicate</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSubmenu>
            <ContextMenuSubmenuTrigger icon={<FaShareAlt />}>Share</ContextMenuSubmenuTrigger>
            <ContextMenuSubmenuContent>
              <ContextMenuItem>Email</ContextMenuItem>
              <ContextMenuItem>Twitter</ContextMenuItem>
            </ContextMenuSubmenuContent>
          </ContextMenuSubmenu>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive" icon={<FaTrash />}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};
