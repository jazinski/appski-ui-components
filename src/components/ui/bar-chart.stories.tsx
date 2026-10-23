import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './bar-chart';

const meta: Meta<typeof BarChart> = {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A vertical bar chart for comparing values across categories. Rendered as inline SVG with no chart library dependency; colors follow the theme variant via currentColor.',
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
    showGrid: {
      control: { type: 'boolean' },
      description: 'Draw horizontal grid lines',
    },
    showValues: {
      control: { type: 'boolean' },
      description: 'Show the numeric value above each bar',
    },
    barGap: {
      control: { type: 'range', min: 0, max: 40, step: 1 },
      description: 'Space between bars (viewBox units)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const quarterlyRevenue = [
  { label: 'Q1', value: 12500 },
  { label: 'Q2', value: 18300 },
  { label: 'Q3', value: 9800 },
  { label: 'Q4', value: 22100 },
];

export const Default: Story = {
  args: {
    data: quarterlyRevenue,
  },
};

export const WithValues: Story = {
  args: {
    data: quarterlyRevenue,
    showValues: true,
  },
};

export const Success: Story = {
  args: {
    data: quarterlyRevenue,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    data: quarterlyRevenue,
    variant: 'warning',
    showValues: true,
  },
};

export const NoGrid: Story = {
  args: {
    data: quarterlyRevenue,
    showGrid: false,
  },
};

export const ManyCategories: Story = {
  args: {
    data: [
      { label: 'Jan', value: 30 },
      { label: 'Feb', value: 45 },
      { label: 'Mar', value: 28 },
      { label: 'Apr', value: 52 },
      { label: 'May', value: 41 },
      { label: 'Jun', value: 60 },
      { label: 'Jul', value: 55 },
      { label: 'Aug', value: 49 },
      { label: 'Sep', value: 58 },
      { label: 'Oct', value: 64 },
      { label: 'Nov', value: 71 },
      { label: 'Dec', value: 80 },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Bars automatically narrow to fit the available width.',
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
          <BarChart data={quarterlyRevenue} variant={variant} />
        </div>
      ))}
    </div>
  ),
};
