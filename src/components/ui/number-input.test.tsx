import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NumberInput } from './number-input';

describe('NumberInput', () => {
  it('renders with a label associated to the input', () => {
    render(<NumberInput label="Quantity" defaultValue={5} />);
    const input = screen.getByLabelText('Quantity');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('role', 'spinbutton');
  });

  it('exposes min/max/now as aria value attributes', () => {
    render(<NumberInput label="Qty" defaultValue={5} min={0} max={10} />);
    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('aria-valuemin', '0');
    expect(input).toHaveAttribute('aria-valuemax', '10');
    expect(input).toHaveAttribute('aria-valuenow', '5');
  });

  it('increments and decrements via stepper buttons', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<NumberInput label="Qty" defaultValue={5} onValueChange={onValueChange} />);

    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(6);

    await user.click(screen.getByRole('button', { name: 'Decrease value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(5);
  });

  it('clamps to min and max on stepper interaction', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <NumberInput label="Qty" defaultValue={9} min={0} max={10} onValueChange={onValueChange} />
    );

    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(10);

    // Stays at max when stepping beyond
    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(10);
  });

  it('steps with ArrowUp and ArrowDown keys', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<NumberInput label="Qty" defaultValue={5} onValueChange={onValueChange} />);

    const input = screen.getByRole('spinbutton');
    await user.type(input, '{ArrowUp}');
    expect(onValueChange).toHaveBeenLastCalledWith(6);

    await user.type(input, '{ArrowDown}{ArrowDown}');
    expect(onValueChange).toHaveBeenLastCalledWith(4);
  });

  it('respects a fractional step without float drift', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <NumberInput label="Price" defaultValue={0.1} step={0.2} onValueChange={onValueChange} />
    );

    await user.click(screen.getByRole('button', { name: 'Increase value' }));
    expect(onValueChange).toHaveBeenLastCalledWith(0.3);
  });

  it('parses typed input on blur and reports null for invalid input', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<NumberInput label="Qty" defaultValue={5} onValueChange={onValueChange} />);

    const input = screen.getByRole('spinbutton');
    await user.clear(input);
    await user.type(input, '42');
    await user.tab();
    expect(onValueChange).toHaveBeenLastCalledWith(42);

    await user.clear(input);
    await user.type(input, 'abc');
    await user.tab();
    expect(onValueChange).toHaveBeenLastCalledWith(null);
  });

  it('formats as currency', () => {
    render(<NumberInput label="Price" defaultValue={19.5} format="currency" step={0.01} />);
    expect(screen.getByRole('spinbutton')).toHaveValue('$19.50');
  });

  it('formats as percent', () => {
    render(<NumberInput label="Rate" defaultValue={0.255} format="percent" digits={1} />);
    expect(screen.getByRole('spinbutton')).toHaveValue('25.5%');
  });

  it('formats with an explicit locale and currency', () => {
    render(
      <NumberInput
        label="Preis"
        defaultValue={1234.5}
        format="currency"
        currency="EUR"
        locale="de-DE"
        digits={2}
      />
    );
    // de-DE currency formatting uses 1.234,50 € (NBSP before symbol)
    const value = screen.getByRole('spinbutton');
    expect(value).toHaveValue('1.234,50\u00a0€');
  });

  it('honors controlled value updates', () => {
    const { rerender } = render(<NumberInput label="Qty" value={3} onValueChange={() => {}} />);
    expect(screen.getByRole('spinbutton')).toHaveValue('3');
    rerender(<NumberInput label="Qty" value={8} onValueChange={() => {}} />);
    expect(screen.getByRole('spinbutton')).toHaveValue('8');
  });

  it('hides stepper buttons when hideSteppers is set', () => {
    render(<NumberInput label="Qty" defaultValue={5} hideSteppers />);
    expect(screen.queryByRole('button', { name: 'Increase value' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Decrease value' })).not.toBeInTheDocument();
  });

  it('disables input and steppers when disabled', () => {
    render(<NumberInput label="Qty" defaultValue={5} disabled />);
    expect(screen.getByRole('spinbutton')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Increase value' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Decrease value' })).toBeDisabled();
  });

  it('displays error message and aria-invalid', () => {
    render(<NumberInput label="Qty" defaultValue={5} error="Too much" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Too much');
    expect(screen.getByRole('spinbutton')).toHaveAttribute('aria-invalid', 'true');
  });

  it('displays helper text when no error', () => {
    render(<NumberInput label="Qty" defaultValue={5} helperText="Between 0 and 10" />);
    expect(screen.getByText('Between 0 and 10')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<NumberInput label="Q" defaultValue={1} inputSize="sm" />);
    const wrapper = container.querySelector('.flex.w-full');
    expect(wrapper).toHaveClass('h-9');

    rerender(<NumberInput label="Q" defaultValue={1} inputSize="lg" />);
    expect(container.querySelector('.flex.w-full')).toHaveClass('h-11');
  });
});
