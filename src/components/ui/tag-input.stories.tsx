import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagInput } from './tag-input';

const meta: Meta<typeof TagInput> = {
  title: 'Components/TagInput',
  component: TagInput,
  parameters: {
    docs: {
      description: {
        component: `
Tokenized tag entry — the controlled counterpart of Chip. Type, get a
typeahead listbox of suggestions, commit with Enter or comma, remove with the
chip's × or Backspace on an empty input. Everything reduces to
\`onChange(nextTags)\`, so wiring it to state is one line.

Duplicates are rejected by default (polite hint) and \`maxTags\` skips adds
past the cap. A dangling typed tag is committed on blur so nothing is
silently lost.

\`\`\`tsx
import { TagInput } from '@blancski/ui';

<TagInput
  value={labels}
  onChange={setLabels}
  suggestions={['bug', 'feature', 'chore', 'design']}
  maxTags={5}
  labels={{ input: 'Card labels' }}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxTags: { control: 'number' },
    allowDuplicates: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const suggestions = ['bug', 'feature', 'chore', 'design', 'infra', 'research'];

function useTags(initial: string[] = []) {
  const [tags, setTags] = React.useState(initial);
  const onChange = React.useCallback((next: string[]) => { setTags(next); }, []);
  return { tags, onChange };
}

export const Default: Story = {
  name: 'Default',
  render: () => {
    const { tags, onChange } = useTags(['bug']);
    return (
      <div className="max-w-md p-4">
        <TagInput
          value={tags}
          onChange={onChange}
          suggestions={suggestions}
          labels={{ input: 'Card labels' }}
          helperText="Enter or comma to add · Backspace removes the last tag"
        />
      </div>
    );
  },
};

export const WithMaxTags: Story = {
  name: 'Max 3 tags',
  render: () => {
    const { tags, onChange } = useTags(['bug', 'design']);
    return (
      <div className="max-w-md p-4">
        <TagInput
          value={tags}
          onChange={onChange}
          suggestions={suggestions}
          maxTags={3}
          labels={{ input: 'Card labels (max 3)' }}
        />
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          trying to add a fourth shows the cap hint
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  render: () => {
    const { tags } = useTags(['bug', 'chore']);
    return (
      <div className="max-w-md p-4">
        <TagInput value={tags} onChange={() => {}} suggestions={suggestions} disabled />
      </div>
    );
  },
};
