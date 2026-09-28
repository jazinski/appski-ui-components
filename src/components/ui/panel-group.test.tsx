import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';

function expectEl(el: Element | null): Element {
  if (!el) throw new Error('expected element to exist');
  return el;
}
import '@testing-library/jest-dom';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from './panel-group';

function flushSizes(): number[] {
  const panels = document.querySelectorAll('[data-panel]');
  return Array.from(panels).map((p) =>
    Number((p as HTMLElement).style.flexGrow || 0),
  );
}

function sum(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

describe('PanelGroup', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders panels with even default sizes', () => {
    render(
      <PanelGroup direction="horizontal">
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes).toHaveLength(2);
    expect(sizes[0]).toBeCloseTo(50, 5);
    expect(sizes[1]).toBeCloseTo(50, 5);
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });

  it('applies data-direction to the group and aria-orientation to handles', () => {
    render(
      <PanelGroup direction="vertical">
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    expect(expectEl(document.querySelector('[data-slot="panel-group"]')).getAttribute('data-direction')).toBe('vertical');
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('respects defaultSizes', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[70, 30]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(70, 5);
    expect(sizes[1]).toBeCloseTo(30, 5);
  });

  it('supports nested PanelGroups (independent state)', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[30, 70]}>
        <Panel>Sidebar</Panel>
        <PanelResizeHandle />
        <Panel>
          <PanelGroup direction="vertical" defaultSizes={[60, 40]}>
            <Panel>Editor</Panel>
            <PanelResizeHandle />
            <Panel>Preview</Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>,
    );
    const groups = document.querySelectorAll('[data-slot="panel-group"]');
    expect(groups).toHaveLength(2);
    const inner = expectEl(groups[1]).querySelectorAll('[data-panel]');
    expect(Number((inner[0] as HTMLElement).style.flexGrow)).toBeCloseTo(60, 5);
    expect(Number((inner[1] as HTMLElement).style.flexGrow)).toBeCloseTo(40, 5);
  });

  it('honors minSize constraints', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[20, 80]}>
        <Panel minSize={25}>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes[0]).toBeGreaterThanOrEqual(25 - 0.01);
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });

  it('persists sizes to localStorage under storageKey and restores them', () => {
    const key = 'test-panel-persist';
    const { unmount } = render(
      <PanelGroup direction="horizontal" storageKey={key} defaultSizes={[40, 60]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    expect(window.localStorage.getItem(key)).toBeTruthy();

    // Simulate a later mount with different defaults: stored sizes win.
    unmount();
    window.localStorage.setItem(key, JSON.stringify([80, 20]));
    render(
      <PanelGroup direction="horizontal" storageKey={key} defaultSizes={[40, 60]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(80, 5);
    expect(sizes[1]).toBeCloseTo(20, 5);
  });

  it('ignores corrupted storage payloads', () => {
    const key = 'test-panel-corrupt';
    window.localStorage.setItem(key, '{"evil":true}');
    render(
      <PanelGroup direction="horizontal" storageKey={key}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(50, 5);
  });
});

describe('PanelResizeHandle', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('is a focusable separator with aria-valuenow', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[30, 70]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('tabindex', '0');
    expect(handle).toHaveAttribute('aria-valuenow', '30');
  });

  it('keyboard: arrow keys resize the pair, sum stays 100', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    let sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(51, 5);
    expect(sum(sizes)).toBeCloseTo(100, 5);

    fireEvent.keyDown(handle, { key: 'ArrowLeft', shiftKey: true });
    sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(46, 5);
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });

  it('keyboard resize respects maxSize', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel maxSize={60}>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    const sizes = flushSizes();
    expect(sizes[0]).toBeLessThanOrEqual(60 + 0.01);
  });

  it('pointer events dispatch correctly', () => {
    render(
      <div style={{ width: 200 }}>
        <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
          <Panel>A</Panel>
          <PanelResizeHandle />
          <Panel>B</Panel>
        </PanelGroup>
      </div>,
    );
    const handle = screen.getByRole('separator');
    fireEvent.pointerDown(handle, { button: 0, clientX: 100, clientY: 0 });
    fireEvent(window, new Event('pointermove') as PointerEvent);
    const sizes = flushSizes();
    // pointermove with same coordinates: sizes unchanged, but listener path works
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });

  it('double-click collapses a collapsible panel to zero and back', () => {
    const onCollapse = vi.fn();
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel collapsible onCollapse={onCollapse}>
          A
        </Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    fireEvent.doubleClick(handle);
    let sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(0, 5);
    expect(expectEl(document.querySelector('[data-panel]')).getAttribute('data-state')).toBe('collapsed');
    expect(onCollapse).toHaveBeenLastCalledWith(true);
    expect(sum(sizes)).toBeCloseTo(100, 5);

    fireEvent.doubleClick(handle);
    sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(50, 5);
    expect(onCollapse).toHaveBeenLastCalledWith(false);
  });

  it('double-click on non-collapsible panel is a no-op', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    fireEvent.doubleClick(screen.getByRole('separator'));
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(50, 5);
  });

  it('Enter key toggles collapse of the panel before the handle', () => {
    render(
      <PanelGroup direction="vertical" defaultSizes={[40, 60]}>
        <Panel collapsible>Top</Panel>
        <PanelResizeHandle />
        <Panel>Bottom</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    fireEvent.keyDown(handle, { key: 'Enter' });
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(0, 5);
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });

  it('defaultCollapsed renders the panel collapsed at mount', () => {
    render(
      <PanelGroup direction="horizontal">
        <Panel collapsible defaultCollapsed>
          Sidebar
        </Panel>
        <PanelResizeHandle />
        <Panel>Main</Panel>
      </PanelGroup>,
    );
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(0, 5);
    expect(sizes[1]).toBeCloseTo(100, 5);
  });

  it('disabled handle does not respond to keyboard resize', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel>A</Panel>
        <PanelResizeHandle disabled />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    expect(handle).toHaveAttribute('tabindex', '-1');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(50, 5);
  });
});

