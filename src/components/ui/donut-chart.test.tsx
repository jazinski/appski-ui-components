import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { DonutChart, DONUT_COLOR_CLASSES } from './donut-chart';

const data = [
  { label: 'Direct', value: 60 },
  { label: 'Organic', value: 30 },
  { label: 'Referral', value: 10 },
];

describe('DonutChart', () => {
  it('renders as an accessible image with a default label', () => {
    render(<DonutChart data={data} />);
    const svg = document.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute(
      'aria-label',
      'Donut chart: Direct 60, Organic 30, Referral 10'
    );
  });

  it('uses a custom aria-label when provided', () => {
    render(<DonutChart data={data} aria-label="Traffic sources" />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Traffic sources');
  });

  it('renders one segment per data point with tooltip titles', () => {
    const { container } = render(<DonutChart data={data} />);
    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(data.length);
    const titles = container.querySelectorAll('title');
    expect(
      Array.from(titles).some((t) => t.textContent === 'Direct: 60 (60%)')
    ).toBe(true);
  });

  it('assigns color slots in order and cycles when exhausted', () => {
    const { container } = render(<DonutChart data={data} />);
    const paths = container.querySelectorAll('path');
    expect(paths[0]).toHaveClass(DONUT_COLOR_CLASSES[0]);
    expect(paths[1]).toHaveClass(DONUT_COLOR_CLASSES[1]);

    cleanup();
    const seven = Array.from({ length: 7 }, (_, i) => ({ label: `S${i}`, value: 1 }));
    const { container: cycled } = render(<DonutChart data={seven} />);
    const cycledPaths = cycled.querySelectorAll('path');
    expect(cycledPaths[6]).toHaveClass(DONUT_COLOR_CLASSES[0]);
  });

  it('honors an explicit colorClass override', () => {
    const { container } = render(
      <DonutChart data={[{ label: 'A', value: 1, colorClass: 'text-warning' }, { label: 'B', value: 1 }]} />
    );
    const paths = container.querySelectorAll('path');
    expect(paths[0]).toHaveClass('text-warning');
    expect(paths[1]).not.toHaveClass('text-warning');
  });

  it('renders a single full-circle segment as two arcs', () => {
    const { container } = render(<DonutChart data={[{ label: 'Only', value: 100 }]} />);
    const path = container.querySelector('path');
    expect(path).not.toBeNull();
    // Two closed subpaths joined by a space
    expect((path?.getAttribute('d') ?? '').trim().split(/\s+/).filter((s) => s === 'Z')).toHaveLength(2);
  });

  it('renders the center label when provided', () => {
    const { container } = render(<DonutChart data={data} centerLabel="100 visits" />);
    expect(container.textContent).toContain('100 visits');
  });

  it('does not render a center label by default', () => {
    const { container } = render(<DonutChart data={data} />);
    expect(container.textContent).not.toContain('visits');
  });

  it('applies size classes', () => {
    const { rerender } = render(<DonutChart data={data} />);
    expect(document.querySelector('svg')).toHaveClass('h-40');

    rerender(<DonutChart data={data} size="lg" />);
    expect(document.querySelector('svg')).toHaveClass('h-56');
  });

  it('handles empty data without crashing', () => {
    render(<DonutChart data={[]} />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Donut chart with no data');
  });
});

function cleanup() {
  document.body.innerHTML = '';
}
