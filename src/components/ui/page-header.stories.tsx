import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './page-header';
import { Button } from './button';
import {
  Users,
  Settings,
  Plus,
  Download,
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
} from 'lucide-react';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'elevated'],
    },
    sticky: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your application',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Users',
    description: 'Manage user accounts and permissions',
    icon: Users,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    title: 'User Details',
    icon: Users,
    breadcrumbs: [
      { label: 'Admin', href: '/admin' },
      { label: 'Users', href: '/admin/users' },
      { label: 'John Doe' },
    ],
  },
};

export const WithActions: Story = {
  args: {
    title: 'Users',
    description: 'Manage user accounts',
    icon: Users,
    actions: (
      <div className="flex gap-2">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>
    ),
  },
};

export const WithStats: Story = {
  args: {
    title: 'Users',
    description: 'Overview of user accounts',
    icon: Users,
    stats: [
      { label: 'Total Users', value: 1429, icon: Users },
      { label: 'Active', value: 1205, icon: CheckCircle, color: 'success' as const },
      { label: 'Pending', value: 89, icon: Clock, color: 'warning' as const },
      { label: 'Suspended', value: 23, icon: AlertCircle, color: 'destructive' as const },
    ],
  },
};

export const FullFeatured: Story = {
  args: {
    title: 'Role Management',
    description: 'Configure roles and permissions for your team',
    icon: Shield,
    breadcrumbs: [
      { label: 'Admin', href: '/admin' },
      { label: 'Security', href: '/admin/security' },
      { label: 'Roles' },
    ],
    actions: (
      <div className="flex gap-2">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>
    ),
    stats: [
      { label: 'Total Roles', value: 12, icon: Shield },
      { label: 'Active Users', value: 847, icon: Users, color: 'success' as const },
      { label: 'Permissions', value: 156 },
    ],
  },
};

export const Sticky: Story = {
  render: () => (
    <div className="min-h-[200vh]">
      <PageHeader
        title="Settings"
        description="Configure your application"
        icon={Settings}
        sticky
        actions={<Button>Save Changes</Button>}
      />
      <div className="p-6">
        <p className="text-muted-foreground">Scroll down to see the sticky header in action.</p>
        <div className="mt-8 space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="bg-card rounded-lg border p-4">
              <p>Content block {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Elevated: Story = {
  args: {
    title: 'Dashboard',
    description: 'Welcome back!',
    variant: 'elevated',
    actions: <Button>Quick Action</Button>,
  },
};

export const MinimalWithBreadcrumbs: Story = {
  args: {
    title: 'Edit Profile',
    breadcrumbs: [
      { label: 'Settings', href: '/settings' },
      { label: 'Profile', href: '/settings/profile' },
      { label: 'Edit' },
    ],
    showHomeInBreadcrumbs: true,
  },
};

export const NoBreadcrumbHome: Story = {
  args: {
    title: 'Edit Profile',
    breadcrumbs: [{ label: 'Settings', href: '/settings' }, { label: 'Profile' }],
    showHomeInBreadcrumbs: false,
  },
};
