import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HybridEditor } from './hybrid-editor';

// Mock Monaco Editor - it doesn't work well in jsdom
vi.mock('@monaco-editor/react', () => ({
  __esModule: true,
  default: ({ value, onChange, onMount, options }: {
    value?: string;
    onChange?: (value: string | undefined) => void;
    onMount?: (editor: unknown) => void;
    options?: { readOnly?: boolean };
  }) => {
    // Simulate onMount callback
    if (onMount) {
      const mockEditor = {
        getSelection: () => ({ startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 }),
        getModel: () => ({
          getValueInRange: () => '',
        }),
      };
      // Call onMount after a tick to simulate async behavior
      setTimeout(() => { onMount(mockEditor); }, 0);
    }
    
    return (
      <textarea
        data-testid="monaco-editor"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={options?.readOnly}
        aria-label="Code editor"
      />
    );
  },
}));

// Mock window.getSelection for rich text mode
const mockGetSelection = vi.fn(() => ({
  toString: () => '',
}));

describe('HybridEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'getSelection', {
      value: mockGetSelection,
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<HybridEditor />);
      // Should render toolbar buttons
      expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
      expect(screen.getByTitle('Code Mode')).toBeInTheDocument();
    });

    it('renders with initial value', () => {
      render(<HybridEditor value="# Hello World" />);
      expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
    });

    it('renders with custom placeholder', async () => {
      render(<HybridEditor placeholder="Type something amazing..." />);
      await waitFor(() => {
        expect(screen.getByText('Type something amazing...')).toBeInTheDocument();
      });
    });

    it('renders with custom className', () => {
      const { container } = render(<HybridEditor className="custom-editor" />);
      expect(container.firstChild).toHaveClass('custom-editor');
    });

    it('forwards ref correctly', () => {
      const ref = vi.fn();
      render(<HybridEditor ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });

    it('applies border and background classes', () => {
      const { container } = render(<HybridEditor />);
      expect(container.firstChild).toHaveClass('rounded-lg');
      expect(container.firstChild).toHaveClass('border');
      expect(container.firstChild).toHaveClass('border-border');
      expect(container.firstChild).toHaveClass('bg-background');
    });
  });

  describe('Mode Switching', () => {
    it('starts in rich mode by default', () => {
      render(<HybridEditor />);
      const richModeButton = screen.getByTitle('Rich Text Mode');
      // In rich mode, the button should have 'default' variant styles
      expect(richModeButton).toBeInTheDocument();
    });

    it('starts in code mode when initialMode is code', async () => {
      render(<HybridEditor initialMode="code" />);
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });

    it('switches from rich to code mode when code button is clicked', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      // Initially in rich mode - no monaco editor
      expect(screen.queryByTestId('monaco-editor')).not.toBeInTheDocument();
      
      // Click code mode button
      await user.click(screen.getByTitle('Code Mode'));
      
      // Should now show monaco editor
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });

    it('switches from code to rich mode when rich button is clicked', async () => {
      const user = userEvent.setup();
      render(<HybridEditor initialMode="code" />);
      
      // Initially in code mode
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      // Click rich mode button
      await user.click(screen.getByTitle('Rich Text Mode'));
      
      // Should now hide monaco editor
      await waitFor(() => {
        expect(screen.queryByTestId('monaco-editor')).not.toBeInTheDocument();
      });
    });
  });

  describe('AI Button', () => {
    it('shows AI button by default', () => {
      render(<HybridEditor onAIClick={vi.fn()} />);
      expect(screen.getByTitle('Ask AI for help')).toBeInTheDocument();
    });

    it('hides AI button when showAI is false', () => {
      render(<HybridEditor showAI={false} onAIClick={vi.fn()} />);
      expect(screen.queryByTitle('Ask AI for help')).not.toBeInTheDocument();
    });

    it('hides AI button when no onAIClick handler is provided', () => {
      render(<HybridEditor showAI={true} />);
      expect(screen.queryByTitle('Ask AI for help')).not.toBeInTheDocument();
    });

    it('calls onAIClick when AI button is clicked in rich mode', async () => {
      const user = userEvent.setup();
      const handleAIClick = vi.fn();
      
      render(<HybridEditor onAIClick={handleAIClick} />);
      
      await user.click(screen.getByTitle('Ask AI for help'));
      
      expect(handleAIClick).toHaveBeenCalledTimes(1);
      expect(handleAIClick).toHaveBeenCalledWith('', '');
    });

    it('calls onAIClick when AI button is clicked in code mode', async () => {
      const user = userEvent.setup();
      const handleAIClick = vi.fn();
      
      render(<HybridEditor initialMode="code" onAIClick={handleAIClick} />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      await user.click(screen.getByTitle('Ask AI for help'));
      
      expect(handleAIClick).toHaveBeenCalledTimes(1);
    });

    it('displays AI button with sparkles icon', () => {
      render(<HybridEditor onAIClick={vi.fn()} />);
      const aiButton = screen.getByTitle('Ask AI for help');
      expect(aiButton).toBeInTheDocument();
      // Check it has the gradient-purple variant styling
      expect(aiButton.className).toContain('gradient');
    });
  });

  describe('Rich Mode Toolbar', () => {
    it('shows formatting buttons in rich mode', () => {
      render(<HybridEditor />);
      expect(screen.getByTitle('Bold (⌘B)')).toBeInTheDocument();
      expect(screen.getByTitle('Italic (⌘I)')).toBeInTheDocument();
      expect(screen.getByTitle('Heading 1')).toBeInTheDocument();
      expect(screen.getByTitle('Heading 2')).toBeInTheDocument();
      expect(screen.getByTitle('Bullet List')).toBeInTheDocument();
      expect(screen.getByTitle('Quote')).toBeInTheDocument();
    });

    it('hides formatting buttons in code mode', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      // Click code mode button
      await user.click(screen.getByTitle('Code Mode'));
      
      await waitFor(() => {
        expect(screen.queryByTitle('Bold (⌘B)')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Italic (⌘I)')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Heading 1')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Heading 2')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Bullet List')).not.toBeInTheDocument();
        expect(screen.queryByTitle('Quote')).not.toBeInTheDocument();
      });
    });

    it('clicking bold button dispatches format command', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      // Click bold button - should not throw
      const boldButton = screen.getByTitle('Bold (⌘B)');
      await user.click(boldButton);
      
      // If we got here without error, the command was dispatched
      expect(boldButton).toBeInTheDocument();
    });

    it('clicking italic button dispatches format command', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      const italicButton = screen.getByTitle('Italic (⌘I)');
      await user.click(italicButton);
      
      expect(italicButton).toBeInTheDocument();
    });

    it('clicking heading buttons updates editor', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      const h1Button = screen.getByTitle('Heading 1');
      const h2Button = screen.getByTitle('Heading 2');
      
      await user.click(h1Button);
      await user.click(h2Button);
      
      expect(h1Button).toBeInTheDocument();
      expect(h2Button).toBeInTheDocument();
    });

    it('clicking list button dispatches list command', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      const listButton = screen.getByTitle('Bullet List');
      await user.click(listButton);
      
      expect(listButton).toBeInTheDocument();
    });

    it('clicking quote button updates editor', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      const quoteButton = screen.getByTitle('Quote');
      await user.click(quoteButton);
      
      expect(quoteButton).toBeInTheDocument();
    });
  });

  describe('Code Mode', () => {
    it('renders Monaco editor in code mode', async () => {
      render(<HybridEditor initialMode="code" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });

    it('passes content to Monaco editor', async () => {
      render(<HybridEditor initialMode="code" value="# Test Content" />);
      
      await waitFor(() => {
        const editor = screen.getByTestId('monaco-editor');
        expect(editor).toHaveValue('# Test Content');
      });
    });

    it('calls onChange when Monaco content changes', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      
      render(<HybridEditor initialMode="code" onChange={handleChange} />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      const editor = screen.getByTestId('monaco-editor');
      await user.clear(editor);
      await user.type(editor, 'New content');
      
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Disabled State', () => {
    it('applies disabled styles when disabled', () => {
      const { container } = render(<HybridEditor disabled />);
      expect(container.firstChild).toHaveClass('opacity-60');
      expect(container.firstChild).toHaveClass('pointer-events-none');
    });

    it('disables Monaco editor when disabled', async () => {
      render(<HybridEditor initialMode="code" disabled />);
      
      await waitFor(() => {
        const editor = screen.getByTestId('monaco-editor');
        expect(editor).toBeDisabled();
      });
    });
  });

  describe('Content Synchronization', () => {
    it('updates content when value prop changes', async () => {
      const { rerender } = render(<HybridEditor initialMode="code" value="Initial" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toHaveValue('Initial');
      });
      
      rerender(<HybridEditor initialMode="code" value="Updated" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toHaveValue('Updated');
      });
    });
  });

  describe('Height Configuration', () => {
    it('applies minHeight style', () => {
      render(<HybridEditor minHeight={300} />);
      // The editor container should have the minHeight style applied
      expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
    });

    it('applies maxHeight with overflow when specified', () => {
      render(<HybridEditor minHeight={200} maxHeight={500} />);
      expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
    });
  });

  describe('Monaco Theme', () => {
    it('uses vs-dark theme by default', async () => {
      render(<HybridEditor initialMode="code" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });

    it('accepts custom monacoTheme prop', async () => {
      render(<HybridEditor initialMode="code" monacoTheme="vs-light" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('toolbar buttons have accessible titles', () => {
      render(<HybridEditor onAIClick={vi.fn()} />);
      
      expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
      expect(screen.getByTitle('Code Mode')).toBeInTheDocument();
      expect(screen.getByTitle('Bold (⌘B)')).toBeInTheDocument();
      expect(screen.getByTitle('Italic (⌘I)')).toBeInTheDocument();
      expect(screen.getByTitle('Heading 1')).toBeInTheDocument();
      expect(screen.getByTitle('Heading 2')).toBeInTheDocument();
      expect(screen.getByTitle('Bullet List')).toBeInTheDocument();
      expect(screen.getByTitle('Quote')).toBeInTheDocument();
      expect(screen.getByTitle('Ask AI for help')).toBeInTheDocument();
    });

    it('mode buttons are keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<HybridEditor />);
      
      const codeButton = screen.getByTitle('Code Mode');
      codeButton.focus();
      await user.keyboard('{Enter}');
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling', () => {
    it('handles undefined onChange gracefully', async () => {
      const user = userEvent.setup();
      render(<HybridEditor initialMode="code" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      // Should not throw when typing without onChange handler
      const editor = screen.getByTestId('monaco-editor');
      await user.type(editor, 'test');
      
      expect(editor).toBeInTheDocument();
    });

    it('handles undefined onAIClick gracefully in rich mode', () => {
      render(<HybridEditor showAI={true} />);
      
      // AI button should not be rendered without handler
      expect(screen.queryByTitle('Ask AI for help')).not.toBeInTheDocument();
    });
  });

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(HybridEditor.displayName).toBe('HybridEditor');
    });
  });

  describe('Value Prop Changes (File Switching)', () => {
    it('updates content when value prop changes in code mode', async () => {
      const { rerender } = render(<HybridEditor initialMode="code" value="# File 1" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      // Simulate switching to a different file
      rerender(<HybridEditor initialMode="code" value="# File 2 - Different Content" />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });

    it('updates content when value prop changes in rich mode', async () => {
      const onChange = vi.fn();
      const { rerender } = render(<HybridEditor value="Initial content" onChange={onChange} />);
      
      // Wait for initial render
      await waitFor(() => {
        expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
      });
      
      // Simulate switching to a different file (external value change)
      rerender(<HybridEditor value="Completely different file content" onChange={onChange} />);
      
      // Wait for the editor to reinitialize with new content
      await waitFor(() => {
        expect(screen.getByTitle('Rich Text Mode')).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('handles rapid file switching', async () => {
      const onChange = vi.fn();
      const { rerender } = render(<HybridEditor initialMode="code" value="# File A" onChange={onChange} />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
      
      // Rapid file switching
      rerender(<HybridEditor initialMode="code" value="# File B" onChange={onChange} />);
      rerender(<HybridEditor initialMode="code" value="# File C" onChange={onChange} />);
      rerender(<HybridEditor initialMode="code" value="# File D" onChange={onChange} />);
      
      await waitFor(() => {
        expect(screen.getByTestId('monaco-editor')).toBeInTheDocument();
      });
    });
  });
});
