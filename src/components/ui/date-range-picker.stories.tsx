import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker, type DateRangePreset } from './date-range-picker';

const meta = {
  title: 'UI/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showPresets: {
      control: 'boolean',
      description: 'Show the quick-select presets panel',
    },
    weekStartsOn: {
      control: 'select',
      options: [0, 1],
      description: '0 = Sunday, 1 = Monday',
    },
    locale: {
      control: 'text',
      description: 'BCP-47 locale tag (e.g. en-US, pl-PL)',
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};

export const Controlled: Story = {
  name: 'Controlled with label',
  render: () => {
    const [range, setRange] = React.useState<{
      start: Date;
      end: Date;
    } | null>(null);
    return (
      <div className="flex flex-col items-center gap-3">
        <DateRangePicker value={range} onChange={setRange} />
        <p className="text-sm text-muted-foreground">
          {range
            ? `${range.start.toDateString()} → ${range.end.toDateString()}`
            : 'No range selected'}
        </p>
      </div>
    );
  },
};

const weekdayPresets: DateRangePreset[] = [
  {
    label: 'Weekend',
    getRange: (today) => {
      const saturday = new Date(today);
      saturday.setDate(today.getDate() - ((today.getDay() + 7) % 7) - 1);
      const sunday = new Date(saturday);
      sunday.setDate(saturday.getDate() + 1);
      return { start: saturday, end: sunday };
    },
  },
  {
    label: 'Work week',
    getRange: (today) => {
      const monday = new Date(today);
      monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
      const friday = new Date(monday);
      friday.setDate(monday.getDate() + 4);
      return { start: monday, end: friday };
    },
  },
];

export const CustomPresets: Story = {
  name: 'Custom presets',
  render: () => <DateRangePicker presets={weekdayPresets} />,
};

export const NoPresets: Story = {
  name: 'Calendars only',
  render: () => <DateRangePicker showPresets={false} />,
};

export const Bounded: Story = {
  name: 'Bounded to 2026 (min/max)',
  render: () => (
    <DateRangePicker
      minDate={new Date(2026, 0, 1)}
      maxDate={new Date(2026, 11, 31)}
    />
  ),
};

export const LocalePl: Story = {
  name: 'Polish locale, Monday start',
  render: () => <DateRangePicker locale="pl-PL" weekStartsOn={1} />,
};

export const Disabled: Story = {
  render: () => <DateRangePicker disabled />,
};
