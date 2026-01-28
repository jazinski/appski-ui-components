import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type PaginationState,
  type RowSelectionState,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Input } from './input';

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /** Enable global search/filter across all columns */
  searchable?: boolean;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Enable pagination */
  pagination?: boolean;
  /** Initial page size */
  pageSize?: number;
  /** Available page size options */
  pageSizeOptions?: number[];
  /** Enable row selection with checkboxes */
  enableRowSelection?: boolean;
  /** Callback when row selection changes */
  onRowSelectionChange?: (selectedRows: TData[]) => void;
  /** Enable column visibility toggle */
  enableColumnVisibility?: boolean;
  /** Custom empty state message */
  emptyMessage?: string;
  /** Custom CSS class for table container */
  className?: string;
  /** Enable sticky header */
  stickyHeader?: boolean;
  /** Custom row class based on row data */
  getRowClassName?: (row: TData) => string;
  /** Row click handler */
  onRowClick?: (row: TData) => void;
  /** Show loading state */
  loading?: boolean;
}

/**
 * DataTable - A powerful, accessible data table built with TanStack Table
 *
 * Features:
 * - Sorting (click column headers)
 * - Pagination with customizable page sizes
 * - Global search/filtering
 * - Row selection with checkboxes
 * - Column visibility toggle
 * - Sticky headers
 * - Fully accessible with ARIA attributes
 * - Dark mode support
 * - Responsive design
 *
 * @example
 * ```tsx
 * const columns: ColumnDef<User>[] = [
 *   {
 *     accessorKey: 'name',
 *     header: 'Name',
 *   },
 *   {
 *     accessorKey: 'email',
 *     header: 'Email',
 *   },
 *   {
 *     id: 'actions',
 *     cell: ({ row }) => (
 *       <Button onClick={() => handleEdit(row.original)}>Edit</Button>
 *     ),
 *   },
 * ];
 *
 * <DataTable
 *   columns={columns}
 *   data={users}
 *   searchable
 *   pagination
 *   enableRowSelection
 *   onRowSelectionChange={(rows) => console.log(rows)}
 * />
 * ```
 */
export function DataTable<TData, TValue>({
  columns,
  data,
  searchable = false,
  searchPlaceholder = 'Search...',
  pagination = false,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  enableRowSelection = false,
  onRowSelectionChange,
  enableColumnVisibility = false,
  emptyMessage = 'No results.',
  className,
  stickyHeader = false,
  getRowClassName,
  onRowClick,
  loading = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [paginationState, setPaginationState] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPaginationState,
    enableRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      pagination: paginationState,
    },
  });

  // Notify parent of selection changes
  React.useEffect(() => {
    if (onRowSelectionChange) {
      const selectedRows = table.getFilteredSelectedRowModel().rows.map((row) => row.original);
      onRowSelectionChange(selectedRows);
    }
  }, [rowSelection, table, onRowSelectionChange]);

  return (
    <div className={cn('w-full space-y-4', className)}>
      {/* Search and Controls */}
      {(searchable || enableColumnVisibility) && (
        <div className="flex items-center justify-between gap-4">
          {searchable && (
            <div className="max-w-sm flex-1">
              <Input
                placeholder={searchPlaceholder}
                value={globalFilter ?? ''}
                onChange={(e) => {
                  setGlobalFilter(e.target.value);
                }}
                className="w-full"
              />
            </div>
          )}
          {enableColumnVisibility && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">Columns:</span>
              {table.getAllLeafColumns().map((column) => {
                if (column.id === 'select') return null;
                return (
                  <label key={column.id} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={column.getIsVisible()}
                      onChange={(e) => {
                        column.toggleVisibility(e.target.checked);
                      }}
                      className="rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
                    />
                    <span className="capitalize">{column.id}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
        <div className={cn('overflow-auto', stickyHeader && 'max-h-[600px]')}>
          <table className="w-full caption-bottom text-sm">
            <thead
              className={cn(
                'border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900',
                stickyHeader && 'sticky top-0 z-10'
              )}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td colSpan={columns.length} className="text-muted-foreground h-24 text-center">
                    Loading...
                  </td>
                </tr>
              ) : table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={cn(
                      'border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50',
                      row.getIsSelected() && 'bg-slate-50 dark:bg-slate-900',
                      onRowClick && 'cursor-pointer',
                      getRowClassName?.(row.original)
                    )}
                    onClick={() => onRowClick?.(row.original)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3 align-middle">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-muted-foreground h-24 text-center">
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {pagination && (
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            {enableRowSelection && (
              <div className="text-muted-foreground flex-1 text-sm">
                {table.getFilteredSelectedRowModel().rows.length} of{' '}
                {table.getFilteredRowModel().rows.length} row(s) selected.
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            {/* Page Size Selector */}
            <div className="flex items-center gap-2">
              <label htmlFor="rows-per-page" className="text-sm text-slate-700 dark:text-slate-300">
                Rows per page
              </label>
              <select
                id="rows-per-page"
                value={table.getState().pagination.pageSize.toString()}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950"
                aria-label="Rows per page"
              >
                {pageSizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Page Info */}
            <div className="flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  table.previousPage();
                }}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  table.nextPage();
                }}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Helper function to create a sortable column header
 */
export function createSortableHeader<TData>(label: string): ColumnDef<TData>['header'] {
  return ({ column }) => {
    return (
      <Button
        variant="ghost"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === 'asc');
        }}
        className="-ml-4 h-8"
      >
        {label}
        {column.getIsSorted() === 'asc' ? (
          <ChevronUp className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === 'desc' ? (
          <ChevronDown className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
        )}
      </Button>
    );
  };
}

/**
 * Helper function to create a selection column
 */
export function createSelectionColumn<TData>(): ColumnDef<TData> {
  return {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) => {
          table.toggleAllPageRowsSelected(e.target.checked);
        }}
        aria-label="Select all"
        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => {
          row.toggleSelected(e.target.checked);
        }}
        aria-label="Select row"
        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };
}
