import * as React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export interface ViewModeOption<T extends string> {
  /** Unique value for this view mode */
  value: T;
  /** Icon component to display */
  icon: React.ReactNode;
  /** Tooltip text for the button */
  label: string;
}

export interface ViewModeToggleProps<T extends string> {
  /** Current active view mode */
  value: T;
  /** Callback when view mode changes */
  onChange: (value: T) => void;
  /** Available view mode options */
  options: ViewModeOption<T>[];
  /** Additional CSS classes for the container */
  className?: string;
  /** Size of the icon buttons */
  size?: 'sm' | 'default' | 'lg' | 'icon';
}

/**
 * ViewModeToggle component for switching between different view modes.
 * Provides a clean toggle interface with icon buttons.
 *
 * @example
 * // Basic usage with list and grid views
 * import { Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/outline';
 *
 * <ViewModeToggle
 *   value={viewMode}
 *   onChange={setViewMode}
 *   options={[
 *     { value: 'list', icon: <Bars3Icon className="w-4 h-4" />, label: 'List View' },
 *     { value: 'grid', icon: <Squares2X2Icon className="w-4 h-4" />, label: 'Grid View' }
 *   ]}
 * />
 *
 * @example
 * // With analytics view
 * import { Bars3Icon, ChartBarIcon } from '@heroicons/react/24/outline';
 *
 * <ViewModeToggle
 *   value={viewMode}
 *   onChange={setViewMode}
 *   options={[
 *     { value: 'list', icon: <Bars3Icon className="w-4 h-4" />, label: 'List View' },
 *     { value: 'analytics', icon: <ChartBarIcon className="w-4 h-4" />, label: 'Analytics' }
 *   ]}
 * />
 */
export function ViewModeToggle<T extends string>({
  value,
  onChange,
  options,
  className,
  size = 'icon',
}: ViewModeToggleProps<T>) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700',
        className
      )}
      role="group"
      aria-label="View mode toggle"
    >
      {options.map((option) => (
        <Button
          key={option.value}
          variant={value === option.value ? 'default' : 'ghost'}
          size={size}
          onClick={() => { onChange(option.value); }}
          title={option.label}
          aria-label={option.label}
          aria-pressed={value === option.value}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
}
