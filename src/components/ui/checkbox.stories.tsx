import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox, CheckboxGroup } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ============================================================================
// Basic
// ============================================================================

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms of service',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue',
    required: true,
  },
};

// ============================================================================
// States
// ============================================================================

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

// ============================================================================
// Variants
// ============================================================================

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox variant="default" label="Default variant" defaultChecked />
      <Checkbox variant="destructive" label="Destructive variant" defaultChecked />
      <Checkbox variant="success" label="Success variant" defaultChecked />
    </div>
  ),
};

// ============================================================================
// Sizes
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm" label="Small checkbox" defaultChecked />
      <Checkbox size="default" label="Default checkbox" defaultChecked />
      <Checkbox size="lg" label="Large checkbox" defaultChecked />
    </div>
  ),
};

// ============================================================================
// Controlled
// ============================================================================

function ControlledCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Checkbox
        checked={checked}
        onCheckedChange={(value) => { setChecked(value === true); }}
        label="Controlled checkbox"
      />
      <p className="text-sm text-muted-foreground">
        State: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
      </p>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledCheckbox />,
};

// ============================================================================
// Indeterminate Example (Select All)
// ============================================================================

function SelectAllExample() {
  const [selected, setSelected] = useState<string[]>(['item1']);
  const items = ['item1', 'item2', 'item3'];

  const allSelected = selected.length === items.length;
  const someSelected = selected.length > 0 && !allSelected;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected([...items]);
    }
  };

  const handleSelectItem = (item: string) => {
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  return (
    <div className="space-y-4">
      <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        onCheckedChange={handleSelectAll}
        label="Select all"
      />
      <div className="ml-6 space-y-2">
        {items.map((item) => (
          <Checkbox
            key={item}
            checked={selected.includes(item)}
            onCheckedChange={() => { handleSelectItem(item); }}
            label={`Item ${item.slice(-1)}`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Selected: <strong>{selected.length}</strong> of {items.length}
      </p>
    </div>
  );
}

export const IndeterminateSelectAll: Story = {
  render: () => <SelectAllExample />,
};

// ============================================================================
// Checkbox Group
// ============================================================================

export const Group: Story = {
  render: () => (
    <CheckboxGroup label="Select your interests" orientation="vertical">
      <Checkbox label="Technology" />
      <Checkbox label="Design" />
      <Checkbox label="Business" />
      <Checkbox label="Science" />
    </CheckboxGroup>
  ),
};

export const GroupHorizontal: Story = {
  render: () => (
    <CheckboxGroup label="Select size" orientation="horizontal">
      <Checkbox label="Small" />
      <Checkbox label="Medium" defaultChecked />
      <Checkbox label="Large" />
    </CheckboxGroup>
  ),
};

export const GroupWithDescription: Story = {
  render: () => (
    <CheckboxGroup
      label="Notification preferences"
      description="Choose how you want to receive notifications"
    >
      <Checkbox label="Email" description="Receive notifications via email" />
      <Checkbox label="SMS" description="Receive notifications via text message" />
      <Checkbox label="Push" description="Receive push notifications in app" />
    </CheckboxGroup>
  ),
};

export const GroupWithError: Story = {
  render: () => (
    <CheckboxGroup label="Required selection" error="Please select at least one option" required>
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </CheckboxGroup>
  ),
};

// ============================================================================
// Form Example
// ============================================================================

export const FormExample: Story = {
  render: () => (
    <form className="w-80 space-y-6">
      <CheckboxGroup label="Account settings">
        <Checkbox
          label="Enable two-factor authentication"
          description="Add an extra layer of security to your account"
          defaultChecked
        />
        <Checkbox
          label="Session timeout"
          description="Automatically log out after 30 minutes of inactivity"
        />
        <Checkbox
          label="Login notifications"
          description="Get notified when someone logs into your account"
          defaultChecked
        />
      </CheckboxGroup>

      <div className="border-t border-border pt-4">
        <Checkbox label="I agree to the Terms of Service and Privacy Policy" required />
      </div>
    </form>
  ),
};

// ============================================================================
// Without Label
// ============================================================================

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Checkbox aria-label="Toggle selection" />
      <span className="text-sm text-muted-foreground">
        Checkbox without visible label (has aria-label)
      </span>
    </div>
  ),
};
