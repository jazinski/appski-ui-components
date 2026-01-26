import { VariantProps } from 'class-variance-authority';
import { Language } from 'prism-react-renderer';
import * as React from 'react';
declare const codeBlockVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof codeBlockVariants> {
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
export declare const CodeBlock: React.ForwardRefExoticComponent<CodeBlockProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=code-block.d.ts.map