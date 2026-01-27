import * as React from 'react';
export interface ConnectionStatusProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The current connection status */
    status: 'online' | 'offline' | 'connecting' | 'error';
    /** Label to display next to the indicator */
    label?: string;
    /** Whether to show the pulse animation */
    pulse?: boolean;
    /** Display as a badge instead of plain text */
    asBadge?: boolean;
    /** Show the label (default: true) */
    showLabel?: boolean;
}
/**
 * ConnectionStatus component to indicate real-time connectivity state.
 * Use for server status, WebSocket connections, or heartbeat indicators.
 */
export declare function ConnectionStatus({ status, label, pulse, asBadge, showLabel, className, ...props }: ConnectionStatusProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=connection-status.d.ts.map