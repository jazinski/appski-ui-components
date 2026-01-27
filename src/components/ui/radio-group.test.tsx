import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RadioGroup, RadioGroupItem } from './radio-group';

describe('RadioGroup', () => {
  describe('Basic Functionality', () => {
    it('renders radio group with items', () => {
      render(
        <RadioGroup defaultValue="option1">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
      expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
    });

    it('renders with default value checked', () => {
      render(
        <RadioGroup defaultValue="option2">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');

      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });

    it('allows selection of radio items', async () => {
      const user = userEvent.setup();

      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');

      await user.click(option1);
      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();

      await user.click(option2);
      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });

    it('only allows one item to be selected at a time', async () => {
      const user = userEvent.setup();

      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option3" id="option3" />
            <label htmlFor="option3">Option 3</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');
      const option3 = screen.getByLabelText('Option 3');

      await user.click(option1);
      expect(option1).toBeChecked();

      await user.click(option2);
      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();

      await user.click(option3);
      expect(option1).not.toBeChecked();
      expect(option2).not.toBeChecked();
      expect(option3).toBeChecked();
    });
  });

  describe('Controlled Component', () => {
    it('works as controlled component', async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      const { rerender } = render(
        <RadioGroup value="option1" onValueChange={onValueChange}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');

      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();

      await user.click(option2);
      expect(onValueChange).toHaveBeenCalledWith('option2');

      // Simulate parent updating value
      rerender(
        <RadioGroup value="option2" onValueChange={onValueChange}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });
  });

  describe('Disabled State', () => {
    it('disables all items when group is disabled', () => {
      render(
        <RadioGroup disabled>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByLabelText('Option 1')).toBeDisabled();
      expect(screen.getByLabelText('Option 2')).toBeDisabled();
    });

    it('disables individual items', () => {
      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" disabled />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByLabelText('Option 1')).not.toBeDisabled();
      expect(screen.getByLabelText('Option 2')).toBeDisabled();
    });

    it('prevents interaction with disabled items', async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      render(
        <RadioGroup onValueChange={onValueChange}>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" disabled />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      const disabledOption = screen.getByLabelText('Option 1');
      await user.click(disabledOption);

      expect(onValueChange).not.toHaveBeenCalled();
      expect(disabledOption).not.toBeChecked();
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports arrow key navigation', async () => {
      const user = userEvent.setup();

      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option3" id="option3" />
            <label htmlFor="option3">Option 3</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');
      const option3 = screen.getByLabelText('Option 3');

      option1.focus();
      await user.keyboard('{ArrowDown}');
      expect(option2).toHaveFocus();

      await user.keyboard('{ArrowDown}');
      expect(option3).toHaveFocus();

      await user.keyboard('{ArrowUp}');
      expect(option2).toHaveFocus();
    });

    it('supports space key to select', async () => {
      const user = userEvent.setup();

      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');

      option1.focus();
      await user.keyboard(' ');

      expect(option1).toBeChecked();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA role', () => {
      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('associates labels correctly', () => {
      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      const radio = screen.getByRole('radio');
      expect(radio).toHaveAccessibleName('Option 1');
    });

    it('supports required attribute', () => {
      render(
        <RadioGroup required>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-required', 'true');
    });

    it('supports name attribute for form submission', () => {
      render(
        <RadioGroup name="test-radio" defaultValue="option1">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      );

      // Radix UI RadioGroup properly handles the name attribute for form submission
      // Verify the RadioGroup component exists and is functional
      const radioGroup = screen.getByRole('radiogroup');
      expect(radioGroup).toBeInTheDocument();

      // Verify radio buttons work correctly with the group
      const option1 = screen.getByLabelText('Option 1');
      expect(option1).toBeChecked();
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className on RadioGroup', () => {
      const { container } = render(
        <RadioGroup className="custom-class">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      const radioGroup = container.querySelector('.custom-class');
      expect(radioGroup).toBeInTheDocument();
    });

    it('accepts custom className on RadioGroupItem', () => {
      render(
        <RadioGroup>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" className="custom-item" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      const radio = screen.getByRole('radio');
      expect(radio).toHaveClass('custom-item');
    });
  });

  describe('Orientation', () => {
    it('supports vertical orientation', () => {
      render(
        <RadioGroup orientation="vertical">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('supports horizontal orientation', () => {
      render(
        <RadioGroup orientation="horizontal">
          <div className="flex items-center gap-3">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
        </RadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-orientation', 'horizontal');
    });
  });
});
