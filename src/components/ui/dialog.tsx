import * as React from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const dialogOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    variants: {},
    defaultVariants: {},
  }
);

const dialogContentVariants = cva(
  'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        default: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface DialogContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | undefined>(undefined);

function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog');
  }
  return context;
}

// ============================================================================
// Dialog Root
// ============================================================================

export interface DialogProps {
  /** Controlled open state */
  open?: boolean;
  /** Default open state for uncontrolled usage */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Dialog content */
  children: React.ReactNode;
}

/**
 * Dialog component for modal dialogs with accessibility support.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogDescription>Dialog description text</DialogDescription>
 *     </DialogHeader>
 *     <p>Dialog body content</p>
 *     <DialogFooter>
 *       <Button variant="outline">Cancel</Button>
 *       <Button>Save</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 */
function Dialog({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange]
  );

  return (
    <DialogContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

// ============================================================================
// Dialog Trigger
// ============================================================================

export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element instead of button */
  asChild?: boolean;
}

const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { onOpenChange } = useDialogContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      onOpenChange(true);
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{ onClick?: React.MouseEventHandler }>,
        {
          onClick: (e: React.MouseEvent) => {
            (children as React.ReactElement<{ onClick?: React.MouseEventHandler }>).props.onClick?.(
              e
            );
            onOpenChange(true);
          },
        }
      );
    }

    return (
      <button ref={ref} type="button" onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);
DialogTrigger.displayName = 'DialogTrigger';

// ============================================================================
// Dialog Portal (renders to document.body)
// ============================================================================

interface DialogPortalProps {
  children: React.ReactNode;
  container?: HTMLElement | undefined;
}

function DialogPortal({ children, container }: DialogPortalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) return null;

  const portalContainer = container ?? document.body;

  return (
    <>
      {React.Children.map(children, (child) =>
        portalContainer ? createPortal(child, portalContainer) : child
      )}
    </>
  );
}

// ============================================================================
// Dialog Overlay
// ============================================================================

export type DialogOverlayProps = React.HTMLAttributes<HTMLDivElement>;

const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => {
    const { open } = useDialogContext();

    return (
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={cn(dialogOverlayVariants(), className)}
        {...props}
      />
    );
  }
);
DialogOverlay.displayName = 'DialogOverlay';

// ============================================================================
// Dialog Content
// ============================================================================

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dialogContentVariants> {
  /** Whether to close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Portal container */
  container?: HTMLElement;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  (
    {
      className,
      children,
      size,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      onClose,
      container,
      ...props
    },
    ref
  ) => {
    const { open, onOpenChange } = useDialogContext();
    const contentRef = React.useRef<HTMLDivElement>(null);
    const previouslyFocusedElement = React.useRef<HTMLElement | null>(null);

    // Combine refs
    React.useImperativeHandle(ref, () => {
      if (!contentRef.current) {
        throw new Error('Content ref is not attached');
      }
      return contentRef.current;
    });

    const handleClose = React.useCallback(() => {
      onOpenChange(false);
      onClose?.();
    }, [onOpenChange, onClose]);

    // Handle ESC key
    React.useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          handleClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [open, closeOnEscape, handleClose]);

    // Focus trap and body scroll lock
    React.useEffect(() => {
      if (!open) return;

      // Save previously focused element
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      // Focus the dialog content
      const focusableElements = contentRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements?.[0] as HTMLElement;
      firstFocusable?.focus();

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore body scroll
        document.body.style.overflow = originalOverflow;
        // Restore focus
        previouslyFocusedElement.current?.focus();
      };
    }, [open]);

    // Focus trap
    React.useEffect(() => {
      if (!open) return;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const focusableElements = contentRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) return;

        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }, [open]);

    if (!open) return null;

    return (
      <DialogPortal container={container}>
        <DialogOverlay onClick={closeOnOverlayClick ? handleClose : undefined} />
        <div
          ref={contentRef}
          role="dialog"
          aria-modal="true"
          data-state={open ? 'open' : 'closed'}
          className={cn(dialogContentVariants({ size }), className)}
          onClick={(e) => {
            e.stopPropagation();
          }}
          {...props}
        >
          {children}
          {showCloseButton && (
            <button
              type="button"
              onClick={handleClose}
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = 'DialogContent';

// ============================================================================
// Dialog Header
// ============================================================================

export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
      {...props}
    />
  )
);
DialogHeader.displayName = 'DialogHeader';

// ============================================================================
// Dialog Footer
// ============================================================================

export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
);
DialogFooter.displayName = 'DialogFooter';

// ============================================================================
// Dialog Title
// ============================================================================

export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-foreground text-lg leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  )
);
DialogTitle.displayName = 'DialogTitle';

// ============================================================================
// Dialog Description
// ============================================================================

export type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
  )
);
DialogDescription.displayName = 'DialogDescription';

// ============================================================================
// Dialog Close (inline close button)
// ============================================================================

export interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element instead of button */
  asChild?: boolean;
}

const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { onOpenChange } = useDialogContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      onOpenChange(false);
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{ onClick?: React.MouseEventHandler }>,
        {
          onClick: (e: React.MouseEvent) => {
            (children as React.ReactElement<{ onClick?: React.MouseEventHandler }>).props.onClick?.(
              e
            );
            onOpenChange(false);
          },
        }
      );
    }

    return (
      <button ref={ref} type="button" onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }
);
DialogClose.displayName = 'DialogClose';

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  dialogOverlayVariants,
  dialogContentVariants,
};
