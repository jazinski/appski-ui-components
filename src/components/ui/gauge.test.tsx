import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Gauge, GAUGE_TONE_CLASSES } from './gauge';

describe('Gauge', () => {
  it('renders as an accessible image with a default label', () => {
    render(<Gauge value={72} sublabel="CPU" unit="%" />);
    const svg = document.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('aria-label', 'Gauge: CPU 72% (range 0 to 100)');
  });

  it('names the active threshold tone in the default label', () => {
    render(
      <Gauge value={72} sublabel="CPU" unit="%" thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    expect(document.querySelector('svg')).toHaveAttribute(
      'aria-label',
      'Gauge: CPU 72% (range 0 to 100, warning)'
    );
  });

  it('uses a custom aria-label when provided', () => {
    render(<Gauge value={72} aria-label="Processor load" />);
    expect(document.querySelector('svg')).toHaveAttribute('aria-label', 'Processor load');
  });

  it('shows the formatted value and sublabel in the center', () => {
    const { getByText } = render(<Gauge value={72} sublabel="CPU" unit="%" />);
    expect(getByText('72%')).not.toBeNull();
    expect(getByText('CPU')).not.toBeNull();
  });

  it('honors decimals for the center value', () => {
    const { getAllByText } = render(<Gauge value={6.75} unit=" TB" decimals={1} />);
    expect(getAllByText('6.8 TB').length).toBeGreaterThan(0);
  });

  it('renders a centerLabel override instead of the formatted value', () => {
    const { getByText, queryByText } = render(
      <Gauge value={72} centerLabel="OK" sublabel="CPU" />
    );
    expect(getByText('OK')).not.toBeNull();
    expect(queryByText('72')).not.toBeTruthy();
  });

  it('renders track, value arc, and one path per threshold band', () => {
    const { container } = render(
      <Gauge value={50} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    // 2 explicit bands + the remainder band beyond the last threshold + track + value arc
    expect(container.querySelectorAll('path')).toHaveLength(5);
  });

  it('defaults threshold tones to the green/amber/red ladder including the remainder', () => {
    const { container } = render(
      <Gauge value={50} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    const byClass = (cls: string) =>
      Array.from(container.querySelectorAll('path')).filter((p) =>
        (p.getAttribute('class') ?? '').split(' ').includes(cls)
      );
    // success appears twice: the 0-70 band and the value arc sitting in it
    expect(byClass(GAUGE_TONE_CLASSES.success)).toHaveLength(2);
    expect(byClass(GAUGE_TONE_CLASSES.warning)).toHaveLength(1);
    // remainder band 90-100 is destructive
    expect(byClass(GAUGE_TONE_CLASSES.destructive)).toHaveLength(1);
    const paths = container.querySelectorAll('path');
    expect(paths[paths.length - 1]).toHaveClass(GAUGE_TONE_CLASSES.success);
  });

  it('colors the value arc with the tone of the band the value falls in', () => {
    const { container, rerender } = render(
      <Gauge value={72} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    const lastPath = () =>
      container.querySelectorAll('path')[
        container.querySelectorAll('path').length - 1
      ];
    expect(lastPath()).toHaveClass('text-warning');

    rerender(<Gauge value={95} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />);
    expect(lastPath()).toHaveClass('text-destructive');
  });

  it('honors explicit tones and colorClass overrides on thresholds', () => {
    const { container } = render(
      <Gauge
        value={186}
        min={100}
        max={300}
        thresholds={[
          { upTo: 170, tone: 'destructive' },
          { upTo: 200, tone: 'warning' },
          { upTo: 300, tone: 'success' },
          { upTo: 999, colorClass: 'text-info' },
        ]}
      />
    );
    const paths = container.querySelectorAll('path');
    // value arc is last; 186 sits in the 170-200 warning band
    expect(paths[paths.length - 1]).toHaveClass('text-warning');
    const classStrings = Array.from(paths).map((p) => p.getAttribute('class') ?? '');
    expect(classStrings.some((c) => c.includes('text-destructive'))).toBe(true);
    // the 300-999 band is clamped away (max=300) so the info override never renders
    expect(classStrings.some((c) => c.includes('text-info'))).toBe(false);
  });

  it('uses the primary tone for the value arc when no thresholds are given', () => {
    const { container } = render(<Gauge value={42} />);
    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(2); // track + value arc
    expect(paths[paths.length - 1]).toHaveClass('text-primary');
  });

  it('clamps values outside the range', () => {
    const { container, getAllByText, rerender } = render(
      <Gauge value={140} max={100} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    expect(getAllByText('100').length).toBeGreaterThan(0);
    let paths = container.querySelectorAll('path');
    expect(paths[paths.length - 1]).toHaveClass('text-destructive');

    rerender(<Gauge value={-20} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />);
    expect(getAllByText('0').length).toBeGreaterThan(0);
    paths = container.querySelectorAll('path');
    // track + 3 bands only: a zero-fraction value renders no value arc
    expect(paths).toHaveLength(4);
  });

  it('falls back to min for non-finite values', () => {
    const { getByText, container } = render(
      <Gauge value={Number.NaN} thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
    );
    expect(getByText('0')).not.toBeNull();
    expect(container.querySelectorAll('path')).toHaveLength(4);
  });

  it('renders only the track when max is not greater than min', () => {
    const { container } = render(<Gauge value={50} min={10} max={10} />);
    const paths = container.querySelectorAll('path');
    expect(paths).toHaveLength(1);
    expect(paths[0]).toHaveClass('text-muted');
  });

  it('applies size variant classes to the svg', () => {
    const { container, rerender } = render(<Gauge value={50} size="sm" />);
    const svg = () => container.querySelector('svg');
    expect(svg()).not.toBeNull();
    expect(svg()).toHaveClass('h-28', 'w-28');
    rerender(<Gauge value={50} size="lg" />);
    expect(svg()).toHaveClass('h-56', 'w-56');
  });

  it('passes className to the wrapper and spreads svg props', () => {
    const { container } = render(
      <Gauge value={50} className="my-4" data-testid="dial" />
    );
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper).toHaveClass('my-4', 'relative', 'inline-block');
    expect(container.querySelector('svg')).toHaveAttribute('data-testid', 'dial');
  });
});
