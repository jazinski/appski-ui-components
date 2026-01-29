import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A visual divider that separates content sections horizontally or vertically.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
    },
    variant: {
      control: 'select',
      options: ['default', 'dashed', 'dotted'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center">
      <span>Left content</span>
      <Separator orientation="vertical" className="mx-4" />
      <span>Right content</span>
    </div>
  ),
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
};

export const InText: Story = {
  render: () => (
    <div className="max-w-md space-y-1">
      <h4 className="text-sm font-medium">Radix Primitives</h4>
      <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <div>
        <h3 className="text-lg font-medium">Item 1</h3>
        <p className="text-muted-foreground text-sm">Description for item 1</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Item 2</h3>
        <p className="text-muted-foreground text-sm">Description for item 2</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Item 3</h3>
        <p className="text-muted-foreground text-sm">Description for item 3</p>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6">
      <div>
        <p className="mb-2 text-sm">Default (Solid)</p>
        <Separator variant="default" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dashed</p>
        <Separator variant="dashed" />
      </div>
      <div>
        <p className="mb-2 text-sm">Dotted</p>
        <Separator variant="dotted" />
      </div>
    </div>
  ),
};

export const VerticalVariants: Story = {
  render: () => (
    <div className="flex h-20 items-center gap-8">
      <div className="flex items-center gap-4">
        <span className="text-sm">Default</span>
        <Separator orientation="vertical" variant="default" />
        <span className="text-sm">Content</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Dashed</span>
        <Separator orientation="vertical" variant="dashed" />
        <span className="text-sm">Content</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Dotted</span>
        <Separator orientation="vertical" variant="dotted" />
        <span className="text-sm">Content</span>
      </div>
    </div>
  ),
};
