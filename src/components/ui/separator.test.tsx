import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Separator } from './separator';

describe('Separator', () => {
  it('renders with correct role', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toBeInTheDocument();
  });

  it('renders horizontally by default', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders vertically when specified', () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies variant classes correctly', () => {
    const { container, rerender } = render(<Separator variant="dashed" />);
    let separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveClass('border-dashed');

    rerender(<Separator variant="dotted" />);
    separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveClass('border-dotted');
  });

  it('applies horizontal orientation classes', () => {
    const { container } = render(<Separator orientation="horizontal" />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveClass('h-[1px]');
    expect(separator).toHaveClass('w-full');
  });

  it('applies vertical orientation classes', () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveClass('h-full');
    expect(separator).toHaveClass('w-[1px]');
  });

  it('merges custom className', () => {
    const { container } = render(<Separator className="custom-separator" />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveClass('custom-separator');
  });

  it('is not focusable by default', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[role="separator"]');
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal');
  });
});
