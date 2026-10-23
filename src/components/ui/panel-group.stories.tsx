import type { Meta, StoryObj } from '@storybook/react';
import { PanelGroup, Panel, PanelResizeHandle } from './panel-group';

const panelBox =
  'flex h-full w-full items-center justify-center bg-muted/40 text-sm text-muted-foreground';

const meta: Meta<typeof PanelGroup> = {
  title: 'Components/PanelGroup',
  component: PanelGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Drag-to-resize split layout with horizontal/vertical splits, nesting, min/max sizes, collapse-to-zero, and optional localStorage persistence.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    storageKey: { control: { type: 'text' } },
    keyboardStep: { control: { type: 'number' } },
  },
  args: {
    direction: 'horizontal',
    keyboardStep: 1,
  },
  decorators: [
    (Story) => (
      <div className="h-[400px] w-full p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PanelGroup direction="horizontal">
      <Panel className={panelBox}>Sidebar</Panel>
      <PanelResizeHandle />
      <Panel className={panelBox}>Main</Panel>
    </PanelGroup>
  ),
};

export const ThreePanes: Story = {
  render: () => (
    <PanelGroup direction="horizontal" defaultSizes={[20, 55, 25]}>
      <Panel className={panelBox} minSize={15}>
        Explorer
      </Panel>
      <PanelResizeHandle />
      <Panel className={panelBox}>Editor</Panel>
      <PanelResizeHandle />
      <Panel className={panelBox} minSize={15}>
        Outline
      </Panel>
    </PanelGroup>
  ),
};

export const VerticalSplit: Story = {
  render: () => (
    <PanelGroup direction="vertical" defaultSizes={[70, 30]}>
      <Panel className={panelBox}>Editor</Panel>
      <PanelResizeHandle />
      <Panel className={panelBox}>Terminal</Panel>
    </PanelGroup>
  ),
};

export const NestedLayout: Story = {
  name: 'Nested (editor layout)',
  render: () => (
    <PanelGroup direction="horizontal" defaultSizes={[22, 78]} storageKey="story-nested-root">
      <Panel className={panelBox} collapsible minSize={15}>
        File tree
      </Panel>
      <PanelResizeHandle />
      <Panel>
        <PanelGroup direction="vertical" defaultSizes={[65, 35]} storageKey="story-nested-editor">
          <Panel className={panelBox}>Editor</Panel>
          <PanelResizeHandle />
          <Panel className={panelBox}>Data preview</Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  ),
};

export const CollapsibleSidebar: Story = {
  name: 'Collapsible sidebar (double-click handle)',
  render: () => (
    <PanelGroup direction="horizontal" defaultSizes={[25, 75]}>
      <Panel className={panelBox} collapsible collapsedSize={0}>
        Sidebar (double-click the handle)
      </Panel>
      <PanelResizeHandle variant="primary" />
      <Panel className={panelBox}>Main content</Panel>
    </PanelGroup>
  ),
};

export const CollapsedByDefault: Story = {
  render: () => (
    <PanelGroup direction="horizontal">
      <Panel className={panelBox} collapsible defaultCollapsed>
        Sidebar
      </Panel>
      <PanelResizeHandle />
      <Panel className={panelBox}>Main (refresh to see persisted size)</Panel>
    </PanelGroup>
  ),
};

export const PersistedSizes: Story = {
  name: 'Persisted sizes (localStorage)',
  render: () => (
    <PanelGroup direction="horizontal" storageKey="story-panel-persisted">
      <Panel className={panelBox}>Resize me, then reload</Panel>
      <PanelResizeHandle />
      <Panel className={panelBox}>My size is remembered</Panel>
    </PanelGroup>
  ),
};

export const DisabledHandle: Story = {
  render: () => (
    <PanelGroup direction="horizontal" defaultSizes={[40, 60]}>
      <Panel className={panelBox}>Fixed</Panel>
      <PanelResizeHandle disabled />
      <Panel className={panelBox}>Also fixed</Panel>
    </PanelGroup>
  ),
};

export const AllVariants: Story = {
  name: 'Handle variants',
  render: () => (
    <div className="flex h-full flex-col gap-4">
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel className={panelBox}>default</Panel>
        <PanelResizeHandle />
        <Panel className={panelBox}>—</Panel>
      </PanelGroup>
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel className={panelBox}>primary</Panel>
        <PanelResizeHandle variant="primary" />
        <Panel className={panelBox}>—</Panel>
      </PanelGroup>
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel className={panelBox}>muted</Panel>
        <PanelResizeHandle variant="muted" />
        <Panel className={panelBox}>—</Panel>
      </PanelGroup>
    </div>
  ),
};

export const Controlled: Story = {
  name: 'Controlled sizes',
  render: () => {
    const sizes = [30, 70];
    return (
      <PanelGroup direction="horizontal" sizes={sizes} onSizesChange={() => {}}>
        <Panel className={panelBox}>30%</Panel>
        <PanelResizeHandle />
        <Panel className={panelBox}>70%</Panel>
      </PanelGroup>
    );
  },
};
