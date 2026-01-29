import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AppShell } from './app-shell';
import { MainNav } from './main-nav';
import { UserMenu } from './user-menu';
import { Avatar } from './avatar';
import { Badge } from './badge';
import { Button } from './button';
import { FaHome, FaChartBar, FaUsers, FaCog, FaFileAlt, FaBell } from 'react-icons/fa';

const meta = {
  title: 'Components/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'AppShell provides the main application layout structure with a responsive sidebar and content area. It integrates the Sidebar component and provides slots for header, logo, navigation, and user menu.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation items
const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: FaHome, active: true },
  { label: 'Analytics', href: '/analytics', icon: FaChartBar, badge: '3' },
  { label: 'Team', href: '/team', icon: FaUsers },
  { label: 'Documents', href: '/documents', icon: FaFileAlt, badge: 'New' },
  { label: 'Settings', href: '/settings', icon: FaCog },
];

// Sample user props
const userMenuProps = {
  name: 'Sarah Johnson',
  email: 'sarah.j@company.com',
  avatarUrl: 'https://i.pravatar.cc/150?img=5',
};

// Sample content
const SampleContent = () => (
  <div className="space-y-6 p-8">
    <div>
      <h1 className="mb-2 text-3xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-400">Welcome back to your workspace</p>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-2 text-lg font-semibold text-white">Metric {i}</h3>
          <p className="text-3xl font-bold text-blue-400">{i * 1234}</p>
          <p className="mt-2 text-sm text-slate-400">+{i * 12}% from last month</p>
        </div>
      ))}
    </div>
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">Recent Activity</h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-4 border-b border-slate-800 pb-4 last:border-0"
          >
            <Avatar name={`User ${i}`} size="sm" />
            <div className="flex-1">
              <p className="text-white">Activity item {i}</p>
              <p className="text-sm text-slate-400">{i} hours ago</p>
            </div>
            <Badge variant="secondary">Action</Badge>
          </div>
        ))}
      </div>
    </div>
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
        <h3 className="mb-2 font-medium text-white">Content Block {i + 1}</h3>
        <p className="text-slate-400">
          This is additional content to demonstrate scrolling behavior.
        </p>
      </div>
    ))}
  </div>
);

export const Default: Story = {
  args: {},
  render: () => (
    <AppShell
      sidebar={<MainNav items={navItems} />}
      sidebarLogo={
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
            <span className="font-bold text-white">A</span>
          </div>
          <span className="text-lg font-semibold text-white">Appski</span>
        </div>
      }
      sidebarFooter={<UserMenu {...userMenuProps} />}
    >
      <SampleContent />
    </AppShell>
  ),
};

export const WithHeader: Story = {
  args: {},
  render: () => (
    <AppShell
      sidebar={<MainNav items={navItems} />}
      sidebarLogo={
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="h-8 w-8 rounded-lg bg-blue-500" />
          <span className="text-lg font-semibold text-white">Appski</span>
        </div>
      }
      sidebarFooter={<UserMenu {...userMenuProps} />}
      header={
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            <p className="text-sm text-slate-400">Overview of your workspace</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <FaBell className="mr-2" />
              Notifications
            </Button>
            <Button size="sm">New Project</Button>
          </div>
        </div>
      }
    >
      <SampleContent />
    </AppShell>
  ),
};

export const Minimal: Story = {
  args: {},
  render: () => (
    <AppShell sidebar={<MainNav items={navItems.slice(0, 3)} />}>
      <div className="p-8">
        <h1 className="mb-4 text-3xl font-bold text-white">Minimal Layout</h1>
        <p className="text-slate-400">
          This example shows the AppShell with minimal configuration - just the navigation sidebar
          and content area.
        </p>
      </div>
    </AppShell>
  ),
};

