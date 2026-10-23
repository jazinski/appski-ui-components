import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  CommandPalette,
  filterCommands,
  fuzzyScore,
  type CommandPaletteCommand,
} from './command-palette';

const commands: CommandPaletteCommand[] = [
  { id: 'home', label: 'Go to Home', group: 'Navigation', onSelect: vi.fn() },
  { id: 'settings', label: 'Open settings', group: 'Navigation', keywords: ['prefs'], onSelect: vi.fn() },
  { id: 'theme', label: 'Toggle theme', group: 'Appearance', description: 'Switch light/dark', onSelect: vi.fn() },
  { id: 'archive', label: 'Archive project', group: 'Actions', disabled: true, onSelect: vi.fn() },
];

describe('fuzzyScore', () => {
  it('returns -1 when there is no subsequence match', () => {
    expect(fuzzyScore('xyz', 'home')).toBe(-1);
  });

  it('matches out-of-order characters as a subsequence', () => {
    expect(fuzzyScore('gh', 'Go to Home')).toBeGreaterThan(0);
  });

  it('scores exact match highest', () => {
    expect(fuzzyScore('home', 'home')).toBeGreaterThan(fuzzyScore('hme', 'home'));
  });

  it('is case-insensitive', () => {
    expect(fuzzyScore('HOME', 'home')).toBe(1000);
  });
});

describe('filterCommands', () => {
  it('returns everything for an empty query', () => {
    expect(filterCommands(commands, '')).toHaveLength(4);
  });

  it('filters non-matching commands', () => {
    const filtered = filterCommands(commands, 'theme');
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe('theme');
  });

  it('matches keywords', () => {
    const filtered = filterCommands(commands, 'prefs');
    expect(filtered.map((c) => c.id)).toContain('settings');
  });

  it('matches descriptions', () => {
    const filtered = filterCommands(commands, 'light');
    expect(filtered.map((c) => c.id)).toContain('theme');
  });

  it('sorts by relevance', () => {
    const list: CommandPaletteCommand[] = [
      { id: 'a', label: 'Frobnicate settings' },
      { id: 'b', label: 'Settings' },
    ];
    expect(filterCommands(list, 'settings')[0].id).toBe('b');
  });

  it('respects maxResults', () => {
    expect(filterCommands(commands, '', 2)).toHaveLength(2);
  });
});

describe('CommandPalette', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders nothing when closed', () => {
    const { container } = render(<CommandPalette commands={commands} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders the palette with defaultOpen', () => {
    render(<CommandPalette commands={commands} defaultOpen />);
    expect(screen.getByRole('dialog', { name: 'Command palette' })).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('renders all commands grouped with headings', () => {
    render(<CommandPalette commands={commands} defaultOpen />);
    expect(screen.getByRole('option', { name: /go to home/i })).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Appearance')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('shows the empty state when nothing matches', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} defaultOpen emptyText="Nothing here" />);
    await user.type(screen.getByRole('combobox'), 'zzzz');
    expect(await screen.findByText('Nothing here')).toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });

  it('filters commands as the user types', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} defaultOpen />);
    await user.type(screen.getByRole('combobox'), 'theme');
    await waitFor(() => {
      expect(screen.queryByRole('option', { name: /go to home/i })).not.toBeInTheDocument();
    });
    expect(screen.getByRole('option', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('selects the active command on Enter and closes', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <CommandPalette
        commands={[{ id: 'save', label: 'Save file', onSelect }]}
        defaultOpen
      />
    );
    await user.type(screen.getByRole('combobox'), 'save{Enter}');
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][0].id).toBe('save');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('moves the active item with arrow keys (wrapping)', async () => {
    const user = userEvent.setup();
    render(
      <CommandPalette
        commands={[
          { id: 'a', label: 'Alpha' },
          { id: 'b', label: 'Beta' },
          { id: 'c', label: 'Gamma' },
        ]}
        defaultOpen
      />
    );
    const input = screen.getByRole('combobox');
    await user.click(input);
    expect(input.getAttribute('aria-activedescendant')).toContain('option-a');
    await user.keyboard('{ArrowDown}');
    expect(input.getAttribute('aria-activedescendant')).toContain('option-b');
    await user.keyboard('{ArrowDown}');
    expect(input.getAttribute('aria-activedescendant')).toContain('option-c');
    // wraps back to the first item
    await user.keyboard('{ArrowDown}');
    expect(input.getAttribute('aria-activedescendant')).toContain('option-a');
    // ArrowUp wraps back to the last item
    await user.keyboard('{ArrowUp}');
    expect(input.getAttribute('aria-activedescendant')).toContain('option-c');
  });

  it('closes on Escape', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} defaultOpen />);
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes on overlay click', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} defaultOpen />);
    // Overlay is the first child of the body portal; click via the blank area
    const overlay = document.querySelector('[data-state="open"].fixed.inset-0');
    expect(overlay).not.toBeNull();
    await user.click(overlay as HTMLElement);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('supports controlled open state', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <CommandPalette commands={commands} open onOpenChange={onOpenChange} />
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(onOpenChange).toHaveBeenCalledWith(false);
    // stays open because it is controlled
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    rerender(<CommandPalette commands={commands} open={false} onOpenChange={onOpenChange} />);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('toggles with the Cmd+K global hotkey when enabled', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} enableHotkey />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await user.keyboard('{Meta>}k{/Meta}');
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    await user.keyboard('{Meta>}k{/Meta}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('ignores Cmd+K when the hotkey is disabled', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} />);
    await user.keyboard('{Meta>}k{/Meta}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('does not select a disabled command', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <CommandPalette
        commands={[{ id: 'x', label: 'Disabled one', disabled: true, onSelect }]}
        defaultOpen
      />
    );
    await user.type(screen.getByRole('combobox'), '{Enter}');
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('marks the active option with aria-selected', async () => {
    const user = userEvent.setup();
    render(
      <CommandPalette
        commands={[
          { id: 'a', label: 'Alpha' },
          { id: 'b', label: 'Beta' },
        ]}
        defaultOpen
      />
    );
    await user.click(screen.getByRole('combobox'));
    await user.keyboard('{ArrowDown}');
    const active = document.getElementById('command-palette-option-b');
    expect(active?.getAttribute('aria-selected')).toBe('true');
    const inactive = document.getElementById('command-palette-option-a');
    expect(inactive?.getAttribute('aria-selected')).toBe('false');
  });

  it('locks body scroll while open and restores it after', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} defaultOpen />);
    expect(document.body.style.overflow).toBe('hidden');
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(document.body.style.overflow).toBe('');
  });

  it('resets the query when reopened', async () => {
    const user = userEvent.setup();
    render(<CommandPalette commands={commands} enableHotkey />);
    await user.keyboard('{Meta>}k{/Meta}');
    await user.type(screen.getByRole('combobox'), 'theme');
    expect(screen.getByRole('combobox')).toHaveValue('theme');
    await user.keyboard('{Escape}');
    await user.keyboard('{Meta>}k{/Meta}');
    await waitFor(() => {
      expect(screen.getByRole('combobox')).toHaveValue('');
    });
  });

  it('renders shortcut hints and descriptions', () => {
    render(
      <CommandPalette
        commands={[
          {
            id: 's',
            label: 'Save',
            description: 'Save the current file',
            shortcut: '⌘S',
          },
        ]}
        defaultOpen
      />
    );
    expect(screen.getByText('Save the current file')).toBeInTheDocument();
    expect(screen.getByText('⌘S')).toBeInTheDocument();
  });
});
