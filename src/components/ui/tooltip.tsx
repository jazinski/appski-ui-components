import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  /** The content to display inside the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactElement;
  /** Preferred side to display the tooltip */
  side?: 'top' | 'right' | 'bottom' | 'left';
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Whether the user can interact with the tooltip content */
  interactive?: boolean;
  /** Additional CSS classes for the tooltip content */
  className?: string;
}

/**
 * Tooltip component for displaying contextual information.
 * Uses custom positioning logic to avoid heavy dependencies.
 */
export function Tooltip({
  content,
  children,
  side = 'top',
  disabled = false,
  interactive = false,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setIsVisible(true);
  };

  const hideTooltip = () => {
    if (interactive) {
      // Small delay to allow moving mouse to tooltip
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 100);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  React.useLayoutEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      switch (side) {
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + 8;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
      }

      // Add window scroll offset to keep position absolute relative to document
      top += window.scrollY;
      left += window.scrollX;

      setPosition({ top, left });
    }
  }, [isVisible, side]);

  if (disabled) {
    return children;
  }

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
        data-testid="tooltip-trigger"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            'fixed z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            interactive ? 'pointer-events-auto' : 'pointer-events-none',
            className
          )}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          onMouseEnter={interactive ? showTooltip : undefined}
          onMouseLeave={interactive ? hideTooltip : undefined}
        >
          {content}
        </div>
      )}
    </>
  );
}
