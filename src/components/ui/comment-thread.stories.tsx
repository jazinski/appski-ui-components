import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CommentThread, type ThreadComment } from './comment-thread';

const chris = { name: 'Chris Jazinski' };
const ola = { name: 'Ola Wiśniewska' };
const alex = { name: 'Alex Blanc' };

const initialComments: ThreadComment[] = [
  {
    id: 'cm1',
    author: ola,
    body: 'KanbanBoard and CommentThread are in — which pieces should we dogfood next?',
    timestamp: '3h ago',
  },
  {
    id: 'cm2',
    author: chris,
    body: 'Board first. If moving cards feels good for a week, the rest of the app will follow.',
    timestamp: '2h ago',
  },
  {
    id: 'cm3',
    author: alex,
    body: 'The right-aligned own-comment bubbles read great in dark mode, by the way.',
    timestamp: '1h ago',
  },
];

const meta: Meta<typeof CommentThread> = {
  title: 'Components/CommentThread',
  component: CommentThread,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A chronological comment list with an inline composer — the core of a kanban
card's detail view. Own comments right-align with a primary-tinted bubble;
Enter submits (Shift+Enter for a newline); async submissions drive the
button's pending state and only clear the composer once they resolve.

\`\`\`tsx
import { CommentThread } from '@blancski/ui';

<CommentThread
  comments={comments}
  currentUser={{ name: 'Chris' }}
  onSubmitComment={async (body) => api.addComment(taskId, body)}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loadingCount: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => <CommentThread {...args} comments={initialComments} currentUser={chris} />,
};

export const AsyncSubmit: Story = {
  name: 'Async submit (pending state)',
  render: (args) => (
    <CommentThread
      {...args}
      comments={initialComments}
      currentUser={chris}
      onSubmitComment={async (body) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('submitted:', body);
      }}
    />
  ),
};

export const Empty: Story = {
  name: 'Empty thread',
  render: (args) => <CommentThread {...args} comments={[]} currentUser={chris} />,
};

export const Loading: Story = {
  name: 'Loading',
  args: { loading: true },
  render: (args) => <CommentThread {...args} comments={[]} currentUser={chris} />,
};

export const ReadOnly: Story = {
  name: 'Read-only (disabled composer)',
  args: { disabled: true },
  render: (args) => <CommentThread {...args} comments={initialComments} currentUser={chris} />,
};

export const Localized: Story = {
  name: 'Localized labels (German)',
  render: (args) => (
    <CommentThread
      {...args}
      comments={initialComments}
      currentUser={chris}
      labels={{
        thread: 'Kommentare',
        composerPlaceholder: 'Kommentar schreiben…',
        submit: 'Senden',
      }}
    />
  ),
};
