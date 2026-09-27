import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export type PanelGroupDirection = 'horizontal' | 'vertical';

/** Dragging a collapsible panel below this share (%) snaps it shut on release. */
const COLLAPSE_SNAP_PERCENTAGE = 4;

const panelGroupVariants = cva('flex h-full w-full overflow-hidden', {
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});

const panelVariants = cva('relative overflow-hidden outline-none', {
  variants: {
    direction: {
      horizontal: 'min-w-0',
      vertical: 'min-h-0',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
});

const panelResizeHandleVariants = cva(
  'group/handle relative z-10 flex shrink-0 items-center justify-center bg-border transition-colors hover:bg-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      direction: {
        horizontal: 'w-1.5 cursor-col-resize',
        vertical: 'h-1.5 cursor-row-resize',
      },
      variant: {
        default: 'bg-border',
        primary: 'bg-primary/30',
        muted: 'bg-muted',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
      variant: 'default',
    },
  },
);

const handleGripVariants = cva(
  'rounded-full bg-muted-foreground/40 transition-colors group-hover/handle:bg-primary/70',
  {
    variants: {
      direction: {
        horizontal: 'h-8 w-0.5',
        vertical: 'h-0.5 w-8',
      },
    },
    defaultVariants: {
      direction: 'horizontal',
    },
  },
);

/** Constraints a Panel declares to its group. Sizes are percentages of the group. */
export interface PanelConstraints {
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
  defaultCollapsed?: boolean;
}

interface PanelGroupContextValue {
  direction: PanelGroupDirection;
  sizes: number[];
  collapsed: boolean[];
  startDrag: (handleIndex: number, event: React.PointerEvent) => void;
  handleKeyDown: (handleIndex: number, event: React.KeyboardEvent) => void;
  toggleCollapse: (handleIndex: number) => void;
}

const PanelGroupContext = React.createContext<PanelGroupContextValue | null>(null);

function usePanelGroup(component: string): PanelGroupContextValue {
  const ctx = React.useContext(PanelGroupContext);
  if (!ctx) throw new Error(`<${component}> must be rendered inside <PanelGroup>`);
  return ctx;
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const EPSILON = 0.01;
const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
/** Indexed read with fallback (the build uses noUncheckedIndexedAccess). */
function at<T>(xs: T[], i: number, fallback: T): T {
  return xs[i] ?? fallback;
}

function normalizeSizes(sizes: number[], constraints: PanelConstraints[]): number[] {
  const count = sizes.length;
  if (count === 0) return [];
  const minOf = (i: number) =>
    constraints[i]?.collapsible ? constraints[i]?.collapsedSize ?? 0 : constraints[i]?.minSize ?? 0;
  const maxOf = (i: number) => constraints[i]?.maxSize ?? 100;
  const next = sizes.map((s, i) => clamp(s, minOf(i), maxOf(i)));

  // Redistribute the difference from 100 until it is absorbed or no slack remains.
  for (let pass = 0; pass < count + 1; pass++) {
    const drift = 100 - sum(next);
    if (Math.abs(drift) <= EPSILON) break;
    const flex = next
      .map((s, i) => ({ s, i }))
      .filter(({ s, i }) => {
        const candidate = s + drift;
        return candidate >= minOf(i) - EPSILON && candidate <= maxOf(i) + EPSILON;
      })
      .sort((x, y) => Math.abs(y.s - 50) - Math.abs(x.s - 50)); // prefer far-from-50 panels
    const pick = flex[0];
    if (!pick) break; // no panel can absorb the drift
    next[pick.i] = clamp(pick.s + drift, minOf(pick.i), maxOf(pick.i));
  }
  return next;
}

function computeInitialSizes(constraints: PanelConstraints[]): number[] {
  const count = constraints.length;
  if (count === 0) return [];
  const initial = constraints.map(() => 100 / count);
  // Apply defaultCollapsed: collapse to collapsedSize, give the space to the
  // first panel that is not collapsed by default.
  const collapsedIdx = constraints
    .map((c, i) => ({ c, i }))
    .filter(({ c }) => c.defaultCollapsed);
  if (collapsedIdx.length > 0) {
    const freed = collapsedIdx.reduce(
      (acc, { c, i }) => acc + (at(initial, i, 0) - (c.collapsedSize ?? 0)),
      0,
    );
    collapsedIdx.forEach(({ c, i }) => (initial[i] = c.collapsedSize ?? 0));
    const recipient = constraints.findIndex((c) => !c.defaultCollapsed);
    if (recipient >= 0) initial[recipient] = at(initial, recipient, 0) + freed;
  }
  return normalizeSizes(initial, constraints);
}

function loadStoredSizes(storageKey: string): number[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return null;
    if (!parsed.every((n) => typeof n === 'number' && Number.isFinite(n) && n >= 0)) {
      return null;
    }
    return parsed as number[];
  } catch {
    return null;
  }
}

function saveStoredSizes(storageKey: string, sizes: number[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(sizes));
  } catch {
    // Quota / private-mode failures are non-fatal.
  }
}

export interface PanelGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof panelGroupVariants> {
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

export interface PanelResizeHandleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDoubleClick'>,
    VariantProps<typeof panelResizeHandleVariants> {
  disabled?: boolean;
  /** @internal injected by PanelGroup */
  index?: number;
}

export const PanelGroup = React.forwardRef<HTMLDivElement, PanelGroupProps>(
  (
    {
      direction,
      children,
      defaultSizes,
      sizes: controlledSizes,
      onSizesChange,
      storageKey,
      keyboardStep = 1,
      className,
      ...props
    },
    ref,
  ) => {
    const groupRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => groupRef.current as HTMLDivElement);

    // ---- static layout model derived from children ------------------------
    const childArray = React.useMemo(() => React.Children.toArray(children), [children]);
    const constraints = React.useMemo<PanelConstraints[]>(
      () =>
        childArray
          .filter(React.isValidElement)
          .filter((c) => {
            const type = c.type as { displayName?: string };
            return type?.displayName === 'Panel';
          })
          .map((c) => c.props as PanelConstraints),
      [childArray],
    );

    const [uncontrolledSizes, setUncontrolledSizes] = React.useState<number[]>(() => {
      // A persisted layout is the user's own choice: it wins over defaults.
      if (storageKey) {
        const stored = loadStoredSizes(storageKey);
        if (stored && stored.length === constraints.length) {
          return normalizeSizes(stored, constraints);
        }
      }
      if (defaultSizes && defaultSizes.length === constraints.length) {
        return normalizeSizes(defaultSizes, constraints);
      }
      return computeInitialSizes(constraints);
    });
    const [collapsed, setCollapsed] = React.useState<boolean[]>(() =>
      constraints.map((c) => Boolean(c.defaultCollapsed)),
    );
    const sizes = controlledSizes ?? uncontrolledSizes;
    const sizesRef = React.useRef(sizes);
    const collapsedRef = React.useRef(collapsed);
    sizesRef.current = sizes;
    collapsedRef.current = collapsed;
    /** Pre-collapse sizes, used to restore a panel on expand. */
    const savedSizesRef = React.useRef<Record<number, number>>({});

    // Persist the layout as soon as it is known so a refresh before any
    // interaction still restores the same layout.
    React.useEffect(() => {
      if (storageKey && uncontrolledSizes.length > 0) {
        saveStoredSizes(storageKey, uncontrolledSizes);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const commitSizes = React.useCallback(
      (next: number[], nextCollapsed?: boolean[]) => {
        if (storageKey) saveStoredSizes(storageKey, next);
        setUncontrolledSizes(next);
        onSizesChange?.(next);
        if (nextCollapsed) setCollapsed(nextCollapsed);
      },
      [onSizesChange, storageKey],
    );

    // ---- resize math -------------------------------------------------------
    const resizePair = React.useCallback(
      (handleIndex: number, deltaPercent: number) => {
        const cur = [...sizesRef.current];
        const curCollapsed = [...collapsedRef.current];
        if (handleIndex < 0 || handleIndex + 1 >= cur.length) return;
        const a = handleIndex;
        const b = handleIndex + 1;
        const pairTotal = at(cur, a, 0) + at(cur, b, 0);
        const con = constraints;
        const minA = curCollapsed[a] ? 0 : con[a]?.collapsible ? 0 : con[a]?.minSize ?? 10;
        const minB = curCollapsed[b] ? 0 : con[b]?.collapsible ? 0 : con[b]?.minSize ?? 10;
        const maxA = con[a]?.maxSize ?? 100;
        const maxB = con[b]?.maxSize ?? 100;

        let nextA = at(cur, a, 0) + deltaPercent;
        nextA = clamp(nextA, minA, maxA);
        nextA = clamp(nextA, pairTotal - maxB, pairTotal - minB);
        const nextB = pairTotal - nextA;
        if (Number.isNaN(nextA) || Number.isNaN(nextB)) return;

        cur[a] = nextA;
        cur[b] = nextB;
        commitSizes(cur);
      },
      [commitSizes, constraints],
    );

    // ---- pointer drag ------------------------------------------------------
    const startDrag = React.useCallback(
      (handleIndex: number, event: React.PointerEvent) => {
        if (event.button !== undefined && event.button !== 0) return;
        const group = groupRef.current;
        if (!group) return;
        const rect = group.getBoundingClientRect();
        const total = direction === 'horizontal' ? rect.width : rect.height;
        if (total <= 0) return;
        const startPos = direction === 'horizontal' ? event.clientX : event.clientY;

        const onMove = (e: PointerEvent) => {
          const pos = direction === 'horizontal' ? e.clientX : e.clientY;
          resizePair(handleIndex, ((pos - startPos) / total) * 100);
        };
        const onUp = () => {
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
          document.body.style.removeProperty('user-select');
          // Snap collapsible panels shut if they were dragged (nearly) to zero.
          const cur = [...sizesRef.current];
          const curCollapsed = [...collapsedRef.current];
          let changed = false;
          [handleIndex, handleIndex + 1].forEach((i) => {
            const con = constraints[i];
            const ci = at(curCollapsed, i, false);
            if (con?.collapsible && !ci && at(cur, i, 0) < COLLAPSE_SNAP_PERCENTAGE) {
              savedSizesRef.current[i] = at(cur, i, 0);
              const collapsedSize = con.collapsedSize ?? 0;
              const freed = at(cur, i, 0) - collapsedSize;
              cur[i] = collapsedSize;
              const recipient = cur.findIndex(
                (s, j) => j !== i && !curCollapsed[j] && s + freed <= (constraints[j]?.maxSize ?? 100),
              );
              if (recipient >= 0) cur[recipient] = at(cur, recipient, 0) + freed;
              curCollapsed[i] = true;
              changed = true;
            }
          });
          if (changed) commitSizes(cur, curCollapsed);
        };

        document.body.style.setProperty('user-select', 'none');
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      },
      [commitSizes, constraints, direction, resizePair],
    );

    // ---- collapse toggle (double-click / Enter / Space) --------------------
    const toggleCollapse = React.useCallback(
      (handleIndex: number) => {
        const cur = [...sizesRef.current];
        const curCollapsed = [...collapsedRef.current];
        if (handleIndex < 0 || handleIndex >= cur.length) return;
        const idx = handleIndex; // the panel before the handle
        const con = constraints[idx];
        if (!con?.collapsible) return;
        const collapsedSize = con.collapsedSize ?? 0;

        if (curCollapsed[idx]) {
          // Expand: take the space back from non-collapsed panels, proportionally.
          const restore = savedSizesRef.current[idx] ?? 100 / cur.length;
          let needed = restore - at(cur, idx, 0);
          const donors = cur
            .map((s, j) => ({ s, j }))
            .filter(({ j }) => j !== idx && !curCollapsed[j]);
          const available = donors.reduce(
            (acc, { s, j }) => acc + (s - (constraints[j]?.minSize ?? 10)),
            0,
          );
          needed = Math.min(needed, available);
          donors.forEach(({ s, j }) => {
            const min = constraints[j]?.minSize ?? 10;
            const share = available > 0 ? (s - min) / available : 0;
            cur[j] = s - needed * share;
          });
          cur[idx] = at(cur, idx, 0) + needed;
          curCollapsed[idx] = false;
        } else {
          // Collapse: give the freed space to the first panel that can take it.
          const freed = at(cur, idx, 0) - collapsedSize;
          const recipient = cur.findIndex(
            (s, j) =>
              j !== idx && !curCollapsed[j] && s + freed <= (constraints[j]?.maxSize ?? 100),
          );
          savedSizesRef.current[idx] = at(cur, idx, 0);
          if (recipient >= 0) cur[recipient] = at(cur, recipient, 0) + freed;
          cur[idx] = collapsedSize;
          curCollapsed[idx] = true;
        }
        commitSizes(cur, curCollapsed);
      },
      [commitSizes, constraints],
    );

    const handleKeyDown = React.useCallback(
      (handleIndex: number, event: React.KeyboardEvent) => {
        const forward = direction === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        const backward = direction === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
        const step = keyboardStep * (event.shiftKey ? 5 : 1);
        if (event.key === forward || event.key === backward) {
          event.preventDefault();
          resizePair(handleIndex, event.key === forward ? step : -step);
        } else if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleCollapse(handleIndex);
        }
      },
      [direction, keyboardStep, resizePair, toggleCollapse],
    );

    const contextValue = React.useMemo<PanelGroupContextValue>(
      () => ({ direction, sizes, collapsed, startDrag, handleKeyDown, toggleCollapse }),
      [direction, sizes, collapsed, startDrag, handleKeyDown, toggleCollapse],
    );

    // ---- render: index Panels and Handles positionally ----------------------
    let panelIdx = -1;
    let handleIdx = -1;
    const rendered = childArray.map((child) => {
      if (!React.isValidElement(child)) return child;
      const type = child.type as { displayName?: string };
      if (type?.displayName === 'Panel') {
        panelIdx += 1;
        return React.cloneElement(child as React.ReactElement<PanelProps>, { index: panelIdx });
      }
      if (type?.displayName === 'PanelResizeHandle') {
        handleIdx += 1;
        return React.cloneElement(
          child as React.ReactElement<PanelResizeHandleProps>,
          { index: handleIdx },
        );
      }
      return child;
    });

    return (
      <PanelGroupContext.Provider value={contextValue}>
        <div
          ref={groupRef}
          data-slot="panel-group"
          data-direction={direction}
          className={cn(panelGroupVariants({ direction }), className)}
          {...props}
        >
          {rendered}
        </div>
      </PanelGroupContext.Provider>
    );
  },
);
PanelGroup.displayName = 'PanelGroup';

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      // Constraint props are consumed by the parent PanelGroup via this
      // element's props; they are intentionally not read here.
      minSize: _minSize,
      maxSize: _maxSize,
      collapsible: _collapsible,
      collapsedSize: _collapsedSize,
      defaultCollapsed: _defaultCollapsed,
      onCollapse,
      index,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const { direction, sizes, collapsed } = usePanelGroup('Panel');
    const i = index ?? 0;
    const size = sizes[i] ?? 0;
    const isCollapsed = collapsed[i] ?? false;

    // Notify onCollapse transitions.
    const prevRef = React.useRef(isCollapsed);
    React.useEffect(() => {
      if (prevRef.current !== isCollapsed) {
        prevRef.current = isCollapsed;
        onCollapse?.(isCollapsed);
      }
    }, [isCollapsed, onCollapse]);

    return (
      <div
        ref={ref}
        data-panel=""
        data-index={i}
        data-state={isCollapsed ? 'collapsed' : 'expanded'}
        className={cn(panelVariants({ direction }), className)}
        style={{ ...style, flexGrow: size, flexShrink: 1, flexBasis: 0 }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Panel.displayName = 'Panel';

export const PanelResizeHandle = React.forwardRef<HTMLDivElement, PanelResizeHandleProps>(
  ({ variant = 'default', disabled = false, index, className, ...props }, ref) => {
    const { direction, sizes, collapsed, startDrag, handleKeyDown, toggleCollapse } =
      usePanelGroup('PanelResizeHandle');
    const i = index ?? 0;
    const sizeBefore = sizes[i] ?? 0;
    const sizeAfter = sizes[i + 1] ?? 0;

    return (
      <div
        ref={ref}
        role="separator"
        tabIndex={disabled ? -1 : 0}
        aria-orientation={direction === 'horizontal' ? 'vertical' : 'horizontal'}
        aria-label="Resize panel"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sizeBefore)}
        data-resize-handle=""
        data-index={i}
        data-direction={direction}
        data-disabled={disabled || undefined}
        data-panels-state={
          collapsed[i] ? 'before-collapsed' : collapsed[i + 1] ? 'after-collapsed' : undefined
        }
        className={cn(panelResizeHandleVariants({ direction, variant }), className)}
        onPointerDown={(e) => {
          if (!disabled) startDrag(i, e);
        }}
        onDoubleClick={() => {
          if (!disabled) toggleCollapse(i);
        }}
        onKeyDown={(e) => {
          if (!disabled) handleKeyDown(i, e);
        }}
        title={`Drag to resize (panels: ${Math.round(sizeBefore)}% / ${Math.round(sizeAfter)}%)`}
        {...props}
      >
        <span aria-hidden="true" className={handleGripVariants({ direction })} />
      </div>
    );
  },
);
PanelResizeHandle.displayName = 'PanelResizeHandle';

export {
  panelGroupVariants,
  panelVariants,
  panelResizeHandleVariants,
  handleGripVariants,
};
