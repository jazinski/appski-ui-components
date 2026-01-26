import * as React from 'react';
import { Button, type ButtonProps } from './button';
import { cn } from '@/lib/utils';

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
export function ModalFooter({
  onCancel,
  onConfirm,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  confirmDisabled = false,
  confirmLoading = false,
  confirmLoadingText,
  confirmVariant = 'default',
  cancelVariant = 'outline',
  className,
  buttonContainerClassName,
  children,
  confirmType = 'button',
  hideCancelButton = false,
}: ModalFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50',
        className
      )}
    >
      {children && <div className="flex-1">{children}</div>}
      <div
        className={cn('flex items-center gap-3', !children && 'ml-auto', buttonContainerClassName)}
      >
        {!hideCancelButton && (
          <Button type="button" onClick={onCancel} variant={cancelVariant}>
            {cancelText}
          </Button>
        )}
        <Button
          type={confirmType}
          onClick={onConfirm}
          variant={confirmVariant}
          disabled={confirmDisabled || confirmLoading}
          isLoading={confirmLoading}
          {...(confirmLoadingText && { loadingText: confirmLoadingText })}
        >
          {confirmText}
        </Button>
      </div>
    </div>
  );
}
