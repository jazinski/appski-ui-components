import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Highlight, themes, type Language } from 'prism-react-renderer';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const codeBlockVariants = cva(
  'relative rounded-lg border bg-slate-950 text-slate-50 dark:bg-slate-900 dark:border-slate-800',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface CodeBlockProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof codeBlockVariants> {
  /** Code content to display */
  code: string;
  /** Programming language for syntax highlighting */
  language?: Language;
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Enable copy to clipboard button */
  copyable?: boolean;
  /** Optional filename to display in header */
  filename?: string;
  /** Make the code block collapsible */
  collapsible?: boolean;
  /** Initial collapsed state (only when collapsible=true) */
  defaultCollapsed?: boolean;
  /** Maximum height before scrolling (in pixels) */
  maxHeight?: number;
  /** Highlight specific lines (e.g., [1, 3, 5] or "1,3-5") */
  highlightLines?: number[] | string;
}

/**
 * Code block component with syntax highlighting, copy functionality, and optional features.
 * Perfect for displaying code snippets, JSON configs, API responses, and error messages.
 *
 * @example
 * <CodeBlock
 *   code={`const hello = "world";`}
 *   language="javascript"
 *   showLineNumbers
 *   copyable
 * />
 *
 * @example
 * <CodeBlock
 *   code={jsonString}
 *   language="json"
 *   filename="config.json"
 *   collapsible
 * />
 */
export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      className,
      size,
      code,
      language = 'typescript',
      showLineNumbers = false,
      copyable = true,
      filename,
      collapsible = false,
      defaultCollapsed = false,
      maxHeight,
      highlightLines,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

    const handleCopy = () => {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((err: unknown) => {
          console.error('Failed to copy code:', err);
        });
    };

    const parseHighlightLines = (lines: number[] | string | undefined): Set<number> => {
      if (!lines) return new Set();
      if (Array.isArray(lines)) return new Set(lines);

      const lineSet = new Set<number>();
      const parts = lines.split(',');

      parts.forEach((part) => {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const range = trimmed.split('-');
          const start = Number(range[0]);
          const end = Number(range[1]);
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = start; i <= end; i++) {
              lineSet.add(i);
            }
          }
        } else {
          const num = Number(trimmed);
          if (!isNaN(num)) {
            lineSet.add(num);
          }
        }
      });

      return lineSet;
    };

    const highlightSet = parseHighlightLines(highlightLines);

    return (
      <div ref={ref} className={cn(codeBlockVariants({ size }), className)} {...props}>
        {/* Header - only show if there's filename or collapsible */}
        {(filename || collapsible) && (
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2">
            <div className="flex items-center gap-2">
              {filename && <span className="font-mono text-xs text-slate-400">{filename}</span>}
              {collapsible && (
                <button
                  onClick={() => {
                    setCollapsed(!collapsed);
                  }}
                  className="ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
                  aria-label={collapsed ? 'Expand code' : 'Collapse code'}
                >
                  {collapsed ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            {copyable && !collapsed && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
                aria-label="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Code Content */}
        {!collapsed && (
          <div
            className="overflow-auto"
            style={maxHeight ? { maxHeight: `${maxHeight}px` } : undefined}
          >
            <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
              {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={cn('p-4 font-mono', highlightClassName)} style={style}>
                  {tokens.map((line, i) => {
                    const lineNumber = i + 1;
                    const isHighlighted = highlightSet.has(lineNumber);
                    const lineProps = getLineProps({ line });

                    return (
                      <div
                        key={i}
                        {...lineProps}
                        className={cn(
                          lineProps.className,
                          'table-row',
                          isHighlighted && 'bg-blue-500/10'
                        )}
                      >
                        {showLineNumbers && (
                          <span className="table-cell w-8 pr-4 text-right text-slate-500 select-none">
                            {lineNumber}
                          </span>
                        )}
                        <span className="table-cell">
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </span>
                      </div>
                    );
                  })}
                </pre>
              )}
            </Highlight>
          </div>
        )}

        {/* Copy button for blocks without header */}
        {copyable && !filename && !collapsible && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200"
            aria-label="Copy code to clipboard"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
