import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from './button';

const emptyStateVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      'no-data': '',
      'no-results': '',
      error: '',
      'no-permission': '',
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const iconColorVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      'no-data': 'text-slate-300 dark:text-slate-600',
      'no-results': 'text-blue-300 dark:text-blue-800',
      error: 'text-red-300 dark:text-red-800',
      'no-permission': 'text-amber-300 dark:text-amber-800',
      default: 'text-slate-300 dark:text-slate-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface EmptyStateProps extends VariantProps<typeof emptyStateVariants> {
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
 *   variant="no-data"
 * />
 *
 * @example
 * // With primary action
 * <EmptyState
 *   icon={<FolderIcon className="w-16 h-16" />}
 *   title="No projects yet"
 *   description="Get started by creating your first project"
 *   variant="no-data"
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
 *   variant="no-results"
 *   size="sm"
 *   action={{
 *     label: "Clear Filters",
 *     onClick: handleClearFilters,
 *     variant: "ghost"
 *   }}
 * />
 *
 * @example
 * // Error state
 * <EmptyState
 *   icon={<ExclamationTriangleIcon className="w-16 h-16" />}
 *   title="Something went wrong"
 *   description="We encountered an error loading your data"
 *   variant="error"
 *   action={{
 *     label: "Try Again",
 *     onClick: handleRetry
 *   }}
 * />
 *
 * @example
 * // No permission state
 * <EmptyState
 *   icon={<LockClosedIcon className="w-16 h-16" />}
 *   title="Access denied"
 *   description="You don't have permission to view this content"
 *   variant="no-permission"
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
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className,
  size = 'md',
  variant,
  children,
}: EmptyStateProps) {
  const sizeClasses = {
    sm: {
      container: 'py-8',
      icon: 'mb-3',
      title: 'text-base',
      description: 'text-xs mt-1',
      actions: 'mt-3 gap-2',
    },
    md: {
      container: 'py-12',
      icon: 'mb-4',
      title: 'text-lg',
      description: 'text-sm mt-2',
      actions: 'mt-4 gap-3',
    },
    lg: {
      container: 'py-16',
      icon: 'mb-6',
      title: 'text-xl',
      description: 'text-base mt-3',
      actions: 'mt-6 gap-3',
    },
  };

  const sizes = sizeClasses[size];

  return (
    <div
      className={cn(
        emptyStateVariants({ variant }),
        'text-slate-500 dark:text-slate-400',
        sizes.container,
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="max-w-md text-center">
        {icon && (
          <div className={cn(iconColorVariants({ variant }), sizes.icon)} aria-hidden="true">
            {icon}
          </div>
        )}

        <h3 className={cn('font-medium text-slate-700 dark:text-slate-300', sizes.title)}>
          {title}
        </h3>

        {description && (
          <p className={cn('text-slate-600 dark:text-slate-400', sizes.description)}>
            {description}
          </p>
        )}

        {children && <div className={cn(sizes.description)}>{children}</div>}

        {(action || secondaryAction) && (
          <div className={cn('flex items-center justify-center', sizes.actions)}>
            {action && (
              <Button onClick={action.onClick} variant={action.variant || 'default'}>
                {action.icon && <span className="mr-2">{action.icon}</span>}
                {action.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                onClick={secondaryAction.onClick}
                variant={secondaryAction.variant || 'outline'}
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
