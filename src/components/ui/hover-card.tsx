import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const hoverCardContentVariants = cva(
  'z-50 w-64 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  {
    variants: {
      size: {
        default: 'w-64',
        sm: 'w-52',
        lg: 'w-96',
        auto: 'w-auto',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface HoverCardProps extends React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Root
> {}

/**
 * HoverCard component - A rich preview container shown on hover.
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="https://example.com">@chris</a>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <HoverCardHeader>
 *       <HoverCardTitle>Chris Jazinski</HoverCardTitle>
 *       <HoverCardDescription>Homelab self-hoster</HoverCardDescription>
 *     </HoverCardHeader>
 *   </HoverCardContent>
 * </HoverCard>
 */
const HoverCard = HoverCardPrimitive.Root;

export interface HoverCardTriggerProps extends React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Trigger
> {}

const HoverCardTrigger = HoverCardPrimitive.Trigger;

export interface HoverCardContentProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>, 'className' | 'children'>,
    VariantProps<typeof hoverCardContentVariants> {
  className?: string;
  children?: React.ReactNode;
}

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ className, size, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(hoverCardContentVariants({ size }), className)}
      {...props}
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export interface HoverCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const HoverCardHeader = ({ className, ...props }: HoverCardHeaderProps) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
HoverCardHeader.displayName = 'HoverCardHeader';

export interface HoverCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const HoverCardTitle = ({ className, ...props }: HoverCardTitleProps) => (
  <h4 className={cn('text-sm font-semibold leading-none', className)} {...props} />
);
HoverCardTitle.displayName = 'HoverCardTitle';

export interface HoverCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const HoverCardDescription = ({ className, ...props }: HoverCardDescriptionProps) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);
HoverCardDescription.displayName = 'HoverCardDescription';

export interface HoverCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const HoverCardFooter = ({ className, ...props }: HoverCardFooterProps) => (
  <div className={cn('flex items-center pt-2', className)} {...props} />
);
HoverCardFooter.displayName = 'HoverCardFooter';

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
  hoverCardContentVariants,
};
