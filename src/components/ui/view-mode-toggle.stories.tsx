import type { Meta, StoryObj } from '@storybook/react';
import { ViewModeToggle } from './view-mode-toggle';
import { useState } from 'react';
import { LayoutGrid, List, BarChart3, Table, Map, Calendar } from 'lucide-react';

/**
 * ViewModeToggle provides a clean interface for switching between different view modes.
 * Common use cases include list vs grid views, data visualization modes, and layout toggles.
 *
 * ## Features
 * - **Type-safe**: Generic type parameter ensures type safety
 * - **Flexible**: Support for 2+ view mode options
 * - **Icon-based**: Uses icons for visual clarity
 * - **Accessible**: Proper ARIA labels and pressed states
 * - **Responsive**: Adjustable button sizes
 *
 * ## Usage
 * ```tsx
 * const [view, setView] = useState<'list' | 'grid'>('list');
 *
 * <ViewModeToggle
 *   value={view}
 *   onChange={setView}
 *   options={[
 *     { value: 'list', icon: <List />, label: 'List View' },
 *     { value: 'grid', icon: <LayoutGrid />, label: 'Grid View' }
 *   ]}
 * />
 * ```
 */
const meta: Meta<typeof ViewModeToggle> = {
  title: 'Components/ViewModeToggle',
  component: ViewModeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A toggle component for switching between different view modes with icon-based buttons.

### Key Features
- Type-safe with TypeScript generics
- Supports 2 or more view mode options
- Icon-based visual interface
- Accessible with ARIA labels and pressed states
- Customizable button sizes
- Clean, compact design

### Common Use Cases
- List vs Grid view toggles
- Data visualization mode switches
- Layout preference toggles
- Dashboard view modes
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Current active view mode',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when view mode changes',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'icon'],
      description: 'Size of the icon buttons',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default list vs grid view toggle (most common use case).
 */
export const ListGrid: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid'>('list');

      return (
        <div className="space-y-4">
          <ViewModeToggle
            value={view}
            onChange={setView}
            options={[
              { value: 'list', icon: <List className="h-4 w-4" />, label: 'List View' },
              { value: 'grid', icon: <LayoutGrid className="h-4 w-4" />, label: 'Grid View' },
            ]}
          />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Current view: <span className="font-semibold">{view}</span>
          </p>
        </div>
      );
    },
  ],
};

/**
 * Toggle with three view modes (list, grid, and analytics).
 */
export const ThreeOptions: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid' | 'chart'>('list');

      return (
        <div className="space-y-4">
          <ViewModeToggle
            value={view}
            onChange={setView}
            options={[
              { value: 'list', icon: <List className="h-4 w-4" />, label: 'List View' },
              { value: 'grid', icon: <LayoutGrid className="h-4 w-4" />, label: 'Grid View' },
              { value: 'chart', icon: <BarChart3 className="h-4 w-4" />, label: 'Chart View' },
            ]}
          />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Current view: <span className="font-semibold">{view}</span>
          </p>
        </div>
      );
    },
  ],
};

/**
 * Toggle with four view modes.
 */
export const FourOptions: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid' | 'table' | 'map'>('list');

      return (
        <div className="space-y-4">
          <ViewModeToggle
            value={view}
            onChange={setView}
            options={[
              { value: 'list', icon: <List className="h-4 w-4" />, label: 'List View' },
              { value: 'grid', icon: <LayoutGrid className="h-4 w-4" />, label: 'Grid View' },
              { value: 'table', icon: <Table className="h-4 w-4" />, label: 'Table View' },
              { value: 'map', icon: <Map className="h-4 w-4" />, label: 'Map View' },
            ]}
          />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Current view: <span className="font-semibold">{view}</span>
          </p>
        </div>
      );
    },
  ],
};

/**
 * Small size variant.
 */
export const SmallSize: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid'>('list');

      return (
        <ViewModeToggle
          value={view}
          onChange={setView}
          size="sm"
          options={[
            { value: 'list', icon: <List className="h-3 w-3" />, label: 'List View' },
            { value: 'grid', icon: <LayoutGrid className="h-3 w-3" />, label: 'Grid View' },
          ]}
        />
      );
    },
  ],
};

/**
 * Large size variant.
 */
export const LargeSize: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid'>('list');

      return (
        <ViewModeToggle
          value={view}
          onChange={setView}
          size="lg"
          options={[
            { value: 'list', icon: <List className="h-5 w-5" />, label: 'List View' },
            { value: 'grid', icon: <LayoutGrid className="h-5 w-5" />, label: 'Grid View' },
          ]}
        />
      );
    },
  ],
};

/**
 * Real-world example: Data table with view mode toggle in toolbar.
 */
export const DataTableToolbar: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'list' | 'grid'>('list');

      return (
        <div className="w-full max-w-4xl space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Products</h2>
              <div className="text-sm text-slate-500 dark:text-slate-400">126 items</div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="search"
                placeholder="Search products..."
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800"
              />
              <ViewModeToggle
                value={view}
                onChange={setView}
                options={[
                  { value: 'list', icon: <List className="h-4 w-4" />, label: 'List View' },
                  { value: 'grid', icon: <LayoutGrid className="h-4 w-4" />, label: 'Grid View' },
                ]}
              />
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            {view === 'list' ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-slate-200 dark:bg-slate-700" />
                      <div>
                        <div className="font-medium">Product {i}</div>
                        <div className="text-sm text-slate-500">
                          SKU-{i}00{i}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold">${99 + i}.99</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="space-y-2 rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                  >
                    <div className="h-24 rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="font-medium">Product {i}</div>
                    <div className="text-sm text-slate-500">
                      SKU-{i}00{i}
                    </div>
                    <div className="font-semibold">${99 + i}.99</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    },
  ],
  parameters: {
    layout: 'padded',
  },
};

/**
 * Real-world example: Dashboard with multiple visualization modes.
 */
export const DashboardViewToggle: Story = {
  decorators: [
    () => {
      const [view, setView] = useState<'grid' | 'list' | 'chart' | 'calendar'>('grid');

      return (
        <div className="w-full max-w-5xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                View your metrics in different formats
              </p>
            </div>

            <ViewModeToggle
              value={view}
              onChange={setView}
              options={[
                { value: 'grid', icon: <LayoutGrid className="h-4 w-4" />, label: 'Grid View' },
                { value: 'list', icon: <List className="h-4 w-4" />, label: 'List View' },
                { value: 'chart', icon: <BarChart3 className="h-4 w-4" />, label: 'Chart View' },
                {
                  value: 'calendar',
                  icon: <Calendar className="h-4 w-4" />,
                  label: 'Calendar View',
                },
              ]}
            />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex h-64 items-center justify-center text-slate-500 dark:text-slate-400">
              <div className="text-center">
                <div className="mb-2 text-lg font-medium">
                  {view.charAt(0).toUpperCase() + view.slice(1)} View
                </div>
                <div className="text-sm">Content would be displayed here</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
  ],
  parameters: {
    layout: 'padded',
  },
};
