import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './empty-state';

// Mock icon component for tests
const TestIcon = ({ className }: { className?: string }) => (
  <svg className={className} data-testid="test-icon">
    <circle />
  </svg>
);

describe('EmptyState', () => {
  it('renders with title only', () => {
    render(<EmptyState title="No items found" />);
    expect(screen.getByRole('status')).toBeDefined();
    expect(screen.getByText('No items found')).toBeDefined();
  });

  it('renders with title and description', () => {
    render(<EmptyState title="No items found" description="Try creating your first item" />);

    expect(screen.getByText('No items found')).toBeDefined();
    expect(screen.getByText('Try creating your first item')).toBeDefined();
  });

  it('renders with icon', () => {
    render(<EmptyState icon={<TestIcon className="h-16 w-16" />} title="No items" />);

    expect(screen.getByTestId('test-icon')).toBeDefined();
  });

  it('calls action onClick when primary button is clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create Item',
          onClick: handleClick,
        }}
      />
    );

    const button = screen.getByRole('button', { name: 'Create Item' });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('renders action with custom variant', () => {
    const handleClick = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create Item',
          onClick: handleClick,
          variant: 'outline',
        }}
      />
    );

    const button = screen.getByRole('button', { name: 'Create Item' });
    expect(button.className).toContain('border');
  });

  it('renders action with icon', () => {
    const handleClick = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create Item',
          onClick: handleClick,
          icon: <span data-testid="action-icon">+</span>,
        }}
      />
    );

    expect(screen.getByTestId('action-icon')).toBeDefined();
    expect(screen.getByText('Create Item')).toBeDefined();
  });

  it('calls secondaryAction onClick when clicked', async () => {
    const user = userEvent.setup();
    const handlePrimary = vi.fn();
    const handleSecondary = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create Item',
          onClick: handlePrimary,
        }}
        secondaryAction={{
          label: 'Import',
          onClick: handleSecondary,
        }}
      />
    );

    const secondaryButton = screen.getByRole('button', { name: 'Import' });
    await user.click(secondaryButton);

    expect(handleSecondary).toHaveBeenCalledOnce();
    expect(handlePrimary).not.toHaveBeenCalled();
  });

  it('renders both primary and secondary actions', () => {
    const handlePrimary = vi.fn();
    const handleSecondary = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create',
          onClick: handlePrimary,
        }}
        secondaryAction={{
          label: 'Import',
          onClick: handleSecondary,
        }}
      />
    );

    expect(screen.getByRole('button', { name: 'Create' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Import' })).toBeDefined();
  });

  it('applies size sm correctly', () => {
    const { container } = render(<EmptyState title="No items" size="sm" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('py-8');
  });

  it('applies size lg correctly', () => {
    const { container } = render(<EmptyState title="No items" size="lg" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('py-16');
  });

  it('applies custom className', () => {
    const { container } = render(<EmptyState title="No items" className="custom-class" />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });

  it('renders custom children', () => {
    render(
      <EmptyState title="No items">
        <div data-testid="custom-content">Custom content here</div>
      </EmptyState>
    );

    expect(screen.getByTestId('custom-content')).toBeDefined();
    expect(screen.getByText('Custom content here')).toBeDefined();
  });

  it('has proper accessibility attributes', () => {
    render(<EmptyState title="No items" description="Create your first item" />);

    const status = screen.getByRole('status');
    expect(status.getAttribute('aria-live')).toBe('polite');
  });

  it('renders without actions when not provided', () => {
    render(<EmptyState title="No items" description="Nothing to show" />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(0);
  });

  it('uses default variant for primary action', () => {
    const handleClick = vi.fn();

    render(
      <EmptyState
        title="No items"
        action={{
          label: 'Create',
          onClick: handleClick,
        }}
      />
    );

    const button = screen.getByRole('button', { name: 'Create' });
    expect(button.className).toContain('bg-primary');
  });

  it('uses outline variant for secondary action by default', () => {
    const handleClick = vi.fn();

    render(
      <EmptyState
        title="No items"
        secondaryAction={{
          label: 'Import',
          onClick: handleClick,
        }}
      />
    );

    const button = screen.getByRole('button', { name: 'Import' });
    expect(button.className).toContain('border');
  });
});
