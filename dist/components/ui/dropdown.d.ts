import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export interface DropdownContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
    triggerRef: React.RefObject<HTMLElement>;
    contentRef: React.RefObject<HTMLDivElement>;
}
export interface DropdownSubmenuContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}
declare const dropdownContentVariants: (props?: ({
    align?: "end" | "center" | "start" | null | undefined;
    side?: "top" | "bottom" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dropdownItemVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DropdownProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}
export declare const Dropdown: React.FC<DropdownProps>;
export interface DropdownTriggerProps {
    children: React.ReactElement;
    asChild?: boolean;
}
export declare const DropdownTrigger: React.FC<DropdownTriggerProps>;
export interface DropdownContentProps extends VariantProps<typeof dropdownContentVariants> {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownContent: React.FC<DropdownContentProps>;
export interface DropdownLabelProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownLabel: React.FC<DropdownLabelProps>;
export interface DropdownItemProps extends VariantProps<typeof dropdownItemVariants> {
    children: React.ReactNode;
    onSelect?: () => void;
    icon?: React.ReactNode;
    shortcut?: string;
    className?: string;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export interface DropdownSeparatorProps {
    className?: string;
}
export declare const DropdownSeparator: React.FC<DropdownSeparatorProps>;
export interface DropdownSubmenuProps {
    children: React.ReactNode;
}
export declare const DropdownSubmenu: React.FC<DropdownSubmenuProps>;
export interface DropdownSubmenuTriggerProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
export declare const DropdownSubmenuTrigger: React.FC<DropdownSubmenuTriggerProps>;
export interface DropdownSubmenuContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownSubmenuContent: React.FC<DropdownSubmenuContentProps>;
export { dropdownContentVariants, dropdownItemVariants };
export default Dropdown;
//# sourceMappingURL=dropdown.d.ts.map