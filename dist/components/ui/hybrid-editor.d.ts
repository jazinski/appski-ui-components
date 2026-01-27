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
/**
 * HybridEditor - Dual-mode rich text and code editor
 */
export declare const HybridEditor: React.ForwardRefExoticComponent<HybridEditorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=hybrid-editor.d.ts.map