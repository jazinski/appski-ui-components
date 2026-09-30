import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { QrCode } from './qr-code';

/**
 * BLANCSKI-UI-28 — real-encoding checks: renders the UNMOCKED component through
 * react-dom/server so a genuine QR matrix (not a mocked stub) must be produced.
 * qrcode.react draws all modules as subpaths of a single <path>; we count the
 * M commands in the path data.
 */
function moduleCount(html: string): number {
  const d = html.match(/ d="([^"]+)"/g)?.join(' ') ?? '';
  return (d.match(/M/g) || []).length;
}

describe('QrCode real encoding (no mocks)', () => {
  it('renders a real QR matrix from a URL', () => {
    const html = renderToStaticMarkup(
      createElement(QrCode, {
        value: 'https://casa.jazinski.dev',
        size: 128,
        level: 'H',
        caption: 'casa',
      }),
    );
    expect(html).toContain('<svg');
    // finder patterns + timing + data modules — well over 100 subpaths
    expect(moduleCount(html)).toBeGreaterThan(100);
    expect(html).toContain('<figcaption');
  });

  it('encodes different values differently', () => {
    const a = renderToStaticMarkup(createElement(QrCode, { value: 'https://a.example' }));
    const b = renderToStaticMarkup(createElement(QrCode, { value: 'https://b.example' }));
    expect(a).not.toEqual(b);
  });

  it('applies a quiet-zone plate and white background behind the modules', () => {
    const html = renderToStaticMarkup(createElement(QrCode, { value: 'x' }));
    // background plate path + module path
    expect((html.match(/<path/g) || []).length).toBeGreaterThanOrEqual(2);
  });
});
