import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimesCircle,
  FaTimes,
} from 'react-icons/fa';

// Toast Provider Context
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

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

// Toast Item Component
const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'border-border bg-background text-foreground',
        success:
          'border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-100',
        error:
          'border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-100',
        warning:
          'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/50 dark:text-yellow-100',
        info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ToastItemProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  toast: Toast;
  onClose: () => void;
}

const ToastItem = React.forwardRef<HTMLDivElement, ToastItemProps>(
  ({ toast, onClose, variant, className, ...props }, ref) => {
    const Icon = React.useMemo(() => {
      switch (variant || toast.variant) {
        case 'success':
          return FaCheckCircle;
        case 'error':
          return FaTimesCircle;
        case 'warning':
          return FaExclamationCircle;
        case 'info':
          return FaInfoCircle;
        default:
          return null;
      }
    }, [variant, toast.variant]);

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        className={cn(toastVariants({ variant: variant || toast.variant }), className)}
        {...props}
      >
        {Icon && (
          <div className="mt-0.5 flex-shrink-0">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="grid flex-1 gap-1">
          {toast.title && <div className="text-sm font-semibold leading-none">{toast.title}</div>}
          <div className="text-sm leading-snug opacity-90">{toast.description}</div>
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:hover:bg-white/10"
            >
              {toast.action.label}
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-label="Close"
        >
          <FaTimes className="h-4 w-4" />
        </button>
      </div>
    );
  }
);
ToastItem.displayName = 'ToastItem';

// Toast Container Component
interface ToastContainerProps {
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
}

const positionClasses = {
  'top-right': 'top-0 right-0 sm:top-4 sm:right-4',
  'top-left': 'top-0 left-0 sm:top-4 sm:left-4',
  'bottom-right': 'bottom-0 right-0 sm:bottom-4 sm:right-4',
  'bottom-left': 'bottom-0 left-0 sm:bottom-4 sm:left-4',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 sm:top-4',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4',
};

const ToastContainer = React.forwardRef<HTMLDivElement, ToastContainerProps>(
  ({ position = 'top-right' }, ref) => {
    const { toasts, removeToast } = useToast();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted || toasts.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          'pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4',
          positionClasses[position]
        )}
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    );
  }
);
ToastContainer.displayName = 'ToastContainer';

// Toast Provider Component
interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastContainerProps['position'];
  duration?: number;
  max?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'top-right',
  duration = 5000,
  max = 5,
}) => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const timeoutsRef = React.useRef<Map<string, NodeJS.Timeout>>(new Map());

  const removeToast = React.useCallback((id: string) => {
    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = React.useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        // Remove oldest toasts if exceeding max
        if (updated.length > max) {
          const removed = updated.slice(0, updated.length - max);
          removed.forEach((t) => {
            const timeout = timeoutsRef.current.get(t.id);
            if (timeout) {
              clearTimeout(timeout);
              timeoutsRef.current.delete(t.id);
            }
          });
          return updated.slice(updated.length - max);
        }
        return updated;
      });

      // Auto dismiss
      const toastDuration = toast.duration ?? duration;
      if (toastDuration > 0) {
        const timeout = setTimeout(() => {
          removeToast(id);
        }, toastDuration);
        timeoutsRef.current.set(id, timeout);
      }

      return id;
    },
    [duration, max, removeToast]
  );

  const success = React.useCallback(
    (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => {
      return addToast({ ...options, description, variant: 'success' });
    },
    [addToast]
  );

  const error = React.useCallback(
    (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => {
      return addToast({ ...options, description, variant: 'error' });
    },
    [addToast]
  );

  const warning = React.useCallback(
    (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => {
      return addToast({ ...options, description, variant: 'warning' });
    },
    [addToast]
  );

  const info = React.useCallback(
    (description: string, options?: Partial<Omit<Toast, 'id' | 'variant'>>) => {
      return addToast({ ...options, description, variant: 'info' });
    },
    [addToast]
  );

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, []);

  const value = React.useMemo(
    () => ({ toasts, addToast, removeToast, success, error, warning, info }),
    [toasts, addToast, removeToast, success, error, warning, info]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer position={position} />
    </ToastContext.Provider>
  );
};

// useToast Hook
export const useToast = (): ToastContextValue => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export { ToastItem, ToastContainer };
export type { Toast, ToastContextValue, ToastProviderProps };
