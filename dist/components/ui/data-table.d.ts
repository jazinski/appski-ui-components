import { ColumnDef } from '@tanstack/react-table';

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
export declare function DataTable<TData, TValue>({ columns, data, searchable, searchPlaceholder, pagination, pageSize, pageSizeOptions, enableRowSelection, onRowSelectionChange, enableColumnVisibility, emptyMessage, className, stickyHeader, getRowClassName, onRowClick, loading, }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
/**
 * Helper function to create a sortable column header
 */
export declare function createSortableHeader<TData>(label: string): ColumnDef<TData>['header'];
/**
 * Helper function to create a selection column
 */
export declare function createSelectionColumn<TData>(): ColumnDef<TData>;
//# sourceMappingURL=data-table.d.ts.map