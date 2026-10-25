import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagInput } from './tag-input';

const suggestions = ['bug', 'feature', 'chore', 'design'];

function setup(value: string[] = [], onChange = vi.fn(), props = {}) {
  render(
    <TagInput
      value={value}
      onChange={onChange}
      suggestions={suggestions}
      labels={{ input: 'Card labels' }}
      {...props}
    />
  );
  const input = screen.getByLabelText('Card labels');
  return { input, onChange };
}

describe('TagInput', () => {
  it('renders one chip per value', () => {
    render(<TagInput value={['bug', 'design']} onChange={() => {}} />);
    expect(screen.getByText('bug')).toBeInTheDocument();
    expect(screen.getByText('design')).toBeInTheDocument();
  });

  it('adds a typed tag on Enter and clears the query', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup();
    await user.type(input, 'urgent{Enter}');
    expect(onChange).toHaveBeenCalledWith(['urgent']);
    expect(input).toHaveValue('');
  });

  it('commits a dangling tag on blur so typed text is not lost', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup();
    await user.type(input, 'urgent');
    await user.tab();
    expect(onChange).toHaveBeenCalledWith(['urgent']);
  });

  it('rejects duplicates and flashes the duplicate hint', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup(['bug']);
    await user.type(input, 'bug{Enter}');
    expect(onChange).not.toHaveBeenCalled();
    expect(await screen.findByText('Already added')).toBeInTheDocument();
  });

  it('enforces maxTags with the max-reached hint', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup(['bug'], undefined, { maxTags: 1 });
    await user.type(input, 'urgent{Enter}');
    expect(onChange).not.toHaveBeenCalled();
    expect(await screen.findByText('Maximum tags reached')).toBeInTheDocument();
  });

  it('removes the last tag on Backspace when the query is empty', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup(['bug', 'chore']);
    await user.type(input, '{Backspace}');
    expect(onChange).toHaveBeenCalledWith(['bug']);
  });

  it('removes a specific tag from its chip ×', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TagInput value={['bug', 'chore']} onChange={onChange} suggestions={suggestions} />
    );
    await user.click(screen.getByRole('button', { name: 'Remove chore' }));
    expect(onChange).toHaveBeenCalledWith(['bug']);
  });

  it('hides already-selected suggestions but keeps exact re-typing', async () => {
    const user = userEvent.setup();
    const { input } = setup(['bug']);
    // Typing the full 'bug' re-offers it (exact-match escape hatch).
    await user.type(input, 'bug');
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    // A partial query that cannot match anything selected hides the listbox.
    await user.clear(input);
    await user.type(input, 'zzz');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('picks a suggestion with the keyboard (ArrowDown + Enter)', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup();
    await user.type(input, 'fe');
    await user.type(input, '{ArrowDown}');
    await user.type(input, '{Enter}');
    expect(onChange).toHaveBeenCalledWith(['feature']);
  });

  it('picks a suggestion with a click', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <TagInput value={[]} onChange={onChange} suggestions={suggestions} />
    );
    await user.type(screen.getByRole('textbox'), 'cho');
    await user.click(screen.getByRole('option', { name: 'chore' }));
    expect(onChange).toHaveBeenCalledWith(['chore']);
  });

  it('commits on comma without adding the delimiter to the tag', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup();
    await user.type(input, 'urgent,');
    expect(onChange).toHaveBeenCalledWith(['urgent']);
    expect(input).toHaveValue('');
  });

  it('honors a custom delimiter', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup([], undefined, { delimiters: [';'] });
    await user.type(input, 'urgent;');
    expect(onChange).toHaveBeenCalledWith(['urgent']);
  });

  it('allows duplicates when allowDuplicates is set', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup(['bug'], undefined, { allowDuplicates: true });
    await user.type(input, 'bug{Enter}');
    expect(onChange).toHaveBeenCalledWith(['bug', 'bug']);
    expect(input).toHaveValue('');
  });

  it('keeps the input enabled at the cap so tags can still be removed', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup(['bug'], undefined, { maxTags: 1 });
    expect(input).toBeEnabled();
    await user.type(input, '{Backspace}');
    expect(onChange).toHaveBeenCalledWith([]);
  });

  it('disables the whole control with disabled', () => {
    const { input } = setup(['bug'], undefined, { disabled: true });
    expect(input).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Remove bug' })).not.toBeInTheDocument();
  });

  it('normalizes whitespace and wrapping commas', async () => {
    const user = userEvent.setup();
    const { input, onChange } = setup();
    await user.type(input, '  urgent  {Enter}');
    expect(onChange).toHaveBeenCalledWith(['urgent']);
  });

  it('exposes helper text under the field', () => {
    render(<TagInput value={[]} onChange={() => {}} helperText="Press Enter to add" />);
    expect(screen.getByText('Press Enter to add')).toBeInTheDocument();
  });
});
