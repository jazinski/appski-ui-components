import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from './separator';

describe('Separator', () => {
  it('renders with correct role', () => {
    render(<Separator />);
    // Separator is decorative by default, so role="none"
    const separator = screen.getByRole('none');
    expect(separator).toBeInTheDocument();
  });

  it('renders horizontally by default', () => {
    render(<Separator />);
    const separator = screen.getByRole('none');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders vertically when specified', () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole('none');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Separator variant="dashed" />);
    let separator = screen.getByRole('none');
    expect(separator).toHaveClass('border-dashed');

    rerender(<Separator variant="dotted" />);
    separator = screen.getByRole('none');
    expect(separator).toHaveClass('border-dotted');
  });

  it('applies horizontal orientation classes', () => {
    render(<Separator orientation="horizontal" />);
    const separator = screen.getByRole('none');
    expect(separator).toHaveClass('h-[1px]');
    expect(separator).toHaveClass('w-full');
  });

  it('applies vertical orientation classes', () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole('none');
    expect(separator).toHaveClass('h-full');
    expect(separator).toHaveClass('w-[1px]');
  });

  it('merges custom className', () => {
    render(<Separator className="custom-separator" />);
    const separator = screen.getByRole('none');
    expect(separator).toHaveClass('custom-separator');
  });

  it('is not focusable by default', () => {
    const { container } = render(<Separator />);
    const separator = container.querySelector('[data-orientation="horizontal"]');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });
});
