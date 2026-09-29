import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from './copy-button';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    shortcutHint: {
      control: 'text',
      description: 'Keyboard key hint rendered next to the button (press while focused to copy)',
    },
    showFeedbackTooltip: {
      control: 'boolean',
      description: 'Show a "Copied!" tooltip on success',
    },
    feedbackDuration: {
      control: 'number',
      description: 'Milliseconds the copied feedback stays visible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    value: 'npm install @blancski/ui',
  },
};

export const WithShortcutHint: Story = {
  args: {
    value: 'https://ui.blancski.me/docs/copy-button',
    shortcutHint: 'C',
  },
};

export const WithFeedbackTooltip: Story = {
  args: {
    value: 'export const answer = 42;',
    showFeedbackTooltip: true,
    shortcutHint: 'C',
  },
};

export const Outline: Story = {
  args: {
    value: 'git clone git@github.com:jazinski/blancski-ui-components.git',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    value: 'abc123',
    size: 'sm',
  },
};

export const LargeWithShortcut: Story = {
  args: {
    value: 'BLANCSKI-UI-12',
    size: 'lg',
    shortcutHint: 'K',
  },
};

export const CustomLabel: Story = {
  args: {
    value: 'sk_live_••••••••',
    ariaLabelText: 'Copy API key',
  },
};
