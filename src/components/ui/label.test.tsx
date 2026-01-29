import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('renders children correctly', () => {
    render(<Label>Email Address</Label>);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
  });

  it('applies htmlFor attribute', () => {
    render(<Label htmlFor="email">Email Address</Label>);
    const label = screen.getByText('Email Address');
    expect(label).toHaveAttribute('for', 'email');
  });

  it('shows required indicator when required is true', () => {
    render(<Label required>Email Address</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('does not show required indicator by default', () => {
    render(<Label>Email Address</Label>);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('applies disabled styles when disabled is true', () => {
    render(<Label disabled>Email Address</Label>);
    const label = screen.getByText('Email Address');
    expect(label).toHaveClass('opacity-50');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Label size="sm">Small</Label>);
    expect(screen.getByText('Small')).toHaveClass('text-sm');

    rerender(<Label size="lg">Large</Label>);
    expect(screen.getByText('Large')).toHaveClass('text-base');
  });

  it('merges custom className with default classes', () => {
    render(<Label className="custom-label">Label</Label>);
    const label = screen.getByText('Label');
    expect(label).toHaveClass('custom-label');
    expect(label).toHaveClass('font-medium');
  });

  it('forwards ref correctly', () => {
    const ref = { current: null };
    render(<Label ref={ref}>Label</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
