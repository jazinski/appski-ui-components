import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Avatar, type AvatarProps } from './avatar';
import { Tooltip } from './tooltip';

const overflowVariants = cva(
  'relative inline-flex flex-shrink-0 select-none items-center justify-center font-medium text-slate-600 dark:text-slate-300 ring-2 ring-white dark:ring-slate-900',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
        '2xl': 'h-20 w-20 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
);

export interface AvatarGroupItem {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Name displayed as initials fallback and used as the tooltip label
   */
  name?: string;
  /**
   * Alt text for the image (accessibility)
   */
  alt?: string;
  /**
   * Custom initials (overrides name-based initials)
   */
  initials?: string;
  /**
   * Status indicator
   */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /**
   * Custom tooltip content (defaults to the item name)
   */
  tooltip?: React.ReactNode;
}

export interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overflowVariants> {
  /**
   * Avatars to stack, rendered left to right
   */
  items: AvatarGroupItem[];
  /**
   * Maximum number of avatars shown before the '+N' overflow indicator
   */
  maxCount?: number;
  /**
   * Horizontal overlap between avatars, in pixels
   *
   * @default -8
   */
  overlap?: number;
  /**
   * Show a tooltip with the member name on hover
   *
   * @default true
   */
  showTooltips?: boolean;
}

/**
 * AvatarGroup Component
 *
 * Stacks Avatar components with a negative-margin overlap and collapses
 * excess members behind a '+N' overflow indicator.
 *
 * @example
 * ```tsx
 * <AvatarGroup
 *   items={[
 *     { name: 'Chris Jazinski' },
 *     { name: 'Alex Blanc', status: 'online' },
 *     { src: '/ada.jpg', name: 'Ada Lovelace' },
 *   ]}
 *   maxCount={2}
 * />
 * ```
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      className,
      items,
      size,
      shape,
      maxCount,
      overlap = -8,
      showTooltips = true,
      ...props
    },
    ref
  ) => {
    const safeMax =
      maxCount !== undefined ? Math.max(0, Math.min(maxCount, items.length)) : items.length;
    const visible = items.slice(0, safeMax);
    const overflow = items.length - visible.length;

    return (
      <div
        ref={ref}
        role="group"
        className={cn('inline-flex items-center', className)}
        {...props}
      >
        {visible.map((item, index) => {
          // The overlap margin lives on this wrapper because Tooltip renders
          // its own inline-block trigger div around the avatar.
          const wrapStyle = index > 0 && overlap !== 0 ? { marginLeft: overlap } : undefined;

          // Strip the group-only `tooltip` field so it never reaches the DOM.
          const { tooltip: _groupTooltip, ...avatarItem } = item;
          const avatarProps = { ...avatarItem, size, shape } as AvatarProps;
          if (index > 0) {
            avatarProps.className = 'ring-2 ring-white dark:ring-slate-900';
          }
          const avatar = <Avatar {...avatarProps} />;

          const tooltipContent = item.tooltip ?? item.name;
          const inner =
            !showTooltips || !tooltipContent ? (
              avatar
            ) : (
              <Tooltip content={tooltipContent}>{avatar}</Tooltip>
            );

          return (
            <span
              key={index}
              className="relative z-10 inline-flex"
              style={wrapStyle}
            >
              {inner}
            </span>
          );
        })}

        {overflow > 0 && (
          <span className="relative z-10 inline-flex" style={{ marginLeft: overlap }}>
            <Tooltip content={items.slice(safeMax).map((i) => i.name).filter(Boolean).join(', ')}>
              <div
                className={cn(overflowVariants({ size, shape }), 'bg-slate-100 dark:bg-slate-700')}
                aria-label={`${overflow} more`}
                data-testid="avatar-group-overflow"
              >
                +{overflow}
              </div>
            </Tooltip>
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
