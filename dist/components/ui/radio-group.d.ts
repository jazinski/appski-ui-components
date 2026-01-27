import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
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
declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * RadioGroupItem component for individual radio options.
 * Must be used within a RadioGroup.
 *
 * @example
 * <RadioGroupItem value="option1" id="option1" />
 */
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.d.ts.map