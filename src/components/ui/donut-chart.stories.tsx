import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './donut-chart';

const meta: Meta<typeof DonutChart> = {
  title: 'Components/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A donut chart for part-to-whole relationships. Rendered as inline SVG with no chart library dependency; segment colors follow the theme via currentColor.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Segments to render, clockwise from the top',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Size variant',
    },
    thickness: {
      control: { type: 'range', min: 0.1, max: 0.9, step: 0.05 },
      description: 'Ring thickness as a fraction of the radius (0-1)',
    },
    centerLabel: {
      control: { type: 'text' },
      description: 'Text rendered in the center of the donut',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const trafficSources = [
  { label: 'Direct', value: 60 },
  { label: 'Organic', value: 45 },
  { label: 'Referral', value: 20 },
  { label: 'Social', value: 15 },
];

export const Default: Story = {
  args: {
    data: trafficSources,
  },
};

export const WithCenterLabel: Story = {
  args: {
    data: trafficSources,
    centerLabel: '140 visits',
  },
};

export const Large: Story = {
  args: {
    data: trafficSources,
    size: 'lg',
    centerLabel: '140 visits',
  },
};

export const Small: Story = {
  args: {
    data: trafficSources.slice(0, 2),
    size: 'sm',
  },
};

export const ThinRing: Story = {
  args: {
    data: trafficSources,
    thickness: 0.12,
  },
  parameters: {
    docs: {
      description: {
        story: 'A thinner ring for a lighter visual weight.',
      },
    },
  },
};

export const SingleSegment: Story = {
  args: {
    data: [{ label: 'Complete', value: 100 }],
    centerLabel: '100%',
  },
  parameters: {
    docs: {
      description: {
        story: 'A single 100% segment renders as a complete ring.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <DonutChart
      data={[
        { label: 'Passed', value: 82, colorClass: 'text-success' },
        { label: 'Failed', value: 12, colorClass: 'text-destructive' },
        { label: 'Skipped', value: 6, colorClass: 'text-muted-foreground' },
      ]}
      centerLabel="82% passed"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Per-segment color overrides via colorClass.',
      },
    },
  },
};
