import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Home, Settings, Moon, Archive, Search } from 'lucide-react';
import { CommandPalette, type CommandPaletteCommand } from './command-palette';

const meta: Meta<typeof CommandPalette> = {
  title: 'Components/CommandPalette',
  component: CommandPalette,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A Cmd+K style command palette: fuzzy-search a command list, navigate with arrow keys, run with Enter. Follows the library Dialog/Sheet conventions (portal, focus restore, ESC to close, body scroll lock).',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean', description: 'Controlled open state' },
    defaultOpen: { control: 'boolean', description: 'Default open state' },
    placeholder: { control: 'text' },
    emptyText: { control: 'text' },
    enableHotkey: { control: 'boolean', description: 'Toggle with Cmd/Ctrl+K' },
    hotkey: { control: 'text', description: 'Hotkey combined with Cmd/Ctrl' },
    maxResults: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

const sampleCommands: CommandPaletteCommand[] = [
  { id: 'home', label: 'Go to Home', group: 'Navigation', icon: <Home className="h-4 w-4" />, shortcut: 'G H', onSelect: () => { alert('Home'); } },
  { id: 'settings', label: 'Open settings', description: 'Account and workspace preferences', group: 'Navigation', keywords: ['prefs', 'config'], icon: <Settings className="h-4 w-4" />, onSelect: () => { alert('Settings'); } },
  { id: 'search', label: 'Search everything', group: 'Navigation', icon: <Search className="h-4 w-4" />, onSelect: () => { alert('Search'); } },
  { id: 'theme', label: 'Toggle theme', description: 'Switch between light and dark mode', group: 'Appearance', icon: <Moon className="h-4 w-4" />, onSelect: () => { alert('Theme'); } },
  { id: 'archive', label: 'Archive project', group: 'Actions', disabled: true, icon: <Archive className="h-4 w-4" />, onSelect: () => { alert('Archived'); } },
  { id: 'delete', label: 'Delete cache', group: 'Actions', shortcut: '⇧D', onSelect: () => { alert('Deleted'); } },
];

export const Default: Story = {
  args: {
    commands: sampleCommands,
    defaultOpen: true,
  },
};

export const WithHotkey: Story = {
  args: {
    commands: sampleCommands,
    enableHotkey: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Closed by default. Press Cmd/Ctrl+K to toggle the palette. The query resets each time it opens.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    commands: sampleCommands,
    defaultOpen: true,
    emptyText: 'Nothing matches — try another term.',
  },
  parameters: {
    docs: {
      description: { story: 'Type a query with no matches to see the empty state.' },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="flex h-screen items-center justify-center">
        <button
          className="rounded border px-4 py-2"
          onClick={() => { setOpen(true); }}
        >
          Open palette (controlled)
        </button>
        <CommandPalette
          commands={sampleCommands}
          open={open}
          onOpenChange={setOpen}
          enableHotkey
        />
      </div>
    );
  },
};
