import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    // Restore original window width
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });

    // Clean up body overflow style
    document.body.style.overflow = '';
  });

  const mockDesktopWidth = () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  };

  const mockMobileWidth = () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });
  };

  it('renders sidebar with basic content', () => {
    mockDesktopWidth();
    render(
      <Sidebar>
        <div>Navigation Content</div>
      </Sidebar>
    );

    expect(screen.getByText('Navigation Content')).toBeInTheDocument();
  });

  it('renders with logo', () => {
    mockDesktopWidth();
    render(
      <Sidebar logo={<img src="/logo.svg" alt="Company Logo" />}>
        <div>Content</div>
      </Sidebar>
    );

    const logo = screen.getByAltText('Company Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders with footer', () => {
    mockDesktopWidth();
    render(
      <Sidebar footer={<div>Footer Content</div>}>
        <div>Main Content</div>
      </Sidebar>
    );

    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('has proper ARIA label', () => {
    mockDesktopWidth();
    render(<Sidebar>Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveAttribute('aria-label', 'Sidebar navigation');
  });

  it('applies custom width', () => {
    mockDesktopWidth();
    render(<Sidebar width="300px">Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveStyle({ width: '300px' });
  });

  it('applies custom className', () => {
    mockDesktopWidth();
    render(<Sidebar className="custom-class">Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('custom-class');
  });

  it('is visible on desktop by default', () => {
    mockDesktopWidth();
    render(<Sidebar>Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('translate-x-0');
  });

  it('is hidden on mobile by default', () => {
    mockMobileWidth();
    const { container } = render(<Sidebar>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  it('shows on mobile when open prop is true', () => {
    mockMobileWidth();
    const { container } = render(<Sidebar open={true}>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('translate-x-0');
  });

  it('shows overlay on mobile when open', () => {
    mockMobileWidth();
    render(<Sidebar open={true}>Content</Sidebar>);

    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('opacity-100');
  });

  it('does not show overlay on desktop', () => {
    mockDesktopWidth();
    render(<Sidebar open={true}>Content</Sidebar>);

    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).not.toBeInTheDocument();
  });

  it('hides overlay when showOverlay is false', () => {
    mockMobileWidth();
    render(
      <Sidebar open={true} showOverlay={false}>
        Content
      </Sidebar>
    );

    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).not.toBeInTheDocument();
  });

  it('shows close button on mobile when open', () => {
    mockMobileWidth();
    render(<Sidebar open={true}>Content</Sidebar>);

    const closeButton = screen.getByRole('button', { name: /close sidebar/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('does not show close button on desktop', () => {
    mockDesktopWidth();
    render(<Sidebar open={true}>Content</Sidebar>);

    const closeButton = screen.queryByRole('button', { name: /close sidebar/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    mockMobileWidth();
    render(
      <Sidebar open={true} showCloseButton={false}>
        Content
      </Sidebar>
    );

    const closeButton = screen.queryByRole('button', { name: /close sidebar/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it('calls onOpenChange when close button is clicked', async () => {
    mockMobileWidth();
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <Sidebar open={true} onOpenChange={onOpenChange}>
        Content
      </Sidebar>
    );

    const closeButton = screen.getByRole('button', { name: /close sidebar/i });
    await user.click(closeButton);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('calls onOpenChange when overlay is clicked', async () => {
    mockMobileWidth();
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <Sidebar open={true} onOpenChange={onOpenChange}>
        Content
      </Sidebar>
    );

    const overlay = document.querySelector('[aria-hidden="true"]');
    expect(overlay).toBeInTheDocument();

    if (overlay) {
      await user.click(overlay as HTMLElement);
      expect(onOpenChange).toHaveBeenCalledWith(false);
    }
  });

  it('closes on Escape key press on mobile', async () => {
    mockMobileWidth();
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <Sidebar open={true} onOpenChange={onOpenChange}>
        Content
      </Sidebar>
    );

    await user.keyboard('{Escape}');

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('does not close on Escape when closed', async () => {
    mockMobileWidth();
    const user = userEvent.setup();
    const onOpenChange = vi.fn();

    render(
      <Sidebar open={false} onOpenChange={onOpenChange}>
        Content
      </Sidebar>
    );

    await user.keyboard('{Escape}');

    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('prevents body scroll when mobile sidebar is open', () => {
    mockMobileWidth();

    const { rerender } = render(<Sidebar open={false}>Content</Sidebar>);

    expect(document.body.style.overflow).toBe('');

    rerender(<Sidebar open={true}>Content</Sidebar>);

    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body scroll when mobile sidebar is closed', () => {
    mockMobileWidth();

    const { rerender } = render(<Sidebar open={true}>Content</Sidebar>);

    expect(document.body.style.overflow).toBe('hidden');

    rerender(<Sidebar open={false}>Content</Sidebar>);

    expect(document.body.style.overflow).toBe('');
  });

  it('does not prevent body scroll on desktop', () => {
    mockDesktopWidth();

    render(<Sidebar open={true}>Content</Sidebar>);

    expect(document.body.style.overflow).toBe('');
  });

  it('has scrollable main content area', () => {
    mockDesktopWidth();
    render(
      <Sidebar>
        <div>Very long content that should scroll</div>
      </Sidebar>
    );

    const contentArea = screen.getByText('Very long content that should scroll').parentElement;
    expect(contentArea).toHaveClass('overflow-y-auto');
  });

  it('renders logo in bordered section', () => {
    mockDesktopWidth();
    render(<Sidebar logo={<div>Logo</div>}>Content</Sidebar>);

    const logoSection = screen.getByText('Logo').parentElement;
    expect(logoSection).toHaveClass('border-b', 'border-slate-800');
  });

  it('renders footer in bordered section', () => {
    mockDesktopWidth();
    render(<Sidebar footer={<div>Footer</div>}>Content</Sidebar>);

    const footerSection = screen.getByText('Footer').parentElement;
    expect(footerSection).toHaveClass('border-t', 'border-slate-800');
  });

  it('uses static position on desktop', () => {
    mockDesktopWidth();
    render(<Sidebar>Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('relative');
    expect(sidebar).not.toHaveClass('fixed');
  });

  it('uses fixed position on mobile', () => {
    mockMobileWidth();
    const { container } = render(<Sidebar>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('fixed');
  });

  it('handles window resize from desktop to mobile', async () => {
    mockDesktopWidth();

    const { container } = render(<Sidebar>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('relative');

    // Simulate resize to mobile
    mockMobileWidth();
    window.dispatchEvent(new Event('resize'));

    await waitFor(() => {
      expect(sidebar).toHaveClass('fixed');
    });
  });

  it('handles window resize from mobile to desktop', async () => {
    mockMobileWidth();

    const { container } = render(<Sidebar open={false}>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('-translate-x-full');

    // Simulate resize to desktop
    mockDesktopWidth();
    window.dispatchEvent(new Event('resize'));

    await waitFor(() => {
      expect(sidebar).toHaveClass('translate-x-0');
    });
  });

  it('renders without logo and footer', () => {
    mockDesktopWidth();
    render(<Sidebar>Only main content</Sidebar>);

    expect(screen.getByText('Only main content')).toBeInTheDocument();
    expect(screen.queryByText('Logo')).not.toBeInTheDocument();
    expect(screen.queryByText('Footer')).not.toBeInTheDocument();
  });

  it('accepts ref', () => {
    mockDesktopWidth();
    const ref = React.createRef<HTMLElement>();

    render(<Sidebar ref={ref}>Content</Sidebar>);

    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('ASIDE');
  });

  it('cleans up event listeners on unmount', () => {
    mockMobileWidth();
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<Sidebar open={true}>Content</Sidebar>);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('applies dark mode styles', () => {
    mockDesktopWidth();
    render(<Sidebar>Content</Sidebar>);

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveClass('bg-slate-900', 'border-slate-800');
  });

  it('has smooth transition animations', () => {
    mockMobileWidth();
    const { container } = render(<Sidebar>Content</Sidebar>);

    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveClass('transition-all', 'duration-300', 'ease-in-out');
  });

  it('renders all three sections together', () => {
    mockDesktopWidth();
    render(
      <Sidebar logo={<div>App Logo</div>} footer={<div>User Menu</div>}>
        <div>Main Navigation</div>
      </Sidebar>
    );

    expect(screen.getByText('App Logo')).toBeInTheDocument();
    expect(screen.getByText('Main Navigation')).toBeInTheDocument();
    expect(screen.getByText('User Menu')).toBeInTheDocument();
  });
});


describe("Sidebar - Collapse Functionality", () => {
  // Mock desktop width for collapse tests
  const mockDesktopWidth = () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === "(min-width: 768px)",
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

  it("renders collapse toggle button on desktop by default", () => {
    render(<Sidebar>Content</Sidebar>);
    
    expect(screen.getByTestId("collapse-toggle")).toBeInTheDocument();
    expect(screen.getByLabelText("Collapse sidebar")).toBeInTheDocument();
  });

  it("does not render collapse toggle button when showCollapseButton is false", () => {
    render(<Sidebar showCollapseButton={false}>Content</Sidebar>);
    
    expect(screen.queryByTestId("collapse-toggle")).not.toBeInTheDocument();
  });

  it("renders with collapsed state when collapsed prop is true", () => {
    const { container } = render(<Sidebar collapsed>Content</Sidebar>);
    
    const sidebar = container.querySelector("aside");
    expect(sidebar).toHaveAttribute("data-collapsed", "true");
    expect(sidebar).toHaveStyle({ width: "60px" });
  });

  it("toggles collapsed state when collapse button is clicked", async () => {
    const user = userEvent.setup();
    render(<Sidebar>Content</Sidebar>);
    
    const toggleButton = screen.getByTestId("collapse-toggle");
    const sidebar = screen.getByTestId("sidebar");
    
    // Initially not collapsed
    expect(sidebar).toHaveAttribute("data-collapsed", "false");
    
    // Click to collapse
    await user.click(toggleButton);
    expect(sidebar).toHaveAttribute("data-collapsed", "true");
    
    // Click to expand
    await user.click(toggleButton);
    expect(sidebar).toHaveAttribute("data-collapsed", "false");
  });

  it("calls onCollapsedChange callback when collapsed state changes", async () => {
    const onCollapsedChange = vi.fn();
    const user = userEvent.setup();
    render(<Sidebar onCollapsedChange={onCollapsedChange}>Content</Sidebar>);
    
    const toggleButton = screen.getByTestId("collapse-toggle");
    
    await user.click(toggleButton);
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
    
    await user.click(toggleButton);
    expect(onCollapsedChange).toHaveBeenCalledWith(false);
  });

  it("supports controlled collapsed state", async () => {
    const onCollapsedChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Sidebar collapsed={false} onCollapsedChange={onCollapsedChange}>
        Content
      </Sidebar>
    );
    
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveAttribute("data-collapsed", "false");
    
    await user.click(screen.getByTestId("collapse-toggle"));
    expect(onCollapsedChange).toHaveBeenCalledWith(true);
  });

  it("hides logo when collapsed", () => {
    const { rerender } = render(
      <Sidebar logo={<div data-testid="logo">Logo</div>}>Content</Sidebar>
    );
    
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    
    rerender(
      <Sidebar collapsed logo={<div data-testid="logo">Logo</div>}>
        Content
      </Sidebar>
    );
    
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
  });

  it("passes collapsed prop to children", () => {
    const ChildComponent = ({ collapsed }: { collapsed?: boolean }) => (
      <div data-testid="child" data-collapsed={collapsed}>
        Child
      </div>
    );
    
    render(
      <Sidebar collapsed>
        <ChildComponent />
      </Sidebar>
    );
    
    const child = screen.getByTestId("child");
    expect(child).toHaveAttribute("data-collapsed", "true");
  });

  it("passes collapsed prop to footer", () => {
    const FooterComponent = ({ collapsed }: { collapsed?: boolean }) => (
      <div data-testid="footer" data-collapsed={collapsed}>
        Footer
      </div>
    );
    
    render(<Sidebar collapsed footer={<FooterComponent />}>Content</Sidebar>);
    
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveAttribute("data-collapsed", "true");
  });

  it("updates aria-label based on collapsed state", async () => {
    const user = userEvent.setup();
    render(<Sidebar>Content</Sidebar>);
    
    const toggleButton = screen.getByTestId("collapse-toggle");
    
    expect(toggleButton).toHaveAttribute("aria-label", "Collapse sidebar");
    
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-label", "Expand sidebar");
  });
});
