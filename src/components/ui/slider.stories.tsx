import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A slider component for selecting values from a range, with support for single and multiple thumbs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number' },
      description: 'Step increment',
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
      description: 'Show current value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: [65],
    max: 100,
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    defaultValue: [40],
    max: 100,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    defaultValue: [75],
    max: 100,
    size: 'lg',
    showValue: true,
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    showValue: true,
  },
};

export const WithStep: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
    showValue: true,
  },
};

export const Success: Story = {
  args: {
    defaultValue: [100],
    max: 100,
    variant: 'success',
    showValue: true,
  },
};

export const Warning: Story = {
  args: {
    defaultValue: [60],
    max: 100,
    variant: 'warning',
    showValue: true,
  },
};

export const Error: Story = {
  args: {
    defaultValue: [20],
    max: 100,
    variant: 'error',
    showValue: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Value:</span>
          <span className="text-sm">{value[0]}</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <p className="mb-2 text-sm">Default</p>
        <Slider defaultValue={[60]} max={100} />
      </div>
      <div>
        <p className="mb-2 text-sm">Success</p>
        <Slider defaultValue={[100]} max={100} variant="success" />
      </div>
      <div>
        <p className="mb-2 text-sm">Warning</p>
        <Slider defaultValue={[70]} max={100} variant="warning" />
      </div>
      <div>
        <p className="mb-2 text-sm">Error</p>
        <Slider defaultValue={[30]} max={100} variant="error" />
      </div>
    </div>
  ),
};
