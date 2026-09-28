import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ColorPicker,
  ColorSwatchSet,
  DEFAULT_COLOR_SWATCHES,
  isValidHex,
  normalizeHex,
} from './color-picker';

describe('ColorPicker', () => {
  it('renders trigger with default value hex', () => {
    render(<ColorPicker defaultValue="#2563eb" />);

    expect(screen.getByRole('button', { name: 'Color picker' })).toHaveTextContent('#2563eb');
  });

  it('shows placeholder when no value', () => {
    render(<ColorPicker placeholder="Pick one" />);

    expect(screen.getByRole('button', { name: 'Color picker' })).toHaveTextContent('Pick one');
  });

  it('applies the selected color to the trigger swatch', () => {
    render(<ColorPicker defaultValue="#dc2626" />);

    const swatch = screen.getByRole('button', { name: 'Color picker' }).querySelector('span span');
    expect(swatch).toHaveStyle({ backgroundColor: '#dc2626' });
  });

  it('opens popover with swatches on click', async () => {
    const user = userEvent.setup();
    render(<ColorPicker />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));

    await waitFor(() => {
      expect(screen.getByRole('listbox', { name: 'Color swatches' })).toBeInTheDocument();
    });
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(DEFAULT_COLOR_SWATCHES.length);
  });

  it('selects a swatch, fires onChange and closes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));
    await user.click(await screen.findByRole('option', { name: '#16a34a' }));

    expect(onChange).toHaveBeenCalledWith('#16a34a');
    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('marks the selected swatch with aria-selected', async () => {
    const user = userEvent.setup();
    render(<ColorPicker defaultValue="#2563eb" />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));

    expect(await screen.findByRole('option', { name: '#2563eb' })).toHaveAttribute(
      'aria-selected',
      'true'
    );
  });

  it('accepts a custom hex via the input', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));
    const input = await screen.findByRole('textbox', { name: 'Custom hex color' });
    await user.type(input, '#abcdef');
    await user.keyboard('{Enter}');

    expect(onChange).toHaveBeenCalledWith('#abcdef');
  });

  it('rejects invalid custom hex without firing onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ColorPicker onChange={onChange} />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));
    const input = await screen.findByRole('textbox', { name: 'Custom hex color' });
    await user.type(input, 'nothex');
    await user.keyboard('{Enter}');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('hides the custom input when allowCustom is false', async () => {
    const user = userEvent.setup();
    render(<ColorPicker allowCustom={false} />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('honors custom swatches list', async () => {
    const user = userEvent.setup();
    render(<ColorPicker swatches={['#000000', '#ffffff']} />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));

    expect(await screen.findAllByRole('option')).toHaveLength(2);
  });

  it('disabled trigger cannot open the popover', () => {
    render(<ColorPicker disabled />);

    const trigger = screen.getByRole('button', { name: 'Color picker' });
    expect(trigger).toBeDisabled();
  });

  it('controlled value does not drift on selection', async () => {
    const user = userEvent.setup();
    render(<ColorPicker value="#dc2626" />);

    await user.click(screen.getByRole('button', { name: 'Color picker' }));
    await user.click(await screen.findByRole('option', { name: '#16a34a' }));

    expect(screen.getByRole('button', { name: 'Color picker' })).toHaveTextContent('#dc2626');
  });
});

describe('ColorSwatchSet', () => {
  it('renders one listitem per color with title', () => {
    render(<ColorSwatchSet colors={['#ff0000', '#00ff00']} />);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveAttribute('title', '#ff0000');
  });

  it('applies background colors and size', () => {
    render(<ColorSwatchSet colors={['#123456']} size={32} />);

    const item = screen.getByRole('listitem');
    expect(item).toHaveStyle({ backgroundColor: '#123456', width: '32px', height: '32px' });
  });
});

describe('hex utils', () => {
  it('isValidHex accepts 3 and 6 digit hex, rejects garbage', () => {
    expect(isValidHex('#fff')).toBe(true);
    expect(isValidHex('#FF00AA')).toBe(true);
    expect(isValidHex('fff')).toBe(false);
    expect(isValidHex('#ffff')).toBe(false);
    expect(isValidHex('#gg0000')).toBe(false);
  });

  it('normalizeHex expands 3-digit and lowercases', () => {
    expect(normalizeHex('#F0A')).toBe('#ff00aa');
    expect(normalizeHex('#AbCdEf')).toBe('#abcdef');
    expect(normalizeHex('abcede')).toBe('#abcede');
  });
});
