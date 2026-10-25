import { VariantProps } from 'class-variance-authority';
import { Card } from './card';
import * as React from 'react';
export interface TimeRangeOption {
    /** Stable value passed to onChange (e.g. "24h") */
    value: string;
    /** Display label (e.g. "24h") */
    label: string;
}
export interface TimeRangeSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Selectable time ranges */
    options: TimeRangeOption[];
    /** Currently selected range value */
    value: string;
    /** Called with the option value when the user selects a range */
    onChange: (value: string) => void;
    /** Accessible name for the group */
    'aria-label'?: string;
}
/**
 * Segmented control for choosing a dashboard time range.
 * Renders as a radiogroup so screen readers announce the selected range.
 *
 * @example
 * <TimeRangeSelector
 *   aria-label="Time range"
 *   options={[{ value: '24h', label: '24h' }, { value: '7d', label: '7d' }]}
 *   value="24h"
 *   onChange={setRange}
 * />
 */
export declare const TimeRangeSelector: React.ForwardRefExoticComponent<TimeRangeSelectorProps & React.RefAttributes<HTMLDivElement>>;
export interface AutoRefreshInterval {
    /** Interval duration in seconds */
    seconds: number;
    /** Display label (e.g. "30s") */
    label: string;
}
export interface RefreshControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Called when the user requests a refresh */
    onRefresh: () => void | Promise<void>;
    /** Whether a refresh is currently in flight; shows a spinner and disables the button */
    isRefreshing?: boolean;
    /** Time of the last successful refresh, rendered as a relative "x ago" hint */
    lastRefreshedAt?: Date | string | number | null;
    /** Offered auto-refresh intervals; omit to hide the interval picker */
    intervals?: AutoRefreshInterval[];
    /** Currently selected auto-refresh interval in seconds, or 0/null for off */
    autoRefreshSeconds?: number | null;
    /** Called with the selected interval in seconds (0 = off) */
    onAutoRefreshChange?: (seconds: number) => void;
}
/**
 * Refresh button with optional auto-refresh interval picker and a
 * relative "last updated" hint. Composes with the library Button.
 */
export declare const RefreshControl: React.ForwardRefExoticComponent<RefreshControlProps & React.RefAttributes<HTMLDivElement>>;
export interface DashboardWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Widget heading */
    title?: string;
    /** Optional supporting text under the title */
    description?: string;
    /** Content in the widget footer */
    footer?: React.ReactNode;
    /** Column span on the 12-column grid at lg and up. Default 4 (third). */
    colSpan?: number;
    /** Grid row span. Default 1. */
    rowSpan?: number;
    /** Renders a skeleton in place of the widget content */
    loading?: boolean;
    variant?: VariantProps<typeof Card>['variant'];
}
/**
 * A single grid cell in a Dashboard. Wraps content in a Card and
 * claims `colSpan` columns of the 12-column grid (responsive below lg).
 */
export declare const DashboardWidget: React.ForwardRefExoticComponent<DashboardWidgetProps & React.RefAttributes<HTMLDivElement>>;
export interface DashboardTimeRangeConfig {
    options: TimeRangeOption[];
    value: string;
    onChange: (value: string) => void;
}
export interface DashboardRefreshConfig {
    onRefresh: () => void | Promise<void>;
    isRefreshing?: boolean;
    lastRefreshedAt?: Date | string | number | null;
    intervals?: AutoRefreshInterval[];
    autoRefreshSeconds?: number | null;
    onAutoRefreshChange?: (seconds: number) => void;
}
export interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Dashboard heading, rendered in the header row */
    title?: string;
    /** Supporting text under the title */
    description?: string;
    /** Extra content on the right of the header row (after time range / refresh) */
    actions?: React.ReactNode;
    /** Enables the TimeRangeSelector in the header */
    timeRange?: DashboardTimeRangeConfig;
    /** Enables the RefreshControl in the header */
    refresh?: DashboardRefreshConfig;
    /** Renders a skeleton grid instead of children */
    loading?: boolean;
    /** Number of skeleton widgets while loading. Default 3. */
    loadingCount?: number;
    /** Gap between widgets. Default 'default'. */
    gap?: 'none' | 'sm' | 'default' | 'lg';
    children?: React.ReactNode;
}
/**
 * Dashboard composition: a header with title, time-range selector and
 * refresh control, above a 12-column responsive widget grid of
 * DashboardWidget children.
 *
 * @example
 * <Dashboard
 *   title="Overview"
 *   timeRange={{ options: DEFAULT_TIME_RANGES, value, onChange: setValue }}
 *   refresh={{ onRefresh, isRefreshing }}
 * >
 *   <DashboardWidget title="Requests" colSpan={4}>…</DashboardWidget>
 *   <DashboardWidget title="Latency" colSpan={8}>…</DashboardWidget>
 * </Dashboard>
 */
export declare const Dashboard: React.ForwardRefExoticComponent<DashboardProps & React.RefAttributes<HTMLDivElement>>;
/** Common time range presets for dashboards. */
export declare const DEFAULT_TIME_RANGES: TimeRangeOption[];
/** Common auto-refresh intervals for dashboards. */
export declare const DEFAULT_AUTO_REFRESH_INTERVALS: AutoRefreshInterval[];
//# sourceMappingURL=dashboard.d.ts.map