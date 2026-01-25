import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './textarea';

describe('Textarea', () => {
  describe('Basic Rendering', () => {
    it('renders a textarea element', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('renders with placeholder', () => {
      render(<Textarea placeholder="Enter text..." />);
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      render(<Textarea defaultValue="Initial text" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea.value).toBe('Initial text');
    });

    it('renders with controlled value', () => {
      render(<Textarea value="Controlled text" onChange={() => {}} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea.value).toBe('Controlled text');
    });
  });

  describe('Label and Description', () => {
    it('renders with label', () => {
      render(<Textarea label="Description" id="desc" />);
      const label = screen.getByText('Description');
      expect(label).toBeInTheDocument();
      expect(label.tagName).toBe('LABEL');
    });

    it('associates label with textarea', () => {
      render(<Textarea label="Description" id="desc" />);
      const label = screen.getByText('Description');
      const textarea = screen.getByRole('textbox');
      expect(label).toHaveAttribute('for', 'desc');
      expect(textarea).toHaveAttribute('id', 'desc');
    });

    it('renders required indicator', () => {
      render(<Textarea label="Description" required id="desc" />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('renders with description', () => {
      render(<Textarea description="Helper text" id="desc" />);
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });

    it('renders with error message', () => {
      render(<Textarea error="This field is required" id="desc" />);
      const error = screen.getByText('This field is required');
      expect(error).toBeInTheDocument();
      expect(error).toHaveAttribute('role', 'alert');
    });

    it('hides description when error is shown', () => {
      render(<Textarea description="Helper text" error="Error message" id="desc" />);
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
      expect(screen.getByText('Error message')).toBeInTheDocument();
    });
  });

  describe('Character Count', () => {
    it('shows character count when enabled', () => {
      render(<Textarea showCharacterCount defaultValue="Hello" id="desc" />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('shows character count with max length', () => {
      render(<Textarea showCharacterCount maxLength={100} defaultValue="Hello" id="desc" />);
      expect(screen.getByText('5 / 100')).toBeInTheDocument();
    });

    it('updates character count on input', async () => {
      const user = userEvent.setup();
      render(<Textarea showCharacterCount id="desc" />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Test');

      expect(screen.getByText('4')).toBeInTheDocument();
    });

    it('shows error style when exceeding max length', () => {
      render(
        <Textarea
          showCharacterCount
          maxLength={10}
          defaultValue="This is a very long text"
          id="desc"
        />
      );
      const count = screen.getByText(/\d+ \/ 10/);
      expect(count).toHaveClass('text-destructive');
    });

    it('does not show character count when disabled', () => {
      render(<Textarea id="desc" defaultValue="Hello" />);
      expect(screen.queryByText('5')).not.toBeInTheDocument();
    });
  });

  describe('Controlled Component', () => {
    it('updates value when controlled', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const { rerender } = render(<Textarea value="Initial" onChange={handleChange} />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, ' text');

      expect(handleChange).toHaveBeenCalled();

      rerender(<Textarea value="Initial text" onChange={handleChange} />);
      expect(textarea).toHaveValue('Initial text');
    });

    it('works as uncontrolled component', async () => {
      const user = userEvent.setup();
      render(<Textarea defaultValue="Initial" />);

      const textarea = screen.getByRole('textbox');
      await user.clear(textarea);
      await user.type(textarea, 'New text');

      expect(textarea.value).toBe('New text');
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled', () => {
      render(<Textarea disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('does not allow input when disabled', async () => {
      const user = userEvent.setup();
      render(<Textarea disabled defaultValue="Initial" />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Test');

      expect(textarea.value).toBe('Initial');
    });

    it('applies disabled styles to label', () => {
      render(<Textarea label="Description" disabled id="desc" />);
      const label = screen.getByText('Description');
      expect(label).toHaveClass('opacity-50');
    });
  });

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Textarea variant="default" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('border-input');
    });

    it('renders destructive variant', () => {
      render(<Textarea variant="destructive" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('border-destructive');
    });

    it('applies destructive variant when error is present', () => {
      render(<Textarea error="Error message" id="desc" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('border-destructive');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Textarea textareaSize="sm" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('text-sm', 'min-h-[60px]');
    });

    it('renders default size', () => {
      render(<Textarea textareaSize="default" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('text-base', 'min-h-[80px]');
    });

    it('renders large size', () => {
      render(<Textarea textareaSize="lg" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('text-lg', 'min-h-[100px]');
    });
  });

  describe('Resize Options', () => {
    it('disables resize with none', () => {
      render(<Textarea resize="none" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('resize-none');
    });

    it('allows vertical resize (default)', () => {
      render(<Textarea resize="vertical" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('resize-y');
    });

    it('allows both directions resize', () => {
      render(<Textarea resize="both" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('resize');
    });

    it('disables manual resize when autoResize is enabled', () => {
      render(<Textarea autoResize />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('resize-none');
    });
  });

  describe('Auto Resize', () => {
    it('does not auto-resize by default', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      const initialHeight = textarea.style.height;
      expect(initialHeight).toBe('');
    });

    it('sets initial rows when autoResize is enabled', () => {
      render(<Textarea autoResize minRows={3} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '3');
    });

    it('respects rows prop when autoResize is disabled', () => {
      render(<Textarea rows={5} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '5');
    });
  });

  describe('Max Length', () => {
    it('respects maxLength attribute', () => {
      render(<Textarea maxLength={100} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('maxLength', '100');
    });

    it('prevents input beyond maxLength', async () => {
      const user = userEvent.setup();
      render(<Textarea maxLength={5} />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Testing long text');

      expect(textarea.value.length).toBeLessThanOrEqual(5);
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(<Textarea id="desc" description="Help text" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby');
    });

    it('sets aria-invalid when error is present', () => {
      render(<Textarea error="Error message" id="desc" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });

    it('has aria-required when required', () => {
      render(<Textarea required />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('required');
    });

    it('character count has aria-live attribute', () => {
      render(<Textarea showCharacterCount id="desc" />);
      const count = screen.getByText('0');
      expect(count).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Custom Classes', () => {
    it('accepts custom className', () => {
      render(<Textarea className="custom-class" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('custom-class');
    });

    it('accepts custom wrapperClassName', () => {
      render(<Textarea wrapperClassName="custom-wrapper" />);
      const wrapper = screen.getByRole('textbox').parentElement?.parentElement;
      expect(wrapper).toHaveClass('custom-wrapper');
    });

    it('accepts custom labelClassName', () => {
      render(<Textarea label="Label" labelClassName="custom-label" id="desc" />);
      const label = screen.getByText('Label');
      expect(label).toHaveClass('custom-label');
    });
  });

  describe('Forwarded Ref', () => {
    it('forwards ref to textarea element', () => {
      const ref = { current: null as HTMLTextAreaElement | null };
      render(<Textarea ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });

    it('textarea is focusable via ref', () => {
      const ref = { current: null as HTMLTextAreaElement | null };
      render(<Textarea ref={ref} />);
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  describe('HTML Attributes', () => {
    it('passes through additional props', () => {
      render(<Textarea data-testid="custom-textarea" name="description" autoComplete="off" />);
      const textarea = screen.getByTestId('custom-textarea');
      expect(textarea).toHaveAttribute('name', 'description');
      expect(textarea).toHaveAttribute('autoComplete', 'off');
    });

    it('applies rows attribute', () => {
      render(<Textarea rows={6} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '6');
    });
  });

  describe('Event Handlers', () => {
    it('calls onChange handler', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Textarea onChange={handleChange} />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Test');

      expect(handleChange).toHaveBeenCalled();
    });

    it('calls onBlur handler', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<Textarea onBlur={handleBlur} />);

      const textarea = screen.getByRole('textbox');
      await user.click(textarea);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('calls onFocus handler', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<Textarea onFocus={handleFocus} />);

      const textarea = screen.getByRole('textbox');
      await user.click(textarea);

      expect(handleFocus).toHaveBeenCalled();
    });
  });
});
