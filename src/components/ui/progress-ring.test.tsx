import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressRing } from './progress-ring';

const getSvg = (container: HTMLElement) => {
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();
  return svg as SVGSVGElement;
};

const getIndicator = (container: HTMLElement) => {
  const circles = container.querySelectorAll('circle');
  expect(circles.length).toBe(2);
  return circles[1] as SVGCircleElement;
};

describe('ProgressRing', () => {
  it('renders with correct aria attributes', () => {
    render(<ProgressRing value={50} aria-label="Upload progress" />);
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveAttribute('aria-label', 'Upload progress');
  });

  it('is indeterminate (spinner) when value is undefined', () => {
    const { container } = render(<ProgressRing aria-label="Loading" />);
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).not.toHaveAttribute('aria-valuenow');
    expect(getSvg(container)).toHaveClass('animate-spin');
  });

  it('is determinate (no spin) when value is provided', () => {
    const { container } = render(<ProgressRing value={25} />);
    expect(getSvg(container)).not.toHaveClass('animate-spin');
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '25');
  });

  it('displays label content when provided', () => {
    const { container } = render(<ProgressRing value={75} label="75%" />);
    const label = container.querySelector('span.absolute');
    expect(label).not.toBeNull();
    expect(label).toHaveTextContent('75%');
  });

  it('does not render a label slot by default', () => {
    const { container } = render(<ProgressRing value={50} />);
    expect(container.querySelector('span.absolute')).toBeNull();
  });

  it('sets stroke-dashoffset proportionally to the value', () => {
    const { container, rerender } = render(<ProgressRing value={0} />);
    const atZero = Number(getIndicator(container).getAttribute('stroke-dashoffset'));

    rerender(<ProgressRing value={100} />);
    const atHundred = Number(getIndicator(container).getAttribute('stroke-dashoffset'));

    // Full sweep at 100% consumes the entire circumference
    expect(atHundred).toBeCloseTo(0, 5);
    expect(atZero).toBeGreaterThan(atHundred);
  });

  it('clamps out-of-range values', () => {
    const { container, rerender } = render(<ProgressRing value={150} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');

    rerender(<ProgressRing value={-20} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    void getIndicator(container);
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<ProgressRing value={50} size="sm" />);
    let ring = screen.getByRole('progressbar').parentElement;
    expect(ring).toHaveClass('h-8', 'w-8');

    rerender(<ProgressRing value={50} size="lg" />);
    ring = screen.getByRole('progressbar').parentElement;
    expect(ring).toHaveClass('h-20', 'w-20');
  });

  it('applies variant classes to the indicator arc', () => {
    const { container, rerender } = render(<ProgressRing value={50} variant="success" />);
    expect(getIndicator(container)).toHaveClass('text-success');

    rerender(<ProgressRing value={50} variant="warning" />);
    expect(getIndicator(container)).toHaveClass('text-warning');

    rerender(<ProgressRing value={50} variant="error" />);
    expect(getIndicator(container)).toHaveClass('text-destructive');
  });

  it('applies custom className and thickness', () => {
    const { container } = render(<ProgressRing value={50} thickness={8} className="my-class" />);
    const ring = screen.getByRole('progressbar').parentElement;
    expect(ring).toHaveClass('my-class');
    expect(getIndicator(container).getAttribute('stroke-width')).toBe('8');
  });
});
