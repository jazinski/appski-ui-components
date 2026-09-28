import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  TimePicker,
  TimeRangeInput,
  parseTimeToMinutes,
  formatMinutes,
} from './time-picker';

describe('TimePicker', () => {
  it('renders hours and minutes segments with default value', () => {
    render(<TimePicker defaultValue="09:30" />);

    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('09');
    expect(screen.getByRole('spinbutton', { name: 'Minutes' })).toHaveTextContent('30');
  });

  it('defaults to 00:00 when no value given', () => {
    render(<TimePicker />);

    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('00');
    expect(screen.getByRole('spinbutton', { name: 'Minutes' })).toHaveTextContent('00');
  });

  it('increments hours with ArrowUp', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" onChange={onChange} />);

    await user.type(screen.getByRole('spinbutton', { name: 'Hours' }), '{ArrowUp}');

    expect(onChange).toHaveBeenLastCalledWith('10:30', undefined);
  });

  it('decrements minutes with ArrowDown', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" onChange={onChange} />);

    await user.type(screen.getByRole('spinbutton', { name: 'Minutes' }), '{ArrowDown}');

    expect(onChange).toHaveBeenLastCalledWith('09:29', undefined);
  });

  it('respects minuteStep when stepping minutes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" minuteStep={15} onChange={onChange} />);

    await user.type(screen.getByRole('spinbutton', { name: 'Minutes' }), '{ArrowUp}');

    expect(onChange).toHaveBeenLastCalledWith('09:45', undefined);
  });

  it('wraps hours past 23 back to 00', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="23:45" onChange={onChange} />);

    await user.type(screen.getByRole('spinbutton', { name: 'Hours' }), '{ArrowUp}');

    expect(onChange).toHaveBeenLastCalledWith('00:45', undefined);
  });

  it('jumps by 5 with PageUp', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" onChange={onChange} />);

    await user.type(screen.getByRole('spinbutton', { name: 'Hours' }), '{PageUp}');

    expect(onChange).toHaveBeenLastCalledWith('14:30', undefined);
  });

  it('renders 12h format with meridiem segment and AM/PM toggle', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="13:45" format="12h" onChange={onChange} />);

    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('01');
    expect(screen.getByRole('spinbutton', { name: 'AM/PM' })).toHaveTextContent('PM');

    await user.type(screen.getByRole('spinbutton', { name: 'AM/PM' }), '{ArrowUp}');

    expect(onChange).toHaveBeenLastCalledWith('01:45', 'AM');
  });

  it('shows 12 for both midnight and noon in 12h format', () => {
    const { unmount } = render(<TimePicker defaultValue="00:05" format="12h" />);
    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('12');
    expect(screen.getByRole('spinbutton', { name: 'AM/PM' })).toHaveTextContent('AM');
    unmount();

    render(<TimePicker defaultValue="12:05" format="12h" />);
    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('12');
    expect(screen.getByRole('spinbutton', { name: 'AM/PM' })).toHaveTextContent('PM');
  });

  it('meridiem chevron buttons step hours in 12h mode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" format="12h" onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase hours' }));
    expect(onChange).toHaveBeenLastCalledWith('10:30', 'AM');

    await user.click(screen.getByRole('button', { name: 'Decrease hours' }));
    expect(onChange).toHaveBeenLastCalledWith('09:30', 'AM');
  });

  it('controlled value wins over internal state', async () => {
    const user = userEvent.setup();
    render(<TimePicker value="08:15" />);

    await user.type(screen.getByRole('spinbutton', { name: 'Hours' }), '{ArrowUp}');

    // controlled: display should not drift since parent did not change value
    expect(screen.getByRole('spinbutton', { name: 'Hours' })).toHaveTextContent('08');
  });

  it('disabled state prevents interaction', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimePicker defaultValue="09:30" disabled onChange={onChange} />);

    const hours = screen.getByRole('spinbutton', { name: 'Hours' });
    expect(hours).toHaveAttribute('tabindex', '-1');

    expect(hours).toHaveAttribute('tabindex', '-1');

    // keyboard events on a disabled segment are prevented by the handler guard
    hours.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true })
    );
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders clock icon when showIcon is set', () => {
    render(<TimePicker defaultValue="09:30" showIcon />);

    expect(document.querySelector('.lucide-clock')).not.toBeNull();
  });

  it('applies size variant classes', () => {
    const { unmount } = render(<TimePicker defaultValue="09:30" size="sm" />);
    expect(screen.getByRole('group')).toHaveClass('h-8');
    unmount();

    render(<TimePicker defaultValue="09:30" size="lg" />);
    expect(screen.getByRole('group')).toHaveClass('h-12');
  });
});

describe('TimeRangeInput', () => {
  it('renders two pickers with start and end values', () => {
    render(<TimeRangeInput start="09:00" end="17:00" />);

    expect(screen.getByRole('group', { name: 'Start time' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'End time' })).toBeInTheDocument();
  });

  it('reports range changes from either side', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeRangeInput start="09:00" end="17:00" onChange={onChange} />);

    const startHours = screen
      .getAllByRole('spinbutton', { name: 'Hours' })[0];
    await user.type(startHours, '{ArrowUp}');

    expect(onChange).toHaveBeenLastCalledWith({ start: '10:00', end: '17:00' });
  });

  it('uses default 09:00–17:00 range', () => {
    render(<TimeRangeInput />);

    const hours = screen.getAllByRole('spinbutton', { name: 'Hours' });
    expect(hours[0]).toHaveTextContent('09');
    expect(hours[1]).toHaveTextContent('17');
  });
});

describe('time utils', () => {
  it('parseTimeToMinutes handles 24h, 12h and rejects garbage', () => {
    expect(parseTimeToMinutes('09:30')).toBe(570);
    expect(parseTimeToMinutes('9:05 PM')).toBe(1265);
    expect(parseTimeToMinutes('12:00 AM')).toBe(0);
    expect(parseTimeToMinutes('12:00 PM')).toBe(720);
    expect(parseTimeToMinutes('nope')).toBeNull();
    expect(parseTimeToMinutes('25:99')).toBeNull();
  });

  it('formatMinutes formats and wraps within a day', () => {
    expect(formatMinutes(570)).toBe('09:30');
    expect(formatMinutes(0)).toBe('00:00');
    expect(formatMinutes(1440)).toBe('00:00');
    expect(formatMinutes(-30)).toBe('23:30');
  });
});
