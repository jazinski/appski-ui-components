import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LoadingButton } from './loading-button';
import { Mail, Download as DownloadIcon, Trash2, Save } from 'lucide-react';

const meta: Meta<typeof LoadingButton> = {
  title: 'Components/LoadingButton',
  component: LoadingButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A convenience wrapper around Button that simplifies loading state management.
Provides a more intuitive API by using \`loading\` instead of \`isLoading\`.

## Features

- **Simplified API**: Uses \`loading\` prop instead of \`isLoading\`
- **Auto-disabled**: Automatically disables the button when loading
- **Custom Loading Text**: Optional loading text override
- **All Button Props**: Supports all Button component props (variants, sizes, icons)
- **Spinner Animation**: Shows loading spinner automatically

## Usage

\`\`\`tsx
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';

function MyComponent() {
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await saveData();
    setSaving(false);
  };

  return (
    <LoadingButton loading={saving} onClick={handleSave}>
      Save
    </LoadingButton>
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    loadingText: {
      control: 'text',
      description: 'Text to display when loading',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Button size',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for interactive stories
function InteractiveButton(props: Partial<React.ComponentProps<typeof LoadingButton>>) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); }, 2000);
  };

  return (
    <LoadingButton loading={loading} onClick={handleClick} {...props}>
      {props.children || 'Click Me'}
    </LoadingButton>
  );
}

/**
 * Default loading button.
 * Basic usage with loading state.
 */
export const Default: Story = {
  render: () => <InteractiveButton>Save Changes</InteractiveButton>,
};

/**
 * With custom loading text.
 * Shows custom message during loading.
 */
export const CustomLoadingText: Story = {
  render: () => <InteractiveButton loadingText="Saving...">Save</InteractiveButton>,
};

/**
 * Destructive variant.
 * Red button for destructive actions.
 */
export const Destructive: Story = {
  render: () => (
    <InteractiveButton variant="destructive" loadingText="Deleting...">
      Delete
    </InteractiveButton>
  ),
};

/**
 * Outline variant.
 * Button with outline styling.
 */
export const Outline: Story = {
  render: () => (
    <InteractiveButton variant="outline" loadingText="Processing...">
      Submit
    </InteractiveButton>
  ),
};

/**
 * Secondary variant.
 * Secondary button styling.
 */
export const Secondary: Story = {
  render: () => (
    <InteractiveButton variant="secondary" loadingText="Loading...">
      Load More
    </InteractiveButton>
  ),
};

/**
 * Ghost variant.
 * Minimal button styling.
 */
export const Ghost: Story = {
  render: () => (
    <InteractiveButton variant="ghost" loadingText="Refreshing...">
      Refresh
    </InteractiveButton>
  ),
};

/**
 * Small size.
 * Compact button size.
 */
export const Small: Story = {
  render: () => (
    <InteractiveButton size="sm" loadingText="Saving...">
      Save
    </InteractiveButton>
  ),
};

/**
 * Large size.
 * Larger button size.
 */
export const Large: Story = {
  render: () => (
    <InteractiveButton size="lg" loadingText="Submitting...">
      Submit Form
    </InteractiveButton>
  ),
};

/**
 * With icon.
 * Button with leading icon.
 */
export const WithIcon: Story = {
  render: () => (
    <InteractiveButton loadingText="Sending...">
      <Mail className="mr-2 h-4 w-4" />
      Send Email
    </InteractiveButton>
  ),
};

/**
 * Download button.
 * Button with download icon.
 */
export const DownloadButton: Story = {
  render: () => (
    <InteractiveButton loadingText="Downloading...">
      <DownloadIcon className="mr-2 h-4 w-4" />
      Download
    </InteractiveButton>
  ),
};

/**
 * Save button.
 * Button with save icon.
 */
export const SaveButton: Story = {
  render: () => (
    <InteractiveButton loadingText="Saving...">
      <Save className="mr-2 h-4 w-4" />
      Save Changes
    </InteractiveButton>
  ),
};

/**
 * Delete button.
 * Destructive button with trash icon.
 */
export const Delete: Story = {
  render: () => (
    <InteractiveButton variant="destructive" loadingText="Deleting...">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Item
    </InteractiveButton>
  ),
};

/**
 * Loading state only.
 * Shows button in loading state.
 */
export const LoadingState: Story = {
  args: {
    loading: true,
    loadingText: 'Processing...',
    children: 'Submit',
  },
};

/**
 * All variants.
 * Shows all button variants side by side.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <InteractiveButton variant="default">Default</InteractiveButton>
      <InteractiveButton variant="destructive">Destructive</InteractiveButton>
      <InteractiveButton variant="outline">Outline</InteractiveButton>
      <InteractiveButton variant="secondary">Secondary</InteractiveButton>
      <InteractiveButton variant="ghost">Ghost</InteractiveButton>
    </div>
  ),
};

/**
 * All sizes.
 * Shows all button sizes side by side.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <InteractiveButton size="sm">Small</InteractiveButton>
      <InteractiveButton size="default">Default</InteractiveButton>
      <InteractiveButton size="lg">Large</InteractiveButton>
    </div>
  ),
};

/**
 * Real-world example: Form submission.
 * Demonstrates typical form submit button usage.
 */
export const FormSubmit: Story = {
  render: () => {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
      setSubmitting(true);
      setSuccess(false);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setTimeout(() => { setSuccess(false); }, 2000);
      }, 2000);
    };

    return (
      <div className="space-y-4">
        <div className="border-border rounded-lg border bg-white p-6 dark:bg-slate-900">
          <h3 className="mb-4 text-lg font-semibold">Contact Form</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="border-input w-full rounded-md border px-3 py-2"
              disabled={submitting}
            />
            <input
              type="email"
              placeholder="Email"
              className="border-input w-full rounded-md border px-3 py-2"
              disabled={submitting}
            />
            <textarea
              placeholder="Message"
              className="border-input w-full rounded-md border px-3 py-2"
              rows={3}
              disabled={submitting}
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            {success && <span className="text-sm text-emerald-600">Form submitted!</span>}
            <div className="ml-auto">
              <LoadingButton
                loading={submitting}
                loadingText="Submitting..."
                onClick={handleSubmit}
              >
                Submit
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
