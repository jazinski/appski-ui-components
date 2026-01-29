import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { Tooltip } from './tooltip';

const mainNavVariants = cva('flex flex-col gap-1 py-2', {
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-xs',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const mainNavItemVariants = cva(
  'flex items-center gap-3 rounded-md px-3 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
        active:
          'bg-indigo-600 text-white hover:bg-indigo-700 border-l-4 border-indigo-500 pl-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const mainNavSectionVariants = cva('px-3 py-2 text-xs font-semibold text-muted-foreground', {
  variants: {
    spacing: {
      default: 'mt-4 mb-1',
      none: '',
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
});

export interface NavItem {
  /** Label text for the navigation item */
  label: string;
  /** URL or path for the navigation item */
  href: string;
  /** Icon component (from lucide-react or similar) */
  icon: React.ComponentType<{ className?: string }>;
  /** Optional badge text or number */
  badge?: string | number;
  /** Whether this item is currently active */
  active?: boolean;
  /** Optional click handler (overrides href navigation) */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
}

export interface NavSection {
  /** Optional section header text */
  title?: string;
  /** Navigation items in this section */
  items: NavItem[];
}

export interface MainNavProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof mainNavVariants> {
  /** Navigation items or sections */
  items: NavItem[] | NavSection[];
  /** Callback when a nav item is clicked */
  onItemClick?: (item: NavItem) => void;
  /** Whether the sidebar is collapsed (shows icons only) */
  collapsed?: boolean;
}

/**
 * MainNav component for vertical navigation with icons, labels, and badges.
 *
 * Features:
 * - Icon + label for each item
 * - Active state with indigo background and left border
 * - Hover states
 * - Optional badge/count indicators
 * - Section headers with dividers
 * - Keyboard navigation support
 * - Accessible with proper ARIA roles
 *
 * @example
 * ```tsx
 * <MainNav
 *   items={[
 *     { label: 'Home', href: '/', icon: Home, active: true },
 *     { label: 'Settings', href: '/settings', icon: Settings, badge: '3' }
 *   ]}
 * />
 * ```
 */
export const MainNav = React.forwardRef<HTMLElement, MainNavProps>(
  ({ items, onItemClick, size, collapsed = false, className, ...props }, ref) => {
    // Check if items is an array of sections or simple items
    const isSections = items.length > 0 && items[0] && 'items' in items[0];
    const sections: NavSection[] = isSections
      ? (items as NavSection[])
      : [{ items: items as NavItem[] }];

    const handleItemClick = (e: React.MouseEvent, item: NavItem) => {
      if (item.disabled) {
        e.preventDefault();
        return;
      }

      if (item.onClick) {
        e.preventDefault();
        item.onClick();
      }

      onItemClick?.(item);
    };

    const handleKeyDown = (e: React.KeyboardEvent, item: NavItem) => {
      if (item.disabled) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (item.onClick) {
          item.onClick();
        }
        onItemClick?.(item);
      }
    };

    return (
      <nav
        ref={ref}
        className={cn(mainNavVariants({ size, className }))}
        aria-label="Main navigation"
        {...props}
      >
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && !collapsed && (
              <div
                className={cn(
                  mainNavSectionVariants({ spacing: sectionIndex === 0 ? 'none' : 'default' })
                )}
              >
                {section.title}
              </div>
            )}
            {section.items.map((item, itemIndex) => {
              const Icon = item.icon;
              const variant = item.active ? 'active' : 'default';

              const linkContent = (
                <a
                  key={`${sectionIndex}-${itemIndex}`}
                  href={item.href}
                  onClick={(e) => {
                    handleItemClick(e, item);
                  }}
                  onKeyDown={(e) => {
                    handleKeyDown(e, item);
                  }}
                  className={cn(
                    mainNavItemVariants({ variant }),
                    collapsed && 'justify-center px-0'
                  )}
                  aria-current={item.active ? 'page' : undefined}
                  aria-disabled={item.disabled}
                  aria-label={collapsed ? item.label : undefined}
                  tabIndex={item.disabled ? -1 : 0}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge !== undefined && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </a>
              );

              // Wrap in tooltip when collapsed
              if (collapsed) {
                return (
                  <Tooltip key={`${sectionIndex}-${itemIndex}`} content={item.label}>
                    {linkContent}
                  </Tooltip>
                );
              }

              return linkContent;
            })}
          </div>
        ))}
      </nav>
    );
  }
);

MainNav.displayName = 'MainNav';

export { mainNavVariants, mainNavItemVariants, mainNavSectionVariants };
