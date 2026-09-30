import * as React from 'react';
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
export declare const QrCode: React.ForwardRefExoticComponent<QrCodeProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=qr-code.d.ts.map