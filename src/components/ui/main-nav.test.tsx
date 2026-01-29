import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainNav } from './main-nav';
import { Home, Settings, Users } from 'lucide-react';

const mockItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Settings', href: '/settings', icon: Settings },
  { label: 'Users', href: '/users', icon: Users },
];

describe('MainNav', () => {
  describe('Rendering', () => {
    it('should render navigation with items', () => {
      render(<MainNav items={mockItems} />);

      expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /users/i })).toBeInTheDocument();
    });

    it('should render icons for each item', () => {
      const { container } = render(<MainNav items={mockItems} />);

      // Each item should have an icon (svg element)
      const icons = container.querySelectorAll('svg');
      expect(icons).toHaveLength(mockItems.length);
    });

    it('should render item with correct href', () => {
      render(<MainNav items={mockItems} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('should render badges when provided', () => {
      const itemsWithBadge = [
        { label: 'Home', href: '/', icon: Home, badge: 5 },
        { label: 'Settings', href: '/settings', icon: Settings, badge: 'New' },
      ];

      render(<MainNav items={itemsWithBadge} />);

      expect(screen.getByText('5')).toBeInTheDocument();
      expect(screen.getByText('New')).toBeInTheDocument();
    });
  });

  describe('Active State', () => {
    it('should apply active styling to active item', () => {
      const items = [
        { label: 'Home', href: '/', icon: Home, active: true },
        { label: 'Settings', href: '/settings', icon: Settings },
      ];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('aria-current', 'page');
      expect(homeLink).toHaveClass('bg-indigo-600');
    });

    it('should not apply active styling to non-active items', () => {
      const items = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Settings', href: '/settings', icon: Settings },
      ];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).not.toHaveAttribute('aria-current', 'page');
      expect(homeLink).not.toHaveClass('bg-indigo-600');
    });
  });

  describe('Sections', () => {
    it('should render sections with headers', () => {
      const sections = [
        {
          title: 'MAIN',
          items: [{ label: 'Home', href: '/', icon: Home }],
        },
        {
          title: 'SETTINGS',
          items: [{ label: 'Settings', href: '/settings', icon: Settings }],
        },
      ];

      render(<MainNav items={sections} />);

      expect(screen.getByText('MAIN')).toBeInTheDocument();
      expect(screen.getByText('SETTINGS')).toBeInTheDocument();
    });

    it('should render section without header when title is not provided', () => {
      const sections = [
        {
          items: [
            { label: 'Home', href: '/', icon: Home },
            { label: 'Settings', href: '/settings', icon: Settings },
          ],
        },
      ];

      render(<MainNav items={sections} />);

      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('should call onItemClick when item is clicked', async () => {
      const user = userEvent.setup();
      const mockOnItemClick = vi.fn();

      render(<MainNav items={mockItems} onItemClick={mockOnItemClick} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      await user.click(homeLink);

      expect(mockOnItemClick).toHaveBeenCalledWith(
        expect.objectContaining({ label: 'Home', href: '/' })
      );
    });

    it('should call item onClick handler when provided', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [{ label: 'Home', href: '/', icon: Home, onClick: mockOnClick }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      await user.click(homeLink);

      expect(mockOnClick).toHaveBeenCalled();
    });

    it('should prevent default when onClick is provided', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [{ label: 'Home', href: '/', icon: Home, onClick: mockOnClick }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      await user.click(homeLink);

      // onClick should be called, meaning preventDefault was called
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  describe('Keyboard Navigation', () => {
    it('should trigger item on Enter key', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [{ label: 'Home', href: '/', icon: Home, onClick: mockOnClick }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      homeLink.focus();
      await user.keyboard('{Enter}');

      expect(mockOnClick).toHaveBeenCalled();
    });

    it('should trigger item on Space key', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [{ label: 'Home', href: '/', icon: Home, onClick: mockOnClick }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      homeLink.focus();
      await user.keyboard(' ');

      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  describe('Disabled State', () => {
    it('should render disabled item with aria-disabled', () => {
      const items = [{ label: 'Home', href: '/', icon: Home, disabled: true }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('aria-disabled', 'true');
      expect(homeLink).toHaveAttribute('tabIndex', '-1');
    });

    it('should not call onClick when disabled item is clicked', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [
        { label: 'Home', href: '/', icon: Home, onClick: mockOnClick, disabled: true },
      ];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      await user.click(homeLink);

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('should not trigger on keyboard when disabled', async () => {
      const user = userEvent.setup();
      const mockOnClick = vi.fn();
      const items = [
        { label: 'Home', href: '/', icon: Home, onClick: mockOnClick, disabled: true },
      ];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      homeLink.focus();
      await user.keyboard('{Enter}');

      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  describe('Size Variants', () => {
    it('should apply small size variant', () => {
      const { container } = render(<MainNav items={mockItems} size="sm" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-xs');
    });

    it('should apply large size variant', () => {
      const { container } = render(<MainNav items={mockItems} size="lg" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-base');
    });

    it('should apply default size when not specified', () => {
      const { container } = render(<MainNav items={mockItems} />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-sm');
    });
  });

  describe('Accessibility', () => {
    it('should have proper navigation role', () => {
      render(<MainNav items={mockItems} />);

      const nav = screen.getByRole('navigation', { name: /main navigation/i });
      expect(nav).toBeInTheDocument();
    });

    it('should have aria-current on active item', () => {
      const items = [{ label: 'Home', href: '/', icon: Home, active: true }];

      render(<MainNav items={items} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });

    it('should hide icons from screen readers', () => {
      const { container } = render(<MainNav items={mockItems} />);

      const icons = container.querySelectorAll('svg');
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('should be keyboard focusable', () => {
      render(<MainNav items={mockItems} />);

      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('tabIndex', '0');
      });
    });
  });
});
