import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NumberInput } from '../components/ui/number-input';

const meta: Meta<typeof NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  args: {
    label: 'Quantity',
    defaultValue: 5,
    step: 1,
    min: 0,
    max: 100,
  },
};
export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {};

export const Currency: Story = {
  args: {
    label: 'Price',
    defaultValue: 19.99,
    format: 'currency',
    currency: 'USD',
    step: 0.01,
    min: 0,
    helperText: 'Steppers move by one cent',
  },
};

export const Percent: Story = {
  args: {
    label: 'Tax rate',
    defaultValue: 8.25,
    format: 'percent',
    digits: 2,
    step: 0.25,
    min: 0,
    max: 100,
    helperText: 'Steppers move by 0.25%',
  },
};

export const Plain: Story = {
  args: {
    label: 'Port',
    defaultValue: 8080,
    step: 1,
    min: 1,
    max: 65535,
    helperText: 'Arrow keys also step the value',
  },
};

export const WithoutSteppers: Story = {
  args: {
    label: 'Threads',
    defaultValue: 4,
    hideSteppers: true,
    min: 1,
    max: 64,
    helperText: 'Steppers hidden — keyboard stepping still works',
  },
};

export const Small: Story = {
  args: { inputSize: 'sm', label: 'Small', defaultValue: 3 },
};

export const Large: Story = {
  args: { inputSize: 'lg', label: 'Large', defaultValue: 300, step: 100 },
};

export const Disabled: Story = {
  args: { label: 'Read-only', defaultValue: 7, disabled: true },
};

export const Error: Story = {
  args: {
    label: 'Discount',
    defaultValue: 150,
    min: 0,
    max: 100,
    format: 'percent',
    error: 'Discount cannot exceed 100%',
  },
};

export const Interactive: Story = {
  render: () => {
    const [price, setPrice] = useState<number | null>(24.5);
    const [tip, setTip] = useState<number | null>(18);
    return (
      <div className="flex w-80 flex-col gap-6">
        <NumberInput
          label="Dinner price"
          format="currency"
          step={0.5}
          min={0}
          value={price}
          onValueChange={setPrice}
        />
        <NumberInput
          label="Tip"
          format="percent"
          digits={0}
          step={1}
          min={0}
          max={100}
          value={tip}
          onValueChange={setTip}
        />
        <p className="text-muted-foreground text-sm">
          Tip amount:{' '}
          {price !== null && tip !== null
            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                (price * tip) / 100
              )
            : '—'}
        </p>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <NumberInput label="Plain" defaultValue={42} step={1} />
      <NumberInput label="Currency" defaultValue={19.99} format="currency" step={0.01} />
      <NumberInput label="Percent" defaultValue={12.5} format="percent" step={0.5} digits={1} />
      <NumberInput label="EUR (de-DE)" defaultValue={9.49} format="currency" currency="EUR" locale="de-DE" step={0.01} />
    </div>
  ),
};
