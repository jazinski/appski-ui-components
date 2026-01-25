import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FaHome, FaFolder, FaFile, FaAngleRight } from 'react-icons/fa';
import { Breadcrumb, type BreadcrumbItem } from './breadcrumb';

describe('Breadcrumb', () => {
  const basicItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'UI Components', href: '/projects/ui' },
    { label: 'Breadcrumb' },
  ];

  describe('Rendering', () => {
    it('renders all breadcrumb items', () => {
      render(<Breadcrumb items={basicItems} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('UI Components')).toBeInTheDocument();
      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
    });

    it('renders nav element with breadcrumb aria-label', () => {
      render(<Breadcrumb items={basicItems} />);

      const nav = screen.getByLabelText('breadcrumb');
      expect(nav).toBeInTheDocument();
      expect(nav.tagName).toBe('NAV');
    });

    it('renders items in an ordered list', () => {
      const { container } = render(<Breadcrumb items={basicItems} />);

      const ol = container.querySelector('ol');
      expect(ol).toBeInTheDocument();
      expect(ol?.children.length).toBeGreaterThan(0);
    });

    it('renders links for items with href', () => {
      render(<Breadcrumb items={basicItems} />);

      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toHaveAttribute('href', '/');

      const projectsLink = screen.getByRole('link', { name: /projects/i });
      expect(projectsLink).toHaveAttribute('href', '/projects');
    });

    it('does not render link for current page (last item without href)', () => {
      render(<Breadcrumb items={basicItems} />);

      const currentPage = screen.getByText('Breadcrumb');
      expect(currentPage.tagName).toBe('SPAN');
      expect(currentPage.closest('a')).not.toBeInTheDocument();
    });

    it('marks current page with aria-current="page"', () => {
      render(<Breadcrumb items={basicItems} />);

      const currentPage = screen.getByText('Breadcrumb').parentElement;
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Icons', () => {
    it('renders icons when provided', () => {
      const itemsWithIcons: BreadcrumbItem[] = [
        { label: 'Home', href: '/', icon: <FaHome data-testid="home-icon" /> },
        { label: 'Projects', href: '/projects', icon: <FaFolder data-testid="folder-icon" /> },
        { label: 'Current', icon: <FaFile data-testid="file-icon" /> },
      ];

      render(<Breadcrumb items={itemsWithIcons} />);

      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByTestId('folder-icon')).toBeInTheDocument();
      expect(screen.getByTestId('file-icon')).toBeInTheDocument();
    });

    it('hides icons from screen readers with aria-hidden', () => {
      const itemsWithIcons: BreadcrumbItem[] = [{ label: 'Home', href: '/', icon: <FaHome /> }];

      const { container } = render(<Breadcrumb items={itemsWithIcons} />);
      const iconWrapper = container.querySelector('span[aria-hidden="true"]');
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  describe('Separator', () => {
    it('renders default separator between items', () => {
      const { container } = render(<Breadcrumb items={basicItems} />);

      // There should be 3 separators for 4 items
      const separators = container.querySelectorAll('li[aria-hidden="true"]');
      expect(separators.length).toBe(3);
    });

    it('does not render separator after last item', () => {
      const { container } = render(<Breadcrumb items={basicItems} />);

      const listItems = container.querySelectorAll('li');
      const lastItem = listItems[listItems.length - 1];
      expect(lastItem.getAttribute('aria-hidden')).not.toBe('true');
    });

    it('renders custom separator', () => {
      render(
        <Breadcrumb items={basicItems} separator={<FaAngleRight data-testid="custom-sep" />} />
      );

      const separators = screen.getAllByTestId('custom-sep');
      expect(separators.length).toBe(3); // 4 items = 3 separators
    });

    it('renders text separator', () => {
      render(<Breadcrumb items={basicItems} separator=">" />);

      const text = screen.getAllByText('>');
      expect(text.length).toBe(3);
    });
  });

  describe('Max Items / Truncation', () => {
    const longItems: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Web', href: '/projects/web' },
      { label: 'React', href: '/projects/web/react' },
      { label: 'Libraries', href: '/projects/web/react/libraries' },
      { label: 'UI', href: '/projects/web/react/libraries/ui' },
      { label: 'Breadcrumb' },
    ];

    it('shows all items when maxItems is not set', () => {
      render(<Breadcrumb items={longItems} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Web')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Libraries')).toBeInTheDocument();
      expect(screen.getByText('UI')).toBeInTheDocument();
      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
    });

    it('truncates items when maxItems is set', () => {
      render(<Breadcrumb items={longItems} maxItems={4} />);

      // Should show: Home, ..., UI, Breadcrumb
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('...')).toBeInTheDocument();
      expect(screen.getByText('UI')).toBeInTheDocument();
      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();

      // Should not show middle items
      expect(screen.queryByText('Projects')).not.toBeInTheDocument();
      expect(screen.queryByText('Web')).not.toBeInTheDocument();
      expect(screen.queryByText('React')).not.toBeInTheDocument();
    });

    it('handles maxItems=1 (only current page)', () => {
      render(<Breadcrumb items={longItems} maxItems={1} />);

      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
    });

    it('handles maxItems=2 (first and last)', () => {
      render(<Breadcrumb items={longItems} maxItems={2} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
      expect(screen.queryByText('...')).not.toBeInTheDocument();
    });

    it('shows all items when maxItems is greater than items length', () => {
      render(<Breadcrumb items={basicItems} maxItems={10} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('UI Components')).toBeInTheDocument();
      expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size classes', () => {
      const { container } = render(<Breadcrumb items={basicItems} size="sm" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-xs', 'gap-1');
    });

    it('applies medium size classes (default)', () => {
      const { container } = render(<Breadcrumb items={basicItems} size="md" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-sm', 'gap-1.5');
    });

    it('applies large size classes', () => {
      const { container } = render(<Breadcrumb items={basicItems} size="lg" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('text-base', 'gap-2');
    });
  });

  describe('Variants', () => {
    it('applies default variant classes', () => {
      render(<Breadcrumb items={basicItems} variant="default" />);

      const link = screen.getByRole('link', { name: /home/i });
      expect(link).toHaveClass('hover:text-foreground');
    });

    it('applies ghost variant classes', () => {
      render(<Breadcrumb items={basicItems} variant="ghost" />);

      const link = screen.getByRole('link', { name: /home/i });
      expect(link).toHaveClass('hover:text-foreground/80');
    });
  });

  describe('onClick Handler', () => {
    it('calls onClick handler when item is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn((e: unknown) => {
        if (
          e &&
          typeof e === 'object' &&
          'preventDefault' in e &&
          typeof e.preventDefault === 'function'
        ) {
          e.preventDefault();
        }
        return undefined;
      });

      const itemsWithClick: BreadcrumbItem[] = [
        { label: 'Home', href: '/', onClick: handleClick },
        { label: 'Current' },
      ];

      render(<Breadcrumb items={itemsWithClick} />);

      const link = screen.getByRole('link', { name: /home/i });
      await user.click(link);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Without Links', () => {
    it('renders all items as text when no hrefs provided', () => {
      const textOnlyItems: BreadcrumbItem[] = [
        { label: 'Home' },
        { label: 'Projects' },
        { label: 'Current' },
      ];

      render(<Breadcrumb items={textOnlyItems} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Current')).toBeInTheDocument();

      // No links should be present
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
  });

  describe('Custom className', () => {
    it('accepts and applies custom className', () => {
      const { container } = render(<Breadcrumb items={basicItems} className="custom-class" />);

      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('handles single item', () => {
      const singleItem: BreadcrumbItem[] = [{ label: 'Only Item' }];

      render(<Breadcrumb items={singleItem} />);

      expect(screen.getByText('Only Item')).toBeInTheDocument();

      // No separator should be present
      const { container } = render(<Breadcrumb items={singleItem} />);
      const separators = container.querySelectorAll('li[aria-hidden="true"]');
      expect(separators.length).toBe(0);
    });

    it('handles empty label gracefully', () => {
      const itemsWithEmpty: BreadcrumbItem[] = [{ label: '', href: '/' }, { label: 'Projects' }];

      const { container } = render(<Breadcrumb items={itemsWithEmpty} />);

      expect(container).toBeInTheDocument();
    });
  });
});
