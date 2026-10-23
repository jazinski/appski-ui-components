import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaChevronRight } from 'react-icons/fa';

// ============================================================================
// Types and Interfaces
// ============================================================================

export interface ContextMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
  /** Anchor point for the menu in viewport coordinates (null when closed). */
  position: { x: number; y: number } | null;
  setPosition: (position: { x: number; y: number } | null) => void;
}

export interface ContextMenuSubmenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// ============================================================================
// Variants
// ============================================================================

// Item styling intentionally mirrors dropdownItemVariants so both menus read
// as the same component family; the content wrapper is shared as well.
const contextMenuContentVariants = cva(
  'fixed z-50 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg outline-none animate-in fade-in-0 zoom-in-95 dark:bg-slate-800 dark:border-slate-700'
);

const contextMenuItemVariants = cva(
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

const ContextMenuContext = React.createContext<ContextMenuContextValue | undefined>(undefined);

const useContextMenuContext = () => {
  const context = React.useContext(ContextMenuContext);
  if (!context) {
    throw new Error('ContextMenu components must be used within a ContextMenu');
  }
  return context;
};

const ContextMenuSubmenuContext = React.createContext<ContextMenuSubmenuContextValue | undefined>(
  undefined
);

const useContextMenuSubmenuContext = () => {
  const context = React.useContext(ContextMenuSubmenuContext);
  if (!context) {
    throw new Error('ContextMenuSubmenu components must be used within a ContextMenuSubmenu');
  }
  return context;
};

// ============================================================================
// Context Menu Root
// ============================================================================

export interface ContextMenuProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Wraps an area that should show a menu on right-click. The child element is
 * cloned with contextmenu/keyboard handlers; the menu renders at the cursor.
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const [position, setPosition] = React.useState<{ x: number; y: number } | null>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const anchorRef = React.useRef<HTMLElement>(null);

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

  const openAt = React.useCallback(
    (x: number, y: number) => {
      setPosition({ x, y });
      setOpen(true);
    },
    [setOpen]
  );

  // Close on outside click / outside contextmenu
  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!contentRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('contextmenu', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('contextmenu', handleClickOutside);
    };
  }, [open, setOpen]);

  // Close on Escape key and return focus to the anchor
  React.useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        anchorRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, setOpen]);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    openAt(event.clientX, event.clientY);
  };

  // Keyboard users reach the menu through the wrapper: Shift+F10 / Menu key
  // opens it anchored to the focused element (matches native context menu a11y).
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'F10' && event.shiftKey) || event.key === 'ContextMenu') {
      event.preventDefault();
      const rect = anchorRef.current?.getBoundingClientRect();
      const x = rect ? rect.left : 0;
      const y = rect ? rect.bottom : 0;
      openAt(x, y);
    }
  };

  return (
    <ContextMenuContext.Provider value={{ open, setOpen, contentRef, position, setPosition }}>
      <div
        ref={anchorRef as React.RefObject<HTMLDivElement>}
        className="relative outline-none"
        tabIndex={0}
        onContextMenu={handleContextMenu}
        onKeyDown={handleKeyDown}
      >
        {children}
      </div>
    </ContextMenuContext.Provider>
  );
};

// ============================================================================
// Context Menu Content
// ============================================================================

export interface ContextMenuContentProps
  extends VariantProps<typeof contextMenuContentVariants> {
  children: React.ReactNode;
  className?: string;
}

export const ContextMenuContent: React.FC<ContextMenuContentProps> = ({ children, className }) => {
  const { open, setOpen, contentRef, position } = useContextMenuContext();
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

  // Keep the menu inside the viewport
  const adjustPosition = React.useCallback(() => {
    const content = contentRef.current;
    if (!content || !position) return;
    const { offsetWidth: width, offsetHeight: height } = content;
    let { x, y } = position;
    if (x + width > window.innerWidth) {
      x = Math.max(8, window.innerWidth - width - 8);
    }
    if (y + height > window.innerHeight) {
      y = Math.max(8, window.innerHeight - height - 8);
    }
    content.style.left = `${x}px`;
    content.style.top = `${y}px`;
  }, [contentRef, position]);

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
    return () => {
      currentContent?.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, setOpen, getFocusableItems]);

  // Position after mount, then focus first item when opened
  React.useEffect(() => {
    if (open) {
      adjustPosition();
      const items = getFocusableItems();
      if (items.length > 0) {
        items[0]?.focus();
        setCurrentFocusIndex(0);
      }
    } else {
      setCurrentFocusIndex(-1);
    }
  }, [open, getFocusableItems, adjustPosition]);

  if (!open || !position) return null;

  return (
    <div
      ref={contentRef}
      role="menu"
      aria-orientation="vertical"
      style={{ left: position.x, top: position.y }}
      className={cn(contextMenuContentVariants(), className)}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Context Menu Label
// ============================================================================

export interface ContextMenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const ContextMenuLabel: React.FC<ContextMenuLabelProps> = ({ children, className }) => {
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
// Context Menu Item
// ============================================================================

export interface ContextMenuItemProps extends VariantProps<typeof contextMenuItemVariants> {
  children: React.ReactNode;
  onSelect?: () => void;
  icon?: React.ReactNode;
  shortcut?: string;
  className?: string;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  children,
  onSelect,
  icon,
  shortcut,
  variant = 'default',
  disabled = false,
  className,
}) => {
  const { setOpen } = useContextMenuContext();

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
      className={cn(contextMenuItemVariants({ variant, disabled }), className)}
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
// Context Menu Separator
// ============================================================================

export interface ContextMenuSeparatorProps {
  className?: string;
}

export const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({ className }) => {
  return (
    <div role="separator" className={cn('my-1 h-px bg-slate-200 dark:bg-slate-700', className)} />
  );
};

// ============================================================================
// Context Menu Submenu
// ============================================================================

export interface ContextMenuSubmenuProps {
  children: React.ReactNode;
}

export const ContextMenuSubmenu: React.FC<ContextMenuSubmenuProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ContextMenuSubmenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </ContextMenuSubmenuContext.Provider>
  );
};

// ============================================================================
// Context Menu Submenu Trigger
// ============================================================================

export interface ContextMenuSubmenuTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const ContextMenuSubmenuTrigger: React.FC<ContextMenuSubmenuTriggerProps> = ({
  children,
  icon,
  className,
}) => {
  const { open, setOpen } = useContextMenuSubmenuContext();

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
      className={cn(contextMenuItemVariants({ variant: 'default', disabled: false }), className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      <FaChevronRight className="ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" />
    </div>
  );
};

// ============================================================================
// Context Menu Submenu Content
// ============================================================================

export interface ContextMenuSubmenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export const ContextMenuSubmenuContent: React.FC<ContextMenuSubmenuContentProps> = ({
  children,
  className,
}) => {
  const { open } = useContextMenuSubmenuContext();

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

export { contextMenuContentVariants, contextMenuItemVariants };
export default ContextMenu;
