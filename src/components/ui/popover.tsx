import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const popoverContentVariants = cva(
  'z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      size: {
        default: 'w-72',
        sm: 'w-56',
        lg: 'w-96',
        auto: 'w-auto',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface PopoverProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
> {}

/**
 * Popover component - A floating container for interactive content.
 *
 * @example
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button variant="outline">Open</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <div>Content goes here</div>
 *   </PopoverContent>
 * </Popover>
 */
const Popover = PopoverPrimitive.Root;

export interface PopoverTriggerProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
> {}

const PopoverTrigger = PopoverPrimitive.Trigger;

export interface PopoverContentProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, 'className' | 'children'>,
    VariantProps<typeof popoverContentVariants> {
  className?: string;
  children?: React.ReactNode;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, size, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverContentVariants({ size }), className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export interface PopoverAnchorProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Anchor
> {}

const PopoverAnchor = PopoverPrimitive.Anchor;

export interface PopoverCloseProps extends React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Close
> {}

const PopoverClose = PopoverPrimitive.Close;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  popoverContentVariants,
};
