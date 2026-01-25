import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert, AlertTitle, AlertDescription } from './alert';

describe('Alert', () => {
  it('renders with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Test Title</AlertTitle>
        <AlertDescription>Test Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    render(
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
      </Alert>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders info variant with icon', () => {
    render(
      <Alert variant="info" showIcon>
        <AlertTitle>Info Alert</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.querySelector('svg')).toBeInTheDocument();
  });

  it('renders success variant with icon', () => {
    render(
      <Alert variant="success" showIcon>
        <AlertTitle>Success Alert</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.querySelector('svg')).toBeInTheDocument();
  });

  it('renders warning variant with icon', () => {
    render(
      <Alert variant="warning" showIcon>
        <AlertTitle>Warning Alert</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.querySelector('svg')).toBeInTheDocument();
  });

  it('renders error variant with icon', () => {
    render(
      <Alert variant="error" showIcon>
        <AlertTitle>Error Alert</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.querySelector('svg')).toBeInTheDocument();
  });

  it('does not render icon when showIcon is false', () => {
    render(
      <Alert showIcon={false}>
        <AlertTitle>No Icon</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert.querySelector('svg')).not.toBeInTheDocument();
  });

  it('renders dismiss button when dismissible is true', () => {
    render(
      <Alert dismissible>
        <AlertTitle>Dismissible Alert</AlertTitle>
      </Alert>
    );

    expect(screen.getByRole('button', { name: /dismiss alert/i })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const handleDismiss = vi.fn();
    const user = userEvent.setup();

    render(
      <Alert dismissible onDismiss={handleDismiss}>
        <AlertTitle>Dismissible Alert</AlertTitle>
      </Alert>
    );

    const dismissButton = screen.getByRole('button', { name: /dismiss alert/i });
    await user.click(dismissButton);

    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('removes alert from DOM after dismissal', async () => {
    const user = userEvent.setup();

    render(
      <Alert dismissible>
        <AlertTitle>Dismissible Alert</AlertTitle>
      </Alert>
    );

    const dismissButton = screen.getByRole('button', { name: /dismiss alert/i });
    await user.click(dismissButton);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('does not render dismiss button when dismissible is false', () => {
    render(
      <Alert dismissible={false}>
        <AlertTitle>Not Dismissible</AlertTitle>
      </Alert>
    );

    expect(screen.queryByRole('button', { name: /dismiss alert/i })).not.toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(
      <Alert className="custom-alert">
        <AlertTitle>Custom Class</AlertTitle>
      </Alert>
    );

    expect(screen.getByRole('alert')).toHaveClass('custom-alert');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(
      <Alert ref={ref}>
        <AlertTitle>Ref Test</AlertTitle>
      </Alert>
    );

    expect(ref).toHaveBeenCalled();
  });

  it('renders only title without description', () => {
    render(
      <Alert>
        <AlertTitle>Only Title</AlertTitle>
      </Alert>
    );

    expect(screen.getByText('Only Title')).toBeInTheDocument();
  });

  it('renders only description without title', () => {
    render(
      <Alert>
        <AlertDescription>Only Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByText('Only Description')).toBeInTheDocument();
  });

  it('has proper ARIA attributes', () => {
    render(
      <Alert>
        <AlertTitle>Accessible Alert</AlertTitle>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('role', 'alert');
  });

  it('dismiss button has proper ARIA label', () => {
    render(
      <Alert dismissible>
        <AlertTitle>Dismissible</AlertTitle>
      </Alert>
    );

    const dismissButton = screen.getByRole('button', { name: /dismiss alert/i });
    expect(dismissButton).toHaveAttribute('aria-label', 'Dismiss alert');
  });

  it('icon has aria-hidden attribute', () => {
    render(
      <Alert showIcon>
        <AlertTitle>Icon Alert</AlertTitle>
      </Alert>
    );

    const icon = screen.getByRole('alert').querySelector('svg');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });
});
