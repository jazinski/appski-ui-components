import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    inputSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    defaultValue: 'ab',
    error: 'Username must be at least 3 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    inputSize: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    inputSize: 'lg',
  },
};

export const FileInput: Story = {
  args: {
    label: 'Upload File',
    type: 'file',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <Input label="Default" placeholder="Default input" />
      <Input label="With Helper" placeholder="Enter value" helperText="This is helper text" />
      <Input label="With Error" placeholder="Invalid input" error="This field is required" />
      <Input label="Disabled" placeholder="Disabled" disabled />
      <Input label="Small" placeholder="Small input" inputSize="sm" />
      <Input label="Large" placeholder="Large input" inputSize="lg" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="flex w-80 flex-col gap-4" onSubmit={(e) => { e.preventDefault(); }}>
      <Input label="First Name" placeholder="John" required />
      <Input label="Last Name" placeholder="Doe" required />
      <Input label="Email" type="email" placeholder="john@example.com" required />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Must be at least 8 characters"
        required
      />
    </form>
  ),
};
