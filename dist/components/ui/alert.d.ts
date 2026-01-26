import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const alertVariants: (props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    /** Show icon for the alert variant */
    showIcon?: boolean;
    /** Allow alert to be dismissed */
    dismissible?: boolean;
    /** Callback when alert is dismissed */
    onDismiss?: () => void;
}
/**
 * Alert component for displaying important messages to users.
 * Supports different variants (info, success, warning, error) with optional icons and dismiss button.
 *
 * @example
 * <Alert variant="success" showIcon>
 *   <AlertTitle>Success!</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 *
 * @example
 * <Alert variant="error" dismissible onDismiss={() => console.log('dismissed')}>
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 */
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertTitle, AlertDescription };
//# sourceMappingURL=alert.d.ts.map