import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';
import { MainNav, type NavItem, type NavSection } from './main-nav';
import { UserMenu } from './user-menu';
import { FaHome, FaUsers, FaChartBar, FaCog, FaInbox, FaFolder, FaCalendar } from 'react-icons/fa';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A navigation sidebar with logo, main content, and footer. Responsive: fixed width on desktop, slide-out drawer on mobile.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logo: {
      control: false,
      description: 'Logo content (typically an image or text)',
    },
    children: {
      control: false,
      description: 'Main navigation content',
    },
    footer: {
      control: false,
      description: 'Footer content (typically UserMenu)',
    },
    open: {
      control: 'boolean',
      description: 'Whether the sidebar is open (mobile only)',
    },
    width: {
      control: 'text',
      description: 'Width of the sidebar',
    },
    showOverlay: {
      control: 'boolean',
      description: 'Show mobile overlay when open',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button on mobile',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation items
const navItems: NavItem[] = [
  { label: 'Home', icon: FaHome, href: '/', active: true },
  { label: 'Team', icon: FaUsers, href: '/team', badge: '5' },
  { label: 'Analytics', icon: FaChartBar, href: '/analytics' },
  { label: 'Inbox', icon: FaInbox, href: '/inbox', badge: '12' },
  { label: 'Projects', icon: FaFolder, href: '/projects' },
  { label: 'Calendar', icon: FaCalendar, href: '/calendar' },
  { label: 'Settings', icon: FaCog, href: '/settings' },
];

const navSections: NavSection[] = [
  {
    title: 'Main',
    items: [
      { label: 'Home', icon: FaHome, href: '/', active: true },
      { label: 'Team', icon: FaUsers, href: '/team', badge: '5' },
      { label: 'Analytics', icon: FaChartBar, href: '/analytics' },
    ],
  },
  {
    title: 'Workspace',
    items: [
      { label: 'Inbox', icon: FaInbox, href: '/inbox', badge: '12' },
      { label: 'Projects', icon: FaFolder, href: '/projects' },
      { label: 'Calendar', icon: FaCalendar, href: '/calendar' },
    ],
  },
  {
    title: 'Other',
    items: [{ label: 'Settings', icon: FaCog, href: '/settings' }],
  },
];

/**
 * Default Sidebar with all sections.
 */
export const Default: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        logo={<div className="text-xl font-bold text-white">My App</div>}
        footer={
          <UserMenu
            name="John Doe"
            email="john@example.com"
            avatarSrc="https://i.pravatar.cc/150?img=3"
            avatarStatus="online"
          />
        }
      >
        <MainNav items={navItems} />
      </Sidebar>
      <div className="ml-0 p-8 md:ml-60">
        <h1 className="text-2xl font-bold text-slate-900">Main Content Area</h1>
        <p className="mt-4 text-slate-600">
          This is the main content area. On desktop, the sidebar is always visible. On mobile
          (resize your browser), the sidebar is hidden and can be opened with a menu button.
        </p>
      </div>
    </div>
  ),
};

/**
 * Sidebar with logo image.
 */
export const WithLogoImage: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        logo={
          <img
            src="https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=Logo"
            alt="Company Logo"
            className="h-8"
          />
        }
        footer={
          <UserMenu
            name="Jane Smith"
            email="jane@example.com"
            avatarSrc="https://i.pravatar.cc/150?img=5"
          />
        }
      >
        <MainNav items={navSections} />
      </Sidebar>
    </div>
  ),
};

/**
 * Sidebar without footer.
 */
export const WithoutFooter: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar logo={<div className="text-xl font-bold text-white">Simple App</div>}>
        <MainNav
          items={navItems.map((i) =>
            i.label === 'Analytics' ? { ...i, active: true } : { ...i, active: false }
          )}
        />
      </Sidebar>
    </div>
  ),
};

/**
 * Sidebar without logo.
 */
