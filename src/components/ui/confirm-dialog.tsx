import * as React from 'react';
import { AlertTriangle, Info, HelpCircle, Trash2, Loader2 } from 'lucide-react';
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
export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false,
}: ConfirmDialogProps) {
  const handleConfirm = () => {
    onConfirm();
    if (!loading) {
      onOpenChange(false);
    }
  };

  const variantConfig = {
    danger: {
      icon: Trash2,
      iconClassName: 'text-destructive',
      iconBgClassName: 'bg-destructive/10',
      headerGradient: 'from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30',
      titleColor: 'from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400',
      buttonVariant: 'destructive' as const,
      buttonClassName: 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700',
    },
    warning: {
      icon: AlertTriangle,
      iconClassName: 'text-amber-600 dark:text-amber-400',
      iconBgClassName: 'bg-amber-100 dark:bg-amber-950/50',
      headerGradient: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30',
      titleColor: 'from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400',
      buttonVariant: 'default' as const,
      buttonClassName: 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700',
    },
    info: {
      icon: Info,
      iconClassName: 'text-blue-600 dark:text-blue-400',
      iconBgClassName: 'bg-blue-100 dark:bg-blue-950/50',
      headerGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
      titleColor: 'from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400',
      buttonVariant: 'default' as const,
      buttonClassName: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700',
    },
    default: {
      icon: HelpCircle,
      iconClassName: 'text-purple-600 dark:text-purple-400',
      iconBgClassName: 'bg-purple-100 dark:bg-purple-950/50',
      headerGradient: 'from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30',
      titleColor: 'from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400',
      buttonVariant: 'default' as const,
      buttonClassName: 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700',
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden p-0">
        {/* Header with gradient */}
        <div className={cn('bg-gradient-to-r px-6 py-4', config.headerGradient)}>
          <div className="flex items-center gap-4">
            <div className={cn('rounded-full p-3', config.iconBgClassName)}>
              <IconComponent className={cn('h-6 w-6', config.iconClassName)} />
            </div>
            <DialogHeader className="space-y-1 p-0">
              <DialogTitle
                className={cn(
                  'bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent',
                  config.titleColor
                )}
              >
                {title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 py-4">
          <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
            {message}
          </DialogDescription>
        </div>

        {/* Actions */}
        <DialogFooter className="border-border bg-muted/50 border-t px-6 py-4">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
            {cancelText}
          </Button>
          <Button
            variant={config.buttonVariant}
            onClick={handleConfirm}
            disabled={loading}
            className={cn(config.buttonClassName, loading && 'cursor-not-allowed opacity-70')}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </span>
            ) : (
              confirmText
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Hook for easier usage with async confirmation
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
export function useConfirmDialog(options: UseConfirmDialogOptions): UseConfirmDialogReturn {
  const [isOpen, setIsOpen] = React.useState(false);
  const resolveRef = React.useRef<((value: boolean) => void) | null>(null);

  const confirm = React.useCallback(() => {
    return new Promise<boolean>((resolve) => {
      resolveRef.current = resolve;
      setIsOpen(true);
    });
  }, []);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
    resolveRef.current?.(false);
    resolveRef.current = null;
  }, []);

  const handleConfirm = React.useCallback(() => {
    setIsOpen(false);
    resolveRef.current?.(true);
    resolveRef.current = null;
  }, []);

  const ConfirmDialogComponent: React.FC = React.useCallback(
    () => (
      <ConfirmDialog
        open={isOpen}
        onOpenChange={handleClose}
        onConfirm={handleConfirm}
        title={options.title}
        message={options.message}
        {...(options.confirmText !== undefined && { confirmText: options.confirmText })}
        {...(options.cancelText !== undefined && { cancelText: options.cancelText })}
        {...(options.variant !== undefined && { variant: options.variant })}
      />
    ),
    [isOpen, handleClose, handleConfirm, options]
  );

  return { confirm, ConfirmDialogComponent };
}
