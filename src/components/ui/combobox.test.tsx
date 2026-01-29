import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Combobox } from './combobox';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Combobox', () => {
  it('renders with placeholder', () => {
    render(
      <Combobox value="" onValueChange={vi.fn()} options={options} placeholder="Select fruit..." />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Select fruit...')).toBeInTheDocument();
  });

  it('opens popover when clicked', async () => {
    const user = userEvent.setup();

    render(<Combobox value="" onValueChange={vi.fn()} options={options} placeholder="Select..." />);

    await user.click(screen.getByRole('combobox'));

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
    });
  });

  it('filters options based on search', async () => {
    const user = userEvent.setup();

    render(<Combobox value="" onValueChange={vi.fn()} options={options} placeholder="Select..." />);

    await user.click(screen.getByRole('combobox'));

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'app');

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.queryByText('Banana')).not.toBeInTheDocument();
    });
  });

  it('calls onValueChange when option is selected', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Combobox value="" onValueChange={handleChange} options={options} placeholder="Select..." />
    );

    await user.click(screen.getByRole('combobox'));
    await user.click(screen.getByText('Banana'));

    expect(handleChange).toHaveBeenCalledWith('banana');
  });

  it('displays selected value', () => {
    render(
      <Combobox value="cherry" onValueChange={vi.fn()} options={options} placeholder="Select..." />
    );

    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('shows empty message when no results', async () => {
    const user = userEvent.setup();

    render(
      <Combobox
        value=""
        onValueChange={vi.fn()}
        options={options}
        placeholder="Select..."
        emptyMessage="No results"
      />
    );

    await user.click(screen.getByRole('combobox'));

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'xyz');

    await waitFor(() => {
      expect(screen.getByText('No results')).toBeInTheDocument();
    });
  });
});
