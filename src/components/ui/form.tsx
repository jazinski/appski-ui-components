import * as React from 'react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Label } from './label';

type FormErrors = Record<string, string | undefined>;
type FormTouched = Record<string, boolean>;

export interface FormContextValue {
  errors: FormErrors;
  touched: FormTouched;
  isSubmitting: boolean;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  validateField: (name: string, value: any) => Promise<string | undefined>;
}

const FormContext = React.createContext<FormContextValue | undefined>(undefined);

export const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  return context;
};

export interface FormProps<T extends z.ZodType> extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  'onSubmit' | 'children'
> {
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
export function Form<T extends z.ZodType>({
  schema,
  initialValues,
  onSubmit,
  validateOnBlur = true,
  validateOnChange = false,
  children,
  className,
  ...props
}: FormProps<T>) {
  const [values, setValues] = React.useState<z.infer<T>>(initialValues);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<FormTouched>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const validateField = React.useCallback(
    async (name: string, value: any): Promise<string | undefined> => {
      try {
        const fieldSchema = (schema as any).shape[name];
        if (fieldSchema) {
          await fieldSchema.parseAsync(value);
        }
        return undefined;
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.errors[0]?.message;
        }
        return 'Validation error';
      }
    },
    [schema]
  );

  const setFieldValue = React.useCallback(
    async (name: string, value: any) => {
      setValues((prev) => ({ ...prev, [name]: value }));

      if (validateOnChange) {
        const error = await validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [validateField, validateOnChange]
  );

  const setFieldTouched = React.useCallback(
    async (name: string, isTouched: boolean) => {
      setTouched((prev) => ({ ...prev, [name]: isTouched }));

      if (isTouched && validateOnBlur) {
        const error = await validateField(name, values[name]);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [validateField, validateOnBlur, values]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedValues = await schema.parseAsync(values);
      await onSubmit(validatedValues);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const path = err.path.join('.');
          newErrors[path] = err.message;
        });
        setErrors(newErrors);

        // Mark all fields as touched
        const allTouched: FormTouched = {};
        Object.keys(values).forEach((key) => {
          allTouched[key] = true;
        });
        setTouched(allTouched);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contextValue: FormContextValue = {
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
    validateField,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className={cn('space-y-4', className)} {...props}>
        {typeof children === 'function' ? children(contextValue) : children}
      </form>
    </FormContext.Provider>
  );
}

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
export function FormField({ name, label, required, description, children }: FormFieldProps) {
  const { errors, touched, setFieldValue, setFieldTouched } = useFormContext();
  const error = touched[name] ? errors[name] : undefined;
  const id = `form-field-${name}`;

  const childWithProps = React.cloneElement(children, {
    id,
    name,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : description ? `${id}-description` : undefined,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = e.target.value;
      setFieldValue(name, value);
      // Call original onChange if it exists
      if (children.props.onChange) {
        children.props.onChange(e);
      }
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFieldTouched(name, true);
      // Call original onBlur if it exists
      if (children.props.onBlur) {
        children.props.onBlur(e);
      }
    },
  });

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={id} {...(required && { required })}>
          {label}
        </Label>
      )}
      {childWithProps}
      {description && !error && (
        <p id={`${id}-description`} className="text-muted-foreground text-xs">
          {description}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-destructive text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Message type */
  variant?: 'default' | 'error' | 'success';
}

/**
 * FormMessage component - Display form-level messages.
 */
export function FormMessage({
  variant = 'default',
  className,
  children,
  ...props
}: FormMessageProps) {
  if (!children) return null;

  return (
    <p
      className={cn(
        'text-sm',
        {
          'text-muted-foreground': variant === 'default',
          'text-destructive': variant === 'error',
          'text-success': variant === 'success',
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
