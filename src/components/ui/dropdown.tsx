import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaChevronRight } from 'react-icons/fa';

// ============================================================================
// Types and Interfaces
// ============================================================================

export interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

export interface DropdownSubmenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// ============================================================================
// Variants
// ============================================================================

const dropdownContentVariants = cva(
  'absolute z-50 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg outline-none animate-in fade-in-0 zoom-in-95 dark:bg-slate-800 dark:border-slate-700',
  {
    variants: {
      align: {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
      },
      side: {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
      },
    },
    defaultVariants: {
      align: 'start',
      side: 'bottom',
    },
  }
);

const dropdownItemVariants = cva(
  'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 dark:focus:bg-slate-700',
  {
    variants: {
      variant: {
        default: 'hover:bg-slate-100 dark:hover:bg-slate-700',
        destructive:
          'text-red-600 hover:bg-red-50 focus:bg-red-50 dark:text-red-400 dark:hover:bg-red-950 dark:focus:bg-red-950',
      },
      disabled: {
        true: 'pointer-events-none opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      disabled: false,
    },
  }
);

// ============================================================================
// Context
// ============================================================================

const DropdownContext = React.createContext<DropdownContextValue | undefined>(undefined);

const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown');
  }
  return context;
};

const DropdownSubmenuContext = React.createContext<DropdownSubmenuContextValue | undefined>(
  undefined
);

const useDropdownSubmenuContext = () => {
  const context = React.useContext(DropdownSubmenuContext);
  if (!context) {
    throw new Error('DropdownSubmenu components must be used within a DropdownSubmenu');
  }
  return context;
};

// ============================================================================
// Dropdown Root
// ============================================================================

export interface DropdownProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const triggerRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [controlledOpen, onOpenChange]
  );

  // Close on outside click
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!triggerRef.current?.contains(target) && !contentRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, setOpen]);

  // Close on Escape key
  React.useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, setOpen]);

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
};

// ============================================================================
// Dropdown Trigger
// ============================================================================

export interface DropdownTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children, asChild = false }) => {
  const { open, setOpen, triggerRef } = useDropdownContext();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!open);
    } else if (event.key === 'ArrowDown' && !open) {
      event.preventDefault();
      setOpen(true);
    }
  };

  if (asChild && React.isValidElement(children)) {
    // Extract child props safely and merge with our props
    const childProps = (children.props || {}) as Record<string, unknown>;

    return React.cloneElement(children as React.ReactElement, {
      ...childProps,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: triggerRef as any,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      'aria-expanded': open,
      'aria-haspopup': 'menu' as const,
    });
  }

  return (
    <button
      ref={triggerRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-expanded={open}
      aria-haspopup="menu"
    >
      {children}
    </button>
  );
};

// ============================================================================
// Dropdown Content
// ============================================================================

export interface DropdownContentProps extends VariantProps<typeof dropdownContentVariants> {
  children: React.ReactNode;
  className?: string;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  className,
  align = 'start',
  side = 'bottom',
}) => {
  const { open, setOpen, contentRef } = useDropdownContext();
  // Track focus index for keyboard navigation (setter is used in keyboard handlers)
  const [_currentFocusIndex, setCurrentFocusIndex] = React.useState<number>(-1);

  // Get all focusable items
  const getFocusableItems = React.useCallback(() => {
    if (!contentRef.current) return [];
    return Array.from(
      contentRef.current.querySelectorAll<HTMLElement>(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )
    );
  }, [contentRef]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const items = getFocusableItems();
      if (items.length === 0) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setCurrentFocusIndex((prev) => {
            const next = prev + 1 >= items.length ? 0 : prev + 1;
            items[next]?.focus();
            return next;
          });
          break;
        case 'ArrowUp':
          event.preventDefault();
          setCurrentFocusIndex((prev) => {
            const next = prev - 1 < 0 ? items.length - 1 : prev - 1;
            items[next]?.focus();
            return next;
          });
          break;
        case 'Home':
          event.preventDefault();
          items[0]?.focus();
          setCurrentFocusIndex(0);
          break;
        case 'End':
          event.preventDefault();
          items[items.length - 1]?.focus();
          setCurrentFocusIndex(items.length - 1);
          break;
        case 'Tab':
          event.preventDefault();
          setOpen(false);
          break;
      }
    };

    const currentContent = contentRef.current;

    contentRef.current?.addEventListener('keydown', handleKeyDown);
    return () => currentContent?.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, setOpen, getFocusableItems]);

  // Focus first item when opened
  React.useEffect(() => {
    if (open) {
      const items = getFocusableItems();
      if (items.length > 0) {
        items[0]?.focus();
        setCurrentFocusIndex(0);
      }
    } else {
      setCurrentFocusIndex(-1);
    }
  }, [open, getFocusableItems]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      role="menu"
      aria-orientation="vertical"
      className={cn(dropdownContentVariants({ align, side }), className)}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Dropdown Label
// ============================================================================

export interface DropdownLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100',
        className
      )}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Dropdown Item
// ============================================================================

export interface DropdownItemProps extends VariantProps<typeof dropdownItemVariants> {
  children: React.ReactNode;
  onSelect?: () => void;
  icon?: React.ReactNode;
  shortcut?: string;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onSelect,
  icon,
  shortcut,
  variant = 'default',
  disabled = false,
  className,
}) => {
  const { setOpen } = useDropdownContext();

  const handleSelect = () => {
    if (disabled) return;
    onSelect?.();
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect();
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? undefined : 0}
      aria-disabled={disabled ? true : undefined}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      className={cn(dropdownItemVariants({ variant, disabled }), className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400">
          {shortcut}
        </span>
      )}
    </div>
  );
};

// ============================================================================
// Dropdown Separator
// ============================================================================

export interface DropdownSeparatorProps {
  className?: string;
}

export const DropdownSeparator: React.FC<DropdownSeparatorProps> = ({ className }) => {
  return (
    <div role="separator" className={cn('my-1 h-px bg-slate-200 dark:bg-slate-700', className)} />
  );
};

// ============================================================================
// Dropdown Submenu
// ============================================================================

export interface DropdownSubmenuProps {
  children: React.ReactNode;
}

export const DropdownSubmenu: React.FC<DropdownSubmenuProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownSubmenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownSubmenuContext.Provider>
  );
};

// ============================================================================
// Dropdown Submenu Trigger
// ============================================================================

export interface DropdownSubmenuTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const DropdownSubmenuTrigger: React.FC<DropdownSubmenuTriggerProps> = ({
  children,
  icon,
  className,
}) => {
  const { open, setOpen } = useDropdownSubmenuContext();

  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setOpen(true);
    } else if (event.key === 'ArrowLeft' && open) {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(!open);
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={0}
      aria-haspopup="menu"
      aria-expanded={open}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      className={cn(dropdownItemVariants({ variant: 'default', disabled: false }), className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      <FaChevronRight className="ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" />
    </div>
  );
};

// ============================================================================
// Dropdown Submenu Content
// ============================================================================

export interface DropdownSubmenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownSubmenuContent: React.FC<DropdownSubmenuContentProps> = ({
  children,
  className,
}) => {
  const { open } = useDropdownSubmenuContext();

  if (!open) return null;

  return (
    <div
      role="menu"
      aria-orientation="vertical"
      className={cn(
        'animate-in fade-in-0 zoom-in-95 absolute top-0 left-full ml-1 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800',
        className
      )}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Exports
// ============================================================================

export { dropdownContentVariants, dropdownItemVariants };
export default Dropdown;
