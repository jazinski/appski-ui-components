import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const tableVariants = cva('w-full caption-bottom text-sm', {
  variants: {
    variant: {
      default: 'border-collapse',
      striped: 'border-collapse',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type SortDirection = 'asc' | 'desc' | null;

export interface Column<T = Record<string, unknown>> {
  /** Unique identifier for the column */
  id: string;
  /** Display header text */
  header: string;
  /** Accessor function or property name */
  accessor: keyof T | ((row: T) => React.ReactNode);
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Enable filtering for this column */
  filterable?: boolean;
  /** Column width (CSS value) */
  width?: string;
  /** Column alignment */
  align?: 'left' | 'center' | 'right';
  /** Hide column by default */
  hidden?: boolean;
  /** Custom cell renderer */
  cell?: (value: unknown, row: T, index: number) => React.ReactNode;
}

export interface TableProps<T = Record<string, unknown>>
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tableVariants> {
  /** Table columns configuration */
  columns: Column<T>[];
  /** Table data rows */
  data: T[];
  /** Enable row selection */
  selectable?: boolean;
  /** Selected row IDs */
  selectedRows?: Set<string>;
  /** Row selection change handler */
  onSelectionChange?: (selectedIds: Set<string>) => void;
  /** Enable sorting */
  sortable?: boolean;
  /** Current sort state */
  sortColumn?: string;
  /** Current sort direction */
  sortDirection?: SortDirection;
  /** Sort change handler */
  onSortChange?: (column: string, direction: SortDirection) => void;
  /** Enable pagination */
  paginate?: boolean;
  /** Current page (0-indexed) */
  currentPage?: number;
  /** Page size */
  pageSize?: number;
  /** Total number of items */
  totalItems?: number;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Page size change handler */
  onPageSizeChange?: (size: number) => void;
  /** Enable filtering */
  filterable?: boolean;
  /** Current filter value */
  filterValue?: string;
  /** Filter change handler */
  onFilterChange?: (value: string) => void;
  /** Empty state message */
  emptyMessage?: string;
  /** Sticky header */
  stickyHeader?: boolean;
  /** Row ID accessor */
  getRowId?: (row: T, index: number) => string;
  /** Custom row className */
  getRowClassName?: (row: T, index: number) => string;
  /** Row click handler */
  onRowClick?: (row: T, index: number) => void;
}

/**
 * Flexible data table component with sorting, pagination, filtering, and row selection.
 * Fully accessible with ARIA attributes and keyboard navigation support.
 *
 * @example
 * <Table
 *   columns={[
 *     { id: 'name', header: 'Name', accessor: 'name', sortable: true },
 *     { id: 'email', header: 'Email', accessor: 'email', filterable: true },
 *   ]}
 *   data={users}
 *   sortable
 *   paginate
 *   selectable
 * />
 */
export const Table = React.forwardRef<HTMLDivElement, TableProps>(
  (
    {
      className,
      variant,
      size,
      columns,
      data,
      selectable = false,
      selectedRows = new Set(),
      onSelectionChange,
      sortable = false,
      sortColumn,
      sortDirection,
      onSortChange,
      paginate = false,
      currentPage = 0,
      pageSize = 10,
      totalItems,
      onPageChange,
      onPageSizeChange,
      filterable = false,
      filterValue = '',
      onFilterChange,
      emptyMessage = 'No data available',
      stickyHeader = false,
      getRowId = (_, index) => String(index),
      getRowClassName,
      onRowClick,
      ...props
    },
    ref
  ) => {
    // Filter visible columns
    const visibleColumns = columns.filter((col) => !col.hidden);

    // Handle select all
    const handleSelectAll = (checked: boolean) => {
      if (!onSelectionChange) return;

      if (checked) {
        const allIds = data.map((row, index) => getRowId(row, index));
        onSelectionChange(new Set(allIds));
      } else {
        onSelectionChange(new Set());
      }
    };

    // Handle single row selection
    const handleRowSelection = (rowId: string, checked: boolean) => {
      if (!onSelectionChange) return;

      const newSelection = new Set(selectedRows);
      if (checked) {
        newSelection.add(rowId);
      } else {
        newSelection.delete(rowId);
      }
      onSelectionChange(newSelection);
    };

    // Handle column sort
    const handleSort = (columnId: string) => {
      if (!onSortChange) return;

      let newDirection: SortDirection = 'asc';
      if (sortColumn === columnId) {
        if (sortDirection === 'asc') {
          newDirection = 'desc';
        } else if (sortDirection === 'desc') {
          newDirection = null;
        }
      }
      onSortChange(columnId, newDirection);
    };

    // Calculate pagination
    const totalPages = totalItems
      ? Math.ceil(totalItems / pageSize)
      : Math.ceil(data.length / pageSize);
    const startIndex = currentPage * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems ?? data.length);
    const paginatedData = paginate ? data.slice(startIndex, endIndex) : data;

    // Check if all visible rows are selected
    const allSelected =
      paginatedData.length > 0 &&
      paginatedData.every((row, index) => selectedRows.has(getRowId(row, startIndex + index)));

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {/* Filter Input */}
        {filterable && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Filter..."
              value={filterValue}
              onChange={(e) => onFilterChange?.(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
              aria-label="Filter table data"
            />
          </div>
        )}

        {/* Table Container */}
        <div className="overflow-auto rounded-md border border-slate-200 dark:border-slate-800">
          <table className={cn(tableVariants({ variant, size }))}>
            {/* Table Header */}
            <thead
              className={cn('bg-slate-50 dark:bg-slate-900', stickyHeader && 'sticky top-0 z-10')}
            >
              <tr>
                {/* Selection Column */}
                {selectable && (
                  <th className="w-12 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={(e) => {
                        handleSelectAll(e.target.checked);
                      }}
                      aria-label="Select all rows"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
                    />
                  </th>
                )}

                {/* Data Columns */}
                {visibleColumns.map((column) => {
                  const isSortable = sortable && column.sortable !== false;
                  const isSorted = sortColumn === column.id;
                  const sortIcon = isSorted ? (
                    sortDirection === 'asc' ? (
                      <ChevronUp className="ml-1 h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                    )
                  ) : (
                    <ChevronsUpDown className="ml-1 h-4 w-4 opacity-50" aria-hidden="true" />
                  );

                  return (
                    <th
                      key={column.id}
                      className={cn(
                        'px-4 py-3 font-medium',
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right',
                        !column.align && 'text-left'
                      )}
                      style={{ width: column.width }}
                    >
                      {isSortable ? (
                        <button
                          onClick={() => {
                            handleSort(column.id);
                          }}
                          className="inline-flex items-center font-medium hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Sort by ${column.header}${
                            isSorted
                              ? ` (currently sorted ${sortDirection === 'asc' ? 'ascending' : 'descending'})`
                              : ''
                          }`}
                          aria-sort={
                            isSorted
                              ? sortDirection === 'asc'
                                ? 'ascending'
                                : 'descending'
                              : 'none'
                          }
                        >
                          {column.header}
                          {sortIcon}
                        </button>
                      ) : (
                        column.header
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                    className="px-4 py-8 text-center text-slate-500 dark:text-slate-400"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, rowIndex) => {
                  const rowId = getRowId(row, startIndex + rowIndex);
                  const isSelected = selectedRows.has(rowId);
                  const rowClassName = getRowClassName?.(row, startIndex + rowIndex);

                  return (
                    <tr
                      key={rowId}
                      className={cn(
                        'border-t border-slate-200 dark:border-slate-800',
                        variant === 'striped' &&
                          rowIndex % 2 === 1 &&
                          'bg-slate-50 dark:bg-slate-900',
                        isSelected && 'bg-blue-50 dark:bg-blue-950',
                        onRowClick && 'cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800',
                        rowClassName
                      )}
                      onClick={() => onRowClick?.(row, startIndex + rowIndex)}
                    >
                      {/* Selection Cell */}
                      {selectable && (
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              e.stopPropagation();
                              handleRowSelection(rowId, e.target.checked);
                            }}
                            aria-label={`Select row ${rowIndex + 1}`}
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
                          />
                        </td>
                      )}

                      {/* Data Cells */}
                      {visibleColumns.map((column) => {
                        const value =
                          typeof column.accessor === 'function'
                            ? column.accessor(row)
                            : (row[column.accessor]);

                        const cellContent = column.cell
                          ? column.cell(value, row, startIndex + rowIndex)
                          : (value as React.ReactNode);

                        return (
                          <td
                            key={column.id}
                            className={cn(
                              'px-4 py-3',
                              column.align === 'center' && 'text-center',
                              column.align === 'right' && 'text-right'
                            )}
                          >
                            {cellContent}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {paginate && totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Showing {startIndex + 1} to {endIndex} of {totalItems ?? data.length} items
            </div>

            <div className="flex items-center gap-2">
              {/* Page Size Selector */}
              {onPageSizeChange && (
                <select
                  value={pageSize}
                  onChange={(e) => {
                    onPageSizeChange(Number(e.target.value));
                  }}
                  className="rounded-md border border-slate-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
                  aria-label="Rows per page"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              )}

              {/* Page Navigation */}
              <button
                onClick={() => onPageChange?.(currentPage - 1)}
                disabled={currentPage === 0}
                className="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
                aria-label="Previous page"
              >
                Previous
              </button>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                Page {currentPage + 1} of {totalPages}
              </span>

              <button
                onClick={() => onPageChange?.(currentPage + 1)}
                disabled={currentPage >= totalPages - 1}
                className="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

Table.displayName = 'Table';

export { tableVariants };
