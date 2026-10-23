import * as React from 'react';
import { createPortal } from 'react-dom';
import { cva } from 'class-variance-authority';
import { Search, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================================
// Types
// ============================================================================

export interface CommandPaletteCommand {
  /** Unique id for the command */
  id: string;
  /** Label shown in the list; also the primary search target */
  label: string;
  /** Optional secondary text shown next to / under the label */
  description?: string;
  /** Grouping label. Commands with the same group render together */
  group?: string;
  /** Additional strings matched by the filter (e.g. aliases) */
  keywords?: string[];
  /** Icon element rendered before the label */
  icon?: React.ReactNode;
  /** Keyboard shortcut hint, e.g. "Mod+S" or "⇧D" */
  shortcut?: string;
  /** Disable selection while keeping the command visible */
  disabled?: boolean;
  /** Called when the command is chosen (Enter or click) */
  onSelect?: (command: CommandPaletteCommand) => void;
}

export interface CommandPaletteProps {
  /** Controlled open state */
  open?: boolean;
  /** Default open state for uncontrolled usage */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Command list */
  commands: CommandPaletteCommand[];
  /** Input placeholder */
  placeholder?: string;
  /** Empty state text when no command matches */
  emptyText?: string;
  /** Enable the global Cmd/Ctrl+K hotkey that toggles the palette */
  enableHotkey?: boolean;
  /** Custom hotkey (lower-case key) used with Mod (Cmd/Ctrl). Default "k" */
  hotkey?: string;
  /** Max rendered results */
  maxResults?: number;
  /** Portal container. Defaults to document.body */
  container?: HTMLElement;
  /** Accessible label for the dialog */
  'aria-label'?: string;
  /** Additional class name on the palette root */
  className?: string;
}

// ============================================================================
// Fuzzy matching (subsequence score, no external deps)
// ============================================================================

function normalize(value: string): string {
  return value.toLowerCase().trim();
}

/**
 * Returns a match score (higher is better) or -1 when the query does not
 * fuzzy-match the candidate. Matching is a subsequence match: every query
 * character must appear in order. Consecutive matches and word-boundary
 * matches score higher, mirroring the behaviour users expect from a
 * command palette.
 */
export function fuzzyScore(query: string, candidate: string): number {
  const q = normalize(query);
  const c = normalize(candidate);
  if (!q) return 0;
  if (!c) return -1;
  if (c === q) return 1000;
  if (c.startsWith(q)) return 900 - (c.length - q.length);

  let score = 0;
  let candidateIndex = 0;
  let streak = 0;

  for (let qi = 0; qi < q.length; qi++) {
    const ch = q[qi];
    let found = -1;
    for (let ci = candidateIndex; ci < c.length; ci++) {
      if (c[ci] === ch) {
        found = ci;
        break;
      }
    }
    if (found === -1) return -1;
    // Word-boundary bonus (start of string or after a separator)
    if (found === 0 || /[\s\-_/.]/.test(c[found - 1] ?? '')) score += 12;
    streak = found === candidateIndex ? streak + 1 : 0;
    score += 4 + streak * 3;
    candidateIndex = found + 1;
  }
  return score;
}

function scoreCommand(command: CommandPaletteCommand, query: string): number {
  const label = fuzzyScore(query, command.label);
  const description = command.description ? fuzzyScore(query, command.description) * 0.6 : -1;
  const keywords = (command.keywords ?? []).reduce<number>(
    (best, kw) => Math.max(best, fuzzyScore(query, kw ?? '') * 0.8),
    -1
  );
  return Math.max(label, description, keywords);
}

/** Filter and rank commands against a query. Exported for reuse and testing. */
export function filterCommands(
  commands: CommandPaletteCommand[],
  query: string,
  maxResults = Infinity
): CommandPaletteCommand[] {
  if (!query.trim()) {
    return commands.slice(0, maxResults);
  }
  return commands
    .map((command) => ({ command, score: scoreCommand(command, query) }))
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((entry) => entry.command);
}

// ============================================================================
// Variants
// ============================================================================

const commandPaletteOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
);

const commandPaletteContentVariants = cva(
  'fixed left-[50%] top-[15%] z-50 flex max-h-[calc(100vh-4rem)] w-full max-w-xl translate-x-[-50%] flex-col overflow-hidden border border-border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-[10%] sm:rounded-lg'
);

// ============================================================================
// Component
// ============================================================================

interface GroupedCommands {
  group: string | undefined;
  commands: CommandPaletteCommand[];
}

function groupCommands(commands: CommandPaletteCommand[]): GroupedCommands[] {
  const groups: GroupedCommands[] = [];
  const groupIndex = new Map<string | undefined, number>();

  for (const command of commands) {
    const key = command.group;
    if (!groupIndex.has(key)) {
      groupIndex.set(key, groups.length);
      groups.push({ group: command.group, commands: [] });
    }
    const group = groups[groupIndex.get(key) ?? 0];
    group?.commands.push(command);
  }
  return groups;
}

/**
 * CommandPalette is a Cmd+K style quick-actions dialog: type to fuzzy-search
 * a command list, navigate with arrows, run with Enter.
 *
 * Follows the library's Dialog/Sheet conventions: controlled or uncontrolled
 * open state via context, portal to document.body, ESC to close, body scroll
 * lock, focus restored on close.
 *
 * @example
 * <CommandPalette
 *   enableHotkey
 *   commands={[
 *     { id: 'home', label: 'Go to Home', group: 'Navigation', onSelect: () => router.push('/') },
 *     { id: 'theme', label: 'Toggle theme', group: 'Appearance', onSelect: toggleTheme },
 *   ]}
 * />
 */
function CommandPalette({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  commands,
  placeholder = 'Type a command or search…',
  emptyText = 'No results found.',
  enableHotkey = false,
  hotkey = 'k',
  maxResults = Infinity,
  container,
  className,
  ...props
}: CommandPaletteProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const [query, setQuery] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const previouslyFocusedElement = React.useRef<HTMLElement | null>(null);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  const results = React.useMemo(
    () => filterCommands(commands, query, maxResults),
    [commands, query, maxResults]
  );

  // Reset the query/selection whenever the palette opens
  React.useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
    }
  }, [open]);

  // Global Cmd/Ctrl+<hotkey> toggle
  React.useEffect(() => {
    if (!enableHotkey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === hotkey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenChange(!open);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enableHotkey, hotkey, open, handleOpenChange]);

  // ESC to close, focus management and body scroll lock while open
  React.useEffect(() => {
    if (!open) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleOpenChange(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the input after mount
    const focusInput = () => inputRef.current?.focus();
    const raf = requestAnimationFrame(focusInput);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocusedElement.current?.focus();
    };
  }, [open, handleOpenChange]);

  // Keep the active index inside the result list (e.g. after filtering)
  React.useEffect(() => {
    setActiveIndex((index) => Math.min(index, Math.max(results.length - 1, 0)));
  }, [results.length]);

  const selectCommand = React.useCallback(
    (command: CommandPaletteCommand) => {
      if (command.disabled) return;
      handleOpenChange(false);
      command.onSelect?.(command);
    },
    [handleOpenChange]
  );

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((index) =>
        results.length ? (index - 1 + results.length) % results.length : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const command = results[activeIndex];
      if (command) selectCommand(command);
    } else if (e.key === 'Tab') {
      // The palette is a single-input dialog: keep focus on the input
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setActiveIndex(0);
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  const groups = groupCommands(results);

  return createPortal(
    <>
      <div
        data-state={open ? 'open' : 'closed'}
        className={commandPaletteOverlayVariants()}
        onClick={() => { handleOpenChange(false); }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={props['aria-label'] ?? 'Command palette'}
        data-state={open ? 'open' : 'closed'}
        className={cn(commandPaletteContentVariants(), className)}
        {...props}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <Search className="text-muted-foreground h-4 w-4 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="command-palette-list"
            aria-activedescendant={
              results[activeIndex]
                ? `command-palette-option-${results[activeIndex].id}`
                : undefined
            }
            aria-autocomplete="list"
            value={query}
            onChange={handleChange}
            onKeyDown={handleInputKeyDown}
            placeholder={placeholder}
            className="text-foreground placeholder:text-muted-foreground h-12 w-full bg-transparent text-sm outline-none"
          />
          <kbd className="bg-muted text-muted-foreground pointer-events-none hidden shrink-0 rounded px-1.5 py-0.5 font-mono text-xs font-medium sm:inline-block">
            ESC
          </kbd>
        </div>

        <div id="command-palette-list" role="listbox" aria-label="Commands" className="flex-1 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="text-muted-foreground px-4 py-8 text-center text-sm">{emptyText}</p>
          ) : (
            groups.map((group, groupIndex) => (
              <div key={group.group ?? `__group_${groupIndex}`} className="mb-1 last:mb-0">
                {group.group !== undefined && (
                  <p className="text-muted-foreground px-3 py-1.5 text-xs font-semibold tracking-wide uppercase">
                    {group.group}
                  </p>
                )}
                {group.commands.map((command) => {
                  const index = results.indexOf(command);
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={command.id}
                      id={`command-palette-option-${command.id}`}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      aria-disabled={command.disabled || undefined}
                      disabled={command.disabled}
                      onMouseEnter={() => { setActiveIndex(index); }}
                      onClick={() => { selectCommand(command); }}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm outline-none transition-colors',
                        command.disabled
                          ? 'text-muted-foreground pointer-events-none opacity-50'
                          : 'cursor-pointer',
                        isActive && !command.disabled && 'bg-accent text-accent-foreground'
                      )}
                    >
                      {command.icon && (
                        <span className="text-muted-foreground shrink-0" aria-hidden="true">
                          {command.icon}
                        </span>
                      )}
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="truncate font-medium">{command.label}</span>
                        {command.description && (
                          <span className="text-muted-foreground truncate text-xs">
                            {command.description}
                          </span>
                        )}
                      </span>
                      {command.shortcut && (
                        <kbd className="bg-muted text-muted-foreground pointer-events-none hidden shrink-0 rounded px-1.5 py-0.5 font-mono text-xs font-medium sm:inline-block">
                          {command.shortcut}
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="text-muted-foreground flex items-center gap-4 border-t border-border px-4 py-2 text-xs">
          <span className="flex items-center gap-1">
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
            <ArrowDown className="h-3 w-3" aria-hidden="true" />
            navigate
          </span>
          <span className="flex items-center gap-1">
            <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
            run
          </span>
        </div>
      </div>
    </>,
    container ?? document.body
  );
}

export { CommandPalette, commandPaletteOverlayVariants, commandPaletteContentVariants };

export default CommandPalette;
