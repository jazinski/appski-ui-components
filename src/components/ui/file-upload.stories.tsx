import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FileUpload, type FileUploadRejectedFile } from './file-upload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A file upload dropzone with click-to-browse, drag-and-drop, and client-side validation for file type, size, count, and custom rules.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Heading text inside the dropzone' },
    hint: { control: 'text', description: 'Hint text inside the dropzone' },
    helperText: { control: 'text', description: 'Helper text below the dropzone' },
    accept: { control: 'text', description: 'Accepted file types (input accept attribute)' },
    multiple: { control: 'boolean', description: 'Allow selecting multiple files' },
    maxSize: { control: 'number', description: 'Maximum size per file in bytes' },
    maxFiles: { control: 'number', description: 'Maximum number of accepted files' },
    disabled: { control: 'boolean', description: 'Visually disable the dropzone' },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Drag files here or click to browse',
    hint: 'Any file type, up to 10 MB each',
    maxSize: 10 * 1024 * 1024,
  },
};

export const SingleFile: Story = {
  args: {
    multiple: false,
    maxFiles: 1,
    label: 'Upload a file',
    hint: 'One file only',
  },
};

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    label: 'Drop images here',
    hint: 'PNG, JPG, GIF or WebP',
    helperText: 'Images are resized on the server after upload.',
  },
};

export const DocumentsOnly: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    label: 'Drop documents here',
    hint: 'PDF or Word documents, max 5 MB',
    maxSize: 5 * 1024 * 1024,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Upload unavailable',
    hint: 'You have reached your storage limit',
  },
};

export const WithFileList: Story = {
  render: () => {
    const [files, setFiles] = useState<File[]>([]);
    const [rejected, setRejected] = useState<FileUploadRejectedFile[]>([]);
    return (
      <div className="space-y-4">
        <FileUpload
          label="Drop files here or click to browse"
          hint="Max 5 MB per file"
          maxSize={5 * 1024 * 1024}
          onFilesAccepted={(accepted) => { setFiles((prev) => [...prev, ...accepted]); }}
          onFilesRejected={setRejected}
        />
        {files.length > 0 && (
          <ul className="space-y-1 text-sm">
            {files.map((f) => (
              <li key={`${f.name}-${f.size}`}>
                {f.name} — {Math.round(f.size / 1024)} KB
              </li>
            ))}
          </ul>
        )}
        {rejected.length > 0 && (
          <ul className="space-y-1 text-sm text-destructive">
            {rejected.map((r) => (
              <li key={`${r.file.name}-${r.file.size}`}>{r.message}</li>
            ))}
          </ul>
        )}
      </div>
    );
  },
};
