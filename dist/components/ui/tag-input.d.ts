import * as React from 'react';
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
export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'> {
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
declare const tagInputVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;
export { tagInputVariants };
//# sourceMappingURL=tag-input.d.ts.map