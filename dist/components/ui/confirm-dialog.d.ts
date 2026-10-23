import * as React from 'react';
export interface ConfirmDialogProps {
    /** Whether the dialog is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange: (open: boolean) => void;
    /** Callback when confirm button is clicked */
    onConfirm: () => void;
    /** Dialog title */
    title: string;
    /** Dialog message/description */
    message: string;
    /** Confirm button text */
    confirmText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Visual variant of the dialog */
    variant?: 'danger' | 'warning' | 'info' | 'default';
    /** Loading state - shows spinner and disables buttons */
    loading?: boolean;
}
/**
 * ConfirmDialog component for confirmation prompts with variant styling.
 * Built on top of the Dialog component with a simplified API.
 *
 * @example
 * <ConfirmDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onConfirm={handleDelete}
 *   title="Delete Item"
 *   message="Are you sure you want to delete this item? This action cannot be undone."
 *   variant="danger"
 *   loading={isDeleting}
 * />
 */
export declare function ConfirmDialog({ open, onOpenChange, onConfirm, title, message, confirmText, cancelText, variant, loading, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export interface UseConfirmDialogOptions {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info' | 'default';
}
export interface UseConfirmDialogReturn {
    confirm: () => Promise<boolean>;
    ConfirmDialogComponent: React.FC;
}
/**
 * Hook for using ConfirmDialog with async/await pattern.
 * Returns a confirm function that returns a promise and a component to render.
 *
 * @example
 * const { confirm, ConfirmDialogComponent } = useConfirmDialog({
 *   title: 'Delete Item',
 *   message: 'Are you sure?',
 *   variant: 'danger'
 * });
 *
 * async function handleDelete() {
 *   if (await confirm()) {
 *     // User confirmed
 *   }
 * }
 *
 * return (
 *   <>
 *     <Button onClick={handleDelete}>Delete</Button>
 *     <ConfirmDialogComponent />
 *   </>
 * );
 */
export declare function useConfirmDialog(options: UseConfirmDialogOptions): UseConfirmDialogReturn;
//# sourceMappingURL=confirm-dialog.d.ts.map