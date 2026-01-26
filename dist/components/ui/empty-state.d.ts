import { ButtonProps } from './button';
import * as React from 'react';
export interface EmptyStateProps {
    /** Icon component or element to display */
    icon?: React.ReactNode;
    /** Main heading text */
    title: string;
    /** Descriptive text below the title */
    description?: string;
    /** Primary action button */
    action?: {
        label: string;
        onClick: () => void;
        variant?: ButtonProps['variant'];
        icon?: React.ReactNode;
    };
    /** Secondary action button */
    secondaryAction?: {
        label: string;
        onClick: () => void;
        variant?: ButtonProps['variant'];
    };
    /** Additional CSS classes for the container */
    className?: string;
    /** Size variant for icon and text */
    size?: 'sm' | 'md' | 'lg';
    /** Custom content to render below description */
    children?: React.ReactNode;
}
/**
 * EmptyState component for displaying empty or no-results states.
 * Provides consistent styling with icon, title, description, and actions.
 *
 * @example
 * // Basic empty state
 * <EmptyState
 *   icon={<DatabaseIcon className="w-16 h-16" />}
 *   title="No memories found"
 *   description="Create your first memory to get started"
 * />
 *
 * @example
 * // With primary action
 * <EmptyState
 *   icon={<FolderIcon className="w-16 h-16" />}
 *   title="No projects yet"
 *   description="Get started by creating your first project"
 *   action={{
 *     label: "Create Project",
 *     onClick: handleCreate,
 *     icon: <PlusIcon className="w-4 h-4" />
 *   }}
 * />
 *
 * @example
 * // Search results empty state
 * <EmptyState
 *   icon={<MagnifyingGlassIcon className="w-12 h-12" />}
 *   title="No results found"
 *   description="Try adjusting your search or filters"
 *   size="sm"
 *   action={{
 *     label: "Clear Filters",
 *     onClick: handleClearFilters,
 *     variant: "ghost"
 *   }}
 * />
 *
 * @example
 * // With primary and secondary actions
 * <EmptyState
 *   icon={<DocumentIcon className="w-16 h-16" />}
 *   title="No documents"
 *   description="Upload your first document or import from a template"
 *   action={{
 *     label: "Upload Document",
 *     onClick: handleUpload
 *   }}
 *   secondaryAction={{
 *     label: "Browse Templates",
 *     onClick: handleTemplates,
 *     variant: "outline"
 *   }}
 * />
 */
export declare function EmptyState({ icon, title, description, action, secondaryAction, className, size, children, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=empty-state.d.ts.map