import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
} from './hover-card';
import { Avatar } from './avatar';
import { Badge } from './badge';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A hover card component that shows rich preview content when the trigger is hovered.
Built on Radix UI HoverCard with graceful degradation on touch devices.

\`\`\`tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@blancski/ui';

<HoverCard>
  <HoverCardTrigger>@chris</HoverCardTrigger>
  <HoverCardContent>Rich preview</HoverCardContent>
</HoverCard>
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
  name: 'Default',
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer font-medium underline underline-offset-4">
        @chris
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardHeader>
          <HoverCardTitle>Chris Jazinski</HoverCardTitle>
          <HoverCardDescription>Homelab self-hoster. Runs Agata.</HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProfilePreview: Story = {
  name: 'Profile preview',
  render: () => (
    <HoverCard openDelay={100} closeDelay={200}>
      <HoverCardTrigger className="cursor-pointer font-medium underline underline-offset-4">
        Alejandra Blanc
      </HoverCardTrigger>
      <HoverCardContent size="lg" align="start">
        <div className="flex items-start gap-3">
          <Avatar
            src="https://i.pravatar.cc/64?img=5"
            alt="Alejandra Blanc"
            size="xl"
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <HoverCardTitle>Alejandra Blanc</HoverCardTitle>
            <HoverCardDescription>
              Partner. Interested in the plant inventory and casita projects.
            </HoverCardDescription>
            <HoverCardFooter className="gap-2 pt-2">
              <Badge>Member</Badge>
              <span className="text-xs text-muted-foreground">Joined 2026</span>
            </HoverCardFooter>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => (
    <div className="flex items-center gap-8">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <HoverCard key={size}>
          <HoverCardTrigger className="cursor-pointer font-medium underline underline-offset-4">
            {size === 'default' ? 'default' : size}
          </HoverCardTrigger>
          <HoverCardContent size={size}>
            <HoverCardHeader>
              <HoverCardTitle>Size: {size}</HoverCardTitle>
              <HoverCardDescription>
                {size === 'sm' && 'w-52 — compact previews.'}
                {size === 'default' && 'w-64 — the default width.'}
                {size === 'lg' && 'w-96 — rich previews with media.'}
              </HoverCardDescription>
            </HoverCardHeader>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const WithLinkTrigger: Story = {
  name: 'Link trigger',
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-primary underline underline-offset-4"
        >
          github.com/jazinski
        </a>
      </HoverCardTrigger>
      <HoverCardContent align="start">
        <HoverCardHeader>
          <HoverCardTitle>jazinski on GitHub</HoverCardTitle>
          <HoverCardDescription>Personal projects and homelab infrastructure.</HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const CustomTiming: Story = {
  name: 'Custom open/close delay',
  render: () => (
    <HoverCard openDelay={500} closeDelay={500}>
      <HoverCardTrigger className="cursor-pointer font-medium underline underline-offset-4">
        Slow card (500ms delays)
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardHeader>
          <HoverCardTitle>Deliberate timing</HoverCardTitle>
          <HoverCardDescription>
            openDelay/closeDelay avoid accidental pop-ups in dense UIs.
          </HoverCardDescription>
        </HoverCardHeader>
      </HoverCardContent>
    </HoverCard>
  ),
};
