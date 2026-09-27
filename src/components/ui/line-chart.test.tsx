import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { LineChart } from './line-chart';

const data = [
  { label: 'Mon', value: 4 },
  { label: 'Tue', value: 7 },
  { label: 'Wed', value: 2 },
  { label: 'Thu', value: 9 },
];

describe('LineChart', () => {
  it('renders as an accessible image with a default label', () => {
    render(<LineChart data={data} />);
    const svg = document.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute(
      'aria-label',
      'Line chart: Mon 4 to Thu 9'
    );
  });

  it('uses a custom aria-label when provided', () => {
    render(<LineChart data={data} aria-label="Weekly signups" />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Weekly signups');
  });

  it('renders a line path and per-point dots by default', () => {
    const { container } = render(<LineChart data={data} />);
    expect(container.querySelector('[data-testid="line-chart-line"]')).not.toBeNull();
    expect(container.querySelectorAll('circle')).toHaveLength(data.length);
  });

  it('hides dots when showDots is false', () => {
    const { container } = render(<LineChart data={data} showDots={false} />);
    expect(container.querySelector('[data-testid="line-chart-line"]')).not.toBeNull();
    expect(container.querySelectorAll('circle')).toHaveLength(0);
  });

  it('renders the area fill only when showArea is true', () => {
    const { container } = render(<LineChart data={data} />);
    expect(container.querySelector('[data-testid="line-chart-area"]')).toBeNull();

    cleanup();
    const { container: withArea } = render(<LineChart data={data} showArea />);
    const area = withArea.querySelector('[data-testid="line-chart-area"]');
    expect(area).not.toBeNull();
    expect(area).toHaveAttribute('fill', 'currentColor');
  });

  it('renders grid lines by default and hides them when showGrid is false', () => {
    const { container } = render(<LineChart data={data} />);
    expect(container.querySelectorAll('line')).toHaveLength(5);

    cleanup();
    const { container: noGrid } = render(<LineChart data={data} showGrid={false} />);
    expect(noGrid.querySelectorAll('line')).toHaveLength(0);
  });

  it('renders x-axis labels for every data point', () => {
    const { container } = render(<LineChart data={data} />);
    const text = container.textContent ?? '';
    data.forEach((d) => expect(text).toContain(d.label));
  });

  it('applies variant classes', () => {
    const { rerender } = render(<LineChart data={data} />);
    expect(document.querySelector('svg')).toHaveClass('text-primary');

    rerender(<LineChart data={data} variant="success" />);
    expect(document.querySelector('svg')).toHaveClass('text-success');
  });

  it('handles a single data point without dividing by zero', () => {
    const { container } = render(<LineChart data={[{ label: 'Only', value: 5 }]} />);
    expect(container.querySelector('[data-testid="line-chart-line"]')).not.toBeNull();
  });

  it('handles empty data without crashing', () => {
    const { container } = render(<LineChart data={[]} />);
    expect(container.querySelector('[data-testid="line-chart-line"]')).toBeNull();
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Line chart with no data');
  });
});

function cleanup() {
  document.body.innerHTML = '';
}
