import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A popover component that displays floating content relative to a trigger element.

## Features
- Multiple size variants (sm, default, lg, auto)
- Portal rendering for proper z-index handling
- Keyboard navigation support
- Accessible with ARIA attributes
- Customizable positioning

## Usage

\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent } from '@appski/ui';

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    <p>This is the popover content</p>
  </PopoverContent>
</Popover>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Dimensions</h4>
          <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Small: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          Small Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent size="sm">
        <p className="text-sm">This is a small popover.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const Large: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Large Popover</Button>
      </PopoverTrigger>
      <PopoverContent size="lg">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Large Content Area</h3>
          <p className="text-muted-foreground text-sm">
            This popover has more space for content. You can include longer text, multiple
            paragraphs, or more complex UI elements.
          </p>
          <p className="text-muted-foreground text-sm">
            It adjusts its width to accommodate larger content while maintaining proper spacing and
            readability.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Form</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Account Settings</h4>
            <p className="text-muted-foreground text-sm">Update your account information.</p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <Button className="w-full">Save Changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const AutoWidth: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Auto Width</Button>
      </PopoverTrigger>
      <PopoverContent size="auto">
        <p>This content determines the popover width.</p>
      </PopoverContent>
    </Popover>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm">
            Small
          </Button>
        </PopoverTrigger>
        <PopoverContent size="sm">
          <p className="text-sm">Small size</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Default</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm">Default size</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Large</Button>
        </PopoverTrigger>
        <PopoverContent size="lg">
          <p className="text-sm">Large size</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
