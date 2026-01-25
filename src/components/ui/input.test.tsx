import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Input helperText="This is helper text" placeholder="Enter text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Input error="This field is required" placeholder="Enter text" />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('This field is required');
  });

  it('has aria-invalid when error is present', () => {
    render(<Input error="Error message" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('hides helper text when error is present', () => {
    render(<Input helperText="Helper" error="Error" placeholder="Enter text" />);
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input placeholder="Enter text" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'Hello');

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('Hello');
  });

  it('can be disabled', () => {
    render(<Input disabled placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeDisabled();
  });

  it('applies error variant styling', () => {
    render(<Input error="Error" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveClass('border-destructive');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Input inputSize="sm" placeholder="Small" />);
    expect(screen.getByPlaceholderText('Small')).toHaveClass('h-9');

    rerender(<Input inputSize="lg" placeholder="Large" />);
    expect(screen.getByPlaceholderText('Large')).toHaveClass('h-11');
  });

  it('supports different input types', () => {
    render(<Input type="email" placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toHaveAttribute('type', 'email');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Enter text" />);
    expect(ref).toHaveBeenCalled();
  });

  it('associates label with input via id', () => {
    render(<Input id="custom-id" label="Custom Label" />);
    const input = screen.getByLabelText('Custom Label');
    expect(input).toHaveAttribute('id', 'custom-id');
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toHaveClass('custom-class');
  });
});
