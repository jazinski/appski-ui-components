import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const progressVariants = cva('relative h-4 w-full overflow-hidden rounded-full bg-secondary', {
  variants: {
    size: {
      default: 'h-4',
      sm: 'h-2',
      lg: 'h-6',
    },
    variant: {
      default: '',
      success: '',
      warning: '',
      error: '',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

const progressIndicatorVariants = cva('h-full w-full flex-1 bg-primary transition-all', {
  variants: {
    variant: {
      default: 'bg-primary',
      success: 'bg-success',
      warning: 'bg-warning',
      error: 'bg-destructive',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ProgressProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'className'>,
    VariantProps<typeof progressVariants> {
  className?: string;
  /** Progress value (0-100) */
  value?: number;
  /** Show progress percentage text */
  showValue?: boolean;
}

/**
 * Progress component - Displays progress of a task or operation.
 *
 * @example
 * <Progress value={60} />
 * <Progress value={75} variant="success" showValue />
 */
const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value = 0, size, variant, showValue, ...props }, ref) => (
    <div className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ size, variant }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressIndicatorVariants({ variant }))}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && <div className="text-muted-foreground mt-1 text-right text-xs">{value}%</div>}
    </div>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants, progressIndicatorVariants };
