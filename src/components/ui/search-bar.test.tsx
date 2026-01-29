import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from './search-bar';

describe('SearchBar', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', 'Search...');
    });

    it('should render with custom placeholder', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} placeholder="Search developers..." />);

      expect(screen.getByPlaceholderText('Search developers...')).toBeInTheDocument();
    });

    it('should render search icon', () => {
      const mockOnChange = vi.fn();
      const { container } = render(<SearchBar value="" onChange={mockOnChange} />);

      const searchIcon = container.querySelector('svg');
      expect(searchIcon).toBeInTheDocument();
    });

    it('should display current value', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="test query" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toHaveValue('test query');
    });
  });

  describe('User Interactions', () => {
    it('should update internal value on change', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} debounceMs={300} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      expect(input).toHaveValue('test');
    });

    it('should call onChange after debounce delay', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} debounceMs={100} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      await waitFor(
        () => {
          expect(mockOnChange).toHaveBeenCalledWith('test');
        },
        { timeout: 200 }
      );
    });

    it('should render clear button when value is present', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      const clearButton = await screen.findByRole('button', { name: /clear search/i });
      expect(clearButton).toBeInTheDocument();
    });

    it('should clear input when clear button is clicked', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="test" onChange={mockOnChange} />);

      const clearButton = screen.getByRole('button', { name: /clear search/i });
      await user.click(clearButton);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toHaveValue('');
      expect(mockOnChange).toHaveBeenCalledWith('');
    });

    it('should call onSearch when Enter is pressed', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      const mockOnSearch = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} onSearch={mockOnSearch} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test query');
      await user.keyboard('{Enter}');

      expect(mockOnSearch).toHaveBeenCalledWith('test query');
    });

    it('should clear input when Escape is pressed', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="test" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.click(input);
      await user.keyboard('{Escape}');

      const updatedInput = screen.getByRole('textbox', { name: /search/i });
      expect(updatedInput).toHaveValue('');
      expect(mockOnChange).toHaveBeenCalledWith('');
    });
  });

  describe('Loading State', () => {
    it('should show loading spinner when loading is true', () => {
      const mockOnChange = vi.fn();
      const { container } = render(<SearchBar value="" onChange={mockOnChange} loading />);

      // Look for spinner by class name
      const spinner = container.querySelector('.animate-spin');
      expect(spinner).toBeInTheDocument();
    });

    it('should disable input when loading', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} loading />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toBeDisabled();
    });

    it('should not show clear button when loading', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="test" onChange={mockOnChange} loading />);

      const clearButton = screen.queryByRole('button', { name: /clear search/i });
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    it('should disable input when disabled is true', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} disabled />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toBeDisabled();
    });

    it('should disable clear button when disabled is true', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="test" onChange={mockOnChange} disabled />);

      const clearButton = screen.getByRole('button', { name: /clear search/i });
      expect(clearButton).toBeDisabled();
    });
  });

  describe('Keyboard Shortcuts', () => {
    it('should focus input when Cmd+K is pressed', async () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).not.toHaveFocus();

      // Simulate Cmd+K
      const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true });
      window.dispatchEvent(event);

      await waitFor(() => {
        expect(input).toHaveFocus();
      });
    });

    it('should focus input when Ctrl+K is pressed', async () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).not.toHaveFocus();

      // Simulate Ctrl+K
      const event = new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true });
      window.dispatchEvent(event);

      await waitFor(() => {
        expect(input).toHaveFocus();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toHaveAttribute('aria-label', 'Search');
    });

    it('should have proper button label for clear', () => {
      const mockOnChange = vi.fn();
      render(<SearchBar value="test" onChange={mockOnChange} />);

      const clearButton = screen.getByRole('button', { name: /clear search/i });
      expect(clearButton).toHaveAttribute('aria-label', 'Clear search');
    });
  });

  describe('Custom Debounce', () => {
    it('should use custom debounce delay', async () => {
      const user = userEvent.setup();
      const mockOnChange = vi.fn();
      render(<SearchBar value="" onChange={mockOnChange} debounceMs={200} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      await user.type(input, 'test');

      // Wait for debounce
      await waitFor(
        () => {
          expect(mockOnChange).toHaveBeenCalledWith('test');
        },
        { timeout: 300 }
      );
    });
  });

  describe('Value Synchronization', () => {
    it('should sync internal value when external value changes', () => {
      const mockOnChange = vi.fn();
      const { rerender } = render(<SearchBar value="initial" onChange={mockOnChange} />);

      const input = screen.getByRole('textbox', { name: /search/i });
      expect(input).toHaveValue('initial');

      rerender(<SearchBar value="updated" onChange={mockOnChange} />);
      expect(input).toHaveValue('updated');
    });
  });
});
