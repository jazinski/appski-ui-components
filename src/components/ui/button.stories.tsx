import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Mail, Download, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A versatile button component with multiple variants, sizes, and states.

## Theming

The Button component requires these theme variables to be defined in your Tailwind configuration:

### Required Variables

| Variable | Usage | Example Value |
|----------|-------|---------------|
| \`--color-primary\` | Default variant background | \`#6366f1\` |
| \`--color-primary-foreground\` | Default variant text | \`#ffffff\` |
| \`--color-secondary\` | Secondary variant background | \`#e0e8ff\` |
| \`--color-secondary-foreground\` | Secondary variant text | \`#828df8\` |
| \`--color-accent\` | Outline/ghost hover background | \`#e0e8ff\` |
| \`--color-accent-foreground\` | Outline/ghost hover text | \`#6467f2\` |
| \`--color-destructive\` | Destructive variant background | \`#ef4343\` |
| \`--color-destructive-foreground\` | Destructive variant text | \`#ffffff\` |
| \`--color-background\` | Outline variant background | \`#f9fafb\` |
| \`--color-input\` | Outline variant border | \`#e1e7ef\` |
| \`--color-ring\` | Focus ring color | \`#6467f2\` |

### Tailwind v4 Setup

Add to your \`src/index.css\`:

\`\`\`css
@theme {
  --color-primary: #6366f1;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e0e8ff;
  --color-secondary-foreground: #828df8;
  --color-accent: #e0e8ff;
  --color-accent-foreground: #6467f2;
  --color-destructive: #ef4343;
  --color-destructive-foreground: #ffffff;
  --color-background: #f9fafb;
  --color-input: #e1e7ef;
  --color-ring: #6467f2;
}
\`\`\`

See the [Theming Guide](/docs/introduction-theming--docs) for complete setup instructions.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    children: <Mail className="h-4 w-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Please wait',
  },
};

export const LoadingWithText: Story = {
  args: {
    isLoading: true,
    loadingText: 'Saving...',
    children: 'Save',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const DestructiveWithIcon: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <Trash2 className="mr-2 h-4 w-4" />
        Delete Item
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Mail className="h-4 w-4" />
      </Button>
    </div>
  ),
};
