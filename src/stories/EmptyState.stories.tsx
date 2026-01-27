import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../components/ui/empty-state';
import {
  FolderOpenIcon,
  DocumentPlusIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  ServerIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const meta = {
  title: 'UI/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    icon: <FolderOpenIcon className="h-12 w-12" />,
    title: 'No items found',
    description: 'Get started by creating your first item.',
  },
};

// With primary action
export const WithPrimaryAction: Story = {
  args: {
    icon: <DocumentPlusIcon className="h-16 w-16" />,
    title: 'No documents yet',
    description: 'Upload your first document or create one from scratch.',
    action: {
      label: 'Create Document',
      onClick: () => {
        alert('Create clicked');
      },
    },
  },
};

// With primary and secondary actions
export const WithSecondaryAction: Story = {
  args: {
    icon: <ServerIcon className="h-16 w-16" />,
    title: 'No servers connected',
    description: 'Connect to an existing server or deploy a new one.',
    action: {
      label: 'Connect Server',
      onClick: () => {
        alert('Connect clicked');
      },
      icon: <span className="mr-2">+</span>,
    },
    secondaryAction: {
      label: 'Learn More',
      onClick: () => {
        alert('Learn more clicked');
      },
      variant: 'outline',
    },
  },
};

// Search results empty state (small)
export const SearchResults: Story = {
  args: {
    icon: <MagnifyingGlassIcon className="h-8 w-8" />,
    title: 'No results found',
    description: 'Try adjusting your search terms.',
    size: 'sm',
    action: {
      label: 'Clear Filters',
      onClick: () => {
        alert('Clear clicked');
      },
      variant: 'ghost',
    },
  },
};

// MCP Specific: No Tools Found
export const NoToolsFound: Story = {
  args: {
    icon: <CommandLineIcon className="h-16 w-16" />,
    title: 'No tools available',
    description:
      'This server has not exposed any tools yet. Check the server configuration or logs.',
    action: {
      label: 'Check Logs',
      onClick: () => {
        alert('Logs clicked');
      },
      variant: 'secondary',
    },
    secondaryAction: {
      label: 'Refresh Tools',
      onClick: () => {
        alert('Refresh clicked');
      },
      variant: 'outline',
    },
  },
};

// MCP Specific: No Resources
export const NoResourcesFound: Story = {
  args: {
    icon: <BeakerIcon className="h-16 w-16" />,
    title: 'No resources detected',
    description: 'Connect a resource provider to start accessing data.',
    children: (
      <div className="mt-4 rounded border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900">
        Tip: You can mount local directories or connect to remote APIs as resources.
      </div>
    ),
    action: {
      label: 'Add Resource',
      onClick: () => {
        alert('Add resource clicked');
      },
    },
  },
};
