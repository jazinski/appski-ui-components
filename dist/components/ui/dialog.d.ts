import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const dialogOverlayVariants: (props?: ({} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const dialogContentVariants: (props?: ({
    size?: "default" | "sm" | "lg" | "xl" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DialogProps {
    /** Controlled open state */
    open?: boolean;
    /** Default open state for uncontrolled usage */
    defaultOpen?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** Dialog content */
    children: React.ReactNode;
}
/**
 * Dialog component for modal dialogs with accessibility support.
 *
 * @example
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *       <DialogDescription>Dialog description text</DialogDescription>
 *     </DialogHeader>
 *     <p>Dialog body content</p>
 *     <DialogFooter>
 *       <Button variant="outline">Cancel</Button>
 *       <Button>Save</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 */
declare function Dialog({ open: controlledOpen, defaultOpen, onOpenChange, children, }: DialogProps): import("react/jsx-runtime").JSX.Element;
export interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Render as child element instead of button */
    asChild?: boolean;
}
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface DialogPortalProps {
    children: React.ReactNode;
    container?: HTMLElement | undefined;
}
declare function DialogPortal({ children, container }: DialogPortalProps): import("react/jsx-runtime").JSX.Element | null;
export type DialogOverlayProps = React.HTMLAttributes<HTMLDivElement>;
declare const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;
export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dialogContentVariants> {
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
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<HTMLDivElement>>;
export type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
declare const DialogHeader: React.ForwardRefExoticComponent<DialogHeaderProps & React.RefAttributes<HTMLDivElement>>;
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;
declare const DialogFooter: React.ForwardRefExoticComponent<DialogFooterProps & React.RefAttributes<HTMLDivElement>>;
export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
declare const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
declare const DialogDescription: React.ForwardRefExoticComponent<DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Render as child element instead of button */
    asChild?: boolean;
}
declare const DialogClose: React.ForwardRefExoticComponent<DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose, dialogOverlayVariants, dialogContentVariants, };
//# sourceMappingURL=dialog.d.ts.map