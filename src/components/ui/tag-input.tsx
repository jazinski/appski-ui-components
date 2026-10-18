import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Chip } from './chip';

export interface TagInputLabels {
  /** Accessible name for the whole control, e.g. "Task labels". */
  input: string;
  /** Prefix for the remove button's accessible name on each chip ("Remove bug"). */
  removeTag: string;
  /** Listbox name for suggestions. */
  suggestions: string;
  /** Text shown when maxTags is reached. */
  maxReached: string;
  /** Text shown when the entry already exists. */
  duplicate: string;
}

export interface TagInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
  /** Selected tags, in display order. */
  value: string[];
  /**
   * Fires with the full next tag array — add, remove, and reorder results all
   * report here. The component is fully controlled.
   */
  onChange?: (tags: string[]) => void;
  /** Suggestions offered as a typeahead listbox while typing. */
  suggestions?: string[];
  /** Reject adding a tag that is already selected (default true). */
  allowDuplicates?: boolean;
  /** Hard cap on the number of tags (skips the add when exceeded). */
  maxTags?: number;
  /** Delimiters that commit the typed text as a tag (default comma; Enter always commits). */
  delimiters?: string[];
  /** Disable the whole control (input + removals). */
  disabled?: boolean;
  /** Accessible labels, overridable for localization. */
  labels?: Partial<TagInputLabels>;
  /** Optional hint rendered under the input. */
  helperText?: string;
}

const tagInputVariants = cva(
  'relative flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-2 py-1.5 text-sm ring-offset-background transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      invalid: {
        true: 'border-destructive focus-within:ring-destructive',
        false: '',
      },
    },
    defaultVariants: {
      invalid: false,
    },
  }
);

const defaultLabels: TagInputLabels = {
  input: 'Tags',
  removeTag: 'Remove',
  suggestions: 'Suggestions',
  maxReached: 'Maximum tags reached',
  duplicate: 'Already added',
};

const suggestionVariants = cva(
  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
  {
    variants: {
      active: {
        true: 'cursor-pointer bg-accent text-accent-foreground',
        false: 'cursor-pointer hover:bg-accent/50',
      },
    },
    defaultVariants: { active: false },
  }
);

function normalizeTag(raw: string): string {
  return raw.trim().replace(/^,+|,+$/g, '');
}

/**
 * TagInput — tokenized tag entry: type, get a typeahead listbox of
 * suggestions, commit with Enter/comma, remove with the chip's × or
 * Backspace on an empty input. The controlled counterpart of Chip.
 *
 * Everything reduces to `onChange(nextTags)`: adding (typed or picked),
 * removing, and Backspace all report the same event, so wiring it to state
 * is one line. Duplicates are rejected by default and `maxTags` skips adds
 * past the cap (both with a polite hint). Theme tokens only.
 *
 * @example
 * ```tsx
 * <TagInput
 *   value={labels}
 *   onChange={setLabels}
 *   suggestions={['bug', 'feature', 'chore', 'design']}
 *   maxTags={5}
 *   labels={{ input: 'Card labels' }}
 * />
 * ```
 */
export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value,
      onChange,
      suggestions = [],
      allowDuplicates = false,
      maxTags,
      delimiters = [','],
      disabled,
      labels,
      helperText,
      className,
      placeholder,
      id,
      ...props
    },
    ref
    ) => {
    const merged = { ...defaultLabels, ...labels };
    const [query, setQuery] = React.useState('');
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const [hint, setHint] = React.useState<string | null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const hintTimer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    React.useEffect(() => {
      return () => { clearTimeout(hintTimer.current); };
    }, []);

    const flashHint = React.useCallback((text: string) => {
      setHint(text);
      clearTimeout(hintTimer.current);
      hintTimer.current = setTimeout(() => { setHint(null); }, 3000);
    }, []);

    const matches = React.useMemo(() => {
      const q = query.trim().toLowerCase();
      const pool = suggestions.filter(
        (s) => !q || s.toLowerCase().includes(q)
      );
      // Already-selected suggestions drop out of the listbox unless they are
      // an exact match for the query (user may be re-typing an existing tag).
      return pool.filter(
        (s) =>
          allowDuplicates ||
          !value.some((v) => v.toLowerCase() === s.toLowerCase()) ||
          s.toLowerCase() === q
      );
    }, [suggestions, query, value, allowDuplicates]);

    const listboxOpen = query.trim().length > 0 && matches.length > 0;

    const commit = React.useCallback(
      (raw: string) => {
        const tag = normalizeTag(raw);
        if (!tag) return false;
        if (!allowDuplicates && value.some((v) => v.toLowerCase() === tag.toLowerCase())) {
          flashHint(merged.duplicate);
          return false;
        }
        if (maxTags !== undefined && value.length >= maxTags) {
          flashHint(merged.maxReached);
          return false;
        }
        onChange?.([...value, tag]);
        return true;
      },
      [allowDuplicates, value, maxTags, onChange, flashHint, merged.duplicate, merged.maxReached]
    );

    const addFromSuggestion = React.useCallback(
      (tag: string) => {
        if (commit(tag)) {
          setQuery('');
          setActiveIndex(-1);
        }
      },
      [commit]
    );

    const removeAt = React.useCallback(
      (index: number) => {
        if (disabled) return;
        const next = value.filter((_, i) => i !== index);
        onChange?.(next);
      },
      [disabled, value, onChange]
    );

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown' && listboxOpen) {
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % matches.length);
        return;
      }
      if (event.key === 'ArrowUp' && listboxOpen) {
        event.preventDefault();
        setActiveIndex((i) => (i <= 0 ? matches.length - 1 : i - 1));
        return;
      }
      if (event.key === 'Tab' && listboxOpen && activeIndex >= 0) {
        event.preventDefault();
        addFromSuggestion(matches[activeIndex] ?? '');
        return;
      }
      if (event.key === 'Enter') {
        event.preventDefault();
        const picked = activeIndex >= 0 ? matches[activeIndex] : undefined;
        if (picked !== undefined && listboxOpen) {
          addFromSuggestion(picked);
        } else {
          commit(query);
          setQuery('');
        }
        return;
      }
      const isDelimiter = delimiters.includes(event.key);
      if (isDelimiter && query.trim()) {
        event.preventDefault();
        if (commit(query)) setQuery('');
        return;
      }
      if (event.key === 'Backspace' && !query && value.length > 0 && !disabled) {
        event.preventDefault();
        onChange?.(value.slice(0, -1));
        setActiveIndex(-1);
      }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      // Commit a dangling tag on blur so a typed value is never silently lost.
      if (query.trim()) {
        if (commit(query)) setQuery('');
      }
      setActiveIndex(-1);
      props.onBlur?.(event);
    };

    return (
      <div className={cn('w-full', className)}>
        <div
          className={cn(tagInputVariants({ invalid: hint !== null }))}
          onClick={(e) => {
            // Clicking anywhere in the field focuses the input.
            if (!disabled && e.target === e.currentTarget) inputRef.current?.focus();
          }}
        >
          {value.map((tag, index) => (
            <Chip
              key={`${tag}-${index}`}
              variant="outline"
              {...(disabled ? {} : { onRemove: () => { removeAt(index); } })}
              labels={{ remove: merged.removeTag }}
            >
              {tag}
            </Chip>
          ))}
          <input
            {...props}
            ref={setRefs}
            id={id}
            type="text"
            value={query}
            disabled={disabled}
            placeholder={value.length === 0 ? placeholder : ''}
            aria-label={merged.input}
            aria-invalid={hint !== null || undefined}
            aria-describedby={hint ? `${id ?? merged.input}-hint` : undefined}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            className="min-w-[6rem] flex-1 bg-transparent py-0.5 text-sm outline-none placeholder:text-muted-foreground"
            role={listboxOpen ? 'combobox' : undefined}
            aria-expanded={listboxOpen || undefined}
            aria-controls={listboxOpen ? `${id ?? 'tag-input'}-listbox` : undefined}
            aria-activedescendant={
              listboxOpen && activeIndex >= 0
                ? `${id ?? 'tag-input'}-option-${activeIndex}`
                : undefined
            }
            autoComplete="off"
          />
          {listboxOpen && (
            <ul
              id={`${id ?? 'tag-input'}-listbox`}
              role="listbox"
              aria-label={merged.suggestions}
              className="absolute top-full left-0 z-50 mt-1 max-h-56 w-full min-w-[10rem] overflow-y-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md"
            >
              {matches.map((s, i) => (
                <li
                  key={s}
                  id={`${id ?? 'tag-input'}-option-${i}`}
                  role="option"
                  aria-selected={activeIndex === i || undefined}
                  className={suggestionVariants({ active: activeIndex === i })}
                  onMouseDown={(e) => {
                    e.preventDefault(); // keep input focus so blur does not re-commit
                    addFromSuggestion(s);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
        {(hint || helperText) && (
          <p
            id={`${id ?? merged.input}-hint`}
            className={cn('mt-1 text-xs', hint ? 'text-destructive' : 'text-muted-foreground')}
          >
            {hint ?? helperText}
          </p>
        )}
      </div>
    );
  }
);
TagInput.displayName = 'TagInput';

export { tagInputVariants };
