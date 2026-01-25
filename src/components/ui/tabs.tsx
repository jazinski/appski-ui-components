import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tabsListVariants = cva(
  'inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
  {
    variants: {
      variant: {
        default: '',
        underline: 'bg-transparent rounded-none border-b border-border p-0 gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        underline:
          'rounded-none border-b-2 border-transparent pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: 'default' | 'underline';
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsListVariants> {
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
const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, defaultValue, value, onValueChange, variant = 'default', children, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const activeTab = value ?? internalValue;

    const setActiveTab = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [value, onValueChange]
    );

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant: variant ?? 'default' }}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className, ...props }, ref) => {
  const { variant } = useTabsContext();
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn(tabsListVariants({ variant, className }))}
      {...props}
    />
  );
});
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique identifier for this tab */
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, disabled, ...props }, ref) => {
    const { activeTab, setActiveTab, variant } = useTabsContext();
    const isActive = activeTab === value;
    const panelId = `tabpanel-${value}`;
    const triggerId = `tab-${value}`;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={triggerId}
        aria-selected={isActive}
        aria-controls={panelId}
        data-state={isActive ? 'active' : 'inactive'}
        disabled={disabled}
        className={cn(tabsTriggerVariants({ variant, className }))}
        onClick={() => setActiveTab(value)}
        tabIndex={isActive ? 0 : -1}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Value matching the corresponding TabsTrigger */
  value: string;
  /** Whether to keep the content mounted when inactive */
  forceMount?: boolean;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, forceMount = false, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === value;
    const panelId = `tabpanel-${value}`;
    const triggerId = `tab-${value}`;

    if (!isActive && !forceMount) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={panelId}
        aria-labelledby={triggerId}
        hidden={!isActive}
        tabIndex={0}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          !isActive && 'hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants };
