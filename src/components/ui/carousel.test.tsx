import { describe, it, expect, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Carousel } from './carousel';

const slides = ['Slide 1', 'Slide 2', 'Slide 3'].map((text, i) => (
  <div key={i}>{text}</div>
));

function getRegion() {
  return screen.getByRole('region', { name: 'Highlights' });
}

describe('Carousel', () => {
  it('renders a carousel region with all slides', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    const region = getRegion();
    expect(region).toHaveAttribute('aria-roledescription', 'carousel');

    const list = within(region).getByRole('list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(3);
    expect(within(items[0]).getByText('Slide 1')).toBeInTheDocument();
  });

  it('labels each slide with its position', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    expect(screen.getByLabelText('1 of 3')).toBeInTheDocument();
    expect(screen.getByLabelText('3 of 3')).toBeInTheDocument();
  });

  it('renders prev/next arrows and dot indicators', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument();
  });

  it('marks the active dot with aria-current', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Go to slide 2')).not.toHaveAttribute('aria-current');
  });

  it('disables arrows at the ends when loop is off', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    expect(screen.getByLabelText('Previous slide')).toBeDisabled();
    expect(screen.getByLabelText('Next slide')).not.toBeDisabled();
  });

  it('keeps arrows enabled with loop mode', () => {
    render(
      <Carousel ariaLabel="Highlights" loop>
        {slides}
      </Carousel>
    );

    expect(screen.getByLabelText('Previous slide')).not.toBeDisabled();
    expect(screen.getByLabelText('Next slide')).not.toBeDisabled();
  });

  it('next button advances the active slide', async () => {
    const user = userEvent.setup();
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    await user.click(screen.getByLabelText('Next slide'));

    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Go to slide 1')).not.toHaveAttribute('aria-current');
  });

  it('previous button wraps to the last slide in loop mode', async () => {
    const user = userEvent.setup();
    render(
      <Carousel ariaLabel="Highlights" loop>
        {slides}
      </Carousel>
    );

    await user.click(screen.getByLabelText('Previous slide'));

    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true');
  });

  it('next button wraps to the first slide in loop mode', async () => {
    const user = userEvent.setup();
    render(
      <Carousel ariaLabel="Highlights" loop>
        {slides}
      </Carousel>
    );

    await user.click(screen.getByLabelText('Next slide'));
    await user.click(screen.getByLabelText('Next slide'));
    await user.click(screen.getByLabelText('Next slide'));

    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true');
  });

  it('dots jump to a specific slide', async () => {
    const user = userEvent.setup();
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    await user.click(screen.getByLabelText('Go to slide 3'));

    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true');
    expect(screen.getByLabelText('Next slide')).toBeDisabled();
  });

  it('ArrowRight / ArrowLeft keys navigate', async () => {
    const user = userEvent.setup();
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    getRegion().focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByLabelText('Go to slide 2')).toHaveAttribute('aria-current', 'true');

    await user.keyboard('{ArrowLeft}');
    expect(screen.getByLabelText('Go to slide 1')).toHaveAttribute('aria-current', 'true');
  });

  it('keyboard navigation respects loop mode', async () => {
    const user = userEvent.setup();
    render(
      <Carousel ariaLabel="Highlights" loop>
        {slides}
      </Carousel>
    );

    getRegion().focus();
    await user.keyboard('{ArrowLeft}');
    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true');
  });

  it('scrolling the track updates the active slide (swipe)', async () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    const list = screen.getByRole('list');
    const firstItem = screen.getAllByRole('listitem')[0];
    Object.defineProperty(firstItem, 'offsetWidth', {
      configurable: true,
      value: 400,
    });
    Object.defineProperty(list, 'scrollLeft', {
      configurable: true,
      writable: true,
      value: 800,
    });
    list.dispatchEvent(new Event('scroll'));

    await waitFor(() =>
      { expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true'); }
    );
  });

  it('calls onSlideChange when the active slide changes', async () => {
    const onSlideChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Carousel ariaLabel="Highlights" onSlideChange={onSlideChange}>
        {slides}
      </Carousel>
    );

    await user.click(screen.getByLabelText('Next slide'));
    expect(onSlideChange).toHaveBeenCalledWith(1);
  });

  it('applies partial-peek width to slides', () => {
    render(
      <Carousel ariaLabel="Highlights" peek>
        {slides}
      </Carousel>
    );

    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({ flexBasis: '85%' });
  });

  it('applies an explicit peek percentage', () => {
    render(
      <Carousel ariaLabel="Highlights" peek={60}>
        {slides}
      </Carousel>
    );

    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({ flexBasis: '60%' });
  });

  it('full-width slides by default (no peek)', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    const items = screen.getAllByRole('listitem');
    expect(items[0]).toHaveStyle({ flexBasis: '100%' });
  });

  it('hides arrows and dots when disabled', () => {
    render(
      <Carousel ariaLabel="Highlights" showArrows={false} showDots={false}>
        {slides}
      </Carousel>
    );

    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
  });

  it('hides arrows and dots for a single slide', () => {
    render(<Carousel ariaLabel="Highlights">{<div>Only</div>}</Carousel>);

    expect(screen.queryByLabelText('Previous slide')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next slide')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Go to slide 1')).not.toBeInTheDocument();
  });

  it('respects defaultActive as the starting slide', () => {
    render(
      <Carousel ariaLabel="Highlights" defaultActive={2}>
        {slides}
      </Carousel>
    );

    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true');
  });

  it('clamps defaultActive when out of range', () => {
    render(
      <Carousel ariaLabel="Highlights" defaultActive={99}>
        {slides}
      </Carousel>
    );

    expect(screen.getByLabelText('Go to slide 3')).toHaveAttribute('aria-current', 'true');
  });

  it('uses scroll-snap classes on the track', () => {
    render(<Carousel ariaLabel="Highlights">{slides}</Carousel>);

    const list = screen.getByRole('list');
    expect(list.className).toContain('snap-x');
    expect(list.className).toContain('snap-mandatory');
    expect(screen.getAllByRole('listitem')[0].className).toContain('snap-start');
  });
});
