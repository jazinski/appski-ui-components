import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner, Loading, Skeleton } from './spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has accessible label', () => {
    render(<Spinner label="Loading content" />);
    expect(screen.getByLabelText('Loading content')).toBeInTheDocument();
  });

  it('uses default label when not provided', () => {
    render(<Spinner />);
    expect(screen.getByLabelText('Loading...')).toBeInTheDocument();
  });

  it('applies size variants', () => {
    const { rerender } = render(<Spinner size="sm" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('h-4', 'w-4');

    rerender(<Spinner size="lg" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('h-8', 'w-8');

    rerender(<Spinner size="xl" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('h-12', 'w-12');
  });

  it('has animation class', () => {
    render(<Spinner data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('animate-spin');
  });

  it('applies custom className', () => {
    render(<Spinner className="text-primary" data-testid="spinner" />);
    expect(screen.getByTestId('spinner')).toHaveClass('text-primary');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Spinner ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });
});

describe('Loading', () => {
  it('renders correctly', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('has status role and aria-busy', () => {
    render(<Loading data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveAttribute('role', 'status');
    expect(screen.getByTestId('loading')).toHaveAttribute('aria-busy', 'true');
  });

  it('displays message when provided', () => {
    render(<Loading message="Loading data..." />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('does not display message paragraph when not provided', () => {
    render(<Loading />);
    expect(screen.queryByText(/Loading/)).not.toBeInTheDocument();
  });

  it('applies fullScreen classes', () => {
    render(<Loading fullScreen data-testid="loading" />);
    expect(screen.getByTestId('loading')).toHaveClass('fixed', 'inset-0');
  });

  it('applies correct size to spinner', () => {
    render(<Loading size="lg" />);
    // Loading has nested status roles, find the SVG spinner by its class
    const spinner = document.querySelector('svg.animate-spin');
    expect(spinner).toHaveClass('h-8', 'w-8');
  });
});

describe('Skeleton', () => {
  it('renders correctly', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('has animation class', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse');
  });

  it('is hidden from accessibility tree', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies variant classes', () => {
    const { rerender } = render(<Skeleton variant="text" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-4', 'w-full');

    rerender(<Skeleton variant="avatar" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-10', 'w-10', 'rounded-full');

    rerender(<Skeleton variant="card" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-32');
  });

  it('applies custom className', () => {
    render(<Skeleton className="h-20 w-40" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-20', 'w-40');
  });
});
