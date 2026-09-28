import * as React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '@/lib/utils';

/** Error-correction levels supported by the QR spec (redundancy vs. density). */
export type QrCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QrCodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Text or URL to encode. Rendering an empty value is a no-op (returns null). */
  value: string;
  /** Rendered width/height of the QR code in px (default 128) */
  size?: number;
  /**
   * Quiet zone around the modules, in QR modules (not px).
   * Defaults to 2; scanners want >= 2 to reliably detect the code.
   */
  marginSize?: number;
  /**
   * Error-correction level (default 'M').
   * 'H' survives ~30% damage — useful for codes printed on paper or shown on
   * cracked screens; 'L' packs more data into the same grid.
   */
  level?: QrCodeErrorCorrectionLevel;
  /**
   * Render light modules on a dark plate instead of dark modules on a white
   * plate. Use for dark UIs; note that dark-on-light scans most reliably,
   * so keep the default when scan robustness matters more than aesthetics.
   */
  inverted?: boolean;
  /** Module color (default slate-900, or slate-50 when inverted) */
  fgColor?: string;
  /** Plate color drawn behind the modules (default white, or slate-950 when inverted) */
  bgColor?: string;
  /** Accessible name announced for the code (default "QR code") */
  label?: string;
  /** Optional caption rendered below the code, e.g. the URL being shared */
  caption?: React.ReactNode;
}

/**
 * Scannable QR code for sharing links (WireGuard invite URLs, bot invite
 * links, …) from the dashboard.
 *
 * Renders an inline `<figure>` with the QR on a rounded plate and an optional
 * caption. SVG output (crisp at any DPI); wrap in a dialog/popover for
 * show-on-demand flows.
 */
export const QrCode = React.forwardRef<HTMLElement, QrCodeProps>(
  (
    {
      value,
      size = 128,
      marginSize = 2,
      level = 'M',
      inverted = false,
      fgColor,
      bgColor,
      label = 'QR code',
      caption,
      className,
      ...props
    },
    ref,
  ) => {
    if (!value) return null;

    const resolvedFg = fgColor ?? (inverted ? '#f8fafc' : '#0f172a');
    const resolvedBg = bgColor ?? (inverted ? '#020617' : '#ffffff');

    return (
      <figure
        ref={ref}
        role="img"
        aria-label={label}
        className={cn('inline-flex flex-col items-center gap-2', className)}
        {...props}
      >
        <div
          className={cn(
            'inline-flex rounded-md p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10',
            inverted ? 'bg-slate-950' : 'bg-white',
          )}
        >
          <QRCodeSVG
            value={value}
            size={size}
            marginSize={marginSize}
            level={level}
            fgColor={resolvedFg}
            bgColor={resolvedBg}
          />
        </div>
        {caption != null && (
          <figcaption className="max-w-full break-all text-center text-xs text-slate-500 dark:text-slate-400">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  },
);
QrCode.displayName = 'QrCode';
