import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageHeader } from './page-header';
import { Users, CheckCircle } from 'lucide-react';

describe('PageHeader', () => {
  it('renders title correctly', () => {
    render(<PageHeader title="Dashboard" />);
    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<PageHeader title="Dashboard" description="Overview of your app" />);
    expect(screen.getByText('Overview of your app')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<PageHeader title="Users" icon={Users} />);
    // Icon should be present (aria-hidden)
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('renders breadcrumbs correctly', () => {
    render(
      <PageHeader
        title="Details"
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Users', href: '/users' },
          { label: 'John Doe' },
        ]}
      />
    );

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('marks last breadcrumb as current page', () => {
    render(
      <PageHeader
        title="Details"
        breadcrumbs={[{ label: 'Admin', href: '/admin' }, { label: 'Current Page' }]}
      />
    );

    const currentCrumb = screen.getByText('Current Page');
    expect(currentCrumb).toHaveAttribute('aria-current', 'page');
  });

  it('renders home icon in breadcrumbs by default', () => {
    render(<PageHeader title="Test" breadcrumbs={[{ label: 'Page' }]} showHomeInBreadcrumbs />);
    expect(screen.getByLabelText('Home')).toBeInTheDocument();
  });

  it('hides home icon when showHomeInBreadcrumbs is false', () => {
    render(
      <PageHeader title="Test" breadcrumbs={[{ label: 'Page' }]} showHomeInBreadcrumbs={false} />
    );
    expect(screen.queryByLabelText('Home')).not.toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(<PageHeader title="Test" actions={<button>Click me</button>} />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders stats correctly', () => {
    render(
      <PageHeader
        title="Dashboard"
        stats={[
          { label: 'Total Users', value: 100 },
          { label: 'Active', value: 80, color: 'success' },
        ]}
      />
    );

    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
  });

  it('renders stat icons when provided', () => {
    render(
      <PageHeader title="Dashboard" stats={[{ label: 'Active', value: 80, icon: CheckCircle }]} />
    );

    // Should have icon SVG
    const svgs = document.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });

  it('applies variant classes', () => {
    const { container, rerender } = render(<PageHeader title="Test" variant="default" />);
    expect(container.querySelector('header')).toHaveClass('border-b');

    rerender(<PageHeader title="Test" variant="elevated" />);
    expect(container.querySelector('header')).toHaveClass('shadow-sm');
  });

  it('applies sticky class when sticky prop is true', () => {
    const { container } = render(<PageHeader title="Test" sticky />);
    expect(container.querySelector('header')).toHaveClass('sticky', 'top-0');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<PageHeader title="Test" ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { container } = render(<PageHeader title="Test" className="custom-class" />);
    expect(container.querySelector('header')).toHaveClass('custom-class');
  });
});
