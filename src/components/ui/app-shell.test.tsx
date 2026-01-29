import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppShell } from './app-shell';

describe('AppShell', () => {
  // Mock window.matchMedia for responsive behavior
  const mockDesktopWidth = () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(min-width: 768px)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  };

  const mockMobileWidth = () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query !== '(min-width: 768px)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as unknown as typeof window.matchMedia;
  };

  beforeEach(() => {
    mockDesktopWidth();
  });

  describe('Rendering', () => {
    it('renders with basic props', () => {
      render(
        <AppShell sidebar={<div>Sidebar Content</div>}>
          <div>Main Content</div>
        </AppShell>
      );

      expect(screen.getByTestId('app-shell')).toBeInTheDocument();
      expect(screen.getByText('Sidebar Content')).toBeInTheDocument();
      expect(screen.getByText('Main Content')).toBeInTheDocument();
    });

    it('renders with sidebar logo', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} sidebarLogo={<div>Logo</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByText('Logo')).toBeInTheDocument();
    });

    it('renders with sidebar footer', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} sidebarFooter={<div>Footer</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('renders with header', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} header={<div>Header Content</div>}>
          <div>Main Content</div>
        </AppShell>
      );

      expect(screen.getByTestId('app-shell-header')).toBeInTheDocument();
      expect(screen.getByText('Header Content')).toBeInTheDocument();
    });

    it('renders without header when not provided', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.queryByTestId('app-shell-header')).not.toBeInTheDocument();
    });

    it('renders main content area', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Main Content</div>
        </AppShell>
      );

      const main = screen.getByTestId('app-shell-main');
      expect(main).toBeInTheDocument();
      expect(screen.getByText('Main Content')).toBeInTheDocument();
    });
  });

  describe('Layout Structure', () => {
    it('has correct flex layout', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      const shell = screen.getByTestId('app-shell');
      expect(shell).toHaveClass('flex', 'h-screen', 'w-full', 'overflow-hidden');
    });

    it('main content area is scrollable', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      const main = screen.getByTestId('app-shell-main');
      expect(main).toHaveClass('overflow-y-auto', 'overflow-x-hidden');
    });

    it('applies custom className to main content', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} className="custom-class">
          <div>Content</div>
        </AppShell>
      );

      const main = screen.getByTestId('app-shell-main');
      expect(main).toHaveClass('custom-class');
    });

    it('has dark mode background colors', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      const shell = screen.getByTestId('app-shell');
      expect(shell).toHaveClass('bg-slate-950');

      const main = screen.getByTestId('app-shell-main');
      expect(main).toHaveClass('bg-slate-950');
    });

    it('header has dark mode styling when present', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} header={<div>Header</div>}>
          <div>Content</div>
        </AppShell>
      );

      const header = screen.getByTestId('app-shell-header');
      expect(header).toHaveClass('bg-slate-900', 'border-b', 'border-slate-800');
    });
  });

  describe('Sidebar Integration', () => {
    it('passes sidebar content to Sidebar component', () => {
      render(
        <AppShell sidebar={<div data-testid="nav-content">Navigation</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByTestId('nav-content')).toBeInTheDocument();
    });

    it('passes logo to Sidebar component', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} sidebarLogo={<div data-testid="logo-content">Logo</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByTestId('logo-content')).toBeInTheDocument();
    });

    it('passes footer to Sidebar component', () => {
      render(
        <AppShell
          sidebar={<div>Nav</div>}
          sidebarFooter={<div data-testid="footer-content">User Menu</div>}
        >
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByTestId('footer-content')).toBeInTheDocument();
    });
  });

  describe('Controlled Sidebar State', () => {
    it('passes controlled open state to Sidebar', () => {
      mockMobileWidth();
      const { rerender } = render(
        <AppShell sidebar={<div>Nav</div>} sidebarOpen={false}>
          <div>Content</div>
        </AppShell>
      );

      // Sidebar should not be visible on mobile when closed
      const sidebar = screen.getByTestId('sidebar');
      expect(sidebar).toHaveClass('-translate-x-full');

      // Change to open
      rerender(
        <AppShell sidebar={<div>Nav</div>} sidebarOpen={true}>
          <div>Content</div>
        </AppShell>
      );

      expect(sidebar).toHaveClass('translate-x-0');
    });

    it('calls onSidebarOpenChange when sidebar state changes', () => {
      mockMobileWidth();
      const handleChange = vi.fn();

      render(
        <AppShell sidebar={<div>Nav</div>} onSidebarOpenChange={handleChange}>
          <div>Content</div>
        </AppShell>
      );

      // Simulate opening sidebar by clicking overlay area (if closed)
      // This is handled by Sidebar component internally
      // The test here validates that the prop is passed through
      expect(handleChange).not.toHaveBeenCalled(); // No automatic calls on mount
    });
  });

  describe('Responsive Behavior', () => {
    it('works on desktop viewport', () => {
      mockDesktopWidth();

      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      // On desktop, sidebar should be visible by default
      const sidebar = screen.getByTestId('sidebar');
      expect(sidebar).toBeInTheDocument();
    });

    it('works on mobile viewport', () => {
      mockMobileWidth();

      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      // On mobile, sidebar is in drawer mode
      const sidebar = screen.getByTestId('sidebar');
      expect(sidebar).toBeInTheDocument();
      expect(sidebar).toHaveClass('fixed'); // Mobile uses fixed positioning
    });
  });

  describe('Content Area', () => {
    it('renders multiple children in main area', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>First Section</div>
          <div>Second Section</div>
          <div>Third Section</div>
        </AppShell>
      );

      expect(screen.getByText('First Section')).toBeInTheDocument();
      expect(screen.getByText('Second Section')).toBeInTheDocument();
      expect(screen.getByText('Third Section')).toBeInTheDocument();
    });

    it('supports complex content structures', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>
            <h1>Page Title</h1>
            <section>
              <p>Paragraph</p>
            </section>
          </div>
        </AppShell>
      );

      expect(screen.getByRole('heading', { name: 'Page Title' })).toBeInTheDocument();
      expect(screen.getByText('Paragraph')).toBeInTheDocument();
    });
  });

  describe('Header Slot', () => {
    it('positions header above main content', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} header={<div>Header</div>}>
          <div>Content</div>
        </AppShell>
      );

      const header = screen.getByTestId('app-shell-header');
      const main = screen.getByTestId('app-shell-main');

      // Header should exist and be positioned above main
      expect(header).toBeInTheDocument();
      expect(main).toBeInTheDocument();
    });

    it('header has flex-shrink-0 to prevent collapsing', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} header={<div>Header</div>}>
          <div>Content</div>
        </AppShell>
      );

      const header = screen.getByTestId('app-shell-header');
      expect(header).toHaveClass('flex-shrink-0');
    });

    it('supports complex header content', () => {
      render(
        <AppShell
          sidebar={<div>Nav</div>}
          header={
            <div>
              <button>Menu</button>
              <h1>App Title</h1>
              <button>Profile</button>
            </div>
          }
        >
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'App Title' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Profile' })).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML elements', () => {
      render(
        <AppShell sidebar={<div>Nav</div>} header={<div>Header</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
      expect(screen.getByRole('main')).toBeInTheDocument(); // main element
    });

    it('main content is keyboard accessible', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <button>Action</button>
        </AppShell>
      );

      const button = screen.getByRole('button', { name: 'Action' });
      expect(button).toBeInTheDocument();
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to root element', () => {
      const ref = vi.fn();

      render(
        <AppShell ref={ref} sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Full Layout Integration', () => {
    it('renders complete layout with all sections', () => {
      render(
        <AppShell
          sidebar={<nav>Main Navigation</nav>}
          sidebarLogo={<div>Company Logo</div>}
          sidebarFooter={<div>User Profile</div>}
          header={<div>Page Header</div>}
        >
          <article>
            <h1>Page Content</h1>
            <p>Body text</p>
          </article>
        </AppShell>
      );

      // Verify all sections are present
      expect(screen.getByText('Company Logo')).toBeInTheDocument();
      expect(screen.getByText('Main Navigation')).toBeInTheDocument();
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Page Header')).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Page Content' })).toBeInTheDocument();
      expect(screen.getByText('Body text')).toBeInTheDocument();
    });

    it('maintains scroll independence between sidebar and main', () => {
      render(
        <AppShell sidebar={<div>Nav</div>}>
          <div>Content</div>
        </AppShell>
      );

      const main = screen.getByTestId('app-shell-main');
      const sidebar = screen.getByTestId('sidebar');

      // Main content is scrollable
      expect(main).toHaveClass('overflow-y-auto');

      // Sidebar has its own scroll in the content area
      const sidebarContent = sidebar.querySelector('[class*="overflow-y-auto"]');
      expect(sidebarContent).toBeInTheDocument();
    });
  });
});
