import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './line-chart';

const meta: Meta<typeof LineChart> = {
  title: 'Components/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A line chart for showing trends over time. Rendered as inline SVG with no chart library dependency; colors follow the theme variant via currentColor.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Data points to plot, in x-axis order',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    showDots: {
      control: { type: 'boolean' },
      description: 'Draw a dot at each data point',
    },
    showArea: {
      control: { type: 'boolean' },
      description: 'Fill the area under the line',
    },
    showGrid: {
      control: { type: 'boolean' },
      description: 'Draw horizontal grid lines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const weeklyVisitors = [
  { label: 'Mon', value: 120 },
  { label: 'Tue', value: 180 },
  { label: 'Wed', value: 150 },
  { label: 'Thu', value: 220 },
  { label: 'Fri', value: 280 },
  { label: 'Sat', value: 340 },
  { label: 'Sun', value: 310 },
];

export const Default: Story = {
  args: {
    data: weeklyVisitors,
  },
};

export const WithArea: Story = {
  args: {
    data: weeklyVisitors,
    showArea: true,
  },
};

export const Success: Story = {
  args: {
    data: weeklyVisitors,
    variant: 'success',
    showArea: true,
  },
};

export const Error: Story = {
  args: {
    data: weeklyVisitors.map((d) => ({ ...d, value: 400 - d.value })),
    variant: 'error',
  },
};

export const NoDots: Story = {
  args: {
    data: weeklyVisitors,
    showDots: false,
  },
};

export const Minimal: Story = {
  args: {
    data: weeklyVisitors,
    showDots: false,
    showGrid: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dots and grid lines disabled for a cleaner look.',
      },
    },
  },
};

export const SinglePoint: Story = {
  args: {
    data: [{ label: 'Now', value: 42 }],
  },
  parameters: {
    docs: {
      description: {
        story: 'A single data point renders centered without errors.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-6">
      {(['default', 'success', 'warning', 'error'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-muted-foreground mb-2 text-sm capitalize">{variant}</p>
          <LineChart data={weeklyVisitors} variant={variant} />
        </div>
      ))}
    </div>
  ),
};
