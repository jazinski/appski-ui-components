import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from '../components/ui/metric-card';
import { 
  UserIcon, 
  CurrencyDollarIcon, 
  ShoppingCartIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const meta = {
  title: 'UI/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'emerald', 'blue', 'purple', 'amber', 'rose'],
    },
    value: { control: 'text' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '2,543',
    label: 'Total Users',
    icon: <UserIcon />,
  },
};

export const WithTrendUp: Story = {
  args: {
    variant: 'emerald',
    value: ',231',
    label: 'Total Revenue',
    icon: <CurrencyDollarIcon />,
    trend: {
      value: '+20.1%',
      direction: 'up',
      label: 'from last month',
    },
  },
};

export const WithTrendDown: Story = {
  args: {
    variant: 'rose',
    value: '12.5%',
    label: 'Bounce Rate',
    icon: <ChartBarIcon />,
    trend: {
      value: '-4.2%',
      direction: 'down',
      label: 'from last week',
    },
  },
};

export const GridExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
      <MetricCard 
        variant="emerald"
        value="12,345"
        label="Active Users"
        icon={<UserIcon />}
        trend={{ value: '+12%', direction: 'up', label: 'vs last week' }}
      />
      <MetricCard 
        variant="blue"
        value=",321"
        label="Revenue"
        icon={<CurrencyDollarIcon />}
        trend={{ value: '+8%', direction: 'up', label: 'vs last week' }}
      />
      <MetricCard 
        variant="purple"
        value="432"
        label="Orders"
        icon={<ShoppingCartIcon />}
        trend={{ value: '-2%', direction: 'down', label: 'vs last week' }}
      />
      <MetricCard 
        variant="amber"
        value="1,203"
        label="Pending"
        icon={<ChartBarIcon />}
        trend={{ value: '0%', direction: 'neutral', label: 'vs last week' }}
      />
    </div>
  ),
};