export const WithoutLogo: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        footer={
          <UserMenu
            name="Bob Wilson"
            email="bob@example.com"
            avatarSrc="https://i.pravatar.cc/150?img=12"
            avatarStatus="away"
          />
        }
      >
        <MainNav
          items={navItems.map((i) =>
            i.label === 'Team' ? { ...i, active: true } : { ...i, active: false }
          )}
        />
      </Sidebar>
    </div>
  ),
};

/**
 * Sidebar with custom width.
 */
export const CustomWidth: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        width="280px"
        logo={<div className="text-xl font-bold text-white">Wide Sidebar</div>}
        footer={
          <UserMenu
            name="Alice Johnson"
            email="alice@example.com"
            avatarSrc="https://i.pravatar.cc/150?img=9"
          />
        }
      >
        <MainNav
          items={navItems.map((i) =>
            i.label === 'Projects' ? { ...i, active: true } : { ...i, active: false }
          )}
        />
      </Sidebar>
      <div className="ml-0 p-8 md:ml-[280px]">
        <h1 className="text-2xl font-bold text-slate-900">Custom Width</h1>
        <p className="mt-4 text-slate-600">This sidebar has a custom width of 280px.</p>
      </div>
    </div>
  ),
};

/**
 * Mobile view with controlled open state.
 */
export const MobileInteractive: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="h-screen bg-slate-100">
        <button
          onClick={() => { setOpen(true); }}
          className="fixed top-4 left-4 z-50 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 md:hidden"
        >
          Open Menu
        </button>

        <Sidebar
          open={open}
          onOpenChange={setOpen}
          logo={<div className="text-xl font-bold text-white">Mobile Demo</div>}
          footer={
            <UserMenu
              name="Mobile User"
              email="mobile@example.com"
              avatarSrc="https://i.pravatar.cc/150?img=8"
              avatarStatus="online"
            />
          }
        >
          <MainNav
            items={navItems.map((i) =>
              i.label === 'Inbox' ? { ...i, active: true } : { ...i, active: false }
            )}
          />
        </Sidebar>

        <div className="p-8 md:ml-60">
          <h1 className="text-2xl font-bold text-slate-900">Mobile Interactive Demo</h1>
          <p className="mt-4 text-slate-600">
            Click "Open Menu" to see the mobile sidebar. Resize your browser to see responsive
            behavior.
          </p>
          <div className="mt-4">
            <button
              onClick={() => { setOpen(!open); }}
              className="rounded-md bg-slate-200 px-4 py-2 text-slate-900 hover:bg-slate-300"
            >
              {open ? 'Close' : 'Open'} Sidebar
            </button>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Sidebar with sections and dividers.
 */
export const WithSections: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        logo={<div className="text-xl font-bold text-white">Sectioned App</div>}
        footer={
          <UserMenu
            name="Carol Martinez"
            email="carol@example.com"
            avatarSrc="https://i.pravatar.cc/150?img=10"
            avatarStatus="busy"
          />
        }
      >
        <MainNav
          items={navSections.map((section) => ({
            ...section,
            items: section.items.map((i) =>
              i.label === 'Calendar' ? { ...i, active: true } : { ...i, active: false }
            ),
          }))}
        />
      </Sidebar>
      <div className="ml-0 p-8 md:ml-60">
        <h1 className="text-2xl font-bold text-slate-900">Navigation Sections</h1>
        <p className="mt-4 text-slate-600">This sidebar uses navigation sections with headers.</p>
      </div>
    </div>
  ),
};

/**
 * Minimal sidebar with just navigation.
 */
export const Minimal: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar>
        <MainNav
          items={navItems.map((i) =>
            i.label === 'Settings' ? { ...i, active: true } : { ...i, active: false }
          )}
        />
      </Sidebar>
      <div className="ml-0 p-8 md:ml-60">
        <h1 className="text-2xl font-bold text-slate-900">Minimal Sidebar</h1>
        <p className="mt-4 text-slate-600">No logo or footer - just navigation items.</p>
      </div>
    </div>
  ),
};

/**
 * Full example with all features.
 */
