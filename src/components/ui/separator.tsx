import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const separatorVariants = cva('shrink-0 bg-border', {
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    variant: {
      default: 'bg-border',
      muted: 'bg-muted',
      primary: 'bg-primary/20',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
});

export interface SeparatorProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
      'className' | 'orientation'
    >,
    VariantProps<typeof separatorVariants> {
  className?: string;
}

/**
 * Separator component - A visual divider between content sections.
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-20" />
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = 'horizontal', variant, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation as 'horizontal' | 'vertical'}
    className={cn(separatorVariants({ orientation, variant }), className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, separatorVariants };
