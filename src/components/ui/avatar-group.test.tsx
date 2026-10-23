import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvatarGroup } from './avatar-group';

const team = [
  { name: 'Chris Jazinski' },
  { name: 'Alex Blanc' },
  { name: 'Ada Lovelace' },
  { name: 'Grace Hopper' },
  { name: 'Alan Turing' },
];

describe('AvatarGroup', () => {
  describe('Rendering', () => {
    it('renders all items when maxCount is not set', () => {
      render(<AvatarGroup items={team} />);
      expect(screen.getByText('CJ')).toBeInTheDocument();
      expect(screen.getByText('AB')).toBeInTheDocument();
      expect(screen.getByText('AL')).toBeInTheDocument();
      expect(screen.getByText('GH')).toBeInTheDocument();
      expect(screen.getByText('AT')).toBeInTheDocument();
      expect(screen.queryByTestId('avatar-group-overflow')).not.toBeInTheDocument();
    });

    it('renders a group role container', () => {
      const { container } = render(<AvatarGroup items={team} />);
      expect(container.querySelector('[role="group"]')).toBeInTheDocument();
    });

    it('renders images when src is provided', () => {
      render(<AvatarGroup items={[{ name: 'Chris', src: '/chris.jpg' }]} />);
      const img = screen.getByAltText('Chris');
      expect(img).toBeInTheDocument();
      expect(img.getAttribute('src')).toBe('/chris.jpg');
    });

    it('passes status indicators through to avatars', () => {
      const { container } = render(
        <AvatarGroup items={[{ name: 'Chris', status: 'online' }]} />
      );
      expect(container.querySelector('[aria-label="Status: online"]')).toBeInTheDocument();
    });
  });

  describe('Overflow', () => {
    it('shows +N overflow indicator when items exceed maxCount', () => {
      render(<AvatarGroup items={team} maxCount={3} />);
      const overflow = screen.getByTestId('avatar-group-overflow');
      expect(overflow).toHaveTextContent('+2');
      expect(screen.getByText('AL')).toBeInTheDocument();
      expect(screen.queryByText('GH')).not.toBeInTheDocument();
      expect(screen.queryByText('AT')).not.toBeInTheDocument();
    });

    it('shows no overflow indicator when items equal maxCount', () => {
      render(<AvatarGroup items={team.slice(0, 3)} maxCount={3} />);
      expect(screen.queryByTestId('avatar-group-overflow')).not.toBeInTheDocument();
    });

    it('handles maxCount of 0 by hiding all avatars', () => {
      render(<AvatarGroup items={team} maxCount={0} />);
      expect(screen.getByTestId('avatar-group-overflow')).toHaveTextContent('+5');
      expect(screen.queryByText('CJ')).not.toBeInTheDocument();
    });

    it('clamps negative maxCount to 0', () => {
      render(<AvatarGroup items={team} maxCount={-2} />);
      expect(screen.getByTestId('avatar-group-overflow')).toHaveTextContent('+5');
    });

    it('handles empty items array', () => {
      const { container } = render(<AvatarGroup items={[]} />);
      expect(container.querySelector('[role="group"]')).toBeInTheDocument();
      expect(screen.queryByTestId('avatar-group-overflow')).not.toBeInTheDocument();
    });
  });

  describe('Overlap', () => {
    it('applies negative margin to all but the first avatar', () => {
      const { container } = render(<AvatarGroup items={team} maxCount={3} />);
      const slots = container.querySelectorAll('[role="group"] > span');
      expect(slots.length).toBe(4); // 3 avatars + overflow
      expect(slots[0]).not.toHaveStyle({ marginLeft: '-8px' });
      expect(slots[1]).toHaveStyle({ marginLeft: '-8px' });
      expect(slots[2]).toHaveStyle({ marginLeft: '-8px' });
    });

    it('supports custom overlap value', () => {
      const { container } = render(<AvatarGroup items={team} maxCount={2} overlap={-12} />);
      const slots = container.querySelectorAll('[role="group"] > span');
      expect(slots[1]).toHaveStyle({ marginLeft: '-12px' });
    });

    it('supports zero overlap (no stack)', () => {
      const { container } = render(<AvatarGroup items={team} maxCount={2} overlap={0} />);
      const slots = container.querySelectorAll('[role="group"] > span');
      expect(slots[1]).not.toHaveStyle({ marginLeft: '0px' });
      expect(slots[1].style.marginLeft).toBe('');
    });
  });
});
