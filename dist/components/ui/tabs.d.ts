import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const tabsListVariants: (props?: ({
    variant?: "default" | "underline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "underline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsListVariants> {
    /** The value of the initially active tab */
    defaultValue: string;
    /** Controlled active tab value */
    value?: string;
    /** Callback when active tab changes */
    onValueChange?: (value: string) => void;
}
/**
 * Tabs component for organizing content into separate views.
 *
 * @example
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 */
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export type TabsListProps = React.HTMLAttributes<HTMLDivElement>;
declare const TabsList: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>;
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Unique identifier for this tab */
    value: string;
}
declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Value matching the corresponding TabsTrigger */
    value: string;
    /** Whether to keep the content mounted when inactive */
    forceMount?: boolean;
}
declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants };
//# sourceMappingURL=tabs.d.ts.map