import type { Meta, StoryObj } from '@storybook/react';
import { HybridEditor } from './hybrid-editor';
import { useState } from 'react';

const meta: Meta<typeof HybridEditor> = {
  title: 'Components/HybridEditor',
  component: HybridEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A powerful dual-mode editor that combines the best of both worlds:

- **Rich Text Mode**: WYSIWYG editing with Lexical (formatting toolbar, headings, lists, etc.)
- **Code Mode**: Raw Markdown editing with Monaco (syntax highlighting, line numbers)
- **AI Integration**: Built-in "Ask AI" button for assistance
- **Seamless Switching**: Toggle between modes without losing content
- **Markdown Storage**: Single source of truth in Markdown format

Perfect for content creation, documentation, note-taking, and any scenario where users might want both visual and code editing capabilities.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Initial content in Markdown format',
    },
    initialMode: {
      control: { type: 'radio' },
      options: ['rich', 'code'],
      description: 'Starting editor mode',
    },
    showAI: {
      control: 'boolean',
      description: 'Show the AI assistance button',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when editor is empty',
    },
    minHeight: {
      control: { type: 'number', min: 100, max: 800, step: 50 },
      description: 'Minimum height in pixels',
    },
    maxHeight: {
      control: { type: 'number', min: 200, max: 1000, step: 50 },
      description: 'Maximum height (enables scrolling)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    monacoTheme: {
      control: { type: 'radio' },
      options: ['vs-dark', 'vs-light'],
      description: 'Monaco editor theme',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HybridEditor>;

// Controlled component wrapper for stories
function ControlledEditor(props: React.ComponentProps<typeof HybridEditor>) {
  const [value, setValue] = useState(props.value || '');
  
  return (
    <div className="space-y-4">
      <HybridEditor 
        {...props} 
        value={value}
        onChange={setValue}
      />
      <div className="p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-2">Markdown Output:</h4>
        <pre className="text-sm bg-background p-2 rounded border overflow-auto max-h-48">
          {value || '(empty)'}
        </pre>
      </div>
    </div>
  );
}

export const Default: Story = {
  args: {
    value: '# Hello World\n\nStart editing to see the magic! ✨',
    placeholder: 'Start typing...',
    minHeight: 300,
    showAI: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const RichTextMode: Story = {
  args: {
    value: '# Welcome to HybridEditor\n\nThis is a **powerful** editor with *rich* formatting capabilities.\n\n## Features\n\n- Bold and italic text\n- Multiple heading levels\n- Lists and quotes\n- And much more!\n\n> "The best editor is the one that adapts to you." - Unknown',
    initialMode: 'rich',
    minHeight: 400,
    showAI: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const CodeMode: Story = {
  args: {
    value: '```javascript\nconst greet = (name) => {\n  console.log(`Hello, ${name}!`);\n};\n\ngreet("World");\n```\n\n## Code Block Example\n\nWrite Markdown with syntax highlighting!',
    initialMode: 'code',
    minHeight: 400,
    showAI: true,
    monacoTheme: 'vs-dark',
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const WithAIIntegration: Story = {
  args: {
    value: '# Ask AI for Help!\n\nSelect any text and click the "Ask AI" button to get assistance.\n\n**Try it:** Select this text and ask AI to improve it.',
    minHeight: 300,
    showAI: true,
    onAIClick: (selectedText, fullContent) => {
      alert(
        `AI Clicked!\n\nSelected Text: ${selectedText || '(none)'}\n\nFull Content Length: ${fullContent.length} characters`
      );
    },
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const WithoutAI: Story = {
  args: {
    value: '# Simple Editor\n\nNo AI button, just pure editing power.',
    minHeight: 300,
    showAI: false,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const CompactSize: Story = {
  args: {
    value: 'Quick note',
    placeholder: 'Take a quick note...',
    minHeight: 150,
    maxHeight: 200,
    showAI: false,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const LargeDocument: Story = {
  args: {
    value: `# Large Document Example

## Introduction

This is a demonstration of the editor handling larger content with scrolling.

## Section 1: Features

- **Rich Text Editing**: Format your content beautifully
- **Code Mode**: Switch to raw Markdown for precision
- **AI Assistance**: Get help when you need it
- **Responsive**: Works on all screen sizes

## Section 2: Usage

The editor automatically handles:

1. Content synchronization between modes
2. Markdown parsing and rendering  
3. Toolbar state management
4. Keyboard shortcuts

> Pro tip: Use Markdown shortcuts in rich text mode! Type \`**text**\` for bold.

## Section 3: Technical Details

\`\`\`typescript
interface HybridEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  initialMode?: 'rich' | 'code';
  showAI?: boolean;
}
\`\`\`

## Conclusion

The HybridEditor combines the power of Lexical and Monaco to create an unmatched editing experience.

---

*End of document*`,
    minHeight: 400,
    maxHeight: 600,
    showAI: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const Disabled: Story = {
  args: {
    value: '# Read-Only Content\n\nThis editor is disabled.',
    minHeight: 200,
    disabled: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const LightTheme: Story = {
  args: {
    value: '# Light Monaco Theme\n\n```javascript\nconsole.log("Hello!");\n```',
    initialMode: 'code',
    minHeight: 300,
    monacoTheme: 'vs-light',
    showAI: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const CustomPlaceholder: Story = {
  args: {
    value: '',
    placeholder: '📝 Write your epic story here...',
    minHeight: 250,
    showAI: true,
  },
  render: (args) => <ControlledEditor {...args} />,
};

export const ModeComparisonSideBySide: Story = {
  render: () => {
    const [value, setValue] = useState('# Side by Side\n\n**Edit** in one mode, see it update in the other!');
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Rich Text Mode</h3>
          <HybridEditor
            value={value}
            onChange={setValue}
            initialMode="rich"
            minHeight={400}
            showAI={false}
          />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Code Mode</h3>
          <HybridEditor
            value={value}
            onChange={setValue}
            initialMode="code"
            minHeight={400}
            showAI={false}
          />
        </div>
      </div>
    );
  },
};
