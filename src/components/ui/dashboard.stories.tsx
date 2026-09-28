import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Dashboard,
  DashboardWidget,
  TimeRangeSelector,
  RefreshControl,
  DEFAULT_TIME_RANGES,
  DEFAULT_AUTO_REFRESH_INTERVALS,
} from './dashboard';
import { Button } from './button';
import { Badge } from './badge';
import { Progress } from './progress';
import { Separator } from './separator';

const meta: Meta<typeof Dashboard> = {
  title: 'Components/Dashboard',
  component: Dashboard,
  tags: ['autodocs'],
  subcomponents: { DashboardWidget, TimeRangeSelector, RefreshControl } as never,
};
export default meta;
type Story = StoryObj<typeof Dashboard>;

function useClock(initialOffsetMs = 45_000) {
  const [lastRefreshedAt, setLastRefreshedAt] = React.useState(
    () => new Date(Date.now() - initialOffsetMs)
  );
  const refresh = React.useCallback(() => {
    setLastRefreshedAt(new Date());
  }, []);
  return { lastRefreshedAt, refresh };
}

export const Default: Story = {
  render: () => {
    const [range, setRange] = React.useState('24h');
    const { lastRefreshedAt, refresh } = useClock();
    return (
      <Dashboard
        title="Fleet overview"
        description="All systems, last 24 hours"
        timeRange={{ options: DEFAULT_TIME_RANGES, value: range, onChange: setRange }}
        refresh={{
          onRefresh: refresh,
          lastRefreshedAt,
          intervals: DEFAULT_AUTO_REFRESH_INTERVALS,
          autoRefreshSeconds: 0,
          onAutoRefreshChange: () => {},
        }}
      >
        <DashboardWidget title="Requests" description="Total served" colSpan={4}>
          <p className="text-3xl font-semibold">1,284,556</p>
        </DashboardWidget>
        <DashboardWidget title="Error rate" description="5xx / total" colSpan={4}>
          <p className="text-3xl font-semibold">0.12%</p>
        </DashboardWidget>
        <DashboardWidget title="Uptime" description="30-day rolling" colSpan={4}>
          <p className="text-3xl font-semibold">99.98%</p>
        </DashboardWidget>
        <DashboardWidget title="Latency" description="p50 / p95 / p99 (ms)" colSpan={8}>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-semibold">42</p>
              <p className="text-xs text-muted-foreground">p50</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">187</p>
              <p className="text-xs text-muted-foreground">p95</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">402</p>
              <p className="text-xs text-muted-boundary">p99</p>
            </div>
          </div>
        </DashboardWidget>
        <DashboardWidget title="Capacity" colSpan={4}>
          <Progress value={62} />
          <p className="mt-2 text-xs text-muted-foreground">62% of allocated CPU</p>
        </DashboardWidget>
      </Dashboard>
    );
  },
};

export const Loading: Story = {
  render: () => (
    <Dashboard
      title="Fleet overview"
      loading
      loadingCount={6}
      refresh={{ onRefresh: () => {}, isRefreshing: true }}
    />
  ),
};

export const EmptyHeader: Story = {
  name: 'Without header controls',
  render: () => (
    <Dashboard>
      <DashboardWidget title="Standalone widget" colSpan={12}>
        <p>No header row is rendered when title, description and controls are omitted.</p>
      </DashboardWidget>
    </Dashboard>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Dashboard
      title="Queue depth"
      actions={
        <>
          <Badge>live</Badge>
          <Button size="sm">Export</Button>
        </>
      }
      refresh={{ onRefresh: () => {} }}
    >
      <DashboardWidget title="Pending jobs" colSpan={6}>
        <p className="text-3xl font-semibold">14</p>
      </DashboardWidget>
      <DashboardWidget title="Workers" colSpan={6}>
        <p className="text-3xl font-semibold">8 / 8 healthy</p>
      </DashboardWidget>
    </Dashboard>
  ),
};

export const TimeRangeSelectorStory: StoryObj<typeof TimeRangeSelector> = {
  name: 'TimeRangeSelector',
  render: () => {
    const [value, setValue] = React.useState('24h');
    return (
      <TimeRangeSelector
        options={DEFAULT_TIME_RANGES}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const RefreshControlStory: StoryObj<typeof RefreshControl> = {
  name: 'RefreshControl',
  render: () => {
    const { lastRefreshedAt, refresh } = useClock(90_000);
    return (
      <div className="flex flex-col gap-6">
        <RefreshControl onRefresh={refresh} />
        <Separator />
        <RefreshControl
          onRefresh={refresh}
          lastRefreshedAt={lastRefreshedAt}
          intervals={DEFAULT_AUTO_REFRESH_INTERVALS}
          autoRefreshSeconds={60}
          onAutoRefreshChange={() => {}}
        />
        <Separator />
        <RefreshControl onRefresh={refresh} isRefreshing />
      </div>
    );
  },
};

export const WidgetStory: StoryObj<typeof DashboardWidget> = {
  name: 'DashboardWidget',
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
      <DashboardWidget title="Third" colSpan={4}>
        <p>span 4</p>
      </DashboardWidget>
      <DashboardWidget title="Two thirds" colSpan={8}>
        <p>span 8</p>
      </DashboardWidget>
      <DashboardWidget title="Full row" colSpan={12}>
        <p>span 12</p>
      </DashboardWidget>
    </div>
  ),
};
