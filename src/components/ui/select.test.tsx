import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './select';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
];

describe('Select', () => {
  it('renders correctly', () => {
    render(<Select options={options} data-testid="select" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Select options={options} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(<Select options={options} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('Option C')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select options={options} label="Choose option" />);
    expect(screen.getByLabelText('Choose option')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Select options={options} helperText="This is helper text" />);
    expect(screen.getByText('This is helper text')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Select options={options} error="Selection is required" />);
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent('Selection is required');
  });

  it('has aria-invalid when error is present', () => {
    render(<Select options={options} error="Error" data-testid="select" />);
    expect(screen.getByTestId('select')).toHaveAttribute('aria-invalid', 'true');
  });

  it('hides helper text when error is present', () => {
    render(<Select options={options} helperText="Helper" error="Error" />);
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('handles selection correctly', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} data-testid="select" />);

    const select = screen.getByTestId('select');
    await user.selectOptions(select, 'b');

    expect(handleChange).toHaveBeenCalled();
    expect(select).toHaveValue('b');
  });

  it('can be disabled', () => {
    render(<Select options={options} disabled data-testid="select" />);
    expect(screen.getByTestId('select')).toBeDisabled();
  });

  it('applies error variant styling', () => {
    render(<Select options={options} error="Error" data-testid="select" />);
    expect(screen.getByTestId('select')).toHaveClass('border-destructive');
  });

  it('renders different sizes', () => {
    const { rerender } = render(<Select options={options} selectSize="sm" data-testid="select" />);
    expect(screen.getByTestId('select')).toHaveClass('h-9');

    rerender(<Select options={options} selectSize="lg" data-testid="select" />);
    expect(screen.getByTestId('select')).toHaveClass('h-11');
  });

  it('supports disabled options', () => {
    const optionsWithDisabled = [...options, { value: 'd', label: 'Disabled', disabled: true }];
    render(<Select options={optionsWithDisabled} />);
    expect(screen.getByText('Disabled').closest('option')).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Select options={options} ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Select options={options} className="custom-class" data-testid="select" />);
    expect(screen.getByTestId('select')).toHaveClass('custom-class');
  });
});
