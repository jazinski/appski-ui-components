import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, createSortableHeader, createSelectionColumn } from './data-table';
import type { ColumnDef } from '@tanstack/react-table';
import { Badge } from './badge';
import { Button } from './button';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  status: 'active' | 'inactive';
  createdAt: string;
};

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-20',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'user',
    status: 'inactive',
    createdAt: '2024-02-01',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    role: 'guest',
    status: 'active',
    createdAt: '2024-02-10',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-02-15',
  },
];

// Generate more sample data for pagination demo
const generateUsers = (count: number): User[] => {
  const roles: User['role'][] = ['admin', 'user', 'guest'];
  const statuses: User['status'][] = ['active', 'inactive'];
  const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'David', 'Emma', 'Frank'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    name: `${names[i % names.length]} ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    createdAt: new Date(2024, 0, (i % 28) + 1).toISOString().split('T')[0],
  }));
};

// Basic columns
const basicColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => (
      <Badge variant={row.original.role === 'admin' ? 'default' : 'secondary'}>
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.status === 'active' ? 'success' : 'secondary'}>
        {row.original.status}
      </Badge>
    ),
  },
];

// Sortable columns
const sortableColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: createSortableHeader('Name'),
    enableSorting: true,
  },
  {
    accessorKey: 'email',
    header: createSortableHeader('Email'),
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: createSortableHeader('Role'),
    enableSorting: true,
    cell: ({ row }) => (
      <Badge variant={row.original.role === 'admin' ? 'default' : 'secondary'}>
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant={row.original.status === 'active' ? 'success' : 'secondary'}>
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: createSortableHeader('Created'),
    enableSorting: true,
  },
];

// Columns with actions
const columnsWithActions: ColumnDef<User>[] = [
  ...sortableColumns,
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        <Button variant="ghost" size="sm">
          Delete
        </Button>
      </div>
    ),
  },
];

// Columns with selection
const selectableColumns: ColumnDef<User>[] = [
  createSelectionColumn<User>(),
  ...sortableColumns,
];

export const Basic: Story = {
  args: {
    columns: basicColumns,
    data: sampleUsers,
  },
};

export const WithSearch: Story = {
  args: {
    columns: sortableColumns,
    data: sampleUsers,
    searchable: true,
    searchPlaceholder: 'Search users...',
  },
};

export const WithPagination: Story = {
  args: {
    columns: sortableColumns,
    data: generateUsers(50),
    pagination: true,
    pageSize: 10,
  },
};

export const WithRowSelection: Story = {
  args: {
    columns: selectableColumns,
    data: sampleUsers,
    enableRowSelection: true,
    onRowSelectionChange: (rows) => {
      console.log('Selected rows:', rows);
    },
  },
};

export const FullFeatured: Story = {
  args: {
    columns: selectableColumns,
    data: generateUsers(100),
    searchable: true,
    searchPlaceholder: 'Search by name, email, or role...',
    pagination: true,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    enableRowSelection: true,
    stickyHeader: true,
    onRowSelectionChange: (rows) => {
      console.log('Selected rows:', rows);
    },
  },
};

export const WithActions: Story = {
  args: {
    columns: columnsWithActions,
    data: sampleUsers,
    searchable: true,
    pagination: true,
  },
};

export const EmptyState: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: 'No users found. Create a new user to get started.',
  },
};

export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
  },
};

export const StickyHeader: Story = {
  args: {
    columns: sortableColumns,
    data: generateUsers(50),
    stickyHeader: true,
    pagination: false,
  },
};

export const DarkMode: Story = {
  args: {
    columns: selectableColumns,
    data: generateUsers(20),
    searchable: true,
    pagination: true,
    enableRowSelection: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
