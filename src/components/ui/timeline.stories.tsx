import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertTriangle,
  CheckCircle2,
  GitCommitHorizontal,
  Rocket,
  Server,
  UserPlus,
} from 'lucide-react';

import { Timeline, type TimelineEvent } from './timeline';

function makeDate(daysAgo: number, hours = 9, minutes = 15): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo, hours, minutes);
}

const auditLog: TimelineEvent[] = [
  {
    id: '1',
    title: 'Deployed v0.1.7 to production',
    description: 'household dashboards + bowling tracker rolled out',
    timestamp: makeDate(0, 14, 5),
    tone: 'success',
    icon: Rocket,
    actor: { name: 'Agata' },
  },
  {
    id: '2',
    title: 'Cron job failed: nas-offload',
    description: 'rsync exited 23 — retried at 3:12 AM',
    timestamp: makeDate(0, 3, 12),
    tone: 'danger',
    icon: AlertTriangle,
  },
  {
    id: '3',
    title: 'Chris pushed to master',
    description: 'feat: KanbanBoard drag-and-drop primitives',
    timestamp: makeDate(1, 18, 40),
    actor: { name: 'Chris Jazinski' },
    icon: GitCommitHorizontal,
  },
  {
    id: '4',
    title: 'Backup completed',
    description: 'vault snapshot 41 GB → NAS /mnt/ai-bot/agata/backups',
    timestamp: makeDate(1, 2, 0),
    tone: 'success',
    icon: CheckCircle2,
  },
  {
    id: '5',
    title: 'Alex joined the household workspace',
    timestamp: makeDate(2, 11, 30),
    tone: 'info',
    icon: UserPlus,
    actor: { name: 'Alex Blanc' },
  },
  {
    id: '6',
    title: 'Automower schedule updated',
    description: 'exclusions now Wed/Sun',
    timestamp: makeDate(4, 9, 0),
    icon: Server,
  },
];

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A vertical activity feed: one marker per event (Lucide icon + tone), optional actor avatar and name, timestamp (Date for day grouping or preformatted string), day headers (Today / Yesterday / weekday-date), and paginated loading via load-more button or automatic infinite scroll. Clickable events report the full event object via `onEventClick`. Fully localized via `labels` and `locale`.',
      },
    },
  },
  args: { events: auditLog },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoadMore: Story = {
  args: {
    events: auditLog.slice(0, 3),
    hasMore: true,
    onLoadMore: () => undefined,
  },
};

export const AutoScroll: Story = {
  args: {
    events: auditLog.slice(0, 3),
    hasMore: true,
    loadMoreTrigger: 'auto',
    onLoadMore: () => undefined,
  },
};

export const Loading: Story = {
  args: { events: [], loading: true, loadingCount: 4 },
};

export const Empty: Story = {
  args: { events: [] },
};

export const Clickable: Story = {
  args: {
    events: auditLog.slice(0, 4),
    onEventClick: (event) => {
      console.log('clicked', event.id);
    },
  },
};

export const Ungrouped: Story = {
  args: { events: auditLog.slice(0, 4), groupByDay: false },
};

export const Localized: Story = {
  args: { events: auditLog.slice(0, 4), locale: 'de-DE' },
};
