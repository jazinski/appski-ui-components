import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaTimes } from 'react-icons/fa';

/**
 * Sidebar Variants
 *
 * Defines the visual styles for the sidebar component.
 */
const sidebarVariants = cva(
  'flex h-full flex-col bg-slate-900 border-r border-slate-800 transition-transform duration-300 ease-in-out',
  {
    variants: {
      position: {
        fixed: 'fixed top-0 left-0 z-40',
        static: 'relative',
      },
      state: {
        open: 'translate-x-0',
        closed: '-translate-x-full',
      },
    },
    defaultVariants: {
      position: 'fixed',
      state: 'closed',
    },
  }
);

const sidebarOverlayVariants = cva(
  'fixed inset-0 z-30 bg-black/50 transition-opacity duration-300',
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
    },
    defaultVariants: {
      visible: false,
    },
  }
);

/**
 * Sidebar Props
 */
export interface SidebarProps extends VariantProps<typeof sidebarVariants> {
  /**
   * Logo content (typically an image or text)
   */
  logo?: React.ReactNode;
  /**
   * Main navigation content
   */
  children?: React.ReactNode;
  /**
   * Footer content (typically UserMenu)
   */
  footer?: React.ReactNode;
  /**
   * Whether the sidebar is open (mobile only)
   */
  open?: boolean;
  /**
   * Callback when sidebar open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Width of the sidebar
   */
  width?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Show mobile overlay when open
   */
  showOverlay?: boolean;
  /**
   * Show close button on mobile
   */
  showCloseButton?: boolean;
}

/**
 * Sidebar Component
 *
 * A navigation sidebar with logo, main content, and footer.
 * Responsive: fixed width on desktop, slide-out drawer on mobile.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Sidebar
 *   logo={<img src="/logo.svg" alt="Logo" />}
 *   footer={<UserMenu name="John" email="john@example.com" />}
 * >
 *   <MainNav items={navItems} />
 * </Sidebar>
 *
 * // Mobile with controlled state
 * const [open, setOpen] = useState(false);
 * <Sidebar
 *   open={open}
 *   onOpenChange={setOpen}
 *   logo={<img src="/logo.svg" alt="Logo" />}
 * >
 *   <MainNav items={navItems} />
 * </Sidebar>
 *
 * // Custom width
 * <Sidebar width="280px">
 *   <MainNav items={navItems} />
 * </Sidebar>
 * ```
 */
export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      logo,
      children,
      footer,
      open = false,
      onOpenChange,
      width = '240px',
      className,
      position = 'fixed',
      showOverlay = true,
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = React.useState(false);

    // Detect mobile viewport
    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // md breakpoint
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);

    // Handle ESC key to close
    React.useEffect(() => {
      if (!open || !isMobile) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onOpenChange?.(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [open, isMobile, onOpenChange]);

    // Prevent body scroll when mobile sidebar is open
    React.useEffect(() => {
      if (isMobile && open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isMobile, open]);

    const handleOverlayClick = () => {
      onOpenChange?.(false);
    };

    const handleCloseClick = () => {
      onOpenChange?.(false);
    };

    const sidebarState = isMobile ? (open ? 'open' : 'closed') : 'open';
    const showOverlayElement = isMobile && showOverlay && open;

    return (
      <>
        {/* Overlay (mobile only) */}
        {showOverlayElement && (
          <div
            className={cn(sidebarOverlayVariants({ visible: true }))}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        )}

        {/* Sidebar */}
        <aside
          ref={ref}
          className={cn(
            sidebarVariants({ position: isMobile ? position : 'static', state: sidebarState }),
            className
          )}
          style={{ width }}
          aria-label="Sidebar navigation"
          data-testid="sidebar"
          {...props}
        >
          {/* Close button (mobile only) */}
          {isMobile && showCloseButton && open && (
            <button
              type="button"
              onClick={handleCloseClick}
              className="absolute top-4 right-4 z-50 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
              aria-label="Close sidebar"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          )}

          {/* Logo Section */}
          {logo && (
            <div className="flex h-16 items-center justify-center border-b border-slate-800 px-4">
              {logo}
            </div>
          )}

          {/* Main Content (Navigation) */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto px-3 py-4">{children}</div>

          {/* Footer Section */}
          {footer && <div className="border-t border-slate-800 p-3">{footer}</div>}
        </aside>
      </>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export { sidebarVariants, sidebarOverlayVariants };
