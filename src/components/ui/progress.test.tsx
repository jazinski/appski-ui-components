import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders with correct aria attributes', () => {
    const { container } = render(<Progress value={50} />);
    const progressbar = container.querySelector('[role="progressbar"]');

    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
  });

  it('displays value when showValue is true', () => {
    render(<Progress value={75} showValue />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('does not display value by default', () => {
    const { container } = render(<Progress value={50} />);
    expect(container.textContent).not.toContain('50%');
  });

  it('applies variant classes correctly', () => {
    const { rerender, container } = render(<Progress value={50} variant="success" />);
    let indicator = container.querySelector('[data-state="loading"]');
    expect(indicator).toHaveClass('bg-green-500');

    rerender(<Progress value={50} variant="warning" />);
    indicator = container.querySelector('[data-state="loading"]');
    expect(indicator).toHaveClass('bg-yellow-500');
  });

  it('applies size classes correctly', () => {
    const { rerender, container } = render(<Progress value={50} size="sm" />);
    let progress = container.querySelector('[role="progressbar"]');
    expect(progress).toHaveClass('h-2');

    rerender(<Progress value={50} size="lg" />);
    progress = container.querySelector('[role="progressbar"]');
    expect(progress).toHaveClass('h-6');
  });

  it('handles undefined value', () => {
    const { container } = render(<Progress />);
    const progressbar = container.querySelector('[role="progressbar"]');
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
  });
});
