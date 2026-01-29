import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A progress indicator component with multiple variants and optional value display.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size variant',
    },
    showValue: {
      control: 'boolean',
      description: 'Show numeric value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    value: 75,
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    value: 30,
    variant: 'error',
  },
};

export const WithValue: Story = {
  args: {
    value: 65,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    value: 80,
    size: 'lg',
    showValue: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div>
        <p className="mb-2 text-sm">Default</p>
        <Progress value={60} />
      </div>
      <div>
        <p className="mb-2 text-sm">Success</p>
        <Progress value={100} variant="success" />
      </div>
      <div>
        <p className="mb-2 text-sm">Warning</p>
        <Progress value={75} variant="warning" />
      </div>
      <div>
        <p className="mb-2 text-sm">Error</p>
        <Progress value={30} variant="error" />
      </div>
    </div>
  ),
};
