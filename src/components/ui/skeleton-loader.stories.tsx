import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoader } from './skeleton-loader';

/**
 * SkeletonLoader provides preset loading states for common UI patterns.
 * It includes variants for cards, lists, tables, stats, and more.
 *
 * ## Features
 * - **Multiple Variants**: Card, list, table, stats, text, metric-card
 * - **Repeatable**: Use `count` prop to render multiple items
 * - **Responsive**: Built-in responsive layouts for grid-based variants
 * - **Consistent**: Matches the design system's skeleton patterns
 *
 * ## Usage
 * ```tsx
 * <SkeletonLoader variant="card" count={3} />
 * ```
 */
const meta: Meta<typeof SkeletonLoader> = {
  title: 'Components/SkeletonLoader',
  component: SkeletonLoader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A comprehensive skeleton loader component that provides preset layouts for common loading states.

### Variants
- **card**: Full card layout with header and content lines
- **list**: List item with avatar, text, and action button
- **table**: Table layout with header and rows
- **stats**: Grid of stat cards
- **text**: Simple text line skeletons
- **metric-card**: Metric card with title, value, icon, and trend

### Key Features
- Multiple preset layouts for common UI patterns
- Repeatable items via count prop
- Responsive grid layouts for stats and metric-card variants
- Consistent with design system skeleton patterns
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'list', 'table', 'stats', 'text', 'metric-card'],
      description: 'Visual variant of the skeleton loader',
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of items to repeat',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Card skeleton with header and content lines.
 * Perfect for loading blog posts, product cards, or content previews.
 */
export const Card: Story = {
  args: {
    variant: 'card',
    count: 1,
  },
};

/**
 * Multiple card skeletons.
 */
export const MultipleCards: Story = {
  args: {
    variant: 'card',
    count: 3,
  },
};

/**
 * List item skeleton with avatar, text, and action.
 * Ideal for loading user lists, comment threads, or activity feeds.
 */
export const List: Story = {
  args: {
    variant: 'list',
    count: 1,
  },
};

/**
 * Multiple list item skeletons.
 */
export const MultipleListItems: Story = {
  args: {
    variant: 'list',
    count: 5,
  },
};

/**
 * Table skeleton with header and rows.
 * Use for loading data tables or grid layouts.
 */
export const Table: Story = {
  args: {
    variant: 'table',
    count: 5,
  },
};

/**
 * Stats cards skeleton in a responsive grid.
 * Great for loading dashboard statistics or KPI cards.
 */
export const Stats: Story = {
  args: {
    variant: 'stats',
    count: 4,
  },
};

/**
 * Simple text line skeletons.
 * Useful for loading paragraphs, descriptions, or text content.
 */
export const Text: Story = {
  args: {
    variant: 'text',
    count: 4,
  },
};

/**
 * Multiple text line skeletons (paragraph).
 */
export const TextParagraph: Story = {
  args: {
    variant: 'text',
    count: 8,
  },
};

/**
 * Metric cards skeleton with title, value, icon, and trend.
 * Perfect for loading analytics cards or metric dashboards.
 */
export const MetricCard: Story = {
  args: {
    variant: 'metric-card',
    count: 4,
  },
};

/**
 * Comparison of all skeleton loader variants.
 */
export const AllVariants: Story = {
  decorators: [
    () => (
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">Card</h3>
          <SkeletonLoader variant="card" count={2} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">List</h3>
          <SkeletonLoader variant="list" count={3} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Table</h3>
          <SkeletonLoader variant="table" count={3} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Stats</h3>
          <SkeletonLoader variant="stats" count={4} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Text</h3>
          <SkeletonLoader variant="text" count={5} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Metric Card</h3>
          <SkeletonLoader variant="metric-card" count={4} />
        </div>
      </div>
    ),
  ],
};

/**
 * Real-world example: Loading blog posts.
 */
export const LoadingBlogPosts: Story = {
  decorators: [
    () => (
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 space-y-2">
          <h1 className="text-3xl font-bold">Latest Articles</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Discover our latest thoughts and insights
          </p>
        </div>
        <SkeletonLoader variant="card" count={3} />
      </div>
    ),
  ],
};

/**
 * Real-world example: Loading dashboard with metrics and table.
 */
export const LoadingDashboard: Story = {
  decorators: [
    () => (
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Loading your latest metrics...
          </p>
        </div>

        <SkeletonLoader variant="metric-card" count={4} />

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
          <SkeletonLoader variant="table" count={5} />
        </div>
      </div>
    ),
  ],
};

/**
 * Real-world example: Loading user list with avatars.
 */
export const LoadingUserList: Story = {
  decorators: [
    () => (
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Team Members</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">Loading team directory...</p>
          </div>
        </div>
        <SkeletonLoader variant="list" count={6} />
      </div>
    ),
  ],
};
