import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoadingButton } from './loading-button';

describe('LoadingButton', () => {
  it('renders button with children', () => {
    render(<LoadingButton>Click me</LoadingButton>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('shows loading state when loading prop is true', () => {
    render(<LoadingButton loading={true}>Save</LoadingButton>);

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-busy')).toBe('true');
  });

  it('disables button when loading', () => {
    render(<LoadingButton loading={true}>Save</LoadingButton>);

    const button = screen.getByRole('button');
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('calls onClick when clicked and not loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<LoadingButton onClick={onClick}>Click me</LoadingButton>);

    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when loading', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <LoadingButton loading={true} onClick={onClick}>
        Click me
      </LoadingButton>
    );

    const button = screen.getByRole('button');
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('uses custom loading text', () => {
    render(
      <LoadingButton loading={true} loadingText="Processing...">
        Save
      </LoadingButton>
    );

    expect(screen.getByText('Processing...')).toBeDefined();
  });

  it('forwards all button props', () => {
    render(
      <LoadingButton type="submit" disabled={true} className="custom-class">
        Submit
      </LoadingButton>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('type')).toBe('submit');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.className).toContain('custom-class');
  });

  it('supports different button variants', () => {
    const { rerender } = render(<LoadingButton variant="default">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('bg-primary');

    rerender(<LoadingButton variant="destructive">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('destructive');

    rerender(<LoadingButton variant="outline">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('border');
  });

  it('supports different button sizes', () => {
    const { rerender } = render(<LoadingButton size="sm">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('h-9');

    rerender(<LoadingButton size="lg">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('h-11');

    rerender(<LoadingButton size="icon">Button</LoadingButton>);
    expect(screen.getByRole('button').className).toContain('h-10');
  });

  it('handles both loading and disabled props', () => {
    render(
      <LoadingButton loading={true} disabled={true}>
        Button
      </LoadingButton>
    );

    const button = screen.getByRole('button');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');
  });

  it('handles both loading and disabled props', () => {
    render(
      <LoadingButton loading={true} disabled={true}>
        Button
      </LoadingButton>
    );

    const button = screen.getByRole('button');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');
  });
});
