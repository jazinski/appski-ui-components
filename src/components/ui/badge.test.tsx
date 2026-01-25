import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Badge text</Badge>);
    expect(screen.getByText('Badge text')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(<Badge data-testid="badge">Default</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('bg-primary');
  });

  it('renders with secondary variant', () => {
    render(
      <Badge data-testid="badge" variant="secondary">
        Secondary
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-secondary');
  });

  it('renders with destructive variant', () => {
    render(
      <Badge data-testid="badge" variant="destructive">
        Error
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-destructive');
  });

  it('renders with success variant', () => {
    render(
      <Badge data-testid="badge" variant="success">
        Success
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-green-500');
  });

  it('renders with warning variant', () => {
    render(
      <Badge data-testid="badge" variant="warning">
        Warning
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('bg-yellow-500');
  });

  it('renders with outline variant', () => {
    render(
      <Badge data-testid="badge" variant="outline">
        Outline
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('text-foreground');
    expect(screen.getByTestId('badge')).not.toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(
      <Badge data-testid="badge" className="custom-class">
        Badge
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Badge ref={ref}>Badge</Badge>);
    expect(ref).toHaveBeenCalled();
  });

  it('has rounded-full class for pill shape', () => {
    render(<Badge data-testid="badge">Badge</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('rounded-full');
  });

  it('has appropriate text size', () => {
    render(<Badge data-testid="badge">Badge</Badge>);
    expect(screen.getByTestId('badge')).toHaveClass('text-xs');
  });
});
