import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';
import { Badge } from './badge';
import { Separator } from './separator';

const tags = Array.from({ length: 50 }, (_, i) => `tag-${i + 1}`);

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A custom-styled scrollable region with consistent cross-browser scrollbars.
Built on Radix UI ScrollArea — the native scrollbar is hidden and replaced with
a themeable one.

\`\`\`tsx
import { ScrollArea } from '@appski/ui';

<ScrollArea height="220px">
  <div className="p-4">Long content…</div>
</ScrollArea>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'text' },
    scrollbarOrientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    height: '220px',
  },
  render: (args) => (
    <ScrollArea {...args} className="w-72 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            <div className="rounded px-2 py-1 hover:bg-muted">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  name: 'Horizontal scrollbar',
  render: () => (
    <ScrollArea height="120px" scrollbarOrientation="horizontal" className="w-96 rounded-md border">
      <div className="flex w-max gap-3 p-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  name: 'Both directions',
  render: () => (
    <ScrollArea height="200px" scrollbarOrientation="both" className="w-96 rounded-md border">
      <div className="w-max p-4">
        {Array.from({ length: 12 }, (_, row) => (
          <div key={row} className="flex gap-3 pb-3">
            {tags.slice(0, 10).map((tag) => (
              <Badge key={`${row}-${tag}`} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-start gap-6">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <ScrollArea key={size} height="160px" size={size} className="rounded-md border">
          <div className="p-4 text-sm">
            <p className="mb-2 font-medium">{size}</p>
            {tags.slice(0, 12).map((tag) => (
              <div key={tag} className="rounded px-2 py-1 hover:bg-muted">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      ))}
    </div>
  ),
};
