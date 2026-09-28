import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode } from './qr-code';

// jsdom has no layout; we only assert that the library receives our props.
// React 19 calls function components as fn(props, undefined).
vi.mock('qrcode.react', () => ({
  QRCodeSVG: vi.fn(() => <svg data-testid="qr-svg" />),
}));

const mocked = vi.mocked(QRCodeSVG);

function lastProps() {
  return mocked.mock.calls[mocked.mock.calls.length - 1][0];
}

describe('QrCode', () => {
  it('renders a figure with an accessible name', () => {
    render(<QrCode value="https://casa.jazinski.dev" />);
    const fig = screen.getByRole('img', { name: 'QR code' });
    expect(fig.tagName).toBe('FIGURE');
  });

  it('passes value, size, margin, and level through to qrcode.react', () => {
    render(
      <QrCode value="https://t.me/agata_bot" size={256} marginSize={4} level="H" />,
    );
    expect(lastProps()).toMatchObject({
      value: 'https://t.me/agata_bot',
      size: 256,
      marginSize: 4,
      level: 'H',
    });
  });

  it('defaults to size 128, margin 2, level M', () => {
    render(<QrCode value="x" />);
    expect(lastProps()).toMatchObject({ size: 128, marginSize: 2, level: 'M' });
  });

  it('uses dark modules on white by default and swaps colors when inverted', () => {
    const { rerender } = render(<QrCode value="x" />);
    expect(lastProps()).toMatchObject({ fgColor: '#0f172a', bgColor: '#ffffff' });

    rerender(<QrCode value="x" inverted />);
    expect(lastProps()).toMatchObject({ fgColor: '#f8fafc', bgColor: '#020617' });
  });

  it('lets explicit fgColor/bgColor win over the inversion defaults', () => {
    render(<QrCode value="x" inverted fgColor="#123456" bgColor="#fedcba" />);
    expect(lastProps()).toMatchObject({ fgColor: '#123456', bgColor: '#fedcba' });
  });

  it('renders an optional caption as a figcaption', () => {
    render(<QrCode value="https://casa.jazinski.dev" caption="casa.jazinski.dev" />);
    expect(screen.getByText('casa.jazinski.dev').tagName).toBe('FIGCAPTION');
  });

  it('renders nothing for an empty value', () => {
    const { container } = render(<QrCode value="" />);
    expect(container.firstChild).toBeNull();
  });

  it('forwards className and extra props onto the figure', () => {
    render(<QrCode value="x" data-testid="custom" className="mt-4" />);
    const fig = screen.getByTestId('custom');
    expect(fig.className).toMatch(/mt-4/);
  });

  it('uses a custom accessible label', () => {
    render(<QrCode value="x" label="Scan to join the WireGuard network" />);
    expect(
      screen.getByRole('img', { name: 'Scan to join the WireGuard network' }),
    ).toBeInTheDocument();
  });
});
