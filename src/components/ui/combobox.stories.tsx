import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A searchable select component with keyboard navigation support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    emptyMessage: {
      control: 'text',
      description: 'Message when no results',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox
        value={value}
        onValueChange={setValue}
        options={frameworks}
        placeholder="Select framework..."
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('react');
    return (
      <Combobox
        value={value}
        onValueChange={setValue}
        options={frameworks}
        placeholder="Select framework..."
      />
    );
  },
};

export const CustomEmpty: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox
        value={value}
        onValueChange={setValue}
        options={frameworks}
        placeholder="Select framework..."
        emptyMessage="No framework found."
      />
    );
  },
};

export const ManyOptions: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'es', label: 'Spain' },
      { value: 'it', label: 'Italy' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
    ];
    return (
      <Combobox
        value={value}
        onValueChange={setValue}
        options={countries}
        placeholder="Select country..."
      />
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Framework</label>
          <Combobox
            value={value}
            onValueChange={setValue}
            options={frameworks}
            placeholder="Select framework..."
          />
          <p className="text-muted-foreground text-sm">Choose your preferred framework</p>
        </div>
      </div>
    );
  },
};
