import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownSubmenu,
  DropdownSubmenuTrigger,
  DropdownSubmenuContent,
} from './dropdown';
import { Button } from './button';
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaEdit,
  FaTrash,
  FaCopy,
  FaArchive,
  FaShareAlt,
  FaDownload,
  FaPrint,
  FaStar,
  FaHeart,
  FaFlag,
} from 'react-icons/fa';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Actions</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
        <DropdownItem icon={<FaCopy />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<FaArchive />}>Archive</DropdownItem>
        <DropdownItem variant="destructive" icon={<FaTrash />}>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
        <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Actions</DropdownLabel>
        <DropdownItem icon={<FaShareAlt />}>Share</DropdownItem>
        <DropdownItem icon={<FaDownload />}>Download</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
          Sign out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>File</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />} shortcut="⌘E">
          Edit
        </DropdownItem>
        <DropdownItem icon={<FaCopy />} shortcut="⌘D">
          Duplicate
        </DropdownItem>
        <DropdownItem icon={<FaPrint />} shortcut="⌘P">
          Print
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<FaDownload />} shortcut="⌘S">
          Save
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>More Actions</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
        <DropdownItem icon={<FaCopy />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownSubmenu>
          <DropdownSubmenuTrigger icon={<FaShareAlt />}>Share</DropdownSubmenuTrigger>
          <DropdownSubmenuContent>
            <DropdownItem>Email</DropdownItem>
            <DropdownItem>Copy Link</DropdownItem>
            <DropdownItem>Share to Twitter</DropdownItem>
            <DropdownItem>Share to Facebook</DropdownItem>
          </DropdownSubmenuContent>
        </DropdownSubmenu>
        <DropdownSubmenu>
          <DropdownSubmenuTrigger icon={<FaStar />}>Add to Favorites</DropdownSubmenuTrigger>
          <DropdownSubmenuContent>
            <DropdownItem>Work</DropdownItem>
            <DropdownItem>Personal</DropdownItem>
            <DropdownItem>Projects</DropdownItem>
          </DropdownSubmenuContent>
        </DropdownSubmenu>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaTrash />}>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const NestedSubmenus: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Complex Menu</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
        <DropdownSeparator />
        <DropdownSubmenu>
          <DropdownSubmenuTrigger icon={<FaShareAlt />}>Share</DropdownSubmenuTrigger>
          <DropdownSubmenuContent>
            <DropdownItem>Email</DropdownItem>
            <DropdownSubmenu>
              <DropdownSubmenuTrigger>Social Media</DropdownSubmenuTrigger>
              <DropdownSubmenuContent>
                <DropdownItem>Twitter</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
              </DropdownSubmenuContent>
            </DropdownSubmenu>
            <DropdownItem>Copy Link</DropdownItem>
          </DropdownSubmenuContent>
        </DropdownSubmenu>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaTrash />}>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Actions</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
        <DropdownItem icon={<FaCopy />} disabled>
          Duplicate (Pro)
        </DropdownItem>
        <DropdownItem icon={<FaShareAlt />} disabled>
          Share (Pro)
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<FaArchive />}>Archive</DropdownItem>
        <DropdownItem variant="destructive" icon={<FaTrash />}>
          Delete
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const DestructiveActions: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">Danger Zone</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
        <DropdownItem icon={<FaArchive />}>Archive</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Danger Zone</DropdownLabel>
        <DropdownItem variant="destructive" icon={<FaFlag />}>
          Reset to Default
        </DropdownItem>
        <DropdownItem variant="destructive" icon={<FaTrash />}>
          Delete Forever
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const AlignEnd: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Aligned End</Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
        <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
          Sign out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button>Aligned Center</Button>
      </DropdownTrigger>
      <DropdownContent align="center">
        <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
        <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
          Sign out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const SideTop: Story = {
  render: () => (
    <div className="pt-40">
      <Dropdown>
        <DropdownTrigger asChild>
          <Button>Open Above</Button>
        </DropdownTrigger>
        <DropdownContent side="top">
          <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
          <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
          <DropdownSeparator />
          <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
            Sign out
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline">
          <FaUser className="mr-2" />
          John Doe
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
        <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Preferences</DropdownLabel>
        <DropdownItem icon={<FaStar />}>Favorites</DropdownItem>
        <DropdownItem icon={<FaHeart />}>Liked Items</DropdownItem>
        <DropdownSeparator />
        <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
          Sign out
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          Dropdown is {open ? 'open' : 'closed'}
        </div>
        <Dropdown open={open} onOpenChange={setOpen}>
          <DropdownTrigger asChild>
            <Button>Controlled Dropdown</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem icon={<FaEdit />}>Edit</DropdownItem>
            <DropdownItem icon={<FaCopy />}>Duplicate</DropdownItem>
            <DropdownSeparator />
            <DropdownItem
              icon={<FaTrash />}
              variant="destructive"
              onSelect={() => { console.log('Delete clicked'); }}
            >
              Delete
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
        <Button onClick={() => { setOpen(!open); }} variant="outline" size="sm">
          Toggle Dropdown
        </Button>
      </div>
    );
  },
};

export const WithCallbacks: Story = {
  render: () => {
    const handleEdit = () => { alert('Edit clicked'); };
    const handleDuplicate = () => { alert('Duplicate clicked'); };
    const handleDelete = () => {
      if (confirm('Are you sure you want to delete?')) {
        alert('Deleted!');
      }
    };

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button>Actions with Callbacks</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem icon={<FaEdit />} onSelect={handleEdit}>
            Edit
          </DropdownItem>
          <DropdownItem icon={<FaCopy />} onSelect={handleDuplicate}>
            Duplicate
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem variant="destructive" icon={<FaTrash />} onSelect={handleDelete}>
            Delete
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  },
};

export const InDarkMode: Story = {
  render: () => (
    <div className="dark min-h-[300px] bg-slate-900 p-8">
      <Dropdown>
        <DropdownTrigger asChild>
          <Button>Dark Mode Menu</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>Account</DropdownLabel>
          <DropdownItem icon={<FaUser />}>Profile</DropdownItem>
          <DropdownItem icon={<FaCog />}>Settings</DropdownItem>
          <DropdownSeparator />
          <DropdownSubmenu>
            <DropdownSubmenuTrigger icon={<FaShareAlt />}>Share</DropdownSubmenuTrigger>
            <DropdownSubmenuContent>
              <DropdownItem>Email</DropdownItem>
              <DropdownItem>Twitter</DropdownItem>
              <DropdownItem>Facebook</DropdownItem>
            </DropdownSubmenuContent>
          </DropdownSubmenu>
          <DropdownSeparator />
          <DropdownItem variant="destructive" icon={<FaSignOutAlt />}>
            Sign out
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  ),
};
