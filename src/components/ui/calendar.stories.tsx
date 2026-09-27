import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    weekStartsOn: {
      control: 'select',
      options: [0, 1],
      description: '0 = Sunday, 1 = Monday',
    },
    weekdayFormat: {
      control: 'select',
      options: ['narrow', 'short'],
      description: 'Weekday header format',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Render days from adjacent months (muted)',
    },
    locale: {
      control: 'text',
      description: 'BCP-47 locale tag (e.g. en-US, pl-PL)',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const SingleSelection: Story = {
  name: 'Single date selection',
  render: () => {
    const [selected, setSelected] = React.useState<Date | null>(
      new Date(2026, 8, 15)
    );
    return (
      <Calendar
        defaultMonth={new Date(2026, 8, 1)}
        selected={selected}
        onDayClick={(date) => { setSelected(date); }}
      />
    );
  },
};

export const RangeSelection: Story = {
  name: 'Range selection with hover preview',
  render: () => {
    const [range, setRange] = React.useState<{
      start: Date;
      end: Date;
    } | null>({
      start: new Date(2026, 8, 10),
      end: new Date(2026, 8, 18),
    });
    const [pendingStart, setPendingStart] = React.useState<Date | null>(null);
    const [hovered, setHovered] = React.useState<Date | null>(null);

    const normalize = (a: Date, b: Date) =>
      a.getTime() <= b.getTime()
        ? { start: a, end: b }
        : { start: b, end: a };

    const preview =
      pendingStart && hovered ? normalize(pendingStart, hovered) : null;

    return (
      <Calendar
        defaultMonth={new Date(2026, 8, 1)}
        selectedRange={preview ?? range}
        onDayClick={(date) => {
          if (!pendingStart) {
            setPendingStart(date);
          } else {
            setRange(normalize(pendingStart, date));
            setPendingStart(null);
            setHovered(null);
          }
        }}
        onDayMouseEnter={setHovered}
      />
    );
  },
};

export const MondayStart: Story = {
  name: 'Week starts Monday (pl-PL)',
  render: () => (
    <Calendar defaultMonth={new Date(2026, 8, 1)} weekStartsOn={1} locale="pl-PL" />
  ),
};

export const Disabled: Story = {
  name: 'Min/max and disabled dates',
  render: () => (
    <Calendar
      defaultMonth={new Date(2026, 8, 1)}
      minDate={new Date(2026, 8, 5)}
      maxDate={new Date(2026, 8, 25)}
      disabledDates={[new Date(2026, 8, 15)]}
    />
  ),
};

export const OutsideDays: Story = {
  name: 'Outside days visible',
  render: () => (
    <Calendar defaultMonth={new Date(2026, 8, 1)} showOutsideDays />
  ),
};
