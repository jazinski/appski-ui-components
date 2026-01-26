import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';
import { useState } from 'react';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    textareaSize: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'both'],
    },
    disabled: {
      control: 'boolean',
    },
    autoResize: {
      control: 'boolean',
    },
    showCharacterCount: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4,
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Bio',
    description: 'Tell us a little bit about yourself',
    placeholder: 'I am a...',
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Comments',
    description: 'Please provide your feedback',
    placeholder: 'Your comments here...',
    required: true,
    rows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    error: 'Description is required',
    defaultValue: '',
    rows: 4,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Tweet',
    description: "What's happening?",
    placeholder: 'Write your tweet...',
    showCharacterCount: true,
    maxLength: 280,
    rows: 4,
  },
};

export const CharacterCountExceeded: Story = {
  args: {
    label: 'Tweet',
    placeholder: 'Write your tweet...',
    showCharacterCount: true,
    maxLength: 50,
    defaultValue:
      'This is a very long text that exceeds the maximum character limit for this textarea field.',
    rows: 4,
  },
};

export const AutoResize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-[400px]">
        <Textarea
          label="Auto-resizing Textarea"
          description="This textarea grows as you type"
          placeholder="Start typing to see it grow..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          autoResize
          minRows={2}
          maxRows={10}
          showCharacterCount
        />
      </div>
    );
  },
};

export const AutoResizeWithMaxRows: Story = {
  render: () => {
    const [value, setValue] = useState('Line 1\nLine 2\nLine 3');
    return (
      <div className="w-[400px]">
        <Textarea
          label="Limited Auto-resize"
          description="This textarea grows up to 5 rows maximum"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          autoResize
          minRows={2}
          maxRows={5}
        />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('This is a controlled textarea');
    return (
      <div className="w-[400px] space-y-4">
        <Textarea
          label="Controlled Textarea"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          showCharacterCount
          maxLength={200}
          rows={4}
        />
        <div className="text-muted-foreground text-sm">
          <strong>Current value:</strong> {value}
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    description: 'This textarea is disabled',
    placeholder: 'You cannot type here...',
    disabled: true,
    rows: 4,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Read-only Content',
    defaultValue: 'This is some disabled content that cannot be edited.',
    disabled: true,
    rows: 4,
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Small Textarea',
    placeholder: 'Small size...',
    textareaSize: 'sm',
    rows: 3,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Textarea',
    placeholder: 'Large size...',
    textareaSize: 'lg',
    rows: 5,
  },
};

// Resize variants
export const ResizeNone: Story = {
  args: {
    label: 'No Resize',
    description: 'You cannot resize this textarea',
    placeholder: 'Fixed size...',
    resize: 'none',
    rows: 4,
  },
};

export const ResizeVertical: Story = {
  args: {
    label: 'Resize Vertical (Default)',
    description: 'You can resize this textarea vertically',
    placeholder: 'Drag the corner to resize vertically...',
    resize: 'vertical',
    rows: 4,
  },
};

export const ResizeBoth: Story = {
  args: {
    label: 'Resize Both',
    description: 'You can resize this textarea in both directions',
    placeholder: 'Drag the corner to resize...',
    resize: 'both',
    rows: 4,
  },
};

// Variants
export const Destructive: Story = {
  args: {
    label: 'Error State',
    placeholder: 'This has an error...',
    variant: 'destructive',
    rows: 4,
  },
};

// Complex example
export const FeedbackForm: Story = {
  render: () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
    };

    return (
      <form onSubmit={handleSubmit} className="w-[500px] space-y-4">
        <Textarea
          label="Feedback"
          description="Help us improve by sharing your thoughts"
          placeholder="What do you think about our product?"
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          required
          autoResize
          minRows={4}
          maxRows={10}
          showCharacterCount
          maxLength={500}
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={!feedback.trim() || submitted}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitted ? 'Submitted!' : 'Submit Feedback'}
          </button>
          <button
            type="button"
            onClick={() => {
              setFeedback('');
            }}
            className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm"
          >
            Clear
          </button>
        </div>
      </form>
    );
  },
};

// Dark mode showcase
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="dark w-[400px] space-y-4">
      <Textarea
        label="Dark Mode Textarea"
        description="This is how the textarea looks in dark mode"
        placeholder="Type something..."
        showCharacterCount
        maxLength={200}
        rows={4}
      />
      <Textarea
        label="With Error"
        error="This field is required"
        placeholder="Type something..."
        rows={4}
      />
      <Textarea label="Disabled" disabled defaultValue="Disabled in dark mode" rows={4} />
    </div>
  ),
};
