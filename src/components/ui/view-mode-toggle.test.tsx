import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ViewModeToggle } from './view-mode-toggle';
import { List, Grid, BarChart } from 'lucide-react';

describe('ViewModeToggle', () => {
  const defaultOptions = [
    { value: 'list' as const, icon: <List className="h-4 w-4" />, label: 'List' },
    { value: 'grid' as const, icon: <Grid className="h-4 w-4" />, label: 'Grid' },
    { value: 'analytics' as const, icon: <BarChart className="h-4 w-4" />, label: 'Analytics' },
  ];

  it('renders all view mode options', () => {
    const onChange = vi.fn();
    render(<ViewModeToggle value="list" onChange={onChange} options={defaultOptions} />);

    expect(screen.getByLabelText('List')).toBeDefined();
    expect(screen.getByLabelText('Grid')).toBeDefined();
    expect(screen.getByLabelText('Analytics')).toBeDefined();
  });

  it('highlights the active view mode', () => {
    const onChange = vi.fn();
    render(<ViewModeToggle value="grid" onChange={onChange} options={defaultOptions} />);

    const gridButton = screen.getByLabelText('Grid');
    expect(gridButton.getAttribute('aria-pressed')).toBe('true');
  });

  it('calls onChange when a different view mode is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ViewModeToggle value="list" onChange={onChange} options={defaultOptions} />);

    const gridButton = screen.getByLabelText('Grid');
    await user.click(gridButton);

    expect(onChange).toHaveBeenCalledWith('grid');
  });

  it('applies custom className', () => {
    const onChange = vi.fn();
    const { container } = render(
      <ViewModeToggle
        value="list"
        onChange={onChange}
        options={defaultOptions}
        className="custom-class"
      />
    );

    const toggleGroup = container.firstChild as HTMLElement;
    expect(toggleGroup.className).toContain('custom-class');
  });

  it('supports different sizes', () => {
    const onChange = vi.fn();
    render(<ViewModeToggle value="list" onChange={onChange} options={defaultOptions} size="lg" />);

    const listButton = screen.getByLabelText('List');
    expect(listButton.className).toContain('h-11'); // lg size uses h-11
  });

  it('works with custom view mode types', () => {
    type CustomViewMode = 'compact' | 'comfortable' | 'spacious';
    const customOptions = [
      { value: 'compact' as const, icon: <List className="h-4 w-4" />, label: 'Compact' },
      { value: 'comfortable' as const, icon: <Grid className="h-4 w-4" />, label: 'Comfortable' },
      { value: 'spacious' as const, icon: <BarChart className="h-4 w-4" />, label: 'Spacious' },
    ];

    const onChange = vi.fn<(value: CustomViewMode) => void>();
    render(
      <ViewModeToggle<CustomViewMode> value="compact" onChange={onChange} options={customOptions} />
    );

    expect(screen.getByLabelText('Compact')).toBeDefined();
    expect(screen.getByLabelText('Comfortable')).toBeDefined();
    expect(screen.getByLabelText('Spacious')).toBeDefined();
  });

  it('renders with minimum two options', () => {
    const onChange = vi.fn();
    const twoOptions = defaultOptions.slice(0, 2);
    render(<ViewModeToggle value="list" onChange={onChange} options={twoOptions} />);

    expect(screen.getByLabelText('List')).toBeDefined();
    expect(screen.getByLabelText('Grid')).toBeDefined();
  });

  it('sets aria-pressed correctly for active and inactive options', () => {
    const onChange = vi.fn();
    render(<ViewModeToggle value="list" onChange={onChange} options={defaultOptions} />);

    const listButton = screen.getByLabelText('List');
    expect(listButton.getAttribute('aria-pressed')).toBe('true');

    const gridButton = screen.getByLabelText('Grid');
    expect(gridButton.getAttribute('aria-pressed')).toBe('false');
  });
});
