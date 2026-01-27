import { AlertTriangle, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './dialog';
import { Button } from './button';
import { cn } from '@/lib/utils';

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
export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  const variantConfig = {
    danger: {
      icon: AlertTriangle,
      iconClassName: 'text-destructive',
      iconBgClassName: 'bg-destructive/10',
      buttonVariant: 'destructive' as const,
      buttonClassName: undefined,
    },
    warning: {
      icon: AlertTriangle,
      iconClassName: 'text-yellow-600 dark:text-yellow-400',
      iconBgClassName: 'bg-yellow-100 dark:bg-yellow-900/30',
      buttonVariant: 'default' as const,
      buttonClassName:
        'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700',
    },
    info: {
      icon: Info,
      iconClassName: 'text-blue-600 dark:text-blue-400',
      iconBgClassName: 'bg-blue-100 dark:bg-blue-900/30',
      buttonVariant: 'default' as const,
      buttonClassName: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700',
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div
              className={cn(
                'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
                config.iconBgClassName
              )}
            >
              <IconComponent className={cn('h-6 w-6', config.iconClassName)} />
            </div>
            <div className="flex-1">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="mt-2">{message}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {cancelText}
          </Button>
          <Button
            variant={config.buttonVariant}
            onClick={handleConfirm}
            className={config.buttonClassName}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
