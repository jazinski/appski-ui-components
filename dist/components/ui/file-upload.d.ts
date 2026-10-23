import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const fileUploadVariants: (props?: ({
    state?: "error" | "active" | "idle" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FileUploadRejectedFile {
    file: File;
    reason: 'size' | 'type' | 'max-files' | 'custom';
    message: string;
}
export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'>, VariantProps<typeof fileUploadVariants> {
    /** Called with files that passed validation */
    onFilesAccepted?: (files: File[]) => void;
    /** Called with files that failed validation */
    onFilesRejected?: (files: FileUploadRejectedFile[]) => void;
    /** Additional per-file validation; return an error message or null */
    validate?: (file: File) => string | null;
    /** Accepted file types (input `accept` attribute), e.g. "image/*,.pdf" */
    accept?: string;
    /** Allow selecting multiple files */
    multiple?: boolean;
    /** Maximum size per file in bytes */
    maxSize?: number;
    /** Maximum number of files that can be accepted in total */
    maxFiles?: number;
    /** Visually disable the dropzone */
    disabled?: boolean;
    /** Heading text inside the dropzone */
    label?: string;
    /** Hint text inside the dropzone */
    hint?: string;
    /** Helper text announced via aria-describedby below the dropzone */
    helperText?: string;
    /** Accessible name when no label is provided */
    'aria-label'?: string;
}
export declare function formatBytes(bytes: number): string;
export { fileUploadVariants };
/**
 * File upload dropzone with click-to-browse, drag-and-drop, and client-side
 * validation (type, size, count, custom).
 *
 * @example
 * <FileUpload
 *   label="Drop files here"
 *   accept="image/*,.pdf"
 *   maxSize={5 * 1024 * 1024}
 *   onFilesAccepted={(files) => console.log(files)}
 * />
 */
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=file-upload.d.ts.map