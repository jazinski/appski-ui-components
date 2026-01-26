import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    selectSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Priority',
    options: priorityOptions,
    placeholder: 'Select priority',
    helperText: 'Choose the priority level for this task',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    placeholder: 'Select a country',
    error: 'Country selection is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: countryOptions,
    placeholder: 'Cannot select',
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Small Select',
    options: priorityOptions,
    placeholder: 'Select priority',
    selectSize: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Select',
    options: priorityOptions,
    placeholder: 'Select priority',
    selectSize: 'lg',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    label: 'Plan',
    placeholder: 'Select a plan',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise (Coming Soon)', disabled: true },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-6">
      <Select label="Default" options={priorityOptions} placeholder="Select priority" />
      <Select
        label="With Helper"
        options={priorityOptions}
        placeholder="Select"
        helperText="This is helper text"
      />
      <Select
        label="With Error"
        options={priorityOptions}
        placeholder="Select"
        error="This field is required"
      />
      <Select label="Disabled" options={priorityOptions} placeholder="Select" disabled />
      <Select label="Small" options={priorityOptions} placeholder="Select" selectSize="sm" />
      <Select label="Large" options={priorityOptions} placeholder="Select" selectSize="lg" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form
      className="flex w-80 flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Select label="Country" options={countryOptions} placeholder="Select your country" required />
      <Select
        label="Priority"
        options={priorityOptions}
        placeholder="Select priority"
        helperText="How urgent is this?"
      />
      <Select
        label="Category"
        options={[
          { value: 'bug', label: 'Bug Report' },
          { value: 'feature', label: 'Feature Request' },
          { value: 'question', label: 'Question' },
          { value: 'other', label: 'Other' },
        ]}
        placeholder="Select category"
      />
    </form>
  ),
};
