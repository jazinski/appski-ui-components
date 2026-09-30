import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker, TimeRangeInput } from './time-picker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
An accessible time picker with steppable hours/minutes segments, optional
12-hour AM/PM mode, and a paired TimeRangeInput for start/end ranges.

\`\`\`tsx
import { TimePicker, TimeRangeInput } from '@blancski/ui';

<TimePicker defaultValue="09:30" format="12h" onChange={(v) => console.log(v)} />
<TimeRangeInput start="09:00" end="17:00" onChange={(r) => console.log(r)} />
\`\`\`

Keyboard: focus a segment, use ArrowUp/ArrowDown to step, PageUp/PageDown to
jump by 5.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    format: { control: 'select', options: ['12h', '24h'] },
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    minuteStep: { control: 'number' },
    disabled: { control: 'boolean' },
    showIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default (24h)',
  args: {
    defaultValue: '09:30',
  },
};

export const TwelveHour: Story = {
  name: '12-hour with AM/PM',
  args: {
    defaultValue: '13:45',
    format: '12h',
  },
};

export const WithIcon: Story = {
  name: 'With clock icon',
  args: {
    defaultValue: '09:30',
    showIcon: true,
  },
};

export const QuarterHourSteps: Story = {
  name: '15-minute steps',
  args: {
    defaultValue: '09:30',
    minuteStep: 15,
    showIcon: true,
  },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <TimePicker defaultValue="09:30" size="sm" />
      <TimePicker defaultValue="09:30" size="default" />
      <TimePicker defaultValue="09:30" size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    defaultValue: '09:30',
    disabled: true,
    showIcon: true,
  },
};

export const Range: Story = {
  name: 'Time range (start → end)',
  render: () => <TimeRangeInput start="09:00" end="17:00" />,
};

export const Range12h: Story = {
  name: 'Time range (12h)',
  render: () => <TimeRangeInput start="09:00" end="17:30" format="12h" />,
};
