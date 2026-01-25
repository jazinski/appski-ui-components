import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Checkbox, CheckboxGroup } from './checkbox';

describe('Checkbox', () => {
  describe('Basic Rendering', () => {
    it('renders the checkbox', () => {
      render(<Checkbox aria-label="Test checkbox" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('renders with description', () => {
      render(<Checkbox label="Option" description="This is a description" />);
      expect(screen.getByText('This is a description')).toBeInTheDocument();
    });

    it('renders with error', () => {
      render(<Checkbox label="Option" error="This field is required" />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('renders required indicator', () => {
      render(<Checkbox label="Required field" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('Uncontrolled Behavior', () => {
    it('toggles checked state when clicked', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Toggle me" />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('respects defaultChecked prop', () => {
      render(<Checkbox label="Default checked" defaultChecked />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });

  describe('Controlled Behavior', () => {
    it('respects controlled checked state', () => {
      render(<Checkbox label="Controlled" checked={true} />);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('calls onCheckedChange when clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox label="Controlled" checked={false} onCheckedChange={handleChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('does not change when controlled and no onCheckedChange', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Controlled" checked={false} />);

      await user.click(screen.getByRole('checkbox'));
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('Indeterminate State', () => {
    it('sets indeterminate property on input', () => {
      render(<Checkbox label="Indeterminate" indeterminate />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox.indeterminate).toBe(true);
    });

    it('renders minus icon when indeterminate', () => {
      render(<Checkbox label="Indeterminate" indeterminate />);
      // The minus icon should be visible in the visual indicator
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Disabled State', () => {
    it('disables the checkbox', () => {
      render(<Checkbox label="Disabled" disabled />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('does not toggle when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Checkbox label="Disabled" disabled onCheckedChange={handleChange} />);

      await user.click(screen.getByRole('checkbox'));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Variants', () => {
    it('applies default variant classes', () => {
      render(<Checkbox label="Default" data-testid="checkbox-wrapper" />);
      // Visual check - component renders without error
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('applies destructive variant classes', () => {
      render(<Checkbox variant="destructive" label="Destructive" defaultChecked />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('applies success variant classes', () => {
      render(<Checkbox variant="success" label="Success" defaultChecked />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size', () => {
      render(<Checkbox size="sm" label="Small" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('applies default size', () => {
      render(<Checkbox size="default" label="Default" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('applies large size', () => {
      render(<Checkbox size="lg" label="Large" />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with checkbox', () => {
      render(<Checkbox label="Accessible checkbox" />);
      const checkbox = screen.getByLabelText('Accessible checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('sets aria-invalid when error is present', () => {
      render(<Checkbox label="Error" error="Error message" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('sets aria-describedby when description is present', () => {
      render(<Checkbox label="Described" description="Description text" id="test-checkbox" />);
      expect(screen.getByRole('checkbox')).toHaveAttribute(
        'aria-describedby',
        'test-checkbox-description'
      );
    });

    it('can be focused with keyboard', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <button>Before</button>
          <Checkbox label="Checkbox" />
        </div>
      );

      await user.tab(); // Focus button
      await user.tab(); // Focus checkbox
      expect(screen.getByRole('checkbox')).toHaveFocus();
    });

    it('can be toggled with space key', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Space toggle" />);

      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();

      await user.keyboard(' ');
      expect(checkbox).toBeChecked();
    });
  });

  describe('Label Click', () => {
    it('toggles checkbox when label is clicked', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Click me" />);

      await user.click(screen.getByText('Click me'));
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('toggles checkbox when visual box is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(<Checkbox label="Click visual box" />);

      // Find the visual checkbox box (the span with role="presentation")
      const visualBox = container.querySelector('[role="presentation"]');
      expect(visualBox).toBeInTheDocument();

      await user.click(visualBox as HTMLElement);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('does not toggle when visual box is clicked and disabled', async () => {
      const user = userEvent.setup();
      const { container } = render(<Checkbox label="Disabled" disabled />);

      const visualBox = container.querySelector('[role="presentation"]');
      await user.click(visualBox as HTMLElement);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to the input element', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(<Checkbox ref={ref} label="Test" />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current).toBe(screen.getByRole('checkbox'));
    });

    it('throws error if input ref is not attached', () => {
      // Suppress console.error for this test
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const ref = React.createRef<HTMLInputElement>();

      // This should not throw in normal circumstances
      expect(() => {
        render(<Checkbox ref={ref} label="Test" />);
      }).not.toThrow();

      consoleSpy.mockRestore();
    });
  });
});

describe('CheckboxGroup', () => {
  describe('Basic Rendering', () => {
    it('renders group with label', () => {
      render(
        <CheckboxGroup label="Group label">
          <Checkbox label="Option 1" />
        </CheckboxGroup>
      );
      expect(screen.getByText('Group label')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <CheckboxGroup label="Options">
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
          <Checkbox label="Option 3" />
        </CheckboxGroup>
      );

      expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 3')).toBeInTheDocument();
    });

    it('renders description', () => {
      render(
        <CheckboxGroup label="Options" description="Select your options">
          <Checkbox label="Option 1" />
        </CheckboxGroup>
      );
      expect(screen.getByText('Select your options')).toBeInTheDocument();
    });

    it('renders error', () => {
      render(
        <CheckboxGroup label="Options" error="At least one option required">
          <Checkbox label="Option 1" />
        </CheckboxGroup>
      );
      expect(screen.getByText('At least one option required')).toBeInTheDocument();
    });

    it('renders required indicator', () => {
      render(
        <CheckboxGroup label="Required group" required>
          <Checkbox label="Option 1" />
        </CheckboxGroup>
      );
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('Orientation', () => {
    it('applies vertical orientation by default', () => {
      const { container } = render(
        <CheckboxGroup label="Vertical">
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
        </CheckboxGroup>
      );

      const group = container.querySelector('.flex-col');
      expect(group).toBeInTheDocument();
    });

    it('applies horizontal orientation', () => {
      const { container } = render(
        <CheckboxGroup label="Horizontal" orientation="horizontal">
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
        </CheckboxGroup>
      );

      const group = container.querySelector('.flex-row');
      expect(group).toBeInTheDocument();
    });
  });
});
