import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import { Input } from './input';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A label component for form fields with support for required indicators and variants.

## Features
- Required indicator support
- Multiple size variants
- Disabled state styling
- Accessible with proper htmlFor attribute
- Works seamlessly with form controls

## Usage

\`\`\`tsx
import { Label } from '@appski/ui';

<Label htmlFor="email" required>
  Email Address
</Label>
<Input id="email" type="email" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'The size of the label',
    },
    required: {
      control: 'boolean',
      description: 'Show required indicator',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
};

export const Required: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    size: 'lg',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex w-[300px] flex-col gap-2">
      <Label htmlFor="email-input" required>
        Email Address
      </Label>
      <Input id="email-input" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username" required>
          Username
        </Label>
        <Input id="username" placeholder="Enter username" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input id="password" type="password" placeholder="Enter password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label size="sm">Small Label</Label>
        <Input placeholder="Input field" className="text-sm" />
      </div>
      <div className="flex flex-col gap-2">
        <Label size="default">Default Label</Label>
        <Input placeholder="Input field" />
      </div>
      <div className="flex flex-col gap-2">
        <Label size="lg">Large Label</Label>
        <Input placeholder="Input field" className="text-lg" />
      </div>
    </div>
  ),
};
