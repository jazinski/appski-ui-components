import { ButtonProps } from './button';
import * as React from 'react';
export interface ModalFooterProps {
    /** Callback when cancel button is clicked */
    onCancel?: () => void;
    /** Callback when confirm/submit button is clicked */
    onConfirm?: () => void;
    /** Text for the cancel button */
    cancelText?: string;
    /** Text for the confirm button */
    confirmText?: string;
    /** Whether the confirm button is disabled */
    confirmDisabled?: boolean;
    /** Whether the confirm button is in loading state */
    confirmLoading?: boolean;
    /** Loading text to show when confirmLoading is true */
    confirmLoadingText?: string;
    /** Variant for the confirm button */
    confirmVariant?: ButtonProps['variant'];
    /** Variant for the cancel button */
    cancelVariant?: ButtonProps['variant'];
    /** Additional CSS classes for the footer container */
    className?: string;
    /** Additional CSS classes for the button container */
    buttonContainerClassName?: string;
    /** Additional children to render before the buttons */
    children?: React.ReactNode;
    /** Type for the confirm button (submit or button) */
    confirmType?: 'submit' | 'button';
    /** Hide the cancel button */
    hideCancelButton?: boolean;
}
/**
 * ModalFooter component that provides a standardized footer layout for modals.
 * Includes cancel and confirm buttons with consistent styling and spacing.
 *
 * @example
 * // Basic usage
 * <ModalFooter
 *   onCancel={handleClose}
 *   onConfirm={handleSave}
 *   confirmText="Save"
 * />
 *
 * @example
 * // With loading state
 * <ModalFooter
 *   onCancel={handleClose}
 *   onConfirm={handleSave}
 *   confirmText="Save Changes"
 *   confirmLoading={isSaving}
 *   confirmLoadingText="Saving..."
 * />
 *
 * @example
 * // Destructive action
 * <ModalFooter
 *   onCancel={handleClose}
 *   onConfirm={handleDelete}
 *   confirmText="Delete"
 *   confirmVariant="destructive"
 * />
 *
 * @example
 * // With custom children
 * <ModalFooter
 *   onCancel={handleClose}
 *   onConfirm={handleSave}
 *   confirmText="Save"
 * >
 *   <span className="text-sm text-muted-foreground">
 *     Changes will be saved immediately
 *   </span>
 * </ModalFooter>
 */
export declare function ModalFooter({ onCancel, onConfirm, cancelText, confirmText, confirmDisabled, confirmLoading, confirmLoadingText, confirmVariant, cancelVariant, className, buttonContainerClassName, children, confirmType, hideCancelButton, }: ModalFooterProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=modal-footer.d.ts.map