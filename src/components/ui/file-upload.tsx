import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Upload } from 'lucide-react';

const fileUploadVariants = cva(
  'relative flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      state: {
        idle: 'border-input bg-background hover:border-primary/50 hover:bg-accent/50',
        active: 'border-primary bg-accent',
        error: 'border-destructive bg-destructive/5',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  }
);

export interface FileUploadRejectedFile {
  file: File;
  reason: 'size' | 'type' | 'max-files' | 'custom';
  message: string;
}

export interface FileUploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrop'>,
    VariantProps<typeof fileUploadVariants> {
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

function matchesAccept(file: File, accept?: string): boolean {
  if (!accept) return true;
  const fileExtension = `.${file.name.split('.').pop()?.toLowerCase() ?? ''}`;
  return accept.split(',').some((token) => {
    const t = token.trim().toLowerCase();
    if (!t) return false;
    if (t.startsWith('.')) return t === fileExtension;
    if (t.endsWith('/*')) return file.type.startsWith(t.slice(0, -1));
    return t === file.type.toLowerCase();
  });
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const unit = units[i] ?? 'B';
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1))} ${unit}`;
}

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
export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      state,
      onFilesAccepted,
      onFilesRejected,
      validate,
      accept,
      multiple = true,
      maxSize,
      maxFiles,
      disabled = false,
      label = 'Drag files here or click to browse',
      hint,
      helperText,
      children,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const dragDepth = React.useRef(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const helperId = React.useId();

    const openPicker = React.useCallback(() => {
      if (!disabled) inputRef.current?.click();
    }, [disabled]);

    const handleFiles = React.useCallback(
      (fileList: FileList | File[]) => {
        const incoming = Array.from(fileList);
        if (incoming.length === 0) return;

        const accepted: File[] = [];
        const rejected: FileUploadRejectedFile[] = [];

        for (const file of incoming) {
          if (!matchesAccept(file, accept)) {
            rejected.push({ file, reason: 'type', message: `${file.name}: file type not accepted` });
          } else if (maxSize !== undefined && file.size > maxSize) {
            rejected.push({
              file,
              reason: 'size',
              message: `${file.name}: exceeds ${formatBytes(maxSize)}`,
            });
          } else if (maxFiles !== undefined && accepted.length >= maxFiles) {
            rejected.push({
              file,
              reason: 'max-files',
              message: `${file.name}: maximum of ${maxFiles} file${maxFiles === 1 ? '' : 's'} exceeded`,
            });
          } else if (validate) {
            const error = validate(file);
            if (error) {
              rejected.push({ file, reason: 'custom', message: `${file.name}: ${error}` });
            } else {
              accepted.push(file);
            }
          } else {
            accepted.push(file);
          }
        }

        if (accepted.length > 0) onFilesAccepted?.(accepted);
        if (rejected.length > 0) onFilesRejected?.(rejected);
      },
      [accept, maxSize, maxFiles, validate, onFilesAccepted, onFilesRejected]
    );

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragDepth.current += 1;
      if (!disabled && e.dataTransfer.types.includes('Files')) setIsDragging(true);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!disabled) e.dataTransfer.dropEffect = 'copy';
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragDepth.current -= 1;
      if (dragDepth.current <= 0) {
        dragDepth.current = 0;
        setIsDragging(false);
      }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      dragDepth.current = 0;
      setIsDragging(false);
      if (!disabled) handleFiles(e.dataTransfer.files);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPicker();
      }
    };

    const computedState = isDragging ? 'active' : state;

    return (
      <div className={className} ref={ref} {...props}>
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          aria-label={ariaLabel ?? label}
          aria-describedby={helperText ? helperId : undefined}
          className={fileUploadVariants({ state: computedState })}
          onClick={openPicker}
          onKeyDown={handleKeyDown}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload
            className="size-8 shrink-0 text-muted-foreground"
            aria-hidden="true"
            focusable="false"
          />
          <p className="text-sm font-medium text-foreground">{label}</p>
          {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
          {children}
        </div>
        {helperText ? (
          <p id={helperId} className="mt-2 text-xs text-muted-foreground">
            {helperText}
          </p>
        ) : null}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden="true"
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </div>
    );
  }
);
FileUpload.displayName = 'FileUpload';
