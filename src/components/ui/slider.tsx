import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sliderVariants = cva('relative flex w-full touch-none select-none items-center', {
  variants: {
    size: {
      default: 'h-2',
      sm: 'h-1',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const sliderTrackVariants = cva('relative w-full grow overflow-hidden rounded-full bg-secondary', {
  variants: {
    size: {
      default: 'h-2',
      sm: 'h-1',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const sliderRangeVariants = cva('absolute h-full bg-primary', {
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

const sliderThumbVariants = cva(
  'block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-5 w-5',
        sm: 'h-4 w-4',
        lg: 'h-6 w-6',
      },
      variant: {
        default: 'border-primary',
        success: 'border-success',
        warning: 'border-warning',
        error: 'border-destructive',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

export interface SliderProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'className'>,
    VariantProps<typeof sliderVariants>,
    VariantProps<typeof sliderRangeVariants> {
  className?: string;
  /** Show current value(s) above the slider */
  showValue?: boolean;
}

/**
 * Slider component - A control for selecting a value from a range.
 *
 * @example
 * <Slider defaultValue={[50]} max={100} step={1} />
 * <Slider defaultValue={[25, 75]} max={100} step={1} showValue />
 */
const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, size, variant, showValue, ...props }, ref) => {
    const [values, setValues] = React.useState<number[]>(props.defaultValue || props.value || [0]);

    React.useEffect(() => {
      if (props.value) {
        setValues(props.value);
      }
    }, [props.value]);

    const handleValueChange = (newValues: number[]) => {
      setValues(newValues);
      if (props.onValueChange) {
        props.onValueChange(newValues);
      }
    };

    return (
      <div className="relative w-full">
        {showValue && (
          <div className="text-muted-foreground mb-2 flex justify-between text-xs">
            {values.map((value, index) => (
              <span key={index}>{value}</span>
            ))}
          </div>
        )}
        <SliderPrimitive.Root
          ref={ref}
          className={cn(sliderVariants({ size }), className)}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
            <SliderPrimitive.Range className={cn(sliderRangeVariants({ variant }))} />
          </SliderPrimitive.Track>
          {values.map((_, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className={cn(sliderThumbVariants({ size, variant }))}
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    );
  }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, sliderVariants, sliderTrackVariants, sliderRangeVariants, sliderThumbVariants };
