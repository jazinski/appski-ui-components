import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CopyButton, Kbd } from './copy-button';

const writeTextMock = vi.fn(() => Promise.resolve());

function installClipboard(impl?: () => Promise<void>) {
  writeTextMock.mockReset();
  writeTextMock.mockImplementation(impl ?? (() => Promise.resolve()));
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: writeTextMock },
    configurable: true,
  });
}

const user = userEvent.setup();

const getButton = (name = 'Copy to clipboard') =>
  screen.getByRole('button', { name });

describe('Kbd', () => {
  it('renders a kbd element with the key label', () => {
    render(<Kbd>⌘</Kbd>);
    expect(screen.getByText('⌘').tagName).toBe('KBD');
  });

  it('applies size variants', () => {
    const { rerender } = render(<Kbd size="sm">K</Kbd>);
    expect(screen.getByText('K').className).toContain('h-5');
    rerender(<Kbd size="lg">K</Kbd>);
    expect(screen.getByText('K').className).toContain('h-7');
  });

  it('accepts a custom className', () => {
    render(<Kbd className="ml-2">K</Kbd>);
    expect(screen.getByText('K').className).toContain('ml-2');
  });
});

describe('CopyButton', () => {
  beforeEach(() => {
    installClipboard();
  });

  it('renders an accessible copy button', () => {
    render(<CopyButton value="hello" />);
    expect(getButton()).toBeInTheDocument();
  });

  it('shows the Copy icon initially and Check after a successful copy', async () => {
    render(<CopyButton value="hello" />);
    const button = getButton();
    expect(button.querySelector('.lucide-copy')).toBeInTheDocument();

    await user.click(button);
    expect(writeTextMock).toHaveBeenCalledWith('hello');
    await waitFor(() =>
      { expect(button.querySelector('.lucide-check')).toBeInTheDocument(); }
    );
    expect(button).toHaveAttribute('data-copied', 'true');
  });

  it('resets the copied state after the feedback duration', async () => {
    render(<CopyButton value="hello" feedbackDuration={100} />);
    const button = getButton();
    await user.click(button);
    await waitFor(() =>
      { expect(button.querySelector('.lucide-check')).toBeInTheDocument(); }
    );

    await waitFor(
      () => { expect(button.querySelector('.lucide-copy')).toBeInTheDocument(); },
      { timeout: 2000 }
    );
    expect(button).toHaveAttribute('data-copied', 'false');
  });

  it('does not show success feedback when the clipboard write fails', async () => {
    writeTextMock.mockRejectedValueOnce(new Error('denied'));
    render(<CopyButton value="hello" onCopy={vi.fn()} />);
    const button = getButton();
    await user.click(button);
    await waitFor(() => { expect(writeTextMock).toHaveBeenCalled(); });
    // Give the rejection a tick to settle, then confirm no success state.
    await waitFor(
      () => { expect(button).toHaveAttribute('data-copied', 'false'); },
      { timeout: 100 }
    );
    expect(button.querySelector('.lucide-copy')).toBeInTheDocument();
  });

  it('falls back to execCommand when the async clipboard API is unavailable', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
    });
    const execCommand = vi.fn(() => true);
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    document.execCommand = execCommand as unknown as typeof document.execCommand;
    try {
      render(<CopyButton value="fallback text" />);
      await user.click(getButton());
      expect(execCommand).toHaveBeenCalledWith('copy');
      expect(writeTextMock).not.toHaveBeenCalled();
    } finally {
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: writeTextMock },
        configurable: true,
        writable: true,
      });
    }
  });

  it('calls onCopy with the result of the copy attempt', async () => {
    const onCopy = vi.fn();
    render(<CopyButton value="hello" onCopy={onCopy} />);
    await user.click(getButton());
    await waitFor(() => { expect(onCopy).toHaveBeenCalledWith(true); });
  });

  it('supports a custom accessible label', () => {
    render(<CopyButton value="hello" ariaLabelText="Copy API key" />);
    expect(getButton('Copy API key')).toBeInTheDocument();
  });

  it('renders a Kbd shortcut hint when shortcutHint is provided', () => {
    render(<CopyButton value="hello" shortcutHint="C" />);
    expect(screen.getByText('C').tagName).toBe('KBD');
    expect(getButton()).toBeInTheDocument();
  });

  it('copies via the shortcut key while the button is focused', async () => {
    render(<CopyButton value="hello" shortcutHint="C" />);
    const button = getButton();
    button.focus();
    await user.keyboard('c');
    expect(writeTextMock).toHaveBeenCalledWith('hello');
    await waitFor(() =>
      { expect(button.querySelector('.lucide-check')).toBeInTheDocument(); }
    );
  });

  it('ignores unrelated keys', async () => {
    render(<CopyButton value="hello" shortcutHint="C" />);
    const button = getButton();
    button.focus();
    await user.keyboard('x');
    expect(writeTextMock).not.toHaveBeenCalled();
    expect(button.querySelector('.lucide-copy')).toBeInTheDocument();
  });

  it('still fires a click-triggered copy when no shortcut is set', async () => {
    render(<CopyButton value="hello" />);
    await user.click(getButton());
    expect(writeTextMock).toHaveBeenCalledTimes(1);
  });
});
