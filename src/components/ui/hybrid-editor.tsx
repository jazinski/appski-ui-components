/**
 * HybridEditor - A dual-mode editor supporting both rich text (Lexical) and code (Monaco)
 * 
 * Features:
 * - Rich text editing with Lexical (WYSIWYG)
 * - Code editing with Monaco (Markdown)
 * - Seamless mode switching
 * - Integrated AI assistance button
 * - Full TypeScript support
 * - Accessible and keyboard-friendly
 */

import * as React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LinkNode } from '@lexical/link';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { 
  TRANSFORMERS,
  $convertToMarkdownString,
  $convertFromMarkdownString 
} from '@lexical/markdown';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import type { OnMount } from '@monaco-editor/react';
import type * as Monaco from 'monaco-editor';

// Lazy load Monaco Editor - it's ~1MB and not needed until code mode is activated
const MonacoEditor = React.lazy(() => import('@monaco-editor/react'));
import { 
  Code2, 
  Type, 
  Sparkles, 
  Bold, 
  Italic, 
  List, 

  Heading1,
  Heading2,
  Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

export type EditorMode = 'rich' | 'code';

export interface HybridEditorProps {
  /** Initial content in Markdown format */
  value?: string;
  /** Callback when content changes (Markdown format) */
  onChange?: (value: string) => void;
  /** Initial editor mode */
  initialMode?: EditorMode;
  /** Show AI assistance button */
  showAI?: boolean;
  /** Callback when AI button is clicked */
  onAIClick?: (selectedText: string, fullContent: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum height in pixels */
  minHeight?: number;
  /** Maximum height in pixels (enables scrolling) */
  maxHeight?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Monaco editor theme */
  monacoTheme?: 'vs-dark' | 'vs-light';
}

// Lexical editor theme
const theme = {
  paragraph: 'mb-2 last:mb-0',
  heading: {
    h1: 'text-3xl font-bold mb-4 mt-6 first:mt-0',
    h2: 'text-2xl font-bold mb-3 mt-5 first:mt-0',
    h3: 'text-xl font-bold mb-2 mt-4 first:mt-0',
  },
  list: {
    ul: 'list-disc list-inside mb-2 ml-4',
    ol: 'list-decimal list-inside mb-2 ml-4',
    listitem: 'mb-1',
  },
  link: 'text-primary hover:underline cursor-pointer',
  text: {
    bold: 'font-bold',
    italic: 'italic',
    underline: 'underline',
    strikethrough: 'line-through',
    code: 'bg-muted px-1.5 py-0.5 rounded font-mono text-sm',
  },
  code: 'bg-muted p-4 rounded-lg font-mono text-sm block my-4',
  quote: 'border-l-4 border-primary pl-4 italic my-4',
};

// Toolbar Component
function EditorToolbar({ 
  mode, 
  onModeChange, 
  onAIClick,
  showAI = true,
}: { 
  mode: EditorMode;
  onModeChange: (mode: EditorMode) => void;
  onAIClick?: (() => void) | undefined;
  showAI?: boolean | undefined;
}) {
  const [editor] = useLexicalComposerContext();

  const formatBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const formatItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const insertHeading = (level: 1 | 2) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(`h${level}`));
      }
    });
  };

  const insertList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const insertQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  return (
    <div className="flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5">
      <div className="flex items-center gap-1">
        {/* Mode Toggle */}
        <div className="flex items-center gap-0.5 mr-2 border-r border-border pr-2">
          <Button
            variant={mode === 'rich' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => { onModeChange('rich'); }}
            title="Rich Text Mode"
            className="h-8 px-2"
          >
            <Type className="h-4 w-4" />
          </Button>
          <Button
            variant={mode === 'code' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => { onModeChange('code'); }}
            title="Code Mode"
            className="h-8 px-2"
          >
            <Code2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Rich Text Formatting (only show in rich mode) */}
        {mode === 'rich' && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={formatBold}
              title="Bold (⌘B)"
              className="h-8 px-2"
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={formatItalic}
              title="Italic (⌘I)"
              className="h-8 px-2"
            >
              <Italic className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { insertHeading(1); }}
              title="Heading 1"
              className="h-8 px-2"
            >
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { insertHeading(2); }}
              title="Heading 2"
              className="h-8 px-2"
            >
              <Heading2 className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Button
              variant="ghost"
              size="sm"
              onClick={insertList}
              title="Bullet List"
              className="h-8 px-2"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={insertQuote}
              title="Quote"
              className="h-8 px-2"
            >
              <Quote className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      {/* AI Button */}
      {showAI && onAIClick && (
        <Button
          variant="gradient-purple"
          size="sm"
          onClick={onAIClick}
          className="h-8 px-3 gap-1.5"
          title="Ask AI for help"
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Ask AI</span>
        </Button>
      )}
    </div>
  );
}

// Plugin to sync Markdown content
function MarkdownSyncPlugin({ 
  value, 
  onChange,
  isInitialized,
  setIsInitialized 
}: { 
  value?: string;
  onChange?: (value: string) => void;
  isInitialized: boolean;
  setIsInitialized: (value: boolean) => void;
}) {
  const [editor] = useLexicalComposerContext();

  // Initialize content from value prop
  React.useEffect(() => {
    if (!isInitialized && value) {
      editor.update(() => {
        $convertFromMarkdownString(value, TRANSFORMERS);
      });
      setIsInitialized(true);
    }
  }, [editor, value, isInitialized, setIsInitialized]);

  // Listen for changes and convert to Markdown
  React.useEffect(() => {
    if (!onChange) return;

    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const markdown = $convertToMarkdownString(TRANSFORMERS);
        onChange(markdown);
      });
    });
  }, [editor, onChange]);

  return null;
}

/**
 * HybridEditor - Dual-mode rich text and code editor
 */
export const HybridEditor = React.forwardRef<HTMLDivElement, HybridEditorProps>(
  (
    {
      value = '',
      onChange,
      initialMode = 'rich',
      showAI = true,
      onAIClick,
      placeholder = 'Start typing...',
      minHeight = 200,
      maxHeight,
      disabled = false,
      className,
      monacoTheme = 'vs-dark',
    },
    ref
  ) => {
    const [mode, setMode] = React.useState<EditorMode>(initialMode);
    const [content, setContent] = React.useState(value);
    const [isInitialized, setIsInitialized] = React.useState(false);
    const monacoEditorRef = React.useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);

    // Update content when value prop changes (external controlled updates)
    React.useEffect(() => {
      if (value !== content) {
        setContent(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleContentChange = React.useCallback((newContent: string) => {
      setContent(newContent);
      onChange?.(newContent);
    }, [onChange]);

    const handleModeChange = React.useCallback((newMode: EditorMode) => {
      // When switching to rich mode, reset isInitialized so the Lexical editor
      // re-initializes with the current content (fixes data loss on mode toggle)
      if (newMode === 'rich') {
        setIsInitialized(false);
      }
      setMode(newMode);
    }, []);

    const handleMonacoMount: OnMount = (editor) => {
      monacoEditorRef.current = editor;
    };

    const handleAIClick = React.useCallback(() => {
      if (!onAIClick) return;

      let selectedText = '';
      
      if (mode === 'rich') {
        // Get selected text from Lexical (we'll implement this)
        selectedText = window.getSelection()?.toString() || '';
      } else {
        // Get selected text from Monaco
        const editor = monacoEditorRef.current;
        if (editor) {
          const selection = editor.getSelection();
          if (selection) {
            selectedText = editor.getModel()?.getValueInRange(selection) || '';
          }
        }
      }

      onAIClick(selectedText, content);
    }, [mode, content, onAIClick]);

    const initialConfig = {
      namespace: 'HybridEditor',
      theme,
      onError: (error: Error) => {
        console.error('Lexical error:', error);
      },
      nodes: [
        HeadingNode,
        QuoteNode,
        ListNode,
        ListItemNode,
        CodeNode,
        CodeHighlightNode,
        LinkNode,
      ],
      editable: !disabled,
    };

    const editorHeight = maxHeight 
      ? { minHeight, maxHeight, overflowY: 'auto' as const }
      : { minHeight };

    return (
      <div 
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-background overflow-hidden',
          disabled && 'opacity-60 pointer-events-none',
          className
        )}
      >
        {mode === 'rich' ? (
          <LexicalComposer initialConfig={initialConfig}>
            <EditorToolbar 
              mode={mode} 
              onModeChange={handleModeChange}
              onAIClick={onAIClick ? handleAIClick : undefined}
              showAI={showAI}
            />
            <div className="relative" style={editorHeight}>
              <RichTextPlugin
                contentEditable={
                  <ContentEditable 
                    className="outline-none px-4 py-3 prose prose-sm max-w-none dark:prose-invert"
                    style={{ minHeight }}
                  />
                }
                placeholder={
                  <div className="absolute top-3 left-4 text-muted-foreground pointer-events-none">
                    {placeholder}
                  </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <HistoryPlugin />
              <ListPlugin />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
              <MarkdownSyncPlugin 
                value={content}
                onChange={handleContentChange}
                isInitialized={isInitialized}
                setIsInitialized={setIsInitialized}
              />
            </div>
          </LexicalComposer>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5">
              <div className="flex items-center gap-0.5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => { handleModeChange('rich'); }}
                  title="Rich Text Mode"
                  className="h-8 px-2"
                >
                  <Type className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => { handleModeChange('code'); }}
                  title="Code Mode"
                  className="h-8 px-2"
                >
                  <Code2 className="h-4 w-4" />
                </Button>
              </div>

              {showAI && onAIClick && (
                <Button
                  variant="gradient-purple"
                  size="sm"
                  onClick={handleAIClick}
                  className="h-8 px-3 gap-1.5"
                  title="Ask AI for help"
                >
                  <Sparkles className="h-4 w-4" />
                  <span className="hidden sm:inline">Ask AI</span>
                </Button>
              )}
            </div>
            <React.Suspense fallback={
              <div 
                className="flex items-center justify-center bg-slate-900 text-slate-400"
                style={{ height: maxHeight || minHeight }}
              >
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-600 border-t-purple-500 mb-2"></div>
                  <p className="text-sm">Loading editor...</p>
                </div>
              </div>
            }>
              <MonacoEditor
                height={maxHeight || minHeight}
                defaultLanguage="markdown"
                value={content}
                onChange={(value: string | undefined) => { handleContentChange(value || ''); }}
                onMount={handleMonacoMount}
                theme={monacoTheme}
                options={{
                  minimap: { enabled: false },
                  lineNumbers: 'on',
                  wordWrap: 'on',
                  fontSize: 14,
                  padding: { top: 12, bottom: 12 },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  readOnly: disabled,
                }}
              />
            </React.Suspense>
          </>
        )}
      </div>
    );
  }
);

HybridEditor.displayName = 'HybridEditor';
