import type { Meta, StoryObj } from '@storybook/react';
import { MainNav } from './main-nav';
import {
  Home,
  Activity,
  Database,
  MessageSquare,
  Users,
  Settings,
  FileText,
  BarChart,
  Bell,
} from 'lucide-react';

const meta: Meta<typeof MainNav> = {
  title: 'UI/MainNav',
  component: MainNav,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A vertical navigation component with icons, labels, active states, and optional badges.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[240px] rounded-lg border bg-slate-900 p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  { label: 'Home', href: '/', icon: Home, active: true },
  { label: 'Activity', href: '/activity', icon: Activity },
  { label: 'Database', href: '/database', icon: Database },
  { label: 'Messages', href: '/messages', icon: MessageSquare },
  { label: 'Users', href: '/users', icon: Users },
  { label: 'Settings', href: '/settings', icon: Settings },
];

const itemsWithBadges = [
  { label: 'Home', href: '/', icon: Home, active: true },
  { label: 'Activity', href: '/activity', icon: Activity, badge: 3 },
  { label: 'Messages', href: '/messages', icon: MessageSquare, badge: 12 },
  { label: 'Notifications', href: '/notifications', icon: Bell, badge: 'New' },
  { label: 'Settings', href: '/settings', icon: Settings },
];

const sectionsData = [
  {
    title: 'MAIN',
    items: [
      { label: 'Home', href: '/', icon: Home, active: true },
      { label: 'Activity', href: '/activity', icon: Activity },
      { label: 'Database', href: '/database', icon: Database },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { label: 'Users', href: '/users', icon: Users, badge: 5 },
      { label: 'Reports', href: '/reports', icon: FileText },
      { label: 'Analytics', href: '/analytics', icon: BarChart },
    ],
  },
  {
    title: 'SETTINGS',
    items: [{ label: 'Settings', href: '/settings', icon: Settings }],
  },
];

export const Default: Story = {
  render: () => <MainNav items={basicItems} />,
};

export const WithBadges: Story = {
  render: () => <MainNav items={itemsWithBadges} />,
};

export const WithSections: Story = {
  render: () => <MainNav items={sectionsData} />,
};

export const WithDisabledItem: Story = {
  render: () => (
    <MainNav
      items={[
        { label: 'Home', href: '/', icon: Home, active: true },
        { label: 'Activity', href: '/activity', icon: Activity },
        { label: 'Database', href: '/database', icon: Database, disabled: true },
        { label: 'Settings', href: '/settings', icon: Settings },
      ]}
    />
  ),
};

export const SmallSize: Story = {
  render: () => <MainNav items={basicItems} size="sm" />,
};

export const LargeSize: Story = {
  render: () => <MainNav items={basicItems} size="lg" />,
};

export const Interactive: Story = {
  render: () => {
    const [activeHref, setActiveHref] = React.useState('/');

    const items = [
      { label: 'Home', href: '/', icon: Home },
      { label: 'Activity', href: '/activity', icon: Activity, badge: 3 },
      { label: 'Database', href: '/database', icon: Database },
      { label: 'Messages', href: '/messages', icon: MessageSquare, badge: 12 },
      { label: 'Users', href: '/users', icon: Users },
      { label: 'Settings', href: '/settings', icon: Settings },
    ].map((item) => ({
      ...item,
      active: item.href === activeHref,
      onClick: () => { setActiveHref(item.href); },
    }));

    return <MainNav items={items} />;
  },
};

export const WithClickHandler: Story = {
  render: () => (
    <MainNav
      items={[
        {
          label: 'Home',
          href: '/',
          icon: Home,
          active: true,
          onClick: () => { alert('Home clicked!'); },
        },
        {
          label: 'Activity',
          href: '/activity',
          icon: Activity,
          onClick: () => { alert('Activity clicked!'); },
        },
        {
          label: 'Settings',
          href: '/settings',
          icon: Settings,
          onClick: () => { alert('Settings clicked!'); },
        },
      ]}
      onItemClick={(item) => { console.log('Item clicked:', item.label); }}
    />
  ),
};

// Need to import React for the Interactive story
import React from 'react';