export const FullExample: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [activeLabel, setActiveLabel] = React.useState('Home');

    return (
      <div className="h-screen bg-slate-100">
        {/* Mobile menu button */}
        <button
          onClick={() => { setOpen(true); }}
          className="fixed top-4 left-4 z-50 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 md:hidden"
        >
          Menu
        </button>

        <Sidebar
          open={open}
          onOpenChange={setOpen}
          logo={
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
                A
              </div>
              <span className="text-lg font-semibold text-white">Appski</span>
            </div>
          }
          footer={
            <UserMenu
              name="Christopher Wilson"
              email="chris@appski.com"
              avatarSrc="https://i.pravatar.cc/150?img=14"
              avatarStatus="online"
              onProfileClick={() => { alert('Profile clicked'); }}
              onSettingsClick={() => { alert('Settings clicked'); }}
              onSignOutClick={() => { alert('Sign out clicked'); }}
            />
          }
        >
          <MainNav
            items={navSections.map((section) => ({
              ...section,
              items: section.items.map((item) => ({
                ...item,
                active: item.label === activeLabel,
                onClick: () => {
                  setActiveLabel(item.label);
                  setOpen(false); // Close on mobile after selection
                },
              })),
            }))}
          />
        </Sidebar>

        <div className="ml-0 p-8 md:ml-60">
          <h1 className="text-3xl font-bold text-slate-900">Full Example</h1>
          <p className="mt-4 text-slate-600">This is a complete example with all features:</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            <li>Logo with icon and text</li>
            <li>Navigation sections with headers</li>
            <li>Active state management</li>
            <li>Badge indicators</li>
            <li>User menu with avatar and status</li>
            <li>Responsive mobile/desktop behavior</li>
            <li>Interactive handlers</li>
          </ul>
          <div className="mt-8">
            <p className="text-sm text-slate-500">
              Current active item:{' '}
              <span className="font-medium text-indigo-600">{activeLabel}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Collapsed sidebar on desktop (icons only).
 */
export const Collapsed: Story = {
  args: {},
  render: () => (
    <div className="h-screen bg-slate-100">
      <Sidebar
        collapsed
        logo={<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />}
        footer={
          <UserMenu
            name="Sarah Johnson"
            email="sarah.j@company.com"
            avatarSrc="https://i.pravatar.cc/150?img=5"
            avatarStatus="online"
          />
        }
      >
        <MainNav
          items={navItems.map((i) =>
            i.label === 'Dashboard' ? { ...i, active: true } : { ...i, active: false }
          )}
        />
      </Sidebar>
      <div className="ml-0 p-8 md:ml-[60px]">
        <h1 className="text-2xl font-bold text-slate-900">Collapsed Sidebar</h1>
        <p className="mt-4 text-slate-600">
          On desktop, the sidebar shows only icons with tooltips. Hover over an icon to see its label.
        </p>
      </div>
    </div>
  ),
};

/**
 * Controlled collapsed state with toggle button.
 */
export const CollapsedInteractive: Story = {
  args: {},
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
      <div className="h-screen bg-slate-100">
        <Sidebar
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          logo={
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
              {!collapsed && <span className="font-semibold text-white">Appski</span>}
            </div>
          }
          footer={
            <UserMenu
              name="Interactive User"
              email="user@example.com"
              avatarSrc="https://i.pravatar.cc/150?img=12"
              avatarStatus="online"
            />
          }
        >
          <MainNav
            items={navItems.map((i) =>
              i.label === 'Projects' ? { ...i, active: true } : { ...i, active: false }
            )}
          />
        </Sidebar>
        <div className={`transition-all duration-300 p-8 ${collapsed ? 'ml-0 md:ml-[60px]' : 'ml-0 md:ml-[240px]'}`}>
          <h1 className="text-2xl font-bold text-slate-900">Interactive Collapse</h1>
          <p className="mt-4 text-slate-600">
            Click the hamburger button in the sidebar to toggle between collapsed and expanded states.
          </p>
          <div className="mt-4 rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-slate-700">
              <strong>Collapsed:</strong> {collapsed ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    );
  },
};
