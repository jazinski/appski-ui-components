import { ButtonProps } from './button';
import * as React from 'react';
export interface LoadingButtonProps extends Omit<ButtonProps, 'isLoading' | 'loadingText'> {
    /** Whether the button is in a loading state */
    loading?: boolean;
    /** Text to display when loading (defaults to children with "..." appended) */
    loadingText?: string;
}
/**
 * LoadingButton is a convenience wrapper around Button that simplifies loading state management.
 * It provides a more intuitive API by using `loading` instead of `isLoading`.
 *
 * @example
 * // Basic usage
 * const [saving, setSaving] = useState(false);
 *
 * <LoadingButton
 *   loading={saving}
 *   onClick={handleSave}
 * >
 *   Save
 * </LoadingButton>
 *
 * @example
 * // With custom loading text
 * <LoadingButton
 *   loading={submitting}
 *   loadingText="Submitting form..."
 *   onClick={handleSubmit}
 * >
 *   Submit
 * </LoadingButton>
 *
 * @example
 * // With variant
 * <LoadingButton
 *   loading={deleting}
 *   loadingText="Deleting..."
 *   variant="destructive"
 *   onClick={handleDelete}
 * >
 *   Delete
 * </LoadingButton>
 */
export declare const LoadingButton: React.ForwardRefExoticComponent<LoadingButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=loading-button.d.ts.map