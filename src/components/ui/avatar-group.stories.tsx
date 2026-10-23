import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from './avatar-group';

const team = [
  { name: 'Chris Jazinski' },
  { name: 'Alex Blanc', status: 'online' as const },
  { name: 'Ada Lovelace' },
  { name: 'Grace Hopper' },
  { name: 'Alan Turing' },
  { name: 'Katherine Johnson' },
];

const meta = {
  title: 'UI/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of each avatar (matches Avatar)',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of each avatar',
    },
    maxCount: {
      control: 'number',
      description: 'Maximum avatars shown before the +N overflow indicator',
    },
    overlap: {
      control: 'number',
      description: 'Horizontal overlap between avatars in px (negative stacks)',
    },
    showTooltips: {
      control: 'boolean',
      description: 'Show name tooltip on hover',
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    items: team,
  },
};

export const WithOverflow: Story = {
  args: {
    items: team,
    maxCount: 3,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <AvatarGroup items={team} size="xs" maxCount={4} />
      <AvatarGroup items={team} size="sm" maxCount={4} />
      <AvatarGroup items={team} size="md" maxCount={4} />
      <AvatarGroup items={team} size="lg" maxCount={4} />
      <AvatarGroup items={team} size="xl" maxCount={4} />
      <AvatarGroup items={team} size="2xl" maxCount={4} />
    </div>
  ),
};

export const SquareShape: Story = {
  args: {
    items: team,
    shape: 'square',
    maxCount: 4,
  },
};

export const NoTooltips: Story = {
  args: {
    items: team,
    maxCount: 4,
    showTooltips: false,
  },
};

export const WithImagesAndStatus: Story = {
  args: {
    items: [
      { name: 'Chris Jazinski', src: 'https://i.pravatar.cc/80?img=12', status: 'online' as const },
      { name: 'Alex Blanc', src: 'https://i.pravatar.cc/80?img=47', status: 'away' as const },
      { name: 'Ada Lovelace', src: 'https://i.pravatar.cc/80?img=32' },
      { name: 'Grace Hopper' },
      { name: 'Alan Turing' },
    ],
    maxCount: 3,
  },
};
