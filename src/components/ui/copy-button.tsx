import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip } from './tooltip';

const kbdVariants = cva(
  'inline-flex select-none items-center justify-center gap-1 whitespace-nowrap rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 font-sans text-[0.75em] font-medium leading-none text-slate-500 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
  {
    variants: {
      size: {
        sm: 'min-w-[1.25rem] h-5 px-1',
        md: 'min-w-[1.5rem] h-6 px-1.5',
        lg: 'min-w-[1.75rem] h-7 px-2 text-[0.8em]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

/**
 * Keyboard key hint, e.g. `<Kbd>⌘</Kbd> <Kbd>K</Kbd>`.
 * Renders a semantic `<kbd>` element.
 */
export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => (
    <kbd ref={ref} className={cn(kbdVariants({ size, className }))} {...props} />
  )
);
Kbd.displayName = 'Kbd';

async function writeClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    // Legacy fallback for non-secure contexts where the async API is absent.
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

const copyButtonVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200',
        outline:
          'border border-slate-300 bg-transparent text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700',
        ghost: 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200',
      },
      size: {
        sm: 'h-7 w-7 p-1',
        md: 'h-8 w-8 p-1.5',
        lg: 'h-9 w-9 p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onCopy'>,
    VariantProps<typeof copyButtonVariants> {
  /** Text to copy to the clipboard */
  value: string;
  /** Reset the "Copied" feedback after this many ms (default 2000) */
  feedbackDuration?: number;
  /** Show a "Copied!" tooltip on success instead of an inline icon swap */
  showFeedbackTooltip?: boolean;
  /** Accessible label announced for the button (default "Copy to clipboard") */
  ariaLabelText?: string;
  /** Keyboard key hint rendered as a Kbd; when focused, pressing it copies */
  shortcutHint?: string;
  /** Called after a copy attempt; receives true on success */
  onCopy?: (copied: boolean) => void;
}

/**
 * Copy-to-clipboard icon button with success feedback and an optional
 * keyboard shortcut hint. Keyboard interaction is opt-in: the shortcut
 * fires on the keydown event of the button itself (press when focused),
 * e.g. `<CopyButton value={url} shortcutHint="C" />` copies while the
 * button has focus and C is pressed.
 */
export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      className,
      variant,
      size,
      value,
      feedbackDuration = 2000,
      showFeedbackTooltip = false,
      ariaLabelText = 'Copy to clipboard',
      shortcutHint,
      onCopy,
      onKeyDown,
      children,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const timerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

    React.useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    const copy = React.useCallback(async () => {
      const ok = await writeClipboard(value);
      setCopied(ok);
      onCopy?.(ok);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (ok) {
        timerRef.current = setTimeout(() => { setCopied(false); }, feedbackDuration);
      }
    }, [value, feedbackDuration, onCopy]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (
        shortcutHint &&
        !event.defaultPrevented &&
        event.key.toLowerCase() === shortcutHint.toLowerCase()
      ) {
        event.preventDefault();
        void copy();
      }
    };

    const handleClick = () => {
      void copy();
    };

    const button = (
      <button
        type="button"
        ref={ref}
        aria-label={ariaLabelText}
        data-copied={copied ? 'true' : 'false'}
        className={cn(copyButtonVariants({ variant, size, className }))}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {copied ? (
          <Check className="h-full w-full text-emerald-500" aria-hidden="true" />
        ) : (
          <Copy className="h-full w-full" aria-hidden="true" />
        )}
        {children}
      </button>
    );

    if (showFeedbackTooltip) {
      return (
        <Tooltip content={copied ? 'Copied!' : 'Copy to clipboard'}>
          {shortcutHint ? (
            <span className="inline-flex">
              {button}
              <Kbd className="ml-1.5 self-center">{shortcutHint}</Kbd>
            </span>
          ) : (
            button
          )}
        </Tooltip>
      );
    }

    if (shortcutHint) {
      return (
        <span className="inline-flex items-center">
          {button}
          <Kbd className="ml-1.5">{shortcutHint}</Kbd>
        </span>
      );
    }

    return button;
  }
);
CopyButton.displayName = 'CopyButton';
