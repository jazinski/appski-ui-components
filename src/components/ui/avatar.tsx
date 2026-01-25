import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * Avatar Variants
 *
 * Defines the visual styles for the avatar component.
 */
const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden flex-shrink-0 select-none',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-20 w-20 text-2xl',
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

const statusIndicatorVariants = cva(
  'absolute border-2 border-white dark:border-slate-900 rounded-full',
  {
    variants: {
      status: {
        online: 'bg-green-500',
        offline: 'bg-slate-400',
        away: 'bg-yellow-500',
        busy: 'bg-red-500',
      },
      size: {
        xs: 'h-1.5 w-1.5 bottom-0 right-0',
        sm: 'h-2 w-2 bottom-0 right-0',
        md: 'h-2.5 w-2.5 bottom-0 right-0',
        lg: 'h-3 w-3 bottom-0.5 right-0.5',
        xl: 'h-3.5 w-3.5 bottom-0.5 right-0.5',
        '2xl': 'h-4 w-4 bottom-1 right-1',
      },
    },
    defaultVariants: {
      status: 'online',
      size: 'md',
    },
  }
);

/**
 * Get initials from a name string
 */
function getInitials(name: string): string {
  if (!name) return '?';

  const parts = name.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return '?';

  if (parts.length === 1) {
    // Single word: take first 2 characters
    const firstPart = parts[0];
    return firstPart ? firstPart.substring(0, 2).toUpperCase() : '?';
  }

  // Multiple words: take first letter of first 2 words
  const first = parts[0]?.charAt(0) || '';
  const second = parts[1]?.charAt(0) || '';
  return (first + second).toUpperCase() || '?';
}

/**
 * Generate a consistent background color based on string hash
 */
function stringToColor(str: string): string {
  if (!str) return 'bg-slate-500';

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Color palette for initials
  const colors = [
    'bg-indigo-500',
    'bg-blue-500',
    'bg-cyan-500',
    'bg-teal-500',
    'bg-green-500',
    'bg-lime-500',
    'bg-amber-500',
    'bg-orange-500',
    'bg-red-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-violet-500',
  ];

  return colors[Math.abs(hash) % colors.length] ?? 'bg-slate-500';
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  /**
   * Image source URL
   */
  src?: string;
  /**
   * Name to display as initials fallback
   */
  name?: string;
  /**
   * Alt text for the image (accessibility)
   */
  alt?: string;
  /**
   * Status indicator
   */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /**
   * Show loading skeleton
   */
  loading?: boolean;
  /**
   * Custom initials (overrides name-based initials)
   */
  initials?: string;
}

/**
 * Avatar Component
 *
 * Displays a user profile image with fallback to initials.
 *
 * @example
 * ```tsx
 * // With image
 * <Avatar src="/user.jpg" name="John Doe" alt="John Doe" />
 *
 * // With initials fallback
 * <Avatar name="Jane Smith" />
 *
 * // With status indicator
 * <Avatar name="Alice" status="online" />
 *
 * // Different sizes
 * <Avatar name="Bob" size="xs" />
 * <Avatar name="Carol" size="xl" />
 *
 * // Square variant
 * <Avatar name="David" shape="square" />
 *
 * // Loading state
 * <Avatar loading />
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      size,
      shape,
      src,
      name = '',
      alt,
      status,
      loading = false,
      initials: customInitials,
      ...props
    },
    ref
  ) => {
    const [imgError, setImgError] = React.useState(false);
    const [imgLoading, setImgLoading] = React.useState(!!src);

    // Reset error state when src changes
    React.useEffect(() => {
      if (src) {
        setImgError(false);
        setImgLoading(true);
      }
    }, [src]);

    const displayInitials = customInitials || getInitials(name);
    const backgroundColor = stringToColor(name);
    const showImage = src && !imgError && !loading;
    const showInitials = !showImage && !loading;
    const showSkeleton = loading || imgLoading;

    return (
      <div ref={ref} className={cn(avatarVariants({ size, shape }), className)} {...props}>
        {/* Image */}
        {showImage && (
          <img
            src={src}
            alt={alt || name || 'Avatar'}
            className={cn(
              'h-full w-full object-cover',
              showSkeleton && 'opacity-0',
              !showSkeleton && 'opacity-100 transition-opacity duration-200'
            )}
            onError={() => {
              setImgError(true);
              setImgLoading(false);
            }}
            onLoad={() => {
              setImgLoading(false);
            }}
          />
        )}

        {/* Initials fallback */}
        {showInitials && (
          <div
            className={cn(
              'flex h-full w-full items-center justify-center font-medium text-white',
              backgroundColor
            )}
          >
            {displayInitials}
          </div>
        )}

        {/* Loading skeleton */}
        {showSkeleton && !showImage && (
          <div className="h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" />
        )}

        {/* Status indicator */}
        {status && !loading && (
          <span
            className={cn(statusIndicatorVariants({ status, size }))}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
