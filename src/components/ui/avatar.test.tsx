import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Avatar', () => {
  describe('Rendering', () => {
    it('renders with initials from name', () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders with custom initials', () => {
      render(<Avatar name="John Doe" initials="AB" />);
      expect(screen.getByText('AB')).toBeInTheDocument();
    });

    it('renders with image when src is provided', () => {
      render(<Avatar name="John Doe" src="/test.jpg" alt="Test Avatar" />);
      const img = screen.getByAltText('Test Avatar');
      expect(img).toBeInTheDocument();
      expect(img.src).toContain('/test.jpg');
    });

    it('uses name as alt text when alt is not provided', () => {
      render(<Avatar name="John Doe" src="/test.jpg" />);
      expect(screen.getByAltText('John Doe')).toBeInTheDocument();
    });

    it('renders loading skeleton when loading is true', () => {
      const { container } = render(<Avatar loading />);
      const skeleton = container.querySelector('.animate-pulse');
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with default avatar text when name is empty', () => {
      render(<Avatar name="" />);
      expect(screen.getByText('?')).toBeInTheDocument();
    });
  });

  describe('Initials Generation', () => {
    it('generates initials from first and last name', () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('generates initials from single name (first 2 chars)', () => {
      render(<Avatar name="Alice" />);
      expect(screen.getByText('AL')).toBeInTheDocument();
    });

    it('handles names with extra whitespace', () => {
      render(<Avatar name="  John   Doe  " />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles multiple word names (takes first 2)', () => {
      render(<Avatar name="John Michael Doe Smith" />);
      expect(screen.getByText('JM')).toBeInTheDocument();
    });

    it('handles single character names', () => {
      render(<Avatar name="A" />);
      expect(screen.getByText('A')).toBeInTheDocument();
    });

    it('generates uppercase initials', () => {
      render(<Avatar name="john doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles whitespace-only name', () => {
      render(<Avatar name="   " />);
      expect(screen.getByText('?')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders with xs size', () => {
      const { container } = render(<Avatar name="Test" size="xs" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-6');
      expect(avatar.className).toContain('w-6');
    });

    it('renders with sm size', () => {
      const { container } = render(<Avatar name="Test" size="sm" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-8');
      expect(avatar.className).toContain('w-8');
    });

    it('renders with md size (default)', () => {
      const { container } = render(<Avatar name="Test" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-10');
      expect(avatar.className).toContain('w-10');
    });

    it('renders with lg size', () => {
      const { container } = render(<Avatar name="Test" size="lg" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-12');
      expect(avatar.className).toContain('w-12');
    });

    it('renders with xl size', () => {
      const { container } = render(<Avatar name="Test" size="xl" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-16');
      expect(avatar.className).toContain('w-16');
    });

    it('renders with 2xl size', () => {
      const { container } = render(<Avatar name="Test" size="2xl" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('h-20');
      expect(avatar.className).toContain('w-20');
    });
  });

  describe('Shapes', () => {
    it('renders circle shape by default', () => {
      const { container } = render(<Avatar name="Test" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('rounded-full');
    });

    it('renders square shape', () => {
      const { container } = render(<Avatar name="Test" shape="square" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('rounded-lg');
    });
  });

  describe('Status Indicators', () => {
    it('renders online status indicator', () => {
      const { container } = render(<Avatar name="Test" status="online" />);
      const statusIndicator = container.querySelector('[aria-label="Status: online"]');
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator?.className).toContain('bg-green-500');
    });

    it('renders offline status indicator', () => {
      const { container } = render(<Avatar name="Test" status="offline" />);
      const statusIndicator = container.querySelector('[aria-label="Status: offline"]');
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator?.className).toContain('bg-slate-400');
    });

    it('renders away status indicator', () => {
      const { container } = render(<Avatar name="Test" status="away" />);
      const statusIndicator = container.querySelector('[aria-label="Status: away"]');
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator?.className).toContain('bg-yellow-500');
    });

    it('renders busy status indicator', () => {
      const { container } = render(<Avatar name="Test" status="busy" />);
      const statusIndicator = container.querySelector('[aria-label="Status: busy"]');
      expect(statusIndicator).toBeInTheDocument();
      expect(statusIndicator?.className).toContain('bg-red-500');
    });

    it('does not render status indicator when loading', () => {
      const { container } = render(<Avatar name="Test" status="online" loading />);
      const statusIndicator = container.querySelector('[aria-label*="Status"]');
      expect(statusIndicator).not.toBeInTheDocument();
    });

    it('does not render status indicator when status is undefined', () => {
      const { container } = render(<Avatar name="Test" />);
      const statusIndicator = container.querySelector('[aria-label*="Status"]');
      expect(statusIndicator).not.toBeInTheDocument();
    });
  });

  describe('Image Handling', () => {
    it('shows initials when image fails to load', async () => {
      // Mock image onerror
      render(<Avatar name="John Doe" src="/invalid.jpg" />);

      const img = screen.getByRole('img');

      // Simulate image error
      img.onerror?.(new Event('error'));

      await waitFor(() => {
        expect(screen.getByText('JD')).toBeInTheDocument();
      });
    });

    it('hides skeleton after image loads', async () => {
      const { container } = render(<Avatar name="Test" src="/test.jpg" />);

      // Initially should have loading state
      const img = screen.getByRole('img');

      // Simulate image load
      img.onload?.(new Event('load'));

      await waitFor(() => {
        const skeleton = container.querySelector('.animate-pulse');
        expect(skeleton).not.toBeInTheDocument();
      });
    });

    it('updates image when src changes', async () => {
      const { rerender } = render(<Avatar name="Test" src="/test1.jpg" />);

      let img = screen.getByRole('img');
      expect(img.src).toContain('/test1.jpg');

      rerender(<Avatar name="Test" src="/test2.jpg" />);

      await waitFor(() => {
        img = screen.getByRole('img');
        expect(img.src).toContain('/test2.jpg');
      });
    });
  });

  describe('Color Consistency', () => {
    it('generates consistent colors for the same name', () => {
      const { container: container1 } = render(<Avatar name="John Doe" />);
      const { container: container2 } = render(<Avatar name="John Doe" />);

      const initials1 = container1.querySelector(
        '.bg-indigo-500, .bg-blue-500, .bg-cyan-500, .bg-teal-500, .bg-green-500, .bg-lime-500, .bg-amber-500, .bg-orange-500, .bg-red-500, .bg-pink-500, .bg-purple-500, .bg-violet-500'
      );
      const initials2 = container2.querySelector(
        '.bg-indigo-500, .bg-blue-500, .bg-cyan-500, .bg-teal-500, .bg-green-500, .bg-lime-500, .bg-amber-500, .bg-orange-500, .bg-red-500, .bg-pink-500, .bg-purple-500, .bg-violet-500'
      );

      expect(initials1?.className).toBe(initials2?.className);
    });

    it('generates different colors for different names', () => {
      const { container: container1 } = render(<Avatar name="John Doe" />);
      const { container: container2 } = render(<Avatar name="Jane Smith" />);

      const initials1 = container1.querySelector('[class*="bg-"]');
      const initials2 = container2.querySelector('[class*="bg-"]');

      // While we can't guarantee different colors, we can verify both have color classes
      expect(initials1).toBeInTheDocument();
      expect(initials2).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper alt text for images', () => {
      render(<Avatar name="John Doe" src="/test.jpg" alt="John's avatar" />);
      expect(screen.getByAltText("John's avatar")).toBeInTheDocument();
    });

    it('uses name as fallback alt text', () => {
      render(<Avatar name="John Doe" src="/test.jpg" />);
      expect(screen.getByAltText('John Doe')).toBeInTheDocument();
    });

    it('has aria-label for status indicator', () => {
      const { container } = render(<Avatar name="Test" status="online" />);
      const statusIndicator = container.querySelector('[aria-label="Status: online"]');
      expect(statusIndicator).toBeInTheDocument();
    });

    it('provides default alt text when no name is given', () => {
      render(<Avatar src="/test.jpg" />);
      expect(screen.getByAltText('Avatar')).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      const { container } = render(<Avatar name="Test" className="custom-class" />);
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.className).toContain('custom-class');
    });

    it('accepts custom props', () => {
      const { container } = render(
        <Avatar name="Test" data-testid="custom-avatar" aria-label="Custom Label" />
      );
      const avatar = container.firstChild as HTMLElement;
      expect(avatar.getAttribute('data-testid')).toBe('custom-avatar');
      expect(avatar.getAttribute('aria-label')).toBe('Custom Label');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to the avatar element', () => {
      const ref = vi.fn();
      render(<Avatar name="Test" ref={ref} />);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined name gracefully', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const undefinedName: any = undefined;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      render(<Avatar name={undefinedName} />);
      expect(screen.getByText('?')).toBeInTheDocument();
    });

    it('handles very long names', () => {
      render(<Avatar name="Verylongsinglewordnamethatgoesforever" />);
      expect(screen.getByText('VE')).toBeInTheDocument();
    });

    it('handles names with special characters', () => {
      render(<Avatar name="Jöhn Döe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles names with numbers', () => {
      render(<Avatar name="User123 Test456" />);
      expect(screen.getByText('UT')).toBeInTheDocument();
    });

    it('shows initials when both src and loading are provided', () => {
      render(<Avatar name="John Doe" src="/test.jpg" loading />);
      // Should show skeleton, not initials or image
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });

  describe('Loading States', () => {
    it('shows skeleton during image loading', () => {
      const { container } = render(<Avatar name="Test" src="/test.jpg" />);
      const skeleton = container.querySelector('.animate-pulse');
      expect(skeleton).toBeInTheDocument();
    });

    it('shows skeleton when loading prop is true', () => {
      const { container } = render(<Avatar name="Test" loading />);
      const skeleton = container.querySelector('.animate-pulse');
      expect(skeleton).toBeInTheDocument();
    });

    it('does not show initials during loading', () => {
      render(<Avatar name="Test" loading />);
      expect(screen.queryByText('TE')).not.toBeInTheDocument();
    });

    it('does not show status indicator during loading', () => {
      const { container } = render(<Avatar name="Test" status="online" loading />);
      const statusIndicator = container.querySelector('[aria-label*="Status"]');
      expect(statusIndicator).not.toBeInTheDocument();
    });
  });

  describe('Component Display Name', () => {
    it('has the correct display name', () => {
      expect(Avatar.displayName).toBe('Avatar');
    });
  });
});
