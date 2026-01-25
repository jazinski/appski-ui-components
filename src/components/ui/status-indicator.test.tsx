import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusIndicator } from './status-indicator';

describe('StatusIndicator', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<StatusIndicator />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<StatusIndicator />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: online');
    });

    it('renders without label by default', () => {
      render(<StatusIndicator status="online" />);
      expect(screen.queryByText('Online')).not.toBeInTheDocument();
    });

    it('renders with label when provided', () => {
      render(<StatusIndicator status="online" label="Available" />);
      expect(screen.getByText('Available')).toBeInTheDocument();
    });

    it('renders with default label when label prop is undefined', () => {
      render(<StatusIndicator status="busy" label={undefined} />);
      expect(screen.queryByText('Busy')).not.toBeInTheDocument();
    });

    it('does not render label when empty string is provided', () => {
      render(<StatusIndicator status="online" label="" />);
      expect(screen.queryByText('Online')).not.toBeInTheDocument();
    });
  });

  describe('Status Variants', () => {
    it('renders online status', () => {
      render(<StatusIndicator status="online" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: online');
    });

    it('renders offline status', () => {
      render(<StatusIndicator status="offline" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: offline');
    });

    it('renders away status', () => {
      render(<StatusIndicator status="away" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: away');
    });

    it('renders busy status', () => {
      render(<StatusIndicator status="busy" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: busy');
    });

    it('renders idle status', () => {
      render(<StatusIndicator status="idle" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: idle');
    });
  });

  describe('Sizes', () => {
    it('renders xs size', () => {
      const { container } = render(<StatusIndicator size="xs" />);
      expect(container.querySelector('.h-1\\.5')).toBeInTheDocument();
    });

    it('renders sm size', () => {
      const { container } = render(<StatusIndicator size="sm" />);
      expect(container.querySelector('.h-2')).toBeInTheDocument();
    });

    it('renders md size (default)', () => {
      const { container } = render(<StatusIndicator size="md" />);
      expect(container.querySelector('.h-2\\.5')).toBeInTheDocument();
    });

    it('renders lg size', () => {
      const { container } = render(<StatusIndicator size="lg" />);
      expect(container.querySelector('.h-3')).toBeInTheDocument();
    });

    it('renders xl size', () => {
      const { container } = render(<StatusIndicator size="xl" />);
      expect(container.querySelector('.h-4')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders dot variant (default)', () => {
      const { container } = render(<StatusIndicator variant="dot" />);
      expect(container.querySelector('.animate-pulse')).not.toBeInTheDocument();
    });

    it('renders pulsing variant', () => {
      const { container } = render(<StatusIndicator variant="pulsing" />);
      expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
    });

    it('renders with ring when showRing is true', () => {
      const { container } = render(<StatusIndicator showRing />);
      expect(container.querySelector('.ring-2')).toBeInTheDocument();
    });

    it('does not render ring by default', () => {
      const { container } = render(<StatusIndicator />);
      expect(container.querySelector('.ring-2')).not.toBeInTheDocument();
    });
  });

  describe('Labels', () => {
    it('displays custom label text', () => {
      render(<StatusIndicator status="busy" label="In a meeting" />);
      expect(screen.getByText('In a meeting')).toBeInTheDocument();
    });

    it('displays label on the right by default', () => {
      const { container } = render(<StatusIndicator status="online" label="Available" />);
      const wrapper = container.querySelector('[role="status"]');
      const children = wrapper?.children;
      expect(children?.[0]).toHaveAttribute('aria-hidden', 'true'); // dot first
      expect(children?.[1]?.textContent).toBe('Available'); // label second
    });

    it('displays label on the left when labelPosition is left', () => {
      const { container } = render(
        <StatusIndicator status="online" label="Available" labelPosition="left" />
      );
      const wrapper = container.querySelector('[role="status"]');
      const children = wrapper?.children;
      expect(children?.[0]?.textContent).toBe('Available'); // label first
      expect(children?.[1]).toHaveAttribute('aria-hidden', 'true'); // dot second
    });

    it('applies correct color classes to label based on status', () => {
      const { rerender } = render(<StatusIndicator status="online" label="Test" />);
      expect(screen.getByText('Test')).toHaveClass('text-green-700');

      rerender(<StatusIndicator status="busy" label="Test" />);
      expect(screen.getByText('Test')).toHaveClass('text-red-700');

      rerender(<StatusIndicator status="away" label="Test" />);
      expect(screen.getByText('Test')).toHaveClass('text-yellow-700');

      rerender(<StatusIndicator status="offline" label="Test" />);
      expect(screen.getByText('Test')).toHaveClass('text-slate-700');

      rerender(<StatusIndicator status="idle" label="Test" />);
      expect(screen.getByText('Test')).toHaveClass('text-blue-700');
    });
  });

  describe('Accessibility', () => {
    it('has proper role attribute', () => {
      render(<StatusIndicator />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('has aria-label describing the status', () => {
      render(<StatusIndicator status="busy" />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Status: busy');
    });

    it('hides decorative dot from screen readers when label is present', () => {
      const { container } = render(<StatusIndicator status="online" label="Available" />);
      const dot = container.querySelector('[aria-hidden="true"]');
      expect(dot).toBeInTheDocument();
    });

    it('provides status information even without visible label', () => {
      render(<StatusIndicator status="away" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveAttribute('aria-label', 'Status: away');
    });
  });

  describe('Custom Props', () => {
    it('accepts custom className', () => {
      render(<StatusIndicator className="custom-class" />);
      const indicator = screen.getByRole('status');
      expect(indicator).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = { current: null as HTMLSpanElement | null };
      render(<StatusIndicator ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('spreads additional HTML attributes', () => {
      render(<StatusIndicator data-testid="status-test" />);
      expect(screen.getByTestId('status-test')).toBeInTheDocument();
    });

    it('accepts onClick handler', () => {
      const handleClick = vi.fn();
      render(<StatusIndicator onClick={handleClick} />);
      screen.getByRole('status').click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Default Label Behavior', () => {
    it('shows "Online" as default for online status when label is not provided', () => {
      render(<StatusIndicator status="online" label={undefined} />);
      // Default behavior is to NOT show label unless explicitly provided
      expect(screen.queryByText('Online')).not.toBeInTheDocument();
    });

    it('shows custom label when explicitly provided', () => {
      render(<StatusIndicator status="online" label="Custom Status" />);
      expect(screen.getByText('Custom Status')).toBeInTheDocument();
    });
  });

  describe('Combined Variants', () => {
    it('combines status, size, and variant props correctly', () => {
      const { container } = render(<StatusIndicator status="busy" size="lg" variant="pulsing" />);
      const indicator = container.querySelector('.animate-pulse.h-3.bg-red-500');
      expect(indicator).toBeInTheDocument();
    });

    it('combines status, size, and showRing correctly', () => {
      const { container } = render(<StatusIndicator status="away" size="xl" showRing />);
      const indicator = container.querySelector('.ring-2.h-4.bg-yellow-500');
      expect(indicator).toBeInTheDocument();
    });

    it('works with label, labelPosition, and all other props', () => {
      render(
        <StatusIndicator
          status="idle"
          size="lg"
          variant="pulsing"
          label="Connecting"
          labelPosition="left"
        />
      );
      expect(screen.getByText('Connecting')).toBeInTheDocument();
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Status: idle');
    });
  });

  describe('Edge Cases', () => {
    it('handles very long label text', () => {
      const longLabel = 'This is a very long status message that might wrap';
      render(<StatusIndicator label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('handles special characters in label', () => {
      render(<StatusIndicator label="Status: @#$%^&*()" />);
      expect(screen.getByText('Status: @#$%^&*()')).toBeInTheDocument();
    });

    it('handles empty string label differently from undefined', () => {
      const { rerender } = render(<StatusIndicator status="online" label="" />);
      expect(screen.queryByText('Online')).not.toBeInTheDocument();

      rerender(<StatusIndicator status="online" label={undefined} />);
      expect(screen.queryByText('Online')).not.toBeInTheDocument();

      rerender(<StatusIndicator status="online" />);
      expect(screen.queryByText('Online')).not.toBeInTheDocument();
    });
  });

  describe('Color Classes', () => {
    it('applies correct background color for online status', () => {
      const { container } = render(<StatusIndicator status="online" />);
      expect(container.querySelector('.bg-green-500')).toBeInTheDocument();
    });

    it('applies correct background color for offline status', () => {
      const { container } = render(<StatusIndicator status="offline" />);
      expect(container.querySelector('.bg-slate-400')).toBeInTheDocument();
    });

    it('applies correct background color for away status', () => {
      const { container } = render(<StatusIndicator status="away" />);
      expect(container.querySelector('.bg-yellow-500')).toBeInTheDocument();
    });

    it('applies correct background color for busy status', () => {
      const { container } = render(<StatusIndicator status="busy" />);
      expect(container.querySelector('.bg-red-500')).toBeInTheDocument();
    });

    it('applies correct background color for idle status', () => {
      const { container } = render(<StatusIndicator status="idle" />);
      expect(container.querySelector('.bg-blue-500')).toBeInTheDocument();
    });
  });
});
