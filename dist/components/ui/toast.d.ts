import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
interface Toast {
    id: string;
    title?: string;
    description: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
interface ToastContextValue {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => string;
    removeToast: (id: string) => void;
    success: (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => string;
    error: (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => string;
    warning: (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => string;
    info: (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => string;
}
declare const toastVariants: (props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ToastItemProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
    toast: Toast;
    onClose: () => void;
}
declare const ToastItem: React.ForwardRefExoticComponent<ToastItemProps & React.RefAttributes<HTMLDivElement>>;
interface ToastContainerProps {
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}
declare const ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps & React.RefAttributes<HTMLDivElement>>;
interface ToastProviderProps {
    children: React.ReactNode;
    position?: ToastContainerProps['position'];
    duration?: number;
    max?: number;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const useToast: () => ToastContextValue;
export { ToastItem, ToastContainer };
export type { Toast, ToastContextValue, ToastProviderProps };
//# sourceMappingURL=toast.d.ts.map