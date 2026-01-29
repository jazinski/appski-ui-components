import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricCard } from './metric-card';

// Mock icon
const TestIcon = () => <svg data-testid="test-icon" />;

describe('MetricCard', () => {
  describe('Basic Rendering', () => {
    it('renders value and label', () => {
      render(<MetricCard value="1,234" label="Total Users" />);

      expect(screen.getByText('1,234')).toBeDefined();
      expect(screen.getByText('Total Users')).toBeDefined();
    });

    it('renders with numeric value', () => {
      render(<MetricCard value={42} label="Items" />);

      expect(screen.getByText('42')).toBeDefined();
    });

    it('renders with icon', () => {
      render(<MetricCard value="100" label="Items" icon={<TestIcon />} />);

      expect(screen.getByTestId('test-icon')).toBeDefined();
    });

    it('renders without icon', () => {
      const { container } = render(<MetricCard value="100" label="Items" />);

      expect(container.querySelector('[data-testid="test-icon"]')).toBeNull();
    });
  });

  describe('Loading State', () => {
    it('shows skeleton when loading is true', () => {
      const { container } = render(<MetricCard value="100" label="Test" loading />);

      const skeletons = container.querySelectorAll('.animate-pulse');
      expect(skeletons.length).toBeGreaterThan(0);
    });

    it('shows skeleton with icon placeholder when loading', () => {
      const { container } = render(
        <MetricCard value="100" label="Test" icon={<TestIcon />} loading />
      );

      // Should have icon container skeleton
      const skeletons = container.querySelectorAll('.animate-pulse');
      expect(skeletons.length).toBeGreaterThan(2); // value, label, trend, and icon skeletons
    });

    it('does not show actual value when loading', () => {
      render(<MetricCard value="100" label="Test Label" loading />);

      expect(screen.queryByText('100')).toBeNull();
      expect(screen.queryByText('Test Label')).toBeNull();
    });
  });

  describe('Trend Indicator', () => {
    it('renders trend with up direction', () => {
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

    it('renders trend with down direction', () => {
      render(
        <MetricCard
          value="300"
          label="Revenue"
          trend={{ value: '-5%', direction: 'down', label: 'vs last week' }}
        />
      );

      expect(screen.getByText('-5%')).toBeDefined();
      expect(screen.getByText('-5%').className).toContain('text-rose');
    });

    it('renders trend with neutral direction', () => {
      render(
        <MetricCard value="100" label="Items" trend={{ value: '0%', direction: 'neutral' }} />
      );

      expect(screen.getByText('0%')).toBeDefined();
      expect(screen.getByText('0%').className).toContain('text-slate');
    });

    it('renders trend without label', () => {
      render(<MetricCard value="200" label="Count" trend={{ value: '+10%', direction: 'up' }} />);

      expect(screen.getByText('+10%')).toBeDefined();
      // No label text should be present except the main label
      expect(screen.queryByText('vs')).toBeNull();
    });

    it('renders without trend when not provided', () => {
      const { container } = render(<MetricCard value="500" label="Total" />);

      // Should not find trend container
      const trendElement = container.querySelector('.mt-2.flex.items-center');
      expect(trendElement).toBeNull();
    });
  });

  describe('Variants', () => {
    it('applies default variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="default" />);

      expect(container.firstChild).toHaveClass('bg-card');
    });

    it('applies emerald variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="emerald" />);

      expect(container.firstChild).toHaveClass('bg-emerald-50');
      expect(container.firstChild).toHaveClass('border-emerald-200');
    });

    it('applies blue variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="blue" />);

      expect(container.firstChild).toHaveClass('bg-blue-50');
      expect(container.firstChild).toHaveClass('border-blue-200');
    });

    it('applies purple variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="purple" />);

      expect(container.firstChild).toHaveClass('bg-purple-50');
      expect(container.firstChild).toHaveClass('border-purple-200');
    });

    it('applies amber variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="amber" />);

      expect(container.firstChild).toHaveClass('bg-amber-50');
      expect(container.firstChild).toHaveClass('border-amber-200');
    });

    it('applies rose variant classes', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="rose" />);

      expect(container.firstChild).toHaveClass('bg-rose-50');
      expect(container.firstChild).toHaveClass('border-rose-200');
    });
  });

  describe('Variant Colors for Labels', () => {
    it('applies emerald color to label', () => {
      render(<MetricCard value="100" label="Test" variant="emerald" />);

      const label = screen.getByText('Test');
      expect(label.className).toContain('text-emerald-600');
    });

    it('applies blue color to value', () => {
      render(<MetricCard value="200" label="Test" variant="blue" />);

      const value = screen.getByText('200');
      expect(value.className).toContain('text-blue-900');
    });
  });

  describe('Accessibility', () => {
    it('has proper semantic structure', () => {
      const { container } = render(
        <MetricCard value="1000" label="Total Revenue" variant="emerald" />
      );

      // Check that it uses paragraphs for value and label
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    });

    it('displays trend label when provided for screen readers', () => {
      render(
        <MetricCard
          value="500"
          label="Sales"
          trend={{ value: '+15%', direction: 'up', label: 'compared to last month' }}
        />
      );

      expect(screen.getByText('compared to last month')).toBeDefined();
    });
  });

  describe('Dark Mode Classes', () => {
    it('includes dark mode classes for emerald variant', () => {
      const { container } = render(<MetricCard value="10" label="Test" variant="emerald" />);

      const card = container.firstChild as HTMLElement;
      expect(card.className).toContain('dark:bg-emerald-950/20');
      expect(card.className).toContain('dark:border-emerald-800');
    });

    it('includes dark mode classes for loading skeletons', () => {
      const { container } = render(<MetricCard value="10" label="Test" loading />);

      const skeletons = container.querySelectorAll('.dark\\:bg-slate-700');
      expect(skeletons.length).toBeGreaterThan(0);
    });
  });

  describe('Custom Props', () => {
    it('accepts custom className', () => {
      const { container } = render(
        <MetricCard value="100" label="Test" className="custom-class" />
      );

      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('forwards additional HTML attributes', () => {
      const { container } = render(
        <MetricCard value="100" label="Test" data-testid="custom-metric" />
      );

      expect(container.querySelector('[data-testid="custom-metric"]')).toBeDefined();
    });
  });
});
