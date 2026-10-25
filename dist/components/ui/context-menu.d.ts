import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export interface ContextMenuContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
    contentRef: React.RefObject<HTMLDivElement | null>;
    /** Anchor point for the menu in viewport coordinates (null when closed). */
    position: {
        x: number;
        y: number;
    } | null;
    setPosition: (position: {
        x: number;
        y: number;
    } | null) => void;
}
export interface ContextMenuSubmenuContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
}
declare const contextMenuContentVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
declare const contextMenuItemVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ContextMenuProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
/**
 * Wraps an area that should show a menu on right-click. The child element is
 * cloned with contextmenu/keyboard handlers; the menu renders at the cursor.
 */
export declare const ContextMenu: React.FC<ContextMenuProps>;
export interface ContextMenuContentProps extends VariantProps<typeof contextMenuContentVariants> {
    children: React.ReactNode;
    className?: string;
}
export declare const ContextMenuContent: React.FC<ContextMenuContentProps>;
export interface ContextMenuLabelProps {
    children: React.ReactNode;
    className?: string;
}
export declare const ContextMenuLabel: React.FC<ContextMenuLabelProps>;
export interface ContextMenuItemProps extends VariantProps<typeof contextMenuItemVariants> {
    children: React.ReactNode;
    onSelect?: () => void;
    icon?: React.ReactNode;
    shortcut?: string;
    className?: string;
}
export declare const ContextMenuItem: React.FC<ContextMenuItemProps>;
export interface ContextMenuSeparatorProps {
    className?: string;
}
export declare const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps>;
export interface ContextMenuSubmenuProps {
    children: React.ReactNode;
}
export declare const ContextMenuSubmenu: React.FC<ContextMenuSubmenuProps>;
export interface ContextMenuSubmenuTriggerProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
export declare const ContextMenuSubmenuTrigger: React.FC<ContextMenuSubmenuTriggerProps>;
export interface ContextMenuSubmenuContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const ContextMenuSubmenuContent: React.FC<ContextMenuSubmenuContentProps>;
export { contextMenuContentVariants, contextMenuItemVariants };
export default ContextMenu;
//# sourceMappingURL=context-menu.d.ts.map