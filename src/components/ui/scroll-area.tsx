import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const scrollAreaVariants = cva('relative overflow-hidden', {
  variants: {
    size: {
      default: 'w-full',
      sm: 'w-56',
      lg: 'w-96',
      auto: 'w-auto',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const scrollAreaScrollbarVariants = cva(
  'flex touch-none select-none transition-colors',
  {
    variants: {
      orientation: {
        vertical: 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        horizontal: 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

const scrollAreaThumbVariants = cva(
  'relative flex-1 rounded-full bg-border transition-colors hover:bg-muted-foreground/40'
);

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /** Height of the scrollable region. Any CSS value, e.g. "300px" or "100%" */
  height?: string;
  /** Render a horizontal scrollbar as well */
  scrollbarOrientation?: 'vertical' | 'horizontal' | 'both';
}

/**
 * ScrollArea component - A custom-styled scrollable region.
 *
 * @example
 * <ScrollArea height="220px">
 *   <div className="p-4">Long content…</div>
 * </ScrollArea>
 */
const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, size, height, scrollbarOrientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(scrollAreaVariants({ size }), className)}
    style={{ height }}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    {(scrollbarOrientation === 'vertical' || scrollbarOrientation === 'both') && (
      <ScrollBar orientation="vertical" />
    )}
    {(scrollbarOrientation === 'horizontal' || scrollbarOrientation === 'both') && (
      <ScrollBar orientation="horizontal" />
    )}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export interface ScrollBarProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
    'orientation'
  > {
  /** Scrollbar direction — also drives the size/shape classes. */
  orientation?: 'vertical' | 'horizontal';
}

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(scrollAreaScrollbarVariants({ orientation }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className={scrollAreaThumbVariants()} />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export {
  ScrollArea,
  ScrollBar,
  scrollAreaVariants,
  scrollAreaScrollbarVariants,
  scrollAreaThumbVariants,
};
