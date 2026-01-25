import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './code-block';

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Code block component with syntax highlighting, copy functionality, line numbers, and collapsible content. Perfect for displaying code snippets, JSON configs, API responses, and error messages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'Code content to display',
    },
    language: {
      control: 'select',
      options: ['typescript', 'javascript', 'json', 'python', 'bash', 'html', 'css', 'markdown'],
      description: 'Programming language for syntax highlighting',
    },
    showLineNumbers: {
      control: 'boolean',
      description: 'Show line numbers',
    },
    copyable: {
      control: 'boolean',
      description: 'Enable copy to clipboard button',
    },
    filename: {
      control: 'text',
      description: 'Optional filename to display in header',
    },
    collapsible: {
      control: 'boolean',
      description: 'Make the code block collapsible',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state (only when collapsible=true)',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height before scrolling (in pixels)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Text size variant',
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const jsCode = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}

greet('World');`;

const tsCode = `interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

function getUserName(user: User): string {
  return user.name;
}`;

const jsonCode = `{
  "name": "@appski/ui",
  "version": "0.1.0",
  "description": "UI component library",
  "dependencies": {
    "react": "^18.3.1",
    "lucide-react": "^0.468.0"
  },
  "scripts": {
    "build": "tsc && vite build",
    "test": "vitest"
  }
}`;

const mcpToolResponse = `{
  "toolName": "azure-devops_wit_get_work_item",
  "result": {
    "id": 12345,
    "fields": {
      "System.Title": "Fix authentication bug",
      "System.State": "Active",
      "System.AssignedTo": {
        "displayName": "John Doe",
        "uniqueName": "john@example.com"
      },
      "System.CreatedDate": "2024-01-15T10:30:00Z",
      "System.WorkItemType": "Bug",
      "Microsoft.VSTS.Common.Priority": 1
    }
  },
  "executionTime": "234ms"
}`;

const pythonCode = `def fibonacci(n):
    """Calculate Fibonacci number recursively."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Calculate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`;

const bashCode = `#!/bin/bash

# Deploy MCP server
echo "Starting deployment..."

npm run build
docker build -t mcp-server:latest .
docker push registry.example.com/mcp-server:latest

echo "Deployment complete!"`;

/**
 * Basic TypeScript code block with default settings.
 */
export const Default: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    showLineNumbers: false,
    copyable: true,
  },
};

/**
 * Code block with line numbers enabled.
 */
export const WithLineNumbers: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Code block with filename header.
 */
export const WithFilename: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    filename: 'greet.js',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * JSON code block for displaying configuration files.
 */
export const JSONConfig: Story = {
  args: {
    code: jsonCode,
    language: 'json',
    filename: 'package.json',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Collapsible code block for long content.
 */
export const Collapsible: Story = {
  args: {
    code: pythonCode,
    language: 'python',
    filename: 'fibonacci.py',
    collapsible: true,
    defaultCollapsed: false,
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Initially collapsed code block.
 */
export const DefaultCollapsed: Story = {
  args: {
    code: pythonCode,
    language: 'python',
    filename: 'fibonacci.py',
    collapsible: true,
    defaultCollapsed: true,
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Code block with maximum height and scrolling.
 */
export const WithMaxHeight: Story = {
  args: {
    code: pythonCode,
    language: 'python',
    filename: 'fibonacci.py',
    maxHeight: 200,
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Highlighted specific lines (useful for showing errors or important sections).
 */
export const WithHighlightedLines: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    showLineNumbers: true,
    copyable: true,
    highlightLines: [8, 9, 10],
  },
};

/**
 * Highlighted line ranges using string notation.
 */
export const WithHighlightedRanges: Story = {
  args: {
    code: tsCode,
    language: 'typescript',
    showLineNumbers: true,
    copyable: true,
    highlightLines: '1-3,8-10',
  },
};

/**
 * Small text size variant.
 */
export const SmallSize: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    size: 'sm',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Large text size variant.
 */
export const LargeSize: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    size: 'lg',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * Bash/Shell script example.
 */
export const BashScript: Story = {
  args: {
    code: bashCode,
    language: 'bash',
    filename: 'deploy.sh',
    showLineNumbers: true,
    copyable: true,
  },
};

/**
 * MCP Server tool response example.
 */
export const MCPToolResponse: Story = {
  args: {
    code: mcpToolResponse,
    language: 'json',
    filename: 'tool-response.json',
    showLineNumbers: true,
    copyable: true,
    collapsible: true,
  },
};

/**
 * Code block without copy button.
 */
export const NoCopyButton: Story = {
  args: {
    code: jsCode,
    language: 'javascript',
    copyable: false,
    showLineNumbers: true,
  },
};

/**
 * MCP Server configuration examples.
 */
export const MCPServerExamples: Story = {
  args: {
    code: jsCode, // dummy args to satisfy type
    language: 'typescript',
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Server Configuration</h3>
        <CodeBlock
          code={`{
  "mcpServers": {
    "azure-devops": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "AZURE_DEVOPS_ORG": "myorg",
        "AZURE_DEVOPS_PAT": "***"
      }
    }
  }
}`}
          language="json"
          filename="mcp-config.json"
          showLineNumbers
          copyable
        />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Tool Invocation</h3>
        <CodeBlock
          code={`await client.callTool({
  name: "azure-devops_wit_get_work_item",
  arguments: {
    project: "MyProject",
    id: 12345
  }
});`}
          language="typescript"
          filename="tool-call.ts"
          showLineNumbers
          copyable
        />
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Error Response</h3>
        <CodeBlock
          code={`{
  "error": {
    "code": "AUTHENTICATION_FAILED",
    "message": "Invalid or expired PAT token",
    "details": {
      "timestamp": "2024-01-15T10:30:00Z",
      "endpoint": "https://dev.azure.com/myorg"
    }
  }
}`}
          language="json"
          filename="error-response.json"
          showLineNumbers
          copyable
          highlightLines="3-4"
        />
      </div>
    </div>
  ),
};
