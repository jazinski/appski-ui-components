import * as React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Calendar, getMonthMatrix } from './calendar';

// Month names are rendered via Intl in the runtime locale; tests match on
// structure and date labels (day-of-month numbers) instead.

const FEB_2026 = new Date(2026, 1, 1); // Feb 2026 starts on a Sunday

function getAllDayButtons(container: HTMLElement) {
  return Array.from(container.querySelectorAll('button[aria-label]')).filter(
    (b) => (b.getAttribute('aria-label') ?? '').match(/month/i) === null
  );
}

describe('getMonthMatrix', () => {
  it('returns six weeks of seven days', () => {
    const weeks = getMonthMatrix(FEB_2026, 0);
    expect(weeks).toHaveLength(6);
    weeks.forEach((week) => { expect(week).toHaveLength(7); });
  });

  it('starts the grid on weekStartsOn (Monday start shifts Sunday back)', () => {
    // Feb 1 2026 is a Sunday. With weekStartsOn=0 the first cell is Feb 1.
    expect(getMonthMatrix(FEB_2026, 0)[0][0].getDate()).toBe(1);
    // With weekStartsOn=1 the grid starts on Mon Jan 26 2026.
    const mondayStart = getMonthMatrix(FEB_2026, 1)[0][0];
    expect(mondayStart.getMonth()).toBe(0);
    expect(mondayStart.getDate()).toBe(26);
  });

  it('covers every day of the month', () => {
    const weeks = getMonthMatrix(new Date(2026, 6, 1), 0); // July, 31 days
    const days = weeks.flat();
    for (let d = 1; d <= 31; d++) {
      expect(
        days.some((day) => day.getDate() === d && day.getMonth() === 6)
      ).toBe(true);
    }
  });
});

describe('Calendar', () => {
  it('renders weekday headers', () => {
    render(<Calendar defaultMonth={FEB_2026} />);
    const headers = screen.getAllByRole('gridcell');
    // (columnheader role is asserted below; gridcells exist per day)
    expect(screen.getAllByRole('columnheader')).toHaveLength(7);
    expect(headers.length).toBeGreaterThan(0);
  });

  it('renders the month grid with day buttons', () => {
    const { container } = render(<Calendar defaultMonth={FEB_2026} />);
    // 28 days in Feb 2026, no outside days shown.
    const dayButtons = getAllDayButtons(container);
    expect(dayButtons).toHaveLength(28);
  });

  it('hides outside days by default and shows them when enabled', () => {
    const { container, rerender } = render(<Calendar defaultMonth={FEB_2026} />);
    expect(getAllDayButtons(container)).toHaveLength(28);

    rerender(<Calendar defaultMonth={FEB_2026} showOutsideDays />);
    expect(getAllDayButtons(container)).toHaveLength(42);
  });

  it('navigates to the previous and next month', async () => {
    const user = userEvent.setup();
    const onMonthChange = vi.fn();
    render(<Calendar defaultMonth={FEB_2026} onMonthChange={onMonthChange} />);
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    expect(onMonthChange).toHaveBeenCalledWith(new Date(2026, 2, 1));

    await user.click(screen.getByRole('button', { name: 'Previous month' }));
    await user.click(screen.getByRole('button', { name: 'Previous month' }));
    expect(onMonthChange).toHaveBeenCalledWith(new Date(2026, 0, 1));
  });

  it('disables prev navigation before minDate month', () => {
    render(<Calendar defaultMonth={FEB_2026} minDate={new Date(2026, 1, 10)} />);
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Next month' })).toBeEnabled();
  });

  it('disables next navigation past maxDate month', () => {
    render(<Calendar defaultMonth={FEB_2026} maxDate={new Date(2026, 1, 20)} />);
    expect(screen.getByRole('button', { name: 'Next month' })).toBeDisabled();
  });

  it('marks a single selected day with aria-selected', () => {
    render(
      <Calendar defaultMonth={FEB_2026} selected={new Date(2026, 1, 14)} />
    );
    const cell = screen
      .getByRole('gridcell', { selected: true })
      .querySelector('button');
    expect(cell).toHaveTextContent('14');
  });

  it('renders range states start, end, and in-range', () => {
    const { container } = render(
      <Calendar
        defaultMonth={FEB_2026}
        selectedRange={{
          start: new Date(2026, 1, 10),
          end: new Date(2026, 1, 14),
        }}
      />
    );
    const cells = Array.from(
      container.querySelectorAll('[role="gridcell"][data-range]')
    );
    expect(
      cells.filter((c) => c.getAttribute('data-range') === 'start')
    ).toHaveLength(1);
    expect(
      cells.filter((c) => c.getAttribute('data-range') === 'end')
    ).toHaveLength(1);
    expect(
      cells.filter((c) => c.getAttribute('data-range') === 'in-range')
    ).toHaveLength(3); // Feb 11-13
  });

  it('marks a same-day range as both', () => {
    const { container } = render(
      <Calendar
        defaultMonth={FEB_2026}
        selectedRange={{
          start: new Date(2026, 1, 10),
          end: new Date(2026, 1, 10),
        }}
      />
    );
    expect(container.querySelector('[data-range="both"]')).not.toBeNull();
  });

  it('disables days outside min/max and listed disabled dates', () => {
    const { container } = render(
      <Calendar
        defaultMonth={FEB_2026}
        minDate={new Date(2026, 1, 5)}
        maxDate={new Date(2026, 1, 25)}
        disabledDates={[new Date(2026, 1, 10)]}
      />
    );
    const dayButtons = getAllDayButtons(container);
    const byDate = new Map(dayButtons.map((b) => [b.textContent, b] as const));
    expect(byDate.get('4')).toBeDisabled(); // before min
    expect(byDate.get('5')).toBeEnabled();
    expect(byDate.get('10')).toBeDisabled(); // explicitly listed
    expect(byDate.get('25')).toBeEnabled();
    expect(byDate.get('26')).toBeDisabled(); // after max
  });

  it('fires onDayClick with the clicked date', async () => {
    const user = userEvent.setup();
    const onDayClick = vi.fn();
    const { container } = render(
      <Calendar defaultMonth={FEB_2026} onDayClick={onDayClick} />
    );
    const button = getAllDayButtons(container).find(
      (b) => b.textContent === '14'
    );
    if (!button) throw new Error('day 14 button not found');
    await user.click(button);
    expect(onDayClick).toHaveBeenCalledWith(new Date(2026, 1, 14));
  });

  it('marks today with aria-current', () => {
    const today = new Date();
    const { container } = render(<Calendar defaultMonth={today} />);
    expect(container.querySelector('[aria-current="date"]')).not.toBeNull();
  });

  it('supports controlled month navigation', async () => {
    const user = userEvent.setup();
    function Controlled() {
      const [month, setMonth] = React.useState(FEB_2026);
      return <Calendar month={month} onMonthChange={setMonth} />;
    }
    render(<Controlled />);
    await user.click(screen.getByRole('button', { name: 'Next month' }));
    // After navigating to March, day 31 should now be present.
    const march31 = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '31');
    expect(march31).toBeTruthy();
  });
});
