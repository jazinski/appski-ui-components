import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './search-bar';
import { useState } from 'react';

const meta: Meta<typeof SearchBar> = {
  title: 'UI/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A search input with debounced input, icons, and keyboard shortcuts (Cmd/Ctrl+K to focus, Escape to clear).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay in milliseconds',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the search bar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <SearchBar value={value} onChange={setValue} placeholder="Search..." />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('React components');
    return (
      <div className="w-[400px]">
        <SearchBar value={value} onChange={setValue} placeholder="Search..." />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState('Loading query');
    return (
      <div className="w-[400px]">
        <SearchBar value={value} onChange={setValue} placeholder="Search..." loading />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <SearchBar value={value} onChange={setValue} placeholder="Search..." disabled />
      </div>
    );
  },
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <SearchBar
          value={value}
          onChange={setValue}
          placeholder="Search developers, audit logs, or system health..."
        />
      </div>
    );
  },
};

export const ShortDebounce: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    return (
      <div className="w-[400px] space-y-4">
        <SearchBar
          value={value}
          onChange={(v) => {
            setValue(v);
            setDebouncedValue(v);
          }}
          placeholder="Type to see debounce (100ms)..."
          debounceMs={100}
        />
        <div className="text-muted-foreground text-sm">
          Debounced value: {debouncedValue || '(empty)'}
        </div>
      </div>
    );
  },
};

export const WithSearchCallback: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [searchedValue, setSearchedValue] = useState('');

    return (
      <div className="w-[400px] space-y-4">
        <SearchBar
          value={value}
          onChange={setValue}
          onSearch={(v) => { setSearchedValue(v); }}
          placeholder="Press Enter to search..."
        />
        <div className="text-muted-foreground text-sm">
          Last searched: {searchedValue || '(none - press Enter)'}
        </div>
      </div>
    );
  },
};

export const FullWidthExample: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[600px]">
        <SearchBar value={value} onChange={setValue} placeholder="Search across all resources..." />
      </div>
    );
  },
};
