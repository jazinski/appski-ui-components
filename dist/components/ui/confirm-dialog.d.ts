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
    variant?: 'danger' | 'warning' | 'info';
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
 * />
 */
export declare function ConfirmDialog({ open, onOpenChange, onConfirm, title, message, confirmText, cancelText, variant, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=confirm-dialog.d.ts.map