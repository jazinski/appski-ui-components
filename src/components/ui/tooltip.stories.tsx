import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';
import { Button } from './button';
import { Info, HelpCircle, Settings, User } from 'lucide-react';

/**
 * Tooltip displays contextual information when hovering or focusing on an element.
 * A lightweight implementation with custom positioning logic.
 *
 * ## Features
 * - **Four Sides**: Top, right, bottom, left positioning
 * - **Interactive Mode**: Allow mouse interaction with tooltip content
 * - **Disabled State**: Conditionally disable tooltip display
 * - **Keyboard Accessible**: Shows on focus for keyboard users
 * - **Customizable**: Custom content and styling
 *
 * ## Usage
 * ```tsx
 * <Tooltip content="This is a helpful tooltip">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A lightweight tooltip component for displaying contextual information on hover or focus.

### Key Features
- Supports four placement sides: top, right, bottom, left
- Interactive mode allows hovering over tooltip content
- Keyboard accessible with focus/blur support
- Disabled state to conditionally show/hide tooltips
- Custom positioning logic without heavy dependencies
- Smooth fade-in and zoom animations

### Accessibility
- Uses proper \`role="tooltip"\` attribute
- Supports keyboard navigation with focus/blur events
- Screen reader friendly with proper ARIA semantics
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display inside the tooltip',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side to display the tooltip',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
    },
    interactive: {
      control: 'boolean',
      description: 'Whether the user can interact with the tooltip content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the tooltip content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tooltip displayed on top.
 */
export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <Button>Hover me</Button>,
    side: 'top',
  },
};

/**
 * Tooltip displayed on the right side.
 */
export const Right: Story = {
  args: {
    content: 'Tooltip on the right',
    children: <Button>Right tooltip</Button>,
    side: 'right',
  },
};

/**
 * Tooltip displayed on the bottom.
 */
export const Bottom: Story = {
  args: {
    content: 'Tooltip on the bottom',
    children: <Button>Bottom tooltip</Button>,
    side: 'bottom',
  },
};

/**
 * Tooltip displayed on the left side.
 */
export const Left: Story = {
  args: {
    content: 'Tooltip on the left',
    children: <Button>Left tooltip</Button>,
    side: 'left',
  },
};

/**
 * Interactive tooltip that allows hovering over the content.
 */
export const Interactive: Story = {
  args: {
    content: (
      <div>
        <p className="font-semibold">Interactive Tooltip</p>
        <p className="mt-1 text-xs">You can hover over this content</p>
        <a href="#" className="mt-2 block text-xs text-blue-400 hover:underline">
          Learn more
        </a>
      </div>
    ),
    children: <Button>Interactive tooltip</Button>,
    side: 'top',
    interactive: true,
  },
};

/**
 * Disabled tooltip (no tooltip shown).
 */
export const Disabled: Story = {
  args: {
    content: 'This tooltip will not appear',
    children: <Button>Disabled tooltip</Button>,
    side: 'top',
    disabled: true,
  },
};

/**
 * Comparison of all four tooltip positions.
 */
export const AllSides: Story = {
  decorators: [
    () => (
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Top</p>
          <Tooltip content="Tooltip on top" side="top">
            <Button>Top</Button>
          </Tooltip>
        </div>

        <div className="flex gap-16">
          <div className="text-center">
            <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Left</p>
            <Tooltip content="Tooltip on left" side="left">
              <Button>Left</Button>
            </Tooltip>
          </div>

          <div className="text-center">
            <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Right</p>
            <Tooltip content="Tooltip on right" side="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">Bottom</p>
          <Tooltip content="Tooltip on bottom" side="bottom">
            <Button>Bottom</Button>
          </Tooltip>
        </div>
      </div>
    ),
  ],
};

/**
 * Real-world example: Help icon with tooltip.
 */
export const HelpIcon: Story = {
  decorators: [
    () => (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Email address</label>
          <Tooltip content="We'll never share your email with anyone else" side="right">
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <HelpCircle className="h-4 w-4" />
            </button>
          </Tooltip>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Password</label>
          <Tooltip
            content="Password must be at least 8 characters and include a number"
            side="right"
          >
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Info className="h-4 w-4" />
            </button>
          </Tooltip>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Username</label>
          <Tooltip content="Your username will be visible to other users" side="right">
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <Info className="h-4 w-4" />
            </button>
          </Tooltip>
        </div>
      </div>
    ),
  ],
};

/**
 * Real-world example: Icon buttons with tooltips.
 */
export const IconButtons: Story = {
  decorators: [
    () => (
      <div className="flex items-center gap-2">
        <Tooltip content="User profile" side="bottom">
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </Tooltip>

        <Tooltip content="Settings" side="bottom">
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </Tooltip>

        <Tooltip content="Help & support" side="bottom">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </Tooltip>

        <Tooltip content="More information" side="bottom">
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </Tooltip>
      </div>
    ),
  ],
};

/**
 * Real-world example: Interactive tooltip with rich content.
 */
export const RichContentTooltip: Story = {
  decorators: [
    () => (
      <div className="flex items-center gap-2">
        <span className="text-sm">Hover for more details</span>
        <Tooltip
          content={
            <div className="max-w-xs">
              <p className="font-semibold">Premium Plan</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>• Unlimited projects</li>
                <li>• 100GB storage</li>
                <li>• Priority support</li>
                <li>• Advanced analytics</li>
              </ul>
              <div className="mt-3 border-t border-slate-200 pt-2 dark:border-slate-700">
                <p className="text-xs text-slate-400">
                  <a href="#" className="text-blue-400 hover:underline">
                    Learn more
                  </a>{' '}
                  about our pricing
                </p>
              </div>
            </div>
          }
          side="right"
          interactive={true}
        >
          <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            <Info className="h-5 w-5" />
          </button>
        </Tooltip>
      </div>
    ),
  ],
};
