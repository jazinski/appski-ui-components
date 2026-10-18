import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `
A compact removable token — the visual unit for tags and active filters.
Purely presentational: it reports \`onRemove\` and optional \`onClick\` and stays
out of data management. Rendered as a span wrapper so the label button and
the remove control are siblings (valid HTML even when both are present).

\`\`\`tsx
import { Chip } from '@blancski/ui';

<Chip variant="primary" onRemove={() => removeTag('bug')}>bug</Chip>
<Chip variant="outline" onClick={toggle}>Urgent</Chip>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'destructive', 'info', 'outline'],
    },
    onRemove: { action: 'remove' },
    onClick: { action: 'click' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const labelSuggestions = ['bug', 'feature', 'chore', 'design'];

export const Default: Story = {
  name: 'Default',
  args: { variant: 'primary', children: 'feature' },
};

export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip>default</Chip>
      <Chip variant="primary">primary</Chip>
      <Chip variant="success">success</Chip>
      <Chip variant="warning">warning</Chip>
      <Chip variant="destructive">destructive</Chip>
      <Chip variant="info">info</Chip>
      <Chip variant="outline">outline</Chip>
    </div>
  ),
};

export const Removable: Story = {
  name: 'Removable',
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {labelSuggestions.map((tag) => (
        <Chip key={tag} variant="outline" onRemove={() => {}}>
          {tag}
        </Chip>
      ))}
    </div>
  ),
};

export const Toggleable: Story = {
  name: 'Toggleable',
  render: () => {
    const [selected, setSelected] = React.useState<string[]>(['bug', 'design']);
    return (
      <div className="flex flex-wrap items-center gap-2">
        {labelSuggestions.map((tag) => (
          <Chip
            key={tag}
            variant={selected.includes(tag) ? 'primary' : 'outline'}
            onClick={() => { setSelected((prev) =>
                prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
              ); }
            }
          >
            {tag}
          </Chip>
        ))}
        <p className="mt-2 w-full font-mono text-xs text-muted-foreground">
          selected: {selected.length ? selected.join(', ') : '(none)'}
        </p>
      </div>
    );
  },
};
