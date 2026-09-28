import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
  HoverCardFooter,
} from './hover-card';

describe('HoverCard', () => {
  it('renders trigger correctly', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Preview content</HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('does not show content initially', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Preview content</HoverCardContent>
      </HoverCard>
    );

    expect(screen.queryByText('Preview content')).not.toBeInTheDocument();
  });

  it('shows content when trigger is hovered', async () => {
    const user = userEvent.setup();

    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Preview content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() => {
      expect(screen.getByText('Preview content')).toBeInTheDocument();
    });
  });

  it('renders header, title, description and footer inside content', async () => {
    const user = userEvent.setup();

    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <HoverCardHeader>
            <HoverCardTitle>Chris Jazinski</HoverCardTitle>
            <HoverCardDescription>Homelab self-hoster</HoverCardDescription>
          </HoverCardHeader>
          <HoverCardFooter>42 followers</HoverCardFooter>
        </HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() => {
      expect(screen.getByText('Chris Jazinski')).toBeInTheDocument();
      expect(screen.getByText('Homelab self-hoster')).toBeInTheDocument();
      expect(screen.getByText('42 followers')).toBeInTheDocument();
    });
  });

  it('applies size classes correctly', async () => {
    const user = userEvent.setup();

    const { unmount } = render(
      <HoverCard>
        <HoverCardTrigger>Hover SM</HoverCardTrigger>
        <HoverCardContent size="sm">Content SM</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover SM'));
    await waitFor(() => {
      expect(screen.getByText('Content SM')).toHaveClass('w-52');
    });

    unmount();

    render(
      <HoverCard>
        <HoverCardTrigger>Hover LG</HoverCardTrigger>
        <HoverCardContent size="lg">Content LG</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover LG'));
    await waitFor(() => {
      expect(screen.getByText('Content LG')).toHaveClass('w-96');
    });
  });

  it('merges custom className', async () => {
    const user = userEvent.setup();

    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent className="custom-content">Preview content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover me'));

    await waitFor(() => {
      expect(screen.getByText('Preview content')).toHaveClass('custom-content');
    });
  });

  it('keeps content open when hovering into the content itself', async () => {
    const user = userEvent.setup();

    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Preview content</HoverCardContent>
      </HoverCard>
    );

    await user.hover(screen.getByText('Hover me'));
    await waitFor(() => {
      expect(screen.getByText('Preview content')).toBeInTheDocument();
    });

    await user.hover(screen.getByText('Preview content'));

    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(screen.getByText('Preview content')).toBeInTheDocument();
  });
});
