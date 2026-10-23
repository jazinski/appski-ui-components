import * as React from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const sheetOverlayVariants = cva(
  'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  {
    variants: {},
    defaultVariants: {},
  }
);

const sheetContentVariants = cva(
  'fixed z-50 flex flex-col gap-4 border border-border bg-background p-6 shadow-lg duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        left:
          'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextValue | undefined>(undefined);

function useSheetContext() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error('Sheet components must be used within a Sheet');
  }
  return context;
}

// ============================================================================
// Sheet Root
// ============================================================================

export interface SheetProps {
  /** Controlled open state */
  open?: boolean;
  /** Default open state for uncontrolled usage */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Sheet content */
  children: React.ReactNode;
}

/**
 * Sheet component for slide-over panels that dock to the edge of the screen.
 *
 * @example
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button>Open Sheet</Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitle>Sheet Title</SheetTitle>
 *       <SheetDescription>Sheet description text</SheetDescription>
 *     </SheetHeader>
 *     <p>Sheet body content</p>
 *     <SheetFooter>
 *       <Button variant="outline">Cancel</Button>
 *       <Button>Save</Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 */
function Sheet({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: SheetProps) {
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
    <SheetContext.Provider value={{ open, onOpenChange: handleOpenChange }}>
      {children}
    </SheetContext.Provider>
  );
}

// ============================================================================
// Sheet Trigger
// ============================================================================

export interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element instead of button */
  asChild?: boolean;
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { onOpenChange } = useSheetContext();

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
SheetTrigger.displayName = 'SheetTrigger';

// ============================================================================
// Sheet Portal (renders to document.body)
// ============================================================================

interface SheetPortalProps {
  children: React.ReactNode;
  container?: HTMLElement | undefined;
}

function SheetPortal({ children, container }: SheetPortalProps) {
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
// Sheet Overlay
// ============================================================================

export type SheetOverlayProps = React.HTMLAttributes<HTMLDivElement>;

const SheetOverlay = React.forwardRef<HTMLDivElement, SheetOverlayProps>(
  ({ className, ...props }, ref) => {
    const { open } = useSheetContext();

    return (
      <div
        ref={ref}
        data-state={open ? 'open' : 'closed'}
        className={cn(sheetOverlayVariants(), className)}
        {...props}
      />
    );
  }
);
SheetOverlay.displayName = 'SheetOverlay';

// ============================================================================
// Sheet Content
// ============================================================================

export interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sheetContentVariants> {
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

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  (
    {
      className,
      children,
      side,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      onClose,
      container,
      ...props
    },
    ref
  ) => {
    const { open, onOpenChange } = useSheetContext();
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

      // Focus the sheet content
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
      <SheetPortal container={container}>
        <SheetOverlay onClick={closeOnOverlayClick ? handleClose : undefined} />
        <div
          ref={contentRef}
          role="dialog"
          aria-modal="true"
          data-state={open ? 'open' : 'closed'}
          className={cn(sheetContentVariants({ side }), className)}
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
      </SheetPortal>
    );
  }
);
SheetContent.displayName = 'SheetContent';

// ============================================================================
// Sheet Header
// ============================================================================

export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-left', className)}
      {...props}
    />
  )
);
SheetHeader.displayName = 'SheetHeader';

// ============================================================================
// Sheet Footer
// ============================================================================

export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-auto flex flex-col gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
);
SheetFooter.displayName = 'SheetFooter';

// ============================================================================
// Sheet Title
// ============================================================================

export type SheetTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-foreground text-lg leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  )
);
SheetTitle.displayName = 'SheetTitle';

// ============================================================================
// Sheet Description
// ============================================================================

export type SheetDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
  )
);
SheetDescription.displayName = 'SheetDescription';

// ============================================================================
// Sheet Close (inline close button)
// ============================================================================

export interface SheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as child element instead of button */
  asChild?: boolean;
}

const SheetClose = React.forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ asChild = false, onClick, children, ...props }, ref) => {
    const { onOpenChange } = useSheetContext();

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
SheetClose.displayName = 'SheetClose';

export {
  Sheet,
  SheetTrigger,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  sheetOverlayVariants,
  sheetContentVariants,
};
