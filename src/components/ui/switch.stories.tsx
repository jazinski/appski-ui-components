import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FaWifi, FaBluetooth, FaPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { Switch, SwitchGroup } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    checked: {
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
type Story = StoryObj<typeof Switch>;

// ============================================================================
// Basic
// ============================================================================

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Airplane Mode',
    description: 'Disable all wireless connections',
  },
};

export const Required: Story = {
  args: {
    label: 'Accept terms',
    required: true,
  },
};

export const LabelLeft: Story = {
  args: {
    label: 'Dark mode',
    labelPosition: 'left',
  },
};

// ============================================================================
// States
// ============================================================================

export const Checked: Story = {
  args: {
    label: 'Enabled',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
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
      <Switch variant="default" label="Default variant" defaultChecked />
      <Switch variant="success" label="Success variant" defaultChecked />
      <Switch variant="warning" label="Warning variant" defaultChecked />
      <Switch variant="destructive" label="Destructive variant" defaultChecked />
    </div>
  ),
};

// ============================================================================
// Sizes
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small switch" defaultChecked />
      <Switch size="default" label="Default switch" defaultChecked />
      <Switch size="lg" label="Large switch" defaultChecked />
    </div>
  ),
};

// ============================================================================
// Controlled
// ============================================================================

function ControlledSwitch() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      <Switch checked={checked} onCheckedChange={setChecked} label="Controlled switch" />
      <p className="text-sm text-muted-foreground">
        State: <strong>{checked ? 'On' : 'Off'}</strong>
      </p>
      <button className="text-sm text-primary underline" onClick={() => setChecked(!checked)}>
        Toggle from outside
      </button>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
};

// ============================================================================
// Switch Group
// ============================================================================

export const Group: Story = {
  render: () => (
    <SwitchGroup
      label="Notification Settings"
      description="Choose how you want to receive notifications"
    >
      <Switch label="Email notifications" description="Receive notifications via email" />
      <Switch
        label="Push notifications"
        description="Receive push notifications in app"
        defaultChecked
      />
      <Switch label="SMS notifications" description="Receive notifications via text message" />
    </SwitchGroup>
  ),
};

// ============================================================================
// Settings Panel Example
// ============================================================================

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-80 space-y-6 rounded-lg border border-border p-6">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your preferences</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Dark Mode</p>
            <p className="text-xs text-muted-foreground">Toggle dark theme</p>
          </div>
          <Switch aria-label="Dark mode" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Notifications</p>
            <p className="text-xs text-muted-foreground">Enable push notifications</p>
          </div>
          <Switch aria-label="Notifications" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Auto-save</p>
            <p className="text-xs text-muted-foreground">Automatically save changes</p>
          </div>
          <Switch aria-label="Auto-save" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Analytics</p>
            <p className="text-xs text-muted-foreground">Share usage data</p>
          </div>
          <Switch aria-label="Analytics" variant="warning" />
        </div>
      </div>
    </div>
  ),
};

// ============================================================================
// Without Label
// ============================================================================

export const WithoutLabel: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Switch aria-label="Toggle feature" />
      <span className="text-sm text-muted-foreground">
        Switch without visible label (has aria-label)
      </span>
    </div>
  ),
};

// ============================================================================
// Form Example
// ============================================================================

export const FormExample: Story = {
  render: () => (
    <form
      className="w-80 space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log('Form submitted:', Object.fromEntries(formData));
        alert('Check console for form data');
      }}
    >
      <SwitchGroup label="Account Preferences">
        <Switch
          name="marketing"
          label="Marketing emails"
          description="Receive emails about new products"
        />
        <Switch
          name="updates"
          label="Product updates"
          description="Get notified about new features"
          defaultChecked
        />
        <Switch
          name="security"
          label="Security alerts"
          description="Important security notifications"
          defaultChecked
        />
      </SwitchGroup>

      <button
        type="submit"
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Save Preferences
      </button>
    </form>
  ),
};

// ============================================================================
// Interactive Demo
// ============================================================================

function InteractiveDemo() {
  const [features, setFeatures] = useState({
    wifi: true,
    bluetooth: false,
    airplane: false,
    location: true,
  });

  const toggleFeature = (feature: keyof typeof features) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  return (
    <div className="w-72 space-y-4 rounded-lg border border-border p-4">
      <h3 className="font-medium">Quick Settings</h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <div className="flex items-center gap-2">
            <FaWifi className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Wi-Fi</span>
          </div>
          <Switch
            checked={features.wifi}
            onCheckedChange={() => toggleFeature('wifi')}
            aria-label="Wi-Fi"
            variant="success"
            size="sm"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <div className="flex items-center gap-2">
            <FaBluetooth className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Bluetooth</span>
          </div>
          <Switch
            checked={features.bluetooth}
            onCheckedChange={() => toggleFeature('bluetooth')}
            aria-label="Bluetooth"
            size="sm"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <div className="flex items-center gap-2">
            <FaPlane className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Airplane Mode</span>
          </div>
          <Switch
            checked={features.airplane}
            onCheckedChange={() => toggleFeature('airplane')}
            aria-label="Airplane Mode"
            variant="warning"
            size="sm"
          />
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Location</span>
          </div>
          <Switch
            checked={features.location}
            onCheckedChange={() => toggleFeature('location')}
            aria-label="Location"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

export const InteractiveQuickSettings: Story = {
  render: () => <InteractiveDemo />,
};
