import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DataTable, createSortableHeader, createSelectionColumn } from './data-table';
import type { ColumnDef } from '@tanstack/react-table';

// Sample data type
type TestUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// Sample data
const sampleData: TestUser[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
];

// Basic columns
const basicColumns: ColumnDef<TestUser>[] = [
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
  },
];

// Sortable columns
const sortableColumns: ColumnDef<TestUser>[] = [
  {
    accessorKey: 'name',
    header: createSortableHeader('Name'),
  },
  {
    accessorKey: 'email',
    header: createSortableHeader('Email'),
  },
];

describe('DataTable', () => {
  describe('Basic Rendering', () => {
    it('renders table with data', () => {
      render(<DataTable columns={basicColumns} data={sampleData} />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
      expect(screen.getByText('admin')).toBeInTheDocument();
    });

    it('renders column headers', () => {
      render(<DataTable columns={basicColumns} data={sampleData} />);

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Role')).toBeInTheDocument();
    });

    it('renders all rows', () => {
      render(<DataTable columns={basicColumns} data={sampleData} />);

      const rows = screen.getAllByRole('row');
      // +1 for header row
      expect(rows).toHaveLength(sampleData.length + 1);
    });

    it('applies custom className', () => {
      const { container } = render(
        <DataTable columns={basicColumns} data={sampleData} className="custom-table" />
      );

      expect(container.querySelector('.custom-table')).toBeInTheDocument();
    });
  });

  describe('Empty State', () => {
    it('shows default empty message when no data', () => {
      render(<DataTable columns={basicColumns} data={[]} />);

      expect(screen.getByText('No results.')).toBeInTheDocument();
    });

    it('shows custom empty message', () => {
      render(
        <DataTable
          columns={basicColumns}
          data={[]}
          emptyMessage="No users found. Add a new user to get started."
        />
      );

      expect(
        screen.getByText('No users found. Add a new user to get started.')
      ).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('shows loading message when loading prop is true', () => {
      render(<DataTable columns={basicColumns} data={[]} loading />);

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('does not show data when loading', () => {
      render(<DataTable columns={basicColumns} data={sampleData} loading />);

      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('Search/Filter', () => {
    it('renders search input when searchable is true', () => {
      render(<DataTable columns={basicColumns} data={sampleData} searchable />);

      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('renders custom search placeholder', () => {
      render(
        <DataTable
          columns={basicColumns}
          data={sampleData}
          searchable
          searchPlaceholder="Search users..."
        />
      );

      expect(screen.getByPlaceholderText('Search users...')).toBeInTheDocument();
    });

    it('filters data based on search input', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={basicColumns} data={sampleData} searchable />);

      const searchInput = screen.getByPlaceholderText('Search...');
      await user.type(searchInput, 'jane');

      await waitFor(() => {
        expect(screen.getByText('Jane Smith')).toBeInTheDocument();
        expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
      });
    });

    it('does not render search input when searchable is false', () => {
      render(<DataTable columns={basicColumns} data={sampleData} searchable={false} />);

      expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
    });
  });

  describe('Sorting', () => {
    it('renders sortable column headers with sort icons', () => {
      render(<DataTable columns={sortableColumns} data={sampleData} />);

      const nameButton = screen.getByRole('button', { name: /Name/i });
      expect(nameButton).toBeInTheDocument();
    });

    it('sorts column when header is clicked', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={sortableColumns} data={sampleData} />);

      const nameButton = screen.getByRole('button', { name: /Name/i });
      await user.click(nameButton);

      // Check if the order changed (Bob should be first after ascending sort)
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Bob Johnson');
    });

    it('toggles sort direction on multiple clicks', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={sortableColumns} data={sampleData} />);

      const nameButton = screen.getByRole('button', { name: /Name/i });

      // First click - ascending
      await user.click(nameButton);
      let rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Bob Johnson');

      // Second click - descending
      await user.click(nameButton);
      rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('John Doe');
    });
  });

  describe('Pagination', () => {
    const manyUsers: TestUser[] = Array.from({ length: 25 }, (_, i) => ({
      id: String(i + 1),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 2 === 0 ? 'admin' : 'user',
    }));

    it('shows pagination controls when enabled', () => {
      render(<DataTable columns={basicColumns} data={manyUsers} pagination pageSize={10} />);

      expect(screen.getByText('Previous')).toBeInTheDocument();
      expect(screen.getByText('Next')).toBeInTheDocument();
      expect(screen.getByText(/Page 1 of 3/)).toBeInTheDocument();
    });

    it('does not show pagination controls when disabled', () => {
      render(<DataTable columns={basicColumns} data={manyUsers} pagination={false} />);

      expect(screen.queryByText('Previous')).not.toBeInTheDocument();
      expect(screen.queryByText('Next')).not.toBeInTheDocument();
    });

    it('navigates to next page', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={basicColumns} data={manyUsers} pagination pageSize={10} />);

      // Initially should show User 1
      expect(screen.getByText('User 1')).toBeInTheDocument();

      const nextButton = screen.getByText('Next');
      await user.click(nextButton);

      // After clicking next, should show User 11 (page 2)
      await waitFor(() => {
        expect(screen.getByText('User 11')).toBeInTheDocument();
        expect(screen.queryByText('User 1')).not.toBeInTheDocument();
      });
    });

    it('navigates to previous page', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={basicColumns} data={manyUsers} pagination pageSize={10} />);

      // Go to page 2 first
      const nextButton = screen.getByText('Next');
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText('User 11')).toBeInTheDocument();
      });

      // Go back to page 1
      const prevButton = screen.getByText('Previous');
      await user.click(prevButton);

      await waitFor(() => {
        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.queryByText('User 11')).not.toBeInTheDocument();
      });
    });

    it('disables Previous button on first page', () => {
      render(<DataTable columns={basicColumns} data={manyUsers} pagination pageSize={10} />);

      const prevButton = screen.getByText('Previous');
      expect(prevButton).toBeDisabled();
    });

    it('disables Next button on last page', async () => {
      const user = userEvent.setup();
      render(<DataTable columns={basicColumns} data={manyUsers} pagination pageSize={10} />);

      // Go to last page (page 3)
      const nextButton = screen.getByText('Next');
      await user.click(nextButton);
      await user.click(nextButton);

      await waitFor(() => {
        expect(nextButton).toBeDisabled();
      });
    });

    it('changes page size', async () => {
      const user = userEvent.setup();
      render(
        <DataTable
          columns={basicColumns}
          data={manyUsers}
          pagination
          pageSize={10}
          pageSizeOptions={[5, 10, 20]}
        />
      );

      const select = screen.getByLabelText('Rows per page');
      await user.selectOptions(select, '20');

      await waitFor(() => {
        expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
      });
    });
  });

  describe('Row Selection', () => {
    const selectableColumns: ColumnDef<TestUser>[] = [
      createSelectionColumn<TestUser>(),
      ...basicColumns,
    ];

    it('renders checkboxes when row selection is enabled', () => {
      render(<DataTable columns={selectableColumns} data={sampleData} enableRowSelection />);

      const checkboxes = screen.getAllByRole('checkbox');
      // +1 for header checkbox
      expect(checkboxes).toHaveLength(sampleData.length + 1);
    });

    it('selects individual row', async () => {
      const user = userEvent.setup();
      const handleSelectionChange = vi.fn();

      render(
        <DataTable
          columns={selectableColumns}
          data={sampleData}
          enableRowSelection
          onRowSelectionChange={handleSelectionChange}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      const firstRowCheckbox = checkboxes[1]; // Skip header checkbox

      await user.click(firstRowCheckbox);

      await waitFor(() => {
        expect(handleSelectionChange).toHaveBeenCalled();
        expect(firstRowCheckbox).toBeChecked();
      });
    });

    it('selects all rows with header checkbox', async () => {
      const user = userEvent.setup();
      const handleSelectionChange = vi.fn();

      render(
        <DataTable
          columns={selectableColumns}
          data={sampleData}
          enableRowSelection
          onRowSelectionChange={handleSelectionChange}
        />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      const selectAllCheckbox = checkboxes[0]; // Header checkbox

      await user.click(selectAllCheckbox);

      await waitFor(() => {
        expect(handleSelectionChange).toHaveBeenCalled();
        checkboxes.slice(1).forEach((checkbox) => {
          expect(checkbox).toBeChecked();
        });
      });
    });

    it('shows selected row count', async () => {
      const user = userEvent.setup();

      render(
        <DataTable columns={selectableColumns} data={sampleData} enableRowSelection pagination />
      );

      const checkboxes = screen.getAllByRole('checkbox');
      await user.click(checkboxes[1]);

      await waitFor(() => {
        expect(screen.getByText(/1 of 3 row\(s\) selected/)).toBeInTheDocument();
      });
    });
  });

  describe('Row Interactions', () => {
    it('calls onRowClick when row is clicked', async () => {
      const user = userEvent.setup();
      const handleRowClick = vi.fn();

      render(<DataTable columns={basicColumns} data={sampleData} onRowClick={handleRowClick} />);

      const rows = screen.getAllByRole('row');
      const firstDataRow = rows[1]; // Skip header row

      await user.click(firstDataRow);

      expect(handleRowClick).toHaveBeenCalledWith(sampleData[0]);
    });

    it('applies custom row className', () => {
      const getRowClassName = (row: TestUser) => (row.role === 'admin' ? 'admin-row' : '');

      const { container } = render(
        <DataTable columns={basicColumns} data={sampleData} getRowClassName={getRowClassName} />
      );

      const adminRow = container.querySelector('.admin-row');
      expect(adminRow).toBeInTheDocument();
    });
  });

  describe('Sticky Header', () => {
    it('applies sticky header class when enabled', () => {
      render(<DataTable columns={basicColumns} data={sampleData} stickyHeader />);

      const thead = screen.getAllByRole('rowgroup')[0];
      expect(thead).toHaveClass('sticky');
    });

    it('does not apply sticky header class when disabled', () => {
      render(<DataTable columns={basicColumns} data={sampleData} stickyHeader={false} />);

      const thead = screen.getAllByRole('rowgroup')[0];
      expect(thead).not.toHaveClass('sticky');
    });
  });

  describe('Helper Functions', () => {
    it('createSortableHeader returns a header function', () => {
      const header = createSortableHeader('Test');
      expect(typeof header).toBe('function');
    });

    it('createSelectionColumn returns a column definition', () => {
      const column = createSelectionColumn<TestUser>();
      expect(column.id).toBe('select');
      expect(column.enableSorting).toBe(false);
      expect(column.enableHiding).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('has proper table structure', () => {
      render(<DataTable columns={basicColumns} data={sampleData} />);

      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen.getAllByRole('columnheader')).toHaveLength(3);
    });

    it('checkboxes have proper aria-labels', () => {
      const selectableColumns: ColumnDef<TestUser>[] = [
        createSelectionColumn<TestUser>(),
        ...basicColumns,
      ];

      render(<DataTable columns={selectableColumns} data={sampleData} enableRowSelection />);

      expect(screen.getByLabelText('Select all')).toBeInTheDocument();
      expect(screen.getAllByLabelText('Select row')).toHaveLength(sampleData.length);
    });

    it('page size selector has accessible label', () => {
      render(<DataTable columns={basicColumns} data={sampleData} pagination />);

      expect(screen.getByLabelText('Rows per page')).toBeInTheDocument();
    });
  });

  describe('Dark Mode', () => {
    it('applies dark mode classes', () => {
      const { container } = render(<DataTable columns={basicColumns} data={sampleData} />);

      const darkClasses = container.querySelector('.dark\\:bg-slate-950');
      expect(darkClasses).toBeInTheDocument();
    });
  });
});
