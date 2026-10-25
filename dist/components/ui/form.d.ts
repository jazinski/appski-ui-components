import { z } from 'zod';
import * as React from 'react';
type FormErrors = Record<string, string | undefined>;
type FormTouched = Record<string, boolean>;
export interface FormContextValue {
    errors: FormErrors;
    touched: FormTouched;
    isSubmitting: boolean;
    setFieldValue: (name: string, value: unknown) => void;
    setFieldTouched: (name: string, touched: boolean) => void;
    validateField: (name: string, value: unknown) => Promise<string | undefined>;
}
export declare const useFormContext: () => FormContextValue;
export interface FormProps<T extends z.ZodType> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'> {
    /** Zod schema for validation */
    schema: T;
    /** Initial form values */
    initialValues: z.infer<T>;
    /** Submit handler with validated values */
    onSubmit: (values: z.infer<T>) => void | Promise<void>;
    /** Validate on blur */
    validateOnBlur?: boolean;
    /** Validate on change */
    validateOnChange?: boolean;
    /** Children can be a render function receiving form state */
    children: React.ReactNode | ((formState: FormContextValue) => React.ReactNode);
}
/**
 * Form component with Zod validation support.
 *
 * @example
 * const schema = z.object({
 *   email: z.string().email(),
 *   password: z.string().min(8)
 * });
 *
 * <Form
 *   schema={schema}
 *   initialValues={{ email: '', password: '' }}
 *   onSubmit={handleSubmit}
 * >
 *   <FormField name="email" label="Email">
 *     <Input type="email" />
 *   </FormField>
 * </Form>
 */
export declare function Form<T extends z.ZodType>({ schema, initialValues, onSubmit, validateOnBlur, validateOnChange, children, className, ...props }: FormProps<T>): import("react/jsx-runtime").JSX.Element;
export interface FormFieldProps {
    /** Field name (must match schema key) */
    name: string;
    /** Field label */
    label?: string;
    /** Show required indicator */
    required?: boolean;
    /** Help text */
    description?: string;
    /** Child input component */
    children: React.ReactElement;
}
/**
 * FormField component - Wraps an input with label, error display, and validation.
 *
 * @example
 * <FormField name="email" label="Email" required>
 *   <Input type="email" />
 * </FormField>
 */
export declare function FormField({ name, label, required, description, children }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** Message type */
    variant?: 'default' | 'error' | 'success';
}
/**
 * FormMessage component - Display form-level messages.
 */
export declare function FormMessage({ variant, className, children, ...props }: FormMessageProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=form.d.ts.map