import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
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
    await waitFor(() => {
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });
  });

  it('applies size classes correctly', async () => {
    const user = userEvent.setup();

    // Test sm size
    const { unmount } = render(
      <Popover>
        <PopoverTrigger>Open SM</PopoverTrigger>
        <PopoverContent size="sm">Content SM</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open SM'));
    await waitFor(() => {
      const content = screen.getByRole('dialog');
      expect(content).toHaveClass('w-56');
    });

    unmount();

    // Test lg size
    render(
      <Popover>
        <PopoverTrigger>Open LG</PopoverTrigger>
        <PopoverContent size="lg">Content LG</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open LG'));
    await waitFor(() => {
      const content = screen.getByRole('dialog');
      expect(content).toHaveClass('w-96');
    });
  });

  it('merges custom className', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-content">Content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    await waitFor(() => {
      const content = screen.getByRole('dialog');
      expect(content).toHaveClass('custom-content');
    });
  });
});
