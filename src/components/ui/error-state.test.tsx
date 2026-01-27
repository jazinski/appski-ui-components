import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorState } from './error-state';

describe('ErrorState', () => {
  it('renders default error state', () => {
    render(<ErrorState error="Something failed" />);

    expect(screen.getByRole('alert')).toBeDefined();
    expect(screen.getByText('Something Went Wrong')).toBeDefined();
    expect(screen.getByText('Something failed')).toBeDefined();
  });

  it('renders compact error state', () => {
    render(<ErrorState error="Simple failure" compact />);

    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('flex items-center justify-between');
    // Should NOT have the large centered layout classes
    expect(alert.className).not.toContain('flex-col');
  });

  it('renders specific variant titles', () => {
    const { rerender } = render(<ErrorState error="err" variant="network" />);
    expect(screen.getByText('Connection Error')).toBeDefined();

    rerender(<ErrorState error="err" variant="auth" />);
    expect(screen.getByText('Authentication Required')).toBeDefined();

    rerender(<ErrorState error="err" variant="notfound" />);
    expect(screen.getByText('Not Found')).toBeDefined();
  });

  it('calls onRetry when retry button is clicked', async () => {
    const user = userEvent.setup();
    const handleRetry = vi.fn();

    render(<ErrorState error="Failed" onRetry={handleRetry} />);

    const button = screen.getByRole('button', { name: /retry/i });
    await user.click(button);

    expect(handleRetry).toHaveBeenCalledOnce();
  });

  it('renders Error object message', () => {
    const errorObj = new Error('System crash');
    render(<ErrorState error={errorObj} />);

    expect(screen.getByText('System crash')).toBeDefined();
  });
});
