import type { Meta, StoryObj } from '@storybook/react';
import { FaHome, FaFolder, FaFile, FaAngleRight, FaSlash } from 'react-icons/fa';
import { Breadcrumb } from './breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'UI Components', href: '/projects/ui' },
      { label: 'Breadcrumb' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'UI Components', href: '/projects/ui' },
      { label: 'Breadcrumb' },
    ],
    separator: <FaAngleRight />,
  },
};

export const SlashSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'UI Components', href: '/projects/ui' },
      { label: 'Breadcrumb' },
    ],
    separator: <FaSlash />,
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Web Development', href: '/projects/web' },
      { label: 'React', href: '/projects/web/react' },
      { label: 'Component Libraries', href: '/projects/web/react/libraries' },
      { label: 'UI Components', href: '/projects/web/react/libraries/ui' },
      { label: 'Breadcrumb Navigation', href: '/projects/web/react/libraries/ui/breadcrumb' },
      { label: 'Documentation' },
    ],
  },
};

export const MaxItemsCollapsed: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Web Development', href: '/projects/web' },
      { label: 'React', href: '/projects/web/react' },
      { label: 'Component Libraries', href: '/projects/web/react/libraries' },
      { label: 'UI Components', href: '/projects/web/react/libraries/ui' },
      { label: 'Breadcrumb Navigation', href: '/projects/web/react/libraries/ui/breadcrumb' },
      { label: 'Documentation' },
    ],
    maxItems: 4,
  },
};

export const MaxItemsWithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'Web Development', href: '/projects/web', icon: <FaFolder /> },
      { label: 'React', href: '/projects/web/react', icon: <FaFolder /> },
      { label: 'Component Libraries', href: '/projects/web/react/libraries', icon: <FaFolder /> },
      { label: 'UI Components', icon: <FaFile /> },
    ],
    maxItems: 4,
  },
};

export const SizeSmall: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
    size: 'lg',
  },
};

export const WithoutLinks: Story = {
  args: {
    items: [
      { label: 'Home' },
      { label: 'Projects' },
      { label: 'UI Components' },
      { label: 'Breadcrumb' },
    ],
  },
};

export const GhostVariant: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
    variant: 'ghost',
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Current Page' }],
  },
};

export const TwoItems: Story = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'Current Page' }],
  },
};

export const InDarkMode: Story = {
  args: {
    items: [
      { label: 'Home', href: '/', icon: <FaHome /> },
      { label: 'Projects', href: '/projects', icon: <FaFolder /> },
      { label: 'UI Components', href: '/projects/ui', icon: <FaFolder /> },
      { label: 'Breadcrumb', icon: <FaFile /> },
    ],
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
