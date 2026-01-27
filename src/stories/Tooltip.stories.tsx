import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/ui/tooltip';
import { Button } from '../components/ui/button';
import { InfoIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const meta = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    disabled: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: 'This is a tooltip on the top',
    side: 'top',
    children: <Button>Hover Me (Top)</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'This is a tooltip on the right',
    side: 'right',
    children: <Button variant="outline">Hover Me (Right)</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'This is a tooltip on the bottom',
    side: 'bottom',
    children: <Button variant="secondary">Hover Me (Bottom)</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'This is a tooltip on the left',
    side: 'left',
    children: <Button variant="ghost">Hover Me (Left)</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    content: 'More information about this feature',
    children: (
      <div className="flex items-center text-sm text-slate-500 cursor-help">
        <span>Help</span>
        <QuestionMarkCircleIcon className="ml-1 h-4 w-4" />
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    interactive: true,
    content: (
      <div className="flex flex-col gap-2 p-1">
        <span className="font-medium">Interactive Tooltip</span>
        <span className="text-xs text-muted-foreground">You can click links here</span>
        <a href="#" className="text-xs text-blue-500 hover:underline">Learn more</a>
      </div>
    ),
    children: <Button>Interactive Content</Button>,
  },
};
