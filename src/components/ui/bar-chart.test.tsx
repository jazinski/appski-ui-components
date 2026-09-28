import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BarChart } from './bar-chart';

const data = [
  { label: 'Q1', value: 12 },
  { label: 'Q2', value: 19 },
  { label: 'Q3', value: 7 },
  { label: 'Q4', value: 15 },
];

describe('BarChart', () => {
  it('renders as an accessible image with a default label', () => {
    render(<BarChart data={data} />);
    const svg = document.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute(
      'aria-label',
      'Bar chart with 4 categories, ranging from 7 to 19'
    );
  });

  it('uses a custom aria-label when provided', () => {
    render(<BarChart data={data} aria-label="Quarterly revenue" />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Quarterly revenue');
  });

  it('renders one bar per data point with a tooltip title', () => {
    const { container } = render(<BarChart data={data} />);
    const bars = container.querySelectorAll('rect');
    expect(bars).toHaveLength(data.length);
    const titles = container.querySelectorAll('title');
    data.forEach((d) => {
      expect(
        Array.from(titles).some((t) => t.textContent === `${d.label}: ${d.value}`)
      ).toBe(true);
    });
  });

  it('scales bar heights proportionional to values', () => {
    const { container } = render(<BarChart data={data} />);
    const heights = Array.from(container.querySelectorAll('rect')).map((r) =>
      Number(r.getAttribute('height'))
    );
    expect(heights[1]).toBeGreaterThan(heights[0]);
    expect(heights[0]).toBeGreaterThan(heights[2]);
  });

  it('shows numeric values above bars only when showValues is true', () => {
    const { container } = render(<BarChart data={data} />);
    // Only x-axis labels render as <text> by default
    expect(container.querySelectorAll('text')).toHaveLength(data.length);

    cleanup();
    const { container: withValues } = render(<BarChart data={data} showValues />);
    // Labels + one value per bar
    expect(withValues.querySelectorAll('text')).toHaveLength(data.length * 2);
    const valueTexts = Array.from(withValues.querySelectorAll('text'))
      .map((t) => t.textContent)
      .filter((t) => t === '19');
    expect(valueTexts).toHaveLength(1);
  });

  it('renders grid lines by default and hides them when showGrid is false', () => {
    const { container } = render(<BarChart data={data} />);
    expect(container.querySelectorAll('line')).toHaveLength(5);

    cleanup();
    const { container: noGrid } = render(<BarChart data={data} showGrid={false} />);
    expect(noGrid.querySelectorAll('line')).toHaveLength(0);
  });

  it('applies variant classes', () => {
    const { rerender } = render(<BarChart data={data} />);
    expect(document.querySelector('svg')).toHaveClass('text-primary');

    rerender(<BarChart data={data} variant="error" />);
    expect(document.querySelector('svg')).toHaveClass('text-destructive');
  });

  it('handles empty data without crashing', () => {
    const { container } = render(<BarChart data={[]} />);
    expect(container.querySelectorAll('rect')).toHaveLength(0);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Bar chart with no data');
  });
});

function cleanup() {
  document.body.innerHTML = '';
}