describe('panel-group errors', () => {
  it('throws when Panel is rendered outside PanelGroup', () => {
    // Silence React's error boundary noise for the expected throw
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Panel>orphan</Panel>)).toThrow(/must be rendered inside/);
    spy.mockRestore();
  });
});

describe('pointer drag math', () => {
  beforeEach(() => {
    window.localStorage.clear();
    // jsdom: give the group a real bounding rect (200px wide).
    Element.prototype.getBoundingClientRect = () =>
      ({ width: 200, height: 100, top: 0, left: 0, bottom: 100, right: 200, x: 0, y: 0, toJSON: () => ({}) }) as DOMRect;
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('dragging the handle 20px right moves 10% to the first panel', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    // jsdom lacks a PointerEvent constructor, so dispatch MouseEvents carrying
    // pointer event types (clientX/Y survive that way).
    act(() => {
      handle.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 0 }));
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 120, clientY: 0 }));
      window.dispatchEvent(new MouseEvent('pointerup'));
    });
    const sizes = flushSizes();
    expect(sizes[0]).toBeCloseTo(60, 5);
    expect(sizes[1]).toBeCloseTo(40, 5);
  });

  it('drag enforces minSize during pointer drag', () => {
    render(
      <PanelGroup direction="horizontal" defaultSizes={[50, 50]}>
        <Panel minSize={30}>A</Panel>
        <PanelResizeHandle />
        <Panel>B</Panel>
      </PanelGroup>,
    );
    const handle = screen.getByRole('separator');
    act(() => {
      handle.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 0 }));
      window.dispatchEvent(new MouseEvent('pointermove', { clientX: 0, clientY: 0 }));
      window.dispatchEvent(new MouseEvent('pointerup'));
    });
    const sizes = flushSizes();
    expect(sizes[0]).toBeGreaterThanOrEqual(30 - 0.01);
    expect(sum(sizes)).toBeCloseTo(100, 5);
  });
});
