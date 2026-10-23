import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from './progress-ring';

const meta: Meta<typeof ProgressRing> = {
  title: 'Components/ProgressRing',
  component: ProgressRing,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A circular progress indicator with determinate and indeterminate (spinner) modes, size and color variants, and an optional centered label.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100); omit for indeterminate mode',
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
    thickness: {
      control: { type: 'range', min: 2, max: 12, step: 1 },
      description: 'Stroke thickness in pixels',
    },
    label: {
      control: 'text',
      description: 'Content centered inside the ring',
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

export const WithLabel: Story = {
  args: {
    value: 65,
    label: '65%',
  },
};

export const Indeterminate: Story = {
  args: {
    ariaLabel: 'Loading',
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Done',
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
    thickness: 8,
    label: '80%',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={60} />
        <p className="text-sm">Default</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={100} variant="success" label="100%" />
        <p className="text-sm">Success</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={75} variant="warning" label="75%" />
        <p className="text-sm">Warning</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing value={30} variant="error" label="30%" />
        <p className="text-sm">Error</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRing aria-label="Loading" />
        <p className="text-sm">Indeterminate</p>
      </div>
    </div>
  ),
};
