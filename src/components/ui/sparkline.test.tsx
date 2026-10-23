import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Sparkline } from './sparkline';

describe('Sparkline', () => {
  it('renders as an accessible image with a trend label', () => {
    render(<Sparkline data={[3, 7, 4, 9, 6]} />);
    const svg = document.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('aria-label', 'Sparkline, trending up, from 3 to 9');
  });

  it('reports trending down and flat series correctly', () => {
    const { rerender } = render(<Sparkline data={[9, 5, 2]} />);
    expect(document.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Sparkline, trending down, from 2 to 9'
    );

    rerender(<Sparkline data={[4, 4, 4]} />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Sparkline, flat, from 4 to 4');
  });

  it('uses a custom aria-label when provided', () => {
    render(<Sparkline data={[1, 2]} aria-label="CPU over 5m" />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'CPU over 5m');
  });

  it('renders line and area by default', () => {
    const { container } = render(<Sparkline data={[3, 7, 4]} />);
    expect(container.querySelector('[data-testid="sparkline-line"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="sparkline-area"]')).not.toBeNull();
  });

  it('hides the area when showArea is false', () => {
    const { container } = render(<Sparkline data={[3, 7, 4]} showArea={false} />);
    expect(container.querySelector('[data-testid="sparkline-line"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="sparkline-area"]')).toBeNull();
  });

  it('applies variant and size classes', () => {
    const { rerender } = render(<Sparkline data={[1, 2]} />);
    expect(document.querySelector('svg')).toHaveClass('text-primary', 'h-8');

    rerender(<Sparkline data={[1, 2]} variant="error" size="sm" />);
    expect(document.querySelector('svg')).toHaveClass('text-destructive', 'h-5');
  });

  it('stretches with preserveAspectRatio none', () => {
    render(<Sparkline data={[1, 2]} />);
    expect(document.querySelector('svg')).toHaveAttribute('preserveAspectRatio', 'none');
  });

  it('handles empty data without crashing', () => {
    const { container } = render(<Sparkline data={[]} />);
    expect(container.querySelector('[data-testid="sparkline-line"]')).toBeNull();
    expect(document.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Sparkline with no data'
    );
  });
});
