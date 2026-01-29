import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './empty-state';
import {
  Database,
  Search,
  AlertTriangle,
  Lock,
  Folder,
  FileText,
  Package,
  Users,
  Plus,
} from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible empty state component for displaying when there's no data, no search results, errors, or permission issues.

## Features
- Multiple semantic variants (no-data, no-results, error, no-permission)
- Customizable icon, title, and description
- Optional primary and secondary actions
- Three size variants (sm, md, lg)
- Full dark mode support
- Accessibility built-in (role="status", aria-live="polite")

## Variants

### \`no-data\` (default)
Use when the user hasn't created any content yet. Shows neutral gray colors.

### \`no-results\`
Use when a search or filter returns no results. Shows blue accent colors.

### \`error\`
Use when an error occurs. Shows red/error colors.

### \`no-permission\`
Use when the user lacks access. Shows amber/warning colors.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'no-data', 'no-results', 'error', 'no-permission'],
      description: 'Visual variant for different empty state contexts',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the empty state',
    },
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    description: {
      control: 'text',
      description: 'Descriptive text below the title',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// Basic variants
export const NoData: Story = {
  args: {
    variant: 'no-data',
    icon: <Database className="h-16 w-16" />,
    title: 'No data yet',
    description: 'Get started by creating your first item',
    action: {
      label: 'Create Item',
      onClick: () => { alert('Create clicked'); },
      icon: <Plus className="h-4 w-4" />,
    },
  },
};

export const NoResults: Story = {
  args: {
    variant: 'no-results',
    icon: <Search className="h-16 w-16" />,
    title: 'No results found',
    description: 'Try adjusting your search or filters',
    action: {
      label: 'Clear Filters',
      onClick: () => { alert('Clear clicked'); },
      variant: 'ghost',
    },
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    icon: <AlertTriangle className="h-16 w-16" />,
    title: 'Something went wrong',
    description: 'We encountered an error loading your data',
    action: {
      label: 'Try Again',
      onClick: () => { alert('Retry clicked'); },
    },
    secondaryAction: {
      label: 'Contact Support',
      onClick: () => { alert('Support clicked'); },
      variant: 'outline',
    },
  },
};

export const NoPermission: Story = {
  args: {
    variant: 'no-permission',
    icon: <Lock className="h-16 w-16" />,
    title: 'Access denied',
    description: "You don't have permission to view this content",
    action: {
      label: 'Request Access',
      onClick: () => { alert('Request clicked'); },
    },
  },
};

// Size variants
export const SmallSize: Story = {
  args: {
    variant: 'no-results',
    icon: <Search className="h-12 w-12" />,
    title: 'No matches',
    description: 'Try a different search term',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    variant: 'no-data',
    icon: <Folder className="h-16 w-16" />,
    title: 'No projects yet',
    description: 'Create your first project to get started',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    variant: 'no-data',
    icon: <FileText className="h-20 w-20" />,
    title: 'No documents',
    description: 'Upload your first document to begin',
    size: 'lg',
    action: {
      label: 'Upload Document',
      onClick: () => { alert('Upload clicked'); },
    },
  },
};

// Real-world examples
export const EmptyTable: Story = {
  args: {
    variant: 'no-data',
    icon: <Package className="h-16 w-16" />,
    title: 'No orders yet',
    description: 'Orders will appear here once customers start purchasing',
    action: {
      label: 'View Products',
      onClick: () => { alert('View products clicked'); },
    },
  },
};

export const SearchResults: Story = {
  args: {
    variant: 'no-results',
    icon: <Search className="h-14 w-14" />,
    title: 'No users found',
    description: 'We couldn\'t find any users matching "john.doe@example.com"',
    action: {
      label: 'Clear Search',
      onClick: () => { alert('Clear search clicked'); },
      variant: 'ghost',
    },
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'error',
    icon: <AlertTriangle className="h-16 w-16" />,
    title: 'Failed to load data',
    description: 'There was a problem loading your dashboard data',
    action: {
      label: 'Reload',
      onClick: () => { alert('Reload clicked'); },
    },
    secondaryAction: {
      label: 'Go Home',
      onClick: () => { alert('Home clicked'); },
      variant: 'outline',
    },
  },
};

export const PermissionDenied: Story = {
  args: {
    variant: 'no-permission',
    icon: <Lock className="h-16 w-16" />,
    title: 'Team access required',
    description: 'Upgrade to a team plan to access shared workspaces',
    action: {
      label: 'View Plans',
      onClick: () => { alert('View plans clicked'); },
    },
    secondaryAction: {
      label: 'Learn More',
      onClick: () => { alert('Learn more clicked'); },
      variant: 'outline',
    },
  },
};

// Minimal examples (no actions)
export const MinimalNoData: Story = {
  args: {
    variant: 'no-data',
    icon: <Users className="h-16 w-16" />,
    title: 'No team members',
    description: 'Invite people to your team to collaborate',
  },
};

export const TitleOnly: Story = {
  args: {
    variant: 'no-results',
    icon: <Search className="h-16 w-16" />,
    title: 'No results',
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    variant: 'no-data',
    title: 'No notifications',
    description: "You're all caught up!",
  },
};

// Custom content
export const WithCustomContent: Story = {
  args: {
    variant: 'no-data',
    icon: <FileText className="h-16 w-16" />,
    title: 'No templates',
    description: 'Start from scratch or browse our template gallery',
    children: (
      <div className="mt-4 flex flex-col gap-2 text-sm">
        <a href="#" className="text-primary hover:underline">
          Browse Templates
        </a>
        <a href="#" className="text-primary hover:underline">
          View Documentation
        </a>
      </div>
    ),
  },
};
