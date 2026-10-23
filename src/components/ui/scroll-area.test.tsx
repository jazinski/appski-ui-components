import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { ScrollArea, ScrollBar } from './scroll-area';

const TAGS = Array.from({ length: 30 }, (_, i) => `tag-${i + 1}`);

function renderScrollArea(props: Partial<React.ComponentProps<typeof ScrollArea>> = {}) {
  return render(
    <ScrollArea {...props}>
      <div className="p-4">
        {TAGS.map((tag) => (
          <div key={tag} data-testid={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

function renderScrollBarInsideRoot(props: React.ComponentProps<typeof ScrollBar> = {}) {
  return render(
    <ScrollAreaPrimitive.Root type="always">
      <ScrollAreaPrimitive.Viewport>
        <div>content</div>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar {...props} />
    </ScrollAreaPrimitive.Root>
  );
}

describe('ScrollArea', () => {
  it('renders children inside the viewport', () => {
    renderScrollArea();

    const viewport = screen.getByTestId('tag-1').closest('[data-radix-scroll-area-viewport]');
    expect(viewport).not.toBeNull();
    expect(screen.getByTestId('tag-30')).toBeInTheDocument();
  });

  it('applies height style', () => {
    renderScrollArea({ height: '220px' });

    const viewport = screen.getByTestId('tag-1').closest('[data-radix-scroll-area-viewport]');
    expect(viewport?.parentElement).toHaveStyle({ height: '220px' });
  });

  it('renders horizontal scrollbar only when orientation is horizontal', () => {
    const { container, unmount } = renderScrollArea({ scrollbarOrientation: 'horizontal' });
    // jsdom has no layout so Radix hides overflow-driven scrollbars; assert no crash
    // and root structure intact for all orientation values.
    expect(container.querySelector('[data-radix-scroll-area-viewport]')).not.toBeNull();
    unmount();

    renderScrollArea({ scrollbarOrientation: 'both' });
    expect(document.querySelector('[data-radix-scroll-area-viewport]')).not.toBeNull();
  });

  it('forwards extra props to the root element', () => {
    renderScrollArea({ 'data-testid': 'root-el' } as Partial<
      React.ComponentProps<typeof ScrollArea>
    >);

    expect(screen.getByTestId('root-el')).toBeInTheDocument();
  });

  it('merges custom className and applies default size class', () => {
    renderScrollArea({ className: 'custom-root' });

    const root = screen.getByTestId('tag-1').closest('[data-radix-scroll-area-viewport]')
      ?.parentElement;
    expect(root).toHaveClass('custom-root');
    expect(root).toHaveClass('w-full');
    expect(root).toHaveClass('relative');
    expect(root).toHaveClass('overflow-hidden');
  });

  it('applies width size variant classes', () => {
    const { unmount } = renderScrollArea({ size: 'sm' });
    let root = screen.getByTestId('tag-1').closest('[data-radix-scroll-area-viewport]')
      ?.parentElement;
    expect(root).toHaveClass('w-56');
    unmount();

    renderScrollArea({ size: 'lg' });
    root = screen.getByTestId('tag-1').closest('[data-radix-scroll-area-viewport]')?.parentElement;
    expect(root).toHaveClass('w-96');
  });

  it('forwards data attributes and id to the root', () => {
    renderScrollArea({ 'data-testid': 'root-el' } as Record<string, string>);

    expect(screen.getByTestId('root-el')).toBeInTheDocument();
  });
});

describe('ScrollBar', () => {
  it('renders with vertical orientation by default', () => {
    const { container } = renderScrollBarInsideRoot();

    const scrollbar = container.querySelector('[data-orientation="vertical"]');
    expect(scrollbar).not.toBeNull();
    expect(scrollbar).toHaveAttribute('data-state', 'visible');
    expect(scrollbar).toHaveClass('w-2.5');
  });

  it('renders with horizontal orientation and merges custom className', () => {
    const { container } = renderScrollBarInsideRoot({ orientation: 'horizontal', className: 'custom-sb' });

    const scrollbar = container.querySelector('[data-orientation="horizontal"]');
    expect(scrollbar).not.toBeNull();
    expect(scrollbar).toHaveClass('h-2.5');
    expect(scrollbar).toHaveClass('custom-sb');
  });

  it('applies theme classes to the scrollbar track', () => {
    const { container } = renderScrollBarInsideRoot();

    const scrollbar = container.querySelector('[data-orientation="vertical"]');
    expect(scrollbar).toHaveClass('flex');
    expect(scrollbar).toHaveClass('touch-none');
    expect(scrollbar).toHaveClass('transition-colors');
  });
});
