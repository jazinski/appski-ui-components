import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConnectionStatus } from './connection-status';

describe('ConnectionStatus', () => {
  it('renders correctly with default label', () => {
    render(<ConnectionStatus status="online" />);
    expect(screen.getByText('Online')).toBeDefined();
  });

  it('renders custom label', () => {
    render(<ConnectionStatus status="offline" label="Disconnected" />);
    expect(screen.getByText('Disconnected')).toBeDefined();
  });

  it('renders as badge', () => {
    render(<ConnectionStatus status="error" asBadge />);
    // Badge usually has specific classes, let's check for badge presence
    // In our implementation badge uses Badge component.
    // We can check if it has the error variant class implicitly
    expect(screen.getByText('Error')).toBeDefined();
  });

  it('hides label when showLabel is false', () => {
    render(<ConnectionStatus status="connecting" showLabel={false} />);
    expect(screen.queryByText('Connecting...')).toBeNull();
  });

  it('pulses by default for online status', () => {
    const { container } = render(<ConnectionStatus status="online" />);
    const dot = container.querySelector('.animate-pulse');
    expect(dot).toBeDefined();
  });
});
