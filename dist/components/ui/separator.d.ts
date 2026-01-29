import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
declare const separatorVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "default" | "muted" | "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SeparatorProps extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'className' | 'orientation'>, VariantProps<typeof separatorVariants> {
    className?: string;
}
/**
 * Separator component - A visual divider between content sections.
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-20" />
 */
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
export { Separator, separatorVariants };
//# sourceMappingURL=separator.d.ts.map