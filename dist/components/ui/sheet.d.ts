import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const sheetOverlayVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const sheetContentVariants: (props?: ({
    side?: "left" | "right" | "top" | "bottom" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SheetProps {
    /** Controlled open state */
    open?: boolean;
    /** Default open state for uncontrolled usage */
    defaultOpen?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Sheet content */
    children: React.ReactNode;
}
/**
 * Sheet component for slide-over panels that dock to the edge of the screen.
 *
 * @example
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button>Open Sheet</Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitle>Sheet Title</SheetTitle>
 *       <SheetDescription>Sheet description text</SheetDescription>
 *     </SheetHeader>
 *     <p>Sheet body content</p>
 *     <SheetFooter>
 *       <Button variant="outline">Cancel</Button>
 *       <Button>Save</Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 */
declare function Sheet({ open: controlledOpen, defaultOpen, onOpenChange, children, }: SheetProps): React.JSX.Element;
export interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Render as child element instead of button */
    asChild?: boolean;
}
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface SheetPortalProps {
    children: React.ReactNode;
    container?: HTMLElement | undefined;
}
declare function SheetPortal({ children, container }: SheetPortalProps): React.JSX.Element | null;
export type SheetOverlayProps = React.HTMLAttributes<HTMLDivElement>;
declare const SheetOverlay: React.ForwardRefExoticComponent<SheetOverlayProps & React.RefAttributes<HTMLDivElement>>;
export interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sheetContentVariants> {
    /** Whether to close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Whether to close on escape key */
    closeOnEscape?: boolean;
    /** Whether to show the close button */
    showCloseButton?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Portal container */
    container?: HTMLElement;
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;
declare const SheetHeader: React.ForwardRefExoticComponent<SheetHeaderProps & React.RefAttributes<HTMLDivElement>>;
export type SheetFooterProps = React.HTMLAttributes<HTMLDivElement>;
declare const SheetFooter: React.ForwardRefExoticComponent<SheetFooterProps & React.RefAttributes<HTMLDivElement>>;
export type SheetTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
declare const SheetTitle: React.ForwardRefExoticComponent<SheetTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export type SheetDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const SheetDescription: React.ForwardRefExoticComponent<SheetDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export interface SheetCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Render as child element instead of button */
    asChild?: boolean;
}
declare const SheetClose: React.ForwardRefExoticComponent<SheetCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { Sheet, SheetTrigger, SheetPortal, SheetOverlay, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose, sheetOverlayVariants, sheetContentVariants, };
//# sourceMappingURL=sheet.d.ts.map