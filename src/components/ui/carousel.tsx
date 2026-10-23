import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const carouselVariants = cva(
  'group relative w-full focus-within:outline-none',
  {
    variants: {
      size: {
        default: '',
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const carouselSlideVariants = cva(
  'flex shrink-0 snap-start snap-always px-2 first:pl-0 last:pr-0',
  {
    variants: {
      size: {
        default: '',
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const carouselArrowVariants = cva(
  'absolute top-1/2 z-10 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      side: {
        left: '-left-3',
        right: '-right-3',
      },
    },
    defaultVariants: {
      side: 'left',
    },
  }
);

const carouselDotVariants = cva(
  'h-2 w-2 rounded-full bg-muted-foreground/40 transition-colors hover:bg-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-current:bg-primary',
  {
    variants: {
      size: {
        default: '',
        sm: 'h-1.5 w-1.5',
        lg: 'h-2.5 w-2.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface CarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'>,
    VariantProps<typeof carouselVariants> {
  children: React.ReactNode;
  /** Accessible name for the carousel region */
  ariaLabel?: string;
  /** Wrap around at the ends instead of stopping */
  loop?: boolean;
  /** Show prev/next arrow buttons */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /**
   * Partial-peek: slides take less than the full width so the next slide
   * peeks at the right edge. `true` = 85% width, or pass an explicit
   * percentage (e.g. 60).
   */
  peek?: boolean | number;
  /** Extra classes applied to each slide wrapper */
  slideClassName?: string;
  /** Called with the new active slide index */
  onSlideChange?: (index: number) => void;
  /** Initially active slide index (uncontrolled) */
  defaultActive?: number;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      slideClassName,
      children,
      ariaLabel = 'Carousel',
      loop = false,
      showArrows = true,
      showDots = true,
      peek = false,
      onSlideChange,
      defaultActive = 0,
      ...props
    },
    ref
  ) => {
    const slides = React.Children.toArray(children).filter(Boolean);
    const count = slides.length;
    const peekWidth =
      typeof peek === 'number' ? Math.min(Math.max(peek, 10), 100) : peek ? 85 : 100;

    const trackRef = React.useRef<HTMLUListElement | null>(null);
    const slideRefs = React.useRef<Array<HTMLLIElement | null>>([]);
    const [active, setActive] = React.useState(
      Math.min(Math.max(defaultActive, 0), Math.max(count - 1, 0))
    );

    const goTo = React.useCallback(
      (index: number) => {
        if (count === 0) return;
        let target: number;
        if (loop) {
          target = ((index % count) + count) % count;
        } else {
          target = Math.min(Math.max(index, 0), count - 1);
        }
        const track = trackRef.current;
        const slide = slideRefs.current[target];
        if (track && slide) {
          try {
            track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
          } catch {
            // Non-DOM environments (jsdom) don't implement smooth scrolling
          }
        }
        setActive(target);
        onSlideChange?.(target);
      },
      [count, loop, onSlideChange]
    );

    const next = React.useCallback(() => { goTo(active + 1); }, [goTo, active]);
    const prev = React.useCallback(() => { goTo(active - 1); }, [goTo, active]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
    };

    // Track the active slide while the user scrolls or swipes natively.
    const handleScroll = () => {
      const track = trackRef.current;
      const first = slideRefs.current[0];
      if (!track || !first) return;
      const step = first.offsetWidth;
      if (step <= 0) return;
      const index = Math.min(Math.max(Math.round(track.scrollLeft / step), 0), count - 1);
      if (index !== active) {
        setActive(index);
        onSlideChange?.(index);
      }
    };

    const atStart = !loop && active <= 0;
    const atEnd = !loop && active >= count - 1;

    return (
      <div
        ref={ref}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className={cn(carouselVariants({ className }))}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        {...props}
      >
        <div className="relative overflow-hidden">
          <ul
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                className={cn(carouselSlideVariants(), slideClassName)}
                style={{ flexBasis: `${peekWidth}%` }}
                data-active={index === active}
              >
                {slide}
              </li>
            ))}
          </ul>
        </div>

        {showArrows && count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              disabled={atStart}
              aria-label="Previous slide"
              className={cn(carouselArrowVariants({ side: 'left' }))}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={atEnd}
              aria-label="Next slide"
              className={cn(carouselArrowVariants({ side: 'right' }))}
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </>
        )}

        {showDots && count > 1 && (
          <div className="flex items-center justify-center gap-2 pt-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => { goTo(index); }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                className={cn(carouselDotVariants())}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

export { carouselVariants, carouselSlideVariants, carouselArrowVariants, carouselDotVariants };
