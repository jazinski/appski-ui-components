import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const tableVariants: (props?: ({
    variant?: "default" | "striped" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export interface TableProps<T = Record<string, unknown>> extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tableVariants> {
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
export declare const Table: React.ForwardRefExoticComponent<TableProps<Record<string, unknown>> & React.RefAttributes<HTMLDivElement>>;
export { tableVariants };
//# sourceMappingURL=table.d.ts.map