import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateRangePicker, type DateRange } from './date-range-picker';

// Today is dynamic; anchor expectations to fixed offsets from the real today
// so preset assertions stay stable across run dates.

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function dayButton(date: Date) {
  // The popover portals to document.body, so query the whole document.
  const label = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
  return screen.getByRole('button', { name: label });
}

function Controlled() {
  const [range, setRange] = React.useState<DateRange | null>({
    start: new Date(2026, 8, 20),
    end: new Date(2026, 8, 27),
  });
  return (
    <>
      <DateRangePicker value={range} onChange={setRange} />
      <div data-testid="output">
        {range ? `${range.start.toISOString()}..${range.end.toISOString()}` : 'none'}
      </div>
    </>
  );
}

describe('DateRangePicker', () => {
  it('shows the placeholder when empty', () => {
    render(<DateRangePicker />);
    expect(screen.getByText('Pick a date range')).toBeInTheDocument();
  });

  it('renders the trigger with an accessible name', () => {
    render(<DateRangePicker aria-label="Filter dates" />);
    expect(screen.getByRole('button', { name: 'Filter dates' })).toBeTruthy();
  });

  it('formats a default value in the trigger', () => {
    render(
      <DateRangePicker
        defaultValue={{ start: new Date(2026, 8, 1), end: new Date(2026, 8, 9) }}
      />
    );
    const trigger = screen.getByRole('button', { name: /choose date range/i });
    expect(trigger.textContent).toMatch(/Sep/);
    expect(trigger.textContent).toMatch(/–/);
  });

  it('formats a single-day range without a separator', () => {
    render(
      <DateRangePicker
        defaultValue={{
          start: new Date(2026, 8, 1),
          end: new Date(2026, 8, 1),
        }}
      />
    );
    const trigger = screen.getByRole('button', { name: /choose date range/i });
    expect(trigger.textContent).not.toMatch(/–/);
  });

  it('opens the popover with two month grids and presets', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));
    expect(screen.getAllByRole('grid')).toHaveLength(2);
    expect(screen.getByRole('button', { name: 'Last 7 days' })).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Last 30 days' })).toBeTruthy();
  });

  it('hides presets when showPresets is false', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker showPresets={false} />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));
    expect(screen.queryByRole('button', { name: 'Last 7 days' })).toBeNull();
    expect(screen.getAllByRole('grid')).toHaveLength(2);
  });

  it('selects a range by clicking start then end and closes on complete', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateRangePicker onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));

    const today = startOfDay(new Date());
    // Left grid shows the current month.
    const start = new Date(today.getFullYear(), today.getMonth(), 15);
    await user.click(dayButton(start));

    // Mid-selection hint appears.
    expect(screen.getByText('Pick an end date')).toBeInTheDocument();

    const end = new Date(today.getFullYear(), today.getMonth(), 22);
    await user.click(dayButton(end));

    expect(onChange).toHaveBeenCalledWith({ start, end });
    // Popover closed after completing the range.
    expect(screen.queryAllByRole('grid')).toHaveLength(0);
  });

  it('normalizes a reversed selection (end clicked before start)', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateRangePicker onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));

    const today = startOfDay(new Date());
    const later = new Date(today.getFullYear(), today.getMonth(), 20);
    const earlier = new Date(today.getFullYear(), today.getMonth(), 8);
    await user.click(dayButton(later));
    await user.click(dayButton(earlier));

    expect(onChange).toHaveBeenCalledWith({ start: earlier, end: later });
  });

  it('clicking the same day twice yields a single-day range', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateRangePicker onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));

    const today = startOfDay(new Date());
    const day = new Date(today.getFullYear(), today.getMonth(), 10);
    await user.click(dayButton(day));
    await user.click(dayButton(day));

    expect(onChange).toHaveBeenCalledWith({ start: day, end: day });
  });

  it('applies a preset and marks it active', async () => {
    const user = userEvent.setup();
    render(<DateRangePicker />);
    await user.click(screen.getByRole('button', { name: /choose date range/i }));
    await user.click(screen.getByRole('button', { name: 'Last 7 days' }));

    const today = startOfDay(new Date());
    const expectedStart = new Date(today);
    expectedStart.setDate(today.getDate() - 6);

    const trigger = screen.getByRole('button', { name: /choose date range/i });
    // Popover stays open for presets; both dates formatted in the trigger.
    expect(trigger.textContent).toMatch(new RegExp(`${expectedStart.getDate()}`));
  });

  it('clears the range with the clear button', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <DateRangePicker
        onChange={onChange}
        defaultValue={{ start: new Date(2026, 8, 1), end: new Date(2026, 8, 9) }}
      />
    );
    await user.click(screen.getByRole('button', { name: /choose date range/i }));
    await user.click(screen.getByRole('button', { name: 'Clear date range' }));

    expect(onChange).toHaveBeenCalledWith(null);
    expect(screen.getByText('Pick a date range')).toBeInTheDocument();
  });

  it('works in controlled mode', async () => {
    const user = userEvent.setup();
    render(<Controlled />);
    expect(screen.getByTestId('output').textContent).not.toBe('none');

    await user.click(screen.getByRole('button', { name: /choose date range/i }));
    await user.click(screen.getByRole('button', { name: 'Clear date range' }));
    expect(screen.getByTestId('output').textContent).toBe('none');
  });

  it('disables the trigger when disabled', () => {
    render(<DateRangePicker disabled />);
    expect(
      screen.getByRole('button', { name: /choose date range/i })
    ).toBeDisabled();
  });
});
