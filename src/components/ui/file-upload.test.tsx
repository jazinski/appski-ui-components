import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUpload, formatBytes } from './file-upload';

function makeFile(name = 'test.png', size = 1024, type = 'image/png') {
  return new File(['x'.repeat(size)], name, { type });
}

function getInput(): HTMLInputElement {
  return document.querySelector('input[type="file"]') as HTMLInputElement;
}

// jsdom has no DataTransfer/DragEvent; approximate with plain events carrying
// a dataTransfer-shaped payload.
function fireDragEvent(element: HTMLElement, type: string, dataTransfer: unknown) {
  const event = new Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'dataTransfer', { value: dataTransfer });
  element.dispatchEvent(event);
}

function dropFiles(element: HTMLElement, files: File[]) {
  fireDragEvent(element, 'drop', { files, types: ['Files'] });
}

describe('FileUpload', () => {
  it('renders with default label and upload icon', () => {
    render(<FileUpload />);
    expect(
      screen.getByRole('button', { name: 'Drag files here or click to browse' })
    ).toBeInTheDocument();
  });

  it('renders custom label and hint', () => {
    render(<FileUpload label="Upload docs" hint="PDF only" />);
    expect(screen.getByText('Upload docs')).toBeInTheDocument();
    expect(screen.getByText('PDF only')).toBeInTheDocument();
  });

  it('renders helper text linked via aria-describedby', () => {
    render(<FileUpload helperText="Files are scanned before upload" />);
    expect(screen.getByText('Files are scanned before upload')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby');
  });

  it('accepts files selected through the hidden input', async () => {
    const onAccept = vi.fn();
    render(<FileUpload onFilesAccepted={onAccept} />);
    await userEvent.upload(getInput(), makeFile());
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(onAccept.mock.calls[0][0][0].name).toBe('test.png');
  });

  it('accepts multiple files by default', async () => {
    const onAccept = vi.fn();
    render(<FileUpload onFilesAccepted={onAccept} />);
    await userEvent.upload(getInput(), [makeFile('a.png'), makeFile('b.png')]);
    expect(onAccept.mock.calls[0][0]).toHaveLength(2);
  });

  it('passes accept and multiple attributes to the hidden input', () => {
    render(<FileUpload multiple={false} accept=".pdf" />);
    const input = getInput();
    expect(input.multiple).toBe(false);
    expect(input).toHaveAttribute('accept', '.pdf');
  });

  it('opens file picker on click and on Enter/Space', async () => {
    const user = userEvent.setup();
    render(<FileUpload />);
    const zone = screen.getByRole('button');
    const input = getInput();
    const clickSpy = vi.spyOn(input, 'click').mockImplementation(() => {});
    await user.click(zone);
    expect(clickSpy).toHaveBeenCalledTimes(1);
    zone.focus();
    await user.keyboard('{Enter}');
    expect(clickSpy).toHaveBeenCalledTimes(2);
    await user.keyboard('{ }');
    expect(clickSpy).toHaveBeenCalledTimes(3);
    clickSpy.mockRestore();
  });

  it('does not open the picker when disabled', async () => {
    const user = userEvent.setup();
    render(<FileUpload disabled />);
    const input = getInput();
    const clickSpy = vi.spyOn(input, 'click').mockImplementation(() => {});
    const zone = screen.getByRole('button');
    expect(zone).toHaveAttribute('aria-disabled', 'true');
    await user.click(zone);
    expect(clickSpy).not.toHaveBeenCalled();
    clickSpy.mockRestore();
  });

  it('applies active styling while dragging files over the zone', async () => {
    render(<FileUpload />);
    const zone = screen.getByRole('button');
    expect(zone.className).toContain('border-input');
    fireDragEvent(zone, 'dragenter', { types: ['Files'] });
    await waitFor(() => { expect(zone.className).toContain('border-primary bg-accent'); });
    fireDragEvent(zone, 'dragleave', {});
    await waitFor(() => { expect(zone.className).toContain('border-input'); });
  });

  it('keeps active styling until the last nested drag leaves', async () => {
    render(<FileUpload />);
    const zone = screen.getByRole('button');
    fireDragEvent(zone, 'dragenter', { types: ['Files'] });
    fireDragEvent(zone, 'dragenter', { types: ['Files'] });
    await waitFor(() => { expect(zone.className).toContain('border-primary bg-accent'); });
    act(() => { fireDragEvent(zone, 'dragleave', {}); });
    expect(zone.className).toContain('border-primary bg-accent');
    act(() => { fireDragEvent(zone, 'dragleave', {}); });
    await waitFor(() => { expect(zone.className).toContain('border-input'); });
  });

  it('handles native drop events', async () => {
    const onAccept = vi.fn();
    render(<FileUpload onFilesAccepted={onAccept} />);
    dropFiles(screen.getByRole('button'), [makeFile('dropped.png')]);
    await waitFor(() => { expect(onAccept).toHaveBeenCalledTimes(1); });
    expect(onAccept.mock.calls[0][0][0].name).toBe('dropped.png');
  });

  it('ignores drops when disabled', () => {
    const onAccept = vi.fn();
    render(<FileUpload disabled onFilesAccepted={onAccept} />);
    dropFiles(screen.getByRole('button'), [makeFile()]);
    expect(onAccept).not.toHaveBeenCalled();
  });

  it('rejects files above maxSize', async () => {
    const onAccept = vi.fn();
    const onReject = vi.fn();
    render(<FileUpload maxSize={512} onFilesAccepted={onAccept} onFilesRejected={onReject} />);
    await userEvent.upload(getInput(), makeFile('big.png', 1024));
    expect(onAccept).not.toHaveBeenCalled();
    expect(onReject).toHaveBeenCalledTimes(1);
    expect(onReject.mock.calls[0][0][0].reason).toBe('size');
    expect(onReject.mock.calls[0][0][0].message).toContain('512 B');
  });

  it('rejects files that do not match accept', async () => {
    // applyAccept:false so user-event does not pre-filter the selection and
    // the component's own accept validation is exercised.
    const user = userEvent.setup({ applyAccept: false });
    const onReject = vi.fn();
    render(<FileUpload accept="image/*" onFilesRejected={onReject} />);
    await user.upload(getInput(), makeFile('notes.txt', 100, 'text/plain'));
    expect(onReject).toHaveBeenCalledTimes(1);
    expect(onReject.mock.calls[0][0][0].reason).toBe('type');
  });

  it('accepts extension tokens like .pdf', async () => {
    const onAccept = vi.fn();
    const onReject = vi.fn();
    render(<FileUpload accept=".pdf" onFilesAccepted={onAccept} onFilesRejected={onReject} />);
    await userEvent.upload(getInput(), makeFile('doc.pdf', 100, 'application/pdf'));
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(onReject).not.toHaveBeenCalled();
  });

  it('rejects extra files beyond maxFiles', async () => {
    const onAccept = vi.fn();
    const onReject = vi.fn();
    render(<FileUpload maxFiles={1} onFilesAccepted={onAccept} onFilesRejected={onReject} />);
    await userEvent.upload(getInput(), [makeFile('a.png'), makeFile('b.png')]);
    expect(onAccept.mock.calls[0][0]).toHaveLength(1);
    expect(onReject.mock.calls[0][0]).toHaveLength(1);
    expect(onReject.mock.calls[0][0][0].reason).toBe('max-files');
  });

  it('runs custom validation and rejects on error string', async () => {
    const onAccept = vi.fn();
    const onReject = vi.fn();
    render(
      <FileUpload
        validate={(f) => (f.name.includes('bad') ? 'no bad files' : null)}
        onFilesAccepted={onAccept}
        onFilesRejected={onReject}
      />
    );
    await userEvent.upload(getInput(), [makeFile('good.png'), makeFile('bad.png')]);
    expect(onAccept.mock.calls[0][0]).toHaveLength(1);
    expect(onAccept.mock.calls[0][0][0].name).toBe('good.png');
    expect(onReject.mock.calls[0][0][0].reason).toBe('custom');
    expect(onReject.mock.calls[0][0][0].message).toContain('no bad files');
  });

  it('clears the hidden input value so the same file can be re-selected', async () => {
    const onAccept = vi.fn();
    render(<FileUpload onFilesAccepted={onAccept} />);
    const input = getInput();
    await userEvent.upload(input, makeFile('same.png'));
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('');
    await userEvent.upload(input, makeFile('same.png'));
    expect(onAccept).toHaveBeenCalledTimes(2);
  });
});

describe('formatBytes', () => {
  it('formats bytes', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(512)).toBe('512 B');
    expect(formatBytes(2048)).toBe('2 KB');
    expect(formatBytes(5 * 1024 * 1024)).toBe('5 MB');
  });
});
