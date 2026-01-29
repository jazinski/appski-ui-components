import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

describe('Popover', () => {
  it('renders trigger correctly', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('shows content when trigger is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    // Content should not be visible initially
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    // Click trigger
    await user.click(screen.getByText('Open'));

    // Content should now be visible
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  it('applies size classes correctly', async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent size="sm">Content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    let content = screen.getByText('Content');
    expect(content.parentElement).toHaveClass('w-64');

    rerender(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent size="lg">Content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    content = screen.getByText('Content');
    expect(content.parentElement).toHaveClass('w-96');
  });

  it('merges custom className', async () => {
    const user = userEvent.setup();

    render(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content">Content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    const content = screen.getByText('Content');
    expect(content.parentElement).toHaveClass('custom-content');
  });
});
