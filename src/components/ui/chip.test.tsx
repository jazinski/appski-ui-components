import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './chip';

describe('Chip', () => {
  it('renders its label', () => {
    render(<Chip>bug</Chip>);
    expect(screen.getByText('bug')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { container } = render(<Chip variant="destructive">urgent</Chip>);
    expect(container.querySelector('span')).toHaveClass('border-destructive/25');
  });

  it('renders no buttons when neither removable nor interactive', () => {
    render(<Chip>plain</Chip>);
    expect(containerQueryButtons()).toHaveLength(0);

    function containerQueryButtons() {
      return document.querySelectorAll('button');
    }
  });

  describe('removable', () => {
    it('shows an accessible remove button', () => {
      render(<Chip onRemove={() => {}}>bug</Chip>);
      expect(screen.getByRole('button', { name: 'Remove bug' })).toBeInTheDocument();
    });

    it('fires onRemove on click', async () => {
      const user = userEvent.setup();
      const onRemove = vi.fn();
      render(<Chip onRemove={onRemove}>bug</Chip>);
      await user.click(screen.getByRole('button', { name: 'Remove bug' }));
      expect(onRemove).toHaveBeenCalledTimes(1);
    });

    it('supports a localized remove label', () => {
      render(
        <Chip onRemove={() => {}} labels={{ remove: 'Quitar' }}>
          bug
        </Chip>
      );
      expect(screen.getByRole('button', { name: 'Quitar bug' })).toBeInTheDocument();
    });
  });

  describe('interactive', () => {
    it('fires onClick when the label is a button', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Chip variant="outline" onClick={onClick}>
          Urgent
        </Chip>
      );
      await user.click(screen.getByRole('button', { name: 'Urgent' }));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('supports both a toggle button and a remove control', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      const onRemove = vi.fn();
      render(
        <Chip onClick={onClick} onRemove={onRemove}>
          Label: bug
        </Chip>
      );
      await user.click(screen.getByRole('button', { name: 'Label: bug' }));
      expect(onClick).toHaveBeenCalledTimes(1);
      await user.click(screen.getByRole('button', { name: 'Remove Label: bug' }));
      expect(onRemove).toHaveBeenCalledTimes(1);
    });

    it('ignores clicks when disabled', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Chip onClick={onClick} disabled>
          Urgent
        </Chip>
      );
      await user.click(screen.getByRole('button', { name: 'Urgent' }));
      expect(onClick).not.toHaveBeenCalled();
      expect(screen.getByRole('button', { name: 'Urgent' })).toBeDisabled();
    });
  });
});
