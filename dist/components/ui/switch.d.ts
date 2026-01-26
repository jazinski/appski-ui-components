import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const switchVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "warning" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const switchThumbVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>, VariantProps<typeof switchVariants> {
    /** Controlled checked state */
    checked?: boolean;
    /** Default checked state for uncontrolled usage */
    defaultChecked?: boolean;
    /** Callback when checked state changes */
    onCheckedChange?: (checked: boolean) => void;
    /** Label text for the switch */
    label?: string;
    /** Description text below the label */
    description?: string;
    /** Position of the label relative to the switch */
    labelPosition?: 'left' | 'right';
    /** Whether the switch is required */
    required?: boolean;
    /** Name attribute for form submission */
    name?: string;
    /** Value attribute for form submission */
    value?: string;
}
/**
 * Switch component for toggling between on/off states.
 *
 * @example
 * // Basic usage
 * <Switch label="Enable notifications" />
 *
 * @example
 * // Controlled
 * <Switch
 *   checked={isEnabled}
 *   onCheckedChange={setIsEnabled}
 *   label="Dark mode"
 * />
 */
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
export interface SwitchGroupProps {
    /** Group label */
    label?: string;
    /** Description for the group */
    description?: string;
    /** Switch items */
    children: React.ReactNode;
    /** Additional classes */
    className?: string;
}
/**
 * SwitchGroup component for grouping related switches.
 *
 * @example
 * <SwitchGroup label="Notification Settings">
 *   <Switch label="Email notifications" />
 *   <Switch label="Push notifications" />
 *   <Switch label="SMS notifications" />
 * </SwitchGroup>
 */
declare const SwitchGroup: React.ForwardRefExoticComponent<SwitchGroupProps & React.RefAttributes<HTMLDivElement>>;
export { Switch, SwitchGroup, switchVariants, switchThumbVariants };
//# sourceMappingURL=switch.d.ts.map