import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * RadioGroup component based on Radix UI primitives.
 * Allows single selection from a group of options.
 *
 * @example
 * // Basic usage
 * <RadioGroup defaultValue="option1">
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="option1" id="option1" />
 *     <label htmlFor="option1">Option 1</label>
 *   </div>
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="option2" id="option2" />
 *     <label htmlFor="option2">Option 2</label>
 *   </div>
 * </RadioGroup>
 *
 * @example
 * // Controlled with orientation
 * <RadioGroup
 *   value={value}
 *   onValueChange={setValue}
 *   orientation="horizontal"
 * >
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="opt1" id="opt1" />
 *     <label htmlFor="opt1">First</label>
 *   </div>
 *   <div className="flex items-center gap-3">
 *     <RadioGroupItem value="opt2" id="opt2" />
 *     <label htmlFor="opt2">Second</label>
 *   </div>
 * </RadioGroup>
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/**
 * RadioGroupItem component for individual radio options.
 * Must be used within a RadioGroup.
 *
 * @example
 * <RadioGroupItem value="option1" id="option1" />
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
