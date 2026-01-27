import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkeletonLoader } from './skeleton-loader';

describe('SkeletonLoader', () => {
  it('renders card variant by default', () => {
    render(<SkeletonLoader />);
    expect(screen.getByTestId('skeleton-card')).toBeDefined();
  });

  it('renders correct number of items', () => {
    render(<SkeletonLoader variant="list" count={5} />);
    const items = screen.getAllByTestId('skeleton-list-item');
    expect(items).toHaveLength(5);
  });

  it('renders table variant', () => {
    render(<SkeletonLoader variant="table" />);
    expect(screen.getByTestId('skeleton-table')).toBeDefined();
  });

  it('renders stats variant', () => {
    render(<SkeletonLoader variant="stats" count={3} />);
    const items = screen.getAllByTestId('skeleton-stat');
    expect(items).toHaveLength(3);
  });

  it('renders text variant', () => {
    const { container } = render(<SkeletonLoader variant="text" count={3} />);
    // Text variant renders direct Skeleton components, check if they exist
    // The implementation adds a w-3/4 class to the last item
    expect(container.querySelectorAll('.animate-pulse')).toHaveLength(3);
  });

  it('renders metric-card variant', () => {
    render(<SkeletonLoader variant="metric-card" count={2} />);
    const items = screen.getAllByTestId('skeleton-metric-card');
    expect(items).toHaveLength(2);
  });

  it('applies custom className', () => {
    const { container } = render(<SkeletonLoader className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
