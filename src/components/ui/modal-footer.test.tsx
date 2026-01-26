import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalFooter } from './modal-footer';

describe('ModalFooter', () => {
  it('renders cancel and confirm buttons', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} />);

    expect(screen.getByText('Cancel')).toBeDefined();
    expect(screen.getByText('Confirm')).toBeDefined();
  });

  it('calls onCancel when cancel button is clicked', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} />);

    await user.click(screen.getByText('Cancel'));
    expect(onCancel).toHaveBeenCalledOnce();
  });

  it('calls onConfirm when confirm button is clicked', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} />);

    await user.click(screen.getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalledOnce();
  });

  it('uses custom button text', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(
      <ModalFooter
        onCancel={onCancel}
        onConfirm={onConfirm}
        cancelText="Go Back"
        confirmText="Save Changes"
      />
    );

    expect(screen.getByText('Go Back')).toBeDefined();
    expect(screen.getByText('Save Changes')).toBeDefined();
  });

  it('shows loading state on confirm button', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} confirmLoading={true} />);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    expect(confirmButton.getAttribute('aria-busy')).toBe('true');
  });

  it('uses custom loading text', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(
      <ModalFooter
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmLoading={true}
        confirmLoadingText="Saving..."
      />
    );

    expect(screen.getByText('Saving...')).toBeDefined();
  });

  it('applies custom variant to confirm button', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} confirmVariant="destructive" />);

    const confirmButton = screen.getByText('Confirm');
    expect(confirmButton.className).toContain('destructive');
  });

  it('applies custom className to container', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();
    const { container } = render(
      <ModalFooter onCancel={onCancel} onConfirm={onConfirm} className="custom-footer" />
    );

    const footer = container.firstChild as HTMLElement;
    expect(footer.className).toContain('custom-footer');
  });

  it('renders custom children alongside buttons', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(
      <ModalFooter onCancel={onCancel} onConfirm={onConfirm}>
        <div data-testid="custom-content">Custom Content</div>
      </ModalFooter>
    );

    expect(screen.getByTestId('custom-content')).toBeDefined();
    expect(screen.getByText('Custom Content')).toBeDefined();
  });

  it('hides cancel button when hideCancelButton is true', () => {
    const onConfirm = vi.fn();

    render(<ModalFooter onConfirm={onConfirm} hideCancelButton={true} />);

    expect(screen.queryByText('Cancel')).toBeNull();
    expect(screen.getByText('Confirm')).toBeDefined();
  });

  it('shows both buttons by default', () => {
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} />);

    expect(screen.getByText('Cancel')).toBeDefined();
    expect(screen.getByText('Confirm')).toBeDefined();
  });

  it('disables confirm button during loading', async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();
    const onConfirm = vi.fn();

    render(<ModalFooter onCancel={onCancel} onConfirm={onConfirm} confirmLoading={true} />);

    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    await user.click(confirmButton);

    // onConfirm should not be called when button is disabled/loading
    expect(onConfirm).not.toHaveBeenCalled();
  });
});
