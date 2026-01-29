import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './metric-card';
import { Users, Activity, TrendingUp, AlertCircle, DollarSign, Package } from 'lucide-react';

const meta: Meta<typeof MetricCard> = {
  title: 'Components/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A card component designed for displaying statistics and key performance indicators.

## Features
- Numeric or text values with labels
- Optional icon display (right-aligned)
- Trend indicators with direction (up/down/neutral)
- Multiple color variants
- Dark mode support
- Extends the Card component

## Variants
- **default**: Neutral gray theme
- **emerald**: Green theme (good for positive metrics)
- **blue**: Blue theme (neutral/informational)
- **purple**: Purple theme (special/featured metrics)
- **amber**: Yellow/amber theme (warnings)
- **rose**: Red/pink theme (negative metrics or alerts)

## Usage
Perfect for dashboards showing KPIs like:
- Total users, connections, requests
- Revenue, sales, conversions
- System health metrics
- Performance statistics
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'emerald', 'blue', 'purple', 'amber', 'rose'],
      description: 'Visual variant/color theme',
    },
    value: {
      control: 'text',
      description: 'The main value to display',
    },
    label: {
      control: 'text',
      description: 'Label describing the metric',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

// Basic variants
export const Default: Story = {
  args: {
    value: '1,234',
    label: 'Total Users',
    icon: <Users className="h-6 w-6" />,
    variant: 'default',
  },
};

export const Emerald: Story = {
  args: {
    value: '847',
    label: 'Active Connections',
    icon: <Activity className="h-6 w-6" />,
    variant: 'emerald',
    trend: {
      value: '+12%',
      direction: 'up',
      label: 'vs last week',
    },
  },
};

export const Blue: Story = {
  args: {
    value: '23,456',
    label: 'Total Requests',
    icon: <TrendingUp className="h-6 w-6" />,
    variant: 'blue',
    trend: {
      value: '+5.2%',
      direction: 'up',
      label: 'from yesterday',
    },
  },
};

export const Purple: Story = {
  args: {
    value: '$12,345',
    label: 'Revenue',
    icon: <DollarSign className="h-6 w-6" />,
    variant: 'purple',
    trend: {
      value: '+8.1%',
      direction: 'up',
      label: 'this month',
    },
  },
};

export const Amber: Story = {
  args: {
    value: '3',
    label: 'Warnings',
    icon: <AlertCircle className="h-6 w-6" />,
    variant: 'amber',
    trend: {
      value: '-2',
      direction: 'down',
      label: 'vs last hour',
    },
  },
};

export const Rose: Story = {
  args: {
    value: '12',
    label: 'Critical Errors',
    icon: <AlertCircle className="h-6 w-6" />,
    variant: 'rose',
    trend: {
      value: '+3',
      direction: 'up',
      label: 'in last 24h',
    },
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    value: '99.8%',
    label: 'Uptime',
    variant: 'emerald',
    trend: {
      value: '+0.1%',
      direction: 'up',
    },
  },
};

// Without trend
export const WithoutTrend: Story = {
  args: {
    value: '156',
    label: 'Pending Orders',
    icon: <Package className="h-6 w-6" />,
    variant: 'blue',
  },
};

// Loading state
export const Loading: Story = {
  args: {
    value: '0',
    label: 'Loading...',
    loading: true,
    icon: <Activity className="h-6 w-6" />,
    variant: 'emerald',
  },
};

export const LoadingWithoutIcon: Story = {
  args: {
    value: '0',
    label: 'Loading...',
    loading: true,
    variant: 'blue',
  },
};

// Trend variations
export const TrendUp: Story = {
  args: {
    value: '4,521',
    label: 'Sales',
    icon: <TrendingUp className="h-6 w-6" />,
    variant: 'emerald',
    trend: {
      value: '+15.3%',
      direction: 'up',
      label: 'from last month',
    },
  },
};

export const TrendDown: Story = {
  args: {
    value: '892',
    label: 'Open Tickets',
    icon: <AlertCircle className="h-6 w-6" />,
    variant: 'rose',
    trend: {
      value: '-23%',
      direction: 'down',
      label: 'vs last week',
    },
  },
};

export const TrendNeutral: Story = {
  args: {
    value: '2,341',
    label: 'Sessions',
    icon: <Users className="h-6 w-6" />,
    variant: 'blue',
    trend: {
      value: '0%',
      direction: 'neutral',
      label: 'no change',
    },
  },
};

// Large numbers
export const LargeNumber: Story = {
  args: {
    value: '1,234,567',
    label: 'Total Records',
    icon: <Package className="h-6 w-6" />,
    variant: 'purple',
  },
};

// Real-world examples
export const ActiveConnections: Story = {
  args: {
    value: '847',
    label: 'Active Connections',
    icon: <Activity className="h-6 w-6" />,
    variant: 'emerald',
    trend: {
      value: '+12%',
      direction: 'up',
      label: 'vs last hour',
    },
  },
};

export const SystemUptime: Story = {
  args: {
    value: '99.97%',
    label: 'System Uptime',
    icon: <TrendingUp className="h-6 w-6" />,
    variant: 'blue',
    trend: {
      value: '+0.02%',
      direction: 'up',
      label: '30-day average',
    },
  },
};

export const ErrorRate: Story = {
  args: {
    value: '0.03%',
    label: 'Error Rate',
    icon: <AlertCircle className="h-6 w-6" />,
    variant: 'amber',
    trend: {
      value: '-0.01%',
      direction: 'down',
      label: 'improvement',
    },
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      style={{ width: '900px' }}
    >
      <MetricCard
        value="847"
        label="Active Connections"
        icon={<Activity className="h-6 w-6" />}
        variant="emerald"
        trend={{ value: '+12%', direction: 'up' }}
      />
      <MetricCard
        value="99.97%"
        label="System Uptime"
        icon={<TrendingUp className="h-6 w-6" />}
        variant="blue"
        trend={{ value: '+0.02%', direction: 'up' }}
      />
      <MetricCard
        value="23,456"
        label="Total Requests"
        icon={<Package className="h-6 w-6" />}
        variant="purple"
        trend={{ value: '+5.2%', direction: 'up' }}
      />
      <MetricCard
        value="3"
        label="Active Warnings"
        icon={<AlertCircle className="h-6 w-6" />}
        variant="amber"
        trend={{ value: '-2', direction: 'down' }}
      />
    </div>
  ),
};
