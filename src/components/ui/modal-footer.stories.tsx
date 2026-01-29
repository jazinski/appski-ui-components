import type { Meta, StoryObj } from '@storybook/react';
import { ModalFooter } from './modal-footer';
import { fn } from '@storybook/test';
import { useState } from 'react';

/**
 * ModalFooter provides a standardized footer layout for modals with cancel and confirm buttons.
 * It supports loading states, custom variants, and additional content.
 *
 * ## Features
 * - **Standard Layout**: Consistent footer with cancel/confirm buttons
 * - **Loading States**: Built-in loading state support with custom text
 * - **Button Variants**: Customize both cancel and confirm button variants
 * - **Custom Content**: Add additional content before buttons
 * - **Form Integration**: Can work as form submit button
 * - **Flexible Configuration**: Hide cancel button, customize text, variants
 *
 * ## Usage
 * ```tsx
 * <ModalFooter
 *   onCancel={handleClose}
 *   onConfirm={handleSave}
 *   confirmText="Save Changes"
 *   confirmLoading={isSaving}
 * />
 * ```
 */
const meta: Meta<typeof ModalFooter> = {
  title: 'Components/ModalFooter',
  component: ModalFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A standardized footer component for modals that provides consistent styling and behavior for cancel/confirm actions.

### Key Features
- Standard cancel and confirm button layout
- Loading state with custom loading text
- Support for different button variants
- Can render additional content alongside buttons
- Hide cancel button option
- Form submit integration
- Fully customizable text and styling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onCancel: { action: 'cancelled', description: 'Callback when cancel button is clicked' },
    onConfirm: { action: 'confirmed', description: 'Callback when confirm button is clicked' },
    cancelText: { control: 'text', description: 'Text for the cancel button' },
    confirmText: { control: 'text', description: 'Text for the confirm button' },
    confirmDisabled: { control: 'boolean', description: 'Whether the confirm button is disabled' },
    confirmLoading: {
      control: 'boolean',
      description: 'Whether the confirm button is in loading state',
    },
    confirmLoadingText: {
      control: 'text',
      description: 'Loading text to show when confirmLoading is true',
    },
    confirmVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Variant for the confirm button',
    },
    cancelVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Variant for the cancel button',
    },
    hideCancelButton: { control: 'boolean', description: 'Hide the cancel button' },
    confirmType: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'Type for the confirm button',
    },
  },
  args: {
    onCancel: fn(),
    onConfirm: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default modal footer with standard cancel and confirm buttons.
 */
export const Default: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            This is the modal content area. The footer appears below with standard cancel and
            confirm buttons.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer with loading state on the confirm button.
 */
export const WithLoading: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Save Changes',
    confirmLoading: true,
    confirmLoadingText: 'Saving...',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Save Changes</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            The footer shows a loading state while the operation is in progress.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Destructive action with red confirm button (e.g., delete, remove).
 */
export const Destructive: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Delete',
    confirmVariant: 'destructive',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Delete Item</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer with secondary variant confirm button.
 */
export const SecondaryAction: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Apply',
    confirmVariant: 'secondary',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Apply Settings</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Using secondary variant for a less prominent action.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer without cancel button (single action).
 */
export const WithoutCancelButton: Story = {
  args: {
    confirmText: 'Got it',
    hideCancelButton: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Information</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            This is an informational modal that only needs a single action button.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer with custom text for both buttons.
 */
export const CustomButtonText: Story = {
  args: {
    cancelText: 'Go Back',
    confirmText: 'Continue',
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Continue Setup</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Custom button text to better match your use case.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer with additional content (e.g., help text).
 */
export const WithCustomContent: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Save',
    children: (
      <span className="text-sm text-slate-600 dark:text-slate-400">
        Changes will be saved immediately
      </span>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
        <div className="p-6">
          <h2 className="text-lg font-semibold">Save Settings</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            The footer includes additional help text alongside the buttons.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Modal footer as form submit button.
 */
export const FormSubmit: Story = {
  args: {
    cancelText: 'Cancel',
    confirmText: 'Submit',
    confirmType: 'submit',
  },
  decorators: [
    (Story) => {
      const [submitted, setSubmitted] = useState(false);

      return (
        <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 2000);
            }}
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold">Create Account</h2>
              <div className="mt-4 space-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              {submitted && (
                <div className="mt-3 rounded-md bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Form submitted successfully!
                </div>
              )}
            </div>
            <Story />
          </form>
        </div>
      );
    },
  ],
};

/**
 * Real-world example: Delete confirmation modal with loading state.
 */
export const DeleteConfirmation: Story = {
  decorators: [
    (Story) => {
      const [isDeleting, setIsDeleting] = useState(false);

      const handleDelete = () => {
        setIsDeleting(true);
        setTimeout(() => setIsDeleting(false), 2000);
      };

      return (
        <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">Delete Project</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Are you sure you want to delete "My Project"? This action cannot be undone and will
              permanently remove:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <li>All project files and data</li>
              <li>Team member access</li>
              <li>Deployment history</li>
              <li>Analytics and logs</li>
            </ul>
          </div>
          <ModalFooter
            cancelText="Cancel"
            confirmText="Delete Project"
            confirmVariant="destructive"
            confirmLoading={isDeleting}
            confirmLoadingText="Deleting..."
            onCancel={() => alert('Cancelled')}
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  ],
};

/**
 * Real-world example: Save changes modal with unsaved changes indicator.
 */
export const SaveChanges: Story = {
  decorators: [
    (Story) => {
      const [isSaving, setIsSaving] = useState(false);

      const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 2000);
      };

      return (
        <div className="w-[600px] rounded-lg border border-slate-200 dark:border-slate-800">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Edit Profile</h2>
              <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                Unsaved changes
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  defaultValue="John Doe"
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                />
              </div>
              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  defaultValue="Software developer passionate about building great products."
                  className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800"
                />
              </div>
            </div>
          </div>
          <ModalFooter
            cancelText="Discard"
            confirmText="Save Changes"
            confirmLoading={isSaving}
            confirmLoadingText="Saving..."
            onCancel={() => alert('Changes discarded')}
            onConfirm={handleSave}
          >
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Last saved 5 minutes ago
            </span>
          </ModalFooter>
        </div>
      );
    },
  ],
};
