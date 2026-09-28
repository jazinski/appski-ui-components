import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from './sparkline';

const meta: Meta<typeof Sparkline> = {
  title: 'Components/Sparkline',
  component: Sparkline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A compact trend line for embedding in tables, cards, and lists. Rendered as inline SVG with no chart library dependency; colors follow the theme variant via currentColor.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Numeric series to plot, in order',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Size variant',
    },
    showArea: {
      control: { type: 'boolean' },
      description: 'Fill the area under the line',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [3, 7, 4, 9, 6, 11, 8, 13],
  },
};

export const NoArea: Story = {
  args: {
    data: [3, 7, 4, 9, 6, 11, 8, 13],
    showArea: false,
  },
};

export const Success: Story = {
  args: {
    data: [5, 6, 8, 7, 10, 12, 15],
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    data: [15, 12, 14, 9, 10, 6, 4],
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    data: [2, 4, 3, 5, 4, 6],
    size: 'sm',
  },
};

export const InTableRow: Story = {
  render: () => (
    <table className="w-full max-w-xl text-sm">
      <thead>
        <tr className="text-muted-foreground border-b text-left">
          <th className="py-2">Metric</th>
          <th className="py-2">Value</th>
          <th className="w-32 py-2">Trend</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="py-2">Latency p95</td>
          <td className="py-2">142 ms</td>
          <td className="py-2">
            <Sparkline data={[180, 165, 170, 150, 155, 142]} variant="success" size="sm" />
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2">Error rate</td>
          <td className="py-2">1.8%</td>
          <td className="py-2">
            <Sparkline data={[0.4, 0.6, 0.5, 1.1, 1.4, 1.8]} variant="error" size="sm" />
          </td>
        </tr>
        <tr>
          <td className="py-2">Throughput</td>
          <td className="py-2">2.4k/s</td>
          <td className="py-2">
            <Sparkline data={[1.9, 2.0, 2.2, 2.1, 2.3, 2.4]} size="sm" />
          </td>
        </tr>
      </tbody>
    </table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sparklines sized for inline use in tables and lists.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      {(['default', 'success', 'warning', 'error'] as const).map((variant) => (
        <div key={variant}>
          <p className="text-muted-foreground mb-1 text-sm capitalize">{variant}</p>
          <Sparkline data={[3, 7, 4, 9, 6, 11, 8, 13]} variant={variant} />
        </div>
      ))}
    </div>
  ),
};
