import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
export type PanelGroupDirection = 'horizontal' | 'vertical';
declare const panelGroupVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const panelVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const panelResizeHandleVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    variant?: "default" | "muted" | "primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const handleGripVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Constraints a Panel declares to its group. Sizes are percentages of the group. */
export interface PanelConstraints {
    minSize?: number;
    maxSize?: number;
    collapsible?: boolean;
    collapsedSize?: number;
    defaultCollapsed?: boolean;
}
export interface PanelGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>, VariantProps<typeof panelGroupVariants> {
    direction: PanelGroupDirection;
    children: React.ReactNode;
    /** Initial sizes (percentages, ideally summing to 100). */
    defaultSizes?: number[];
    /** Controlled sizes (percentages). */
    sizes?: number[];
    onSizesChange?: (sizes: number[]) => void;
    /** Persist sizes to localStorage under this key. */
    storageKey?: string;
    /** Keyboard resize step in percent (Shift multiplies by 5). */
    keyboardStep?: number;
}
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Minimum size in percent of the group. Default 10. */
    minSize?: number;
    /** Maximum size in percent of the group. Default 100. */
    maxSize?: number;
    /** Allow this panel to be collapsed to `collapsedSize` (double-click a handle). */
    collapsible?: boolean;
    /** Size while collapsed, in percent. Default 0 (collapse-to-zero). */
    collapsedSize?: number;
    defaultCollapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    /** @internal injected by PanelGroup */
    index?: number;
    children?: React.ReactNode;
}
export interface PanelResizeHandleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDoubleClick'>, VariantProps<typeof panelResizeHandleVariants> {
    disabled?: boolean;
    /** @internal injected by PanelGroup */
    index?: number;
}
export declare const PanelGroup: React.ForwardRefExoticComponent<PanelGroupProps & React.RefAttributes<HTMLDivElement>>;
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
export declare const PanelResizeHandle: React.ForwardRefExoticComponent<PanelResizeHandleProps & React.RefAttributes<HTMLDivElement>>;
export { panelGroupVariants, panelVariants, panelResizeHandleVariants, handleGripVariants, };
//# sourceMappingURL=panel-group.d.ts.map