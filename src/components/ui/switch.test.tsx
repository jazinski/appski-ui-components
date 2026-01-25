import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switch, SwitchGroup } from './switch';

describe('Switch', () => {
  describe('Basic Rendering', () => {
    it('renders the switch', () => {
      render(<Switch aria-label="Test switch" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Switch label="Enable feature" />);
      expect(screen.getByText('Enable feature')).toBeInTheDocument();
    });

    it('renders with description', () => {
      render(<Switch label="Feature" description="This is a description" />);
      expect(screen.getByText('This is a description')).toBeInTheDocument();
    });

    it('renders required indicator', () => {
      render(<Switch label="Required field" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('Uncontrolled Behavior', () => {
    it('toggles checked state when clicked', async () => {
      const user = userEvent.setup();
      render(<Switch label="Toggle me" />);

      const switchEl = screen.getByRole('switch');
      expect(switchEl).toHaveAttribute('aria-checked', 'false');

      await user.click(switchEl);
      expect(switchEl).toHaveAttribute('aria-checked', 'true');

      await user.click(switchEl);
      expect(switchEl).toHaveAttribute('aria-checked', 'false');
    });

    it('respects defaultChecked prop', () => {
      render(<Switch label="Default checked" defaultChecked />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('Controlled Behavior', () => {
    it('respects controlled checked state', () => {
      render(<Switch label="Controlled" checked={true} />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('calls onCheckedChange when clicked', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch label="Controlled" checked={false} onCheckedChange={handleChange} />);

      await user.click(screen.getByRole('switch'));
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('does not change when controlled and no onCheckedChange', async () => {
      const user = userEvent.setup();
      render(<Switch label="Controlled" checked={false} />);

      await user.click(screen.getByRole('switch'));
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('Disabled State', () => {
    it('disables the switch', () => {
      render(<Switch label="Disabled" disabled />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });

    it('does not toggle when disabled', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<Switch label="Disabled" disabled onCheckedChange={handleChange} />);

      await user.click(screen.getByRole('switch'));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard Navigation', () => {
    it('can be toggled with Space key', async () => {
      const user = userEvent.setup();
      render(<Switch label="Space toggle" />);

      const switchEl = screen.getByRole('switch');
      switchEl.focus();

      expect(switchEl).toHaveAttribute('aria-checked', 'false');
      await user.keyboard(' ');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
    });

    it('can be toggled with Enter key', async () => {
      const user = userEvent.setup();
      render(<Switch label="Enter toggle" />);

      const switchEl = screen.getByRole('switch');
      switchEl.focus();

      expect(switchEl).toHaveAttribute('aria-checked', 'false');
      await user.keyboard('{Enter}');
      expect(switchEl).toHaveAttribute('aria-checked', 'true');
    });

    it('can be focused with Tab', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <button>Before</button>
          <Switch label="Switch" />
        </div>
      );

      await user.tab(); // Focus button
      await user.tab(); // Focus switch
      expect(screen.getByRole('switch')).toHaveFocus();
    });
  });

  describe('Label Position', () => {
    it('renders label on right by default', () => {
      render(<Switch label="Right label" />);
      const switchEl = screen.getByRole('switch');
      const label = screen.getByText('Right label');

      // Switch should come before label in DOM order when label is on right
      expect(switchEl.compareDocumentPosition(label)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });

    it('renders label on left when specified', () => {
      render(<Switch label="Left label" labelPosition="left" />);
      const switchEl = screen.getByRole('switch');
      const label = screen.getByText('Left label');

      // Label should come before switch in DOM order when label is on left
      expect(label.compareDocumentPosition(switchEl)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });
  });

  describe('Form Integration', () => {
    it('includes hidden input with name attribute', () => {
      const { container } = render(<Switch label="Form switch" name="mySwitch" />);
      const hiddenInput: Element | null = container.querySelector(
        'input[type="checkbox"][name="mySwitch"]'
      );
      expect(hiddenInput).toBeInTheDocument();
    });

    it('hidden input reflects checked state', async () => {
      const user = userEvent.setup();
      const { container } = render(<Switch label="Form switch" name="mySwitch" />);

      const hiddenInput = container.querySelector(
        'input[type="checkbox"][name="mySwitch"]'
      ) as HTMLInputElement;
      expect(hiddenInput.checked).toBe(false);

      await user.click(screen.getByRole('switch'));
      expect(hiddenInput.checked).toBe(true);
    });

    it('uses custom value when provided', () => {
      const { container } = render(<Switch label="Switch" name="mySwitch" value="custom" />);
      const hiddenInput = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
      expect(hiddenInput.value).toBe('custom');
    });
  });

  describe('Variants', () => {
    it('applies default variant', () => {
      render(<Switch variant="default" label="Default" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('applies destructive variant', () => {
      render(<Switch variant="destructive" label="Destructive" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('applies success variant', () => {
      render(<Switch variant="success" label="Success" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('applies warning variant', () => {
      render(<Switch variant="warning" label="Warning" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size', () => {
      render(<Switch size="sm" label="Small" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('applies default size', () => {
      render(<Switch size="default" label="Default" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('applies large size', () => {
      render(<Switch size="lg" label="Large" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="switch"', () => {
      render(<Switch label="Accessible" />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('sets aria-checked correctly', () => {
      render(<Switch label="Test" defaultChecked />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });

    it('sets aria-required when required', () => {
      render(<Switch label="Required" required />);
      expect(screen.getByRole('switch')).toHaveAttribute('aria-required', 'true');
    });

    it('sets aria-describedby when description is present', () => {
      render(<Switch label="Described" description="Description text" id="test-switch" />);
      expect(screen.getByRole('switch')).toHaveAttribute(
        'aria-describedby',
        'test-switch-description'
      );
    });

    it('associates label with switch', async () => {
      const user = userEvent.setup();
      render(<Switch label="Click label" />);

      // Clicking label should toggle switch
      await user.click(screen.getByText('Click label'));
      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('Data State', () => {
    it('sets data-state="unchecked" when unchecked', () => {
      render(<Switch label="Test" data-testid="switch" />);
      expect(screen.getByTestId('switch')).toHaveAttribute('data-state', 'unchecked');
    });

    it('sets data-state="checked" when checked', () => {
      render(<Switch label="Test" defaultChecked data-testid="switch" />);
      expect(screen.getByTestId('switch')).toHaveAttribute('data-state', 'checked');
    });
  });
});

describe('SwitchGroup', () => {
  describe('Basic Rendering', () => {
    it('renders group with label', () => {
      render(
        <SwitchGroup label="Group label">
          <Switch label="Option 1" />
        </SwitchGroup>
      );
      expect(screen.getByText('Group label')).toBeInTheDocument();
    });

    it('renders children', () => {
      render(
        <SwitchGroup label="Options">
          <Switch label="Option 1" />
          <Switch label="Option 2" />
          <Switch label="Option 3" />
        </SwitchGroup>
      );

      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('renders description', () => {
      render(
        <SwitchGroup label="Options" description="Select your options">
          <Switch label="Option 1" />
        </SwitchGroup>
      );
      expect(screen.getByText('Select your options')).toBeInTheDocument();
    });

    it('has role="group"', () => {
      const { container } = render(
        <SwitchGroup label="Test group">
          <Switch label="Option 1" />
        </SwitchGroup>
      );
      expect(container.querySelector('[role="group"]')).toBeInTheDocument();
    });

    it('renders without label or description', () => {
      render(
        <SwitchGroup>
          <Switch label="Option 1" />
        </SwitchGroup>
      );

      // Should still render children
      expect(screen.getByText('Option 1')).toBeInTheDocument();

      // Should not render the label/description wrapper
      const group = screen.getByRole('group');
      expect(group.querySelector('h3')).not.toBeInTheDocument();
      expect(group.querySelector('p')).not.toBeInTheDocument();
    });
  });
});
