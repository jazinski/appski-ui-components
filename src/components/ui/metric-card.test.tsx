import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from './metric-card';

// Mock icon
const TestIcon = () => <svg data-testid="test-icon" />;

describe('MetricCard', () => {
  it('renders value and label', () => {
    render(<MetricCard value="1,234" label="Total Users" />);

    expect(screen.getByText('1,234')).toBeDefined();
    expect(screen.getByText('Total Users')).toBeDefined();
  });

  it('renders with icon', () => {
    render(<MetricCard value="100" label="Items" icon={<TestIcon />} />);

    expect(screen.getByTestId('test-icon')).toBeDefined();
  });

  it('renders trend indicator', () => {
    render(
      <MetricCard
        value="500"
        label="Sales"
        trend={{ value: '+15%', direction: 'up', label: 'vs last month' }}
      />
    );

    expect(screen.getByText('+15%')).toBeDefined();
    expect(screen.getByText('vs last month')).toBeDefined();
    expect(screen.getByText('+15%').className).toContain('text-emerald');
  });

  it('applies variant classes', () => {
    const { container } = render(<MetricCard value="10" label="Test" variant="blue" />);

    // Check if the card has blue classes
    expect(container.firstChild).toHaveClass('bg-blue-50');
  });
});