export const ControlledSidebar: Story = {
  args: {},
  render: function ControlledSidebarStory() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <div className="fixed top-4 right-4 z-50">
          <Button onClick={() => { setOpen(!open); }} size="sm">
            {open ? 'Close' : 'Open'} Sidebar (Mobile)
          </Button>
        </div>
        <AppShell
          sidebar={<MainNav items={navItems} />}
          sidebarLogo={
            <div className="flex items-center gap-3 px-3 py-4">
              <div className="h-8 w-8 rounded-lg bg-blue-500" />
              <span className="font-semibold text-white">Appski</span>
            </div>
          }
          sidebarFooter={<UserMenu {...userMenuProps} />}
          sidebarOpen={open}
          onSidebarOpenChange={setOpen}
        >
          <div className="p-8">
            <h1 className="mb-4 text-2xl font-bold text-white">Controlled Sidebar</h1>
            <p className="mb-4 text-slate-400">
              The sidebar state is controlled externally. On mobile, use the button in the top-right
              to toggle the sidebar.
            </p>
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
              <p className="text-white">
                Sidebar is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
              </p>
            </div>
          </div>
        </AppShell>
      </>
    );
  },
};

export const WithSections: Story = {
  args: {},
  render: () => {
    const navSections = [
      {
        title: 'Main',
        items: [
          { label: 'Dashboard', href: '/dashboard', icon: FaHome, active: true },
          { label: 'Analytics', href: '/analytics', icon: FaChartBar, badge: '3' },
        ],
      },
      {
        title: 'Workspace',
        items: [
          { label: 'Team', href: '/team', icon: FaUsers },
          { label: 'Documents', href: '/documents', icon: FaFileAlt, badge: 'New' },
        ],
      },
      {
        title: 'Settings',
        items: [{ label: 'Preferences', href: '/settings', icon: FaCog }],
      },
    ];
    return (
      <AppShell
        sidebar={<MainNav items={navSections} />}
        sidebarLogo={
          <div className="flex items-center gap-3 px-3 py-4">
            <div className="h-8 w-8 rounded-lg bg-blue-500" />
            <span className="font-semibold text-white">Appski</span>
          </div>
        }
        sidebarFooter={<UserMenu {...userMenuProps} />}
      >
        <SampleContent />
      </AppShell>
    );
  },
};

export const WithUserStatus: Story = {
  args: {},
  render: () => (
    <AppShell
      sidebar={<MainNav items={navItems} />}
      sidebarLogo={
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="font-semibold text-white">Appski</span>
        </div>
      }
      sidebarFooter={<UserMenu {...userMenuProps} avatarStatus="online" />}
    >
      <SampleContent />
    </AppShell>
  ),
};

export const EmptyState: Story = {
  args: {},
  render: () => (
    <AppShell
      sidebar={<MainNav items={navItems} />}
      sidebarLogo={
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="h-8 w-8 rounded-lg bg-blue-500" />
          <span className="font-semibold text-white">Appski</span>
        </div>
      }
      sidebarFooter={<UserMenu {...userMenuProps} />}
    >
      <div className="flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
          <FaFileAlt className="text-2xl text-slate-400" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-white">No Content Yet</h2>
        <p className="mb-6 max-w-md text-slate-400">
          Get started by creating your first project or uploading some documents.
        </p>
        <Button>Create Project</Button>
      </div>
    </AppShell>
  ),
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <AppShell
      sidebar={<MainNav items={navItems} />}
      sidebarLogo={
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="h-8 w-8 rounded-lg bg-blue-500" />
          <span className="font-semibold text-white">Appski</span>
        </div>
      }
      sidebarFooter={<UserMenu {...userMenuProps} />}
      header={
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          <Button variant="ghost" size="sm">
            <FaBell />
          </Button>
        </div>
      }
    >
      <div className="space-y-4 p-4">
        <div>
          <h1 className="mb-2 text-2xl font-bold text-white">Mobile View</h1>
          <p className="text-slate-400">This story demonstrates the mobile layout</p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
          <p className="text-white">Content optimized for mobile devices</p>
        </div>
      </div>
    </AppShell>
  ),
};
