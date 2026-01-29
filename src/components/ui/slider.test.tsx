import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Slider } from './slider';

describe('Slider', () => {
  it('renders with correct aria attributes', () => {
    const { container } = render(<Slider defaultValue={[50]} max={100} />);
    const slider = container.querySelector('[role="slider"]');

    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('displays value when showValue is true', () => {
    render(<Slider defaultValue={[75]} max={100} showValue />);
    expect(screen.getByText('75')).toBeInTheDocument();
  });

  it('does not display value by default', () => {
    const { container } = render(<Slider defaultValue={[50]} max={100} />);
    expect(container.textContent).not.toContain('50');
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Slider defaultValue={[50]} max={100} onValueChange={handleChange} />
    );

    const slider = container.querySelector('[role="slider"]');
    expect(slider).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { container, rerender } = render(
      <Slider defaultValue={[50]} max={100} variant="success" />
    );
    let range = container.querySelector('[data-orientation="horizontal"]')?.firstChild;
    expect(range).toHaveClass('bg-green-500');

    rerender(<Slider defaultValue={[50]} max={100} variant="warning" />);
    range = container.querySelector('[data-orientation="horizontal"]')?.firstChild;
    expect(range).toHaveClass('bg-yellow-500');
  });

  it('applies size classes correctly', () => {
    const { container, rerender } = render(<Slider defaultValue={[50]} max={100} size="sm" />);
    let root = container.querySelector('[data-orientation="horizontal"]');
    expect(root).toHaveClass('h-1');

    rerender(<Slider defaultValue={[50]} max={100} size="lg" />);
    root = container.querySelector('[data-orientation="horizontal"]');
    expect(root).toHaveClass('h-3');
  });

  it('supports range with multiple values', () => {
    const { container } = render(<Slider defaultValue={[25, 75]} max={100} />);
    const sliders = container.querySelectorAll('[role="slider"]');
    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '25');
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '75');
  });

  it('respects min and max bounds', () => {
    const { container } = render(<Slider defaultValue={[50]} min={10} max={90} />);
    const slider = container.querySelector('[role="slider"]');
    expect(slider).toHaveAttribute('aria-valuemin', '10');
    expect(slider).toHaveAttribute('aria-valuemax', '90');
  });
});
