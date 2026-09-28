# Component Library Documentation

## Overview

`appski-ui-components` is a reusable React component library built with TypeScript and styled with Tailwind CSS. It provides a consistent UI foundation for Appski applications.

## Available Components

### Layout Components

#### `Container`
Responsive layout wrapper with max-width constraints.

```tsx
import { Container } from '@appski/ui-components';

<Container>
  <h1>My Content</h1>
</Container>
```

**Props:**
- `maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'` - Maximum width (default: `'lg'`)
- `className?: string` - Additional CSS classes

---

#### `Stack`
Flexbox-based vertical or horizontal stack with spacing.

```tsx
import { Stack } from '@appski/ui-components';

<Stack direction="vertical" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

**Props:**
- `direction?: 'horizontal' | 'vertical'` - Stack direction (default: `'vertical'`)
- `spacing?: number` - Spacing between items in Tailwind units (default: `2`)
- `align?: 'start' | 'center' | 'end' | 'stretch'` - Alignment
- `justify?: 'start' | 'center' | 'end' | 'between' | 'around'` - Justification
- `className?: string` - Additional CSS classes

---

### Button Components

#### `Button`
Primary button component with variants and sizes.

```tsx
import { Button } from '@appski/ui-components';

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'` - Button style (default: `'primary'`)
- `size?: 'sm' | 'md' | 'lg'` - Button size (default: `'md'`)
- `disabled?: boolean` - Disabled state
- `loading?: boolean` - Show loading spinner
- `fullWidth?: boolean` - Full width button
- `icon?: ReactNode` - Icon element
- `onClick?: () => void` - Click handler
- `type?: 'button' | 'submit' | 'reset'` - Button type (default: `'button'`)
- `className?: string` - Additional CSS classes

---

#### `IconButton`
Button with icon-only content.

```tsx
import { IconButton } from '@appski/ui-components';
import { TrashIcon } from '@heroicons/react/24/outline';

<IconButton icon={<TrashIcon />} onClick={handleDelete} />
```

**Props:**
- `icon: ReactNode` - Icon element (required)
- `variant?: 'primary' | 'secondary' | 'ghost' | 'danger'` - Button style (default: `'ghost'`)
- `size?: 'sm' | 'md' | 'lg'` - Button size (default: `'md'`)
- `disabled?: boolean` - Disabled state
- `onClick?: () => void` - Click handler
- `className?: string` - Additional CSS classes

---

### Input Components

#### `Input`
Text input field with label and validation.

```tsx
import { Input } from '@appski/ui-components';

<Input
  label="Email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={errors.email}
  required
/>
```

**Props:**
- `label?: string` - Input label
- `type?: string` - Input type (default: `'text'`)
- `value?: string` - Input value
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `placeholder?: string` - Placeholder text
- `disabled?: boolean` - Disabled state
- `required?: boolean` - Required field
- `error?: string` - Error message
- `helpText?: string` - Helper text below input
- `className?: string` - Additional CSS classes

---

#### `TextArea`
Multi-line text input.

```tsx
import { TextArea } from '@appski/ui-components';

<TextArea
  label="Description"
  rows={4}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

**Props:**
- `label?: string` - Input label
- `value?: string` - Input value
- `onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void` - Change handler
- `rows?: number` - Number of rows (default: `3`)
- `placeholder?: string` - Placeholder text
- `disabled?: boolean` - Disabled state
- `required?: boolean` - Required field
- `error?: string` - Error message
- `helpText?: string` - Helper text
- `className?: string` - Additional CSS classes

---

#### `Select`
Dropdown select input.

```tsx
import { Select } from '@appski/ui-components';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

<Select
  label="Choose Option"
  options={options}
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
/>
```

**Props:**
- `label?: string` - Select label
- `options: Array<{ value: string; label: string }>` - Select options (required)
- `value?: string` - Selected value
- `onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void` - Change handler
- `placeholder?: string` - Placeholder option
- `disabled?: boolean` - Disabled state
- `required?: boolean` - Required field
- `error?: string` - Error message
- `className?: string` - Additional CSS classes

---

#### `Checkbox`
Checkbox input with label.

```tsx
import { Checkbox } from '@appski/ui-components';

<Checkbox
  label="I agree to terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

**Props:**
- `label?: string` - Checkbox label
- `checked?: boolean` - Checked state
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `disabled?: boolean` - Disabled state
- `required?: boolean` - Required field
- `error?: string` - Error message
- `className?: string` - Additional CSS classes

---

#### `Radio`
Radio button input with label.

```tsx
import { Radio } from '@appski/ui-components';

<Radio
  name="choice"
  label="Option A"
  value="a"
  checked={choice === 'a'}
  onChange={(e) => setChoice(e.target.value)}
/>
```

**Props:**
- `name: string` - Radio group name (required)
- `label?: string` - Radio label
- `value: string` - Radio value (required)
- `checked?: boolean` - Checked state
- `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - Change handler
- `disabled?: boolean` - Disabled state
- `className?: string` - Additional CSS classes

---

### Feedback Components

#### `Alert`
Alert message box for notifications and errors.

```tsx
import { Alert } from '@appski/ui-components';

<Alert variant="success" title="Success!" dismissible>
  Your changes have been saved.
</Alert>
```

**Props:**
- `variant?: 'info' | 'success' | 'warning' | 'error'` - Alert style (default: `'info'`)
- `title?: string` - Alert title
- `children?: ReactNode` - Alert content
- `dismissible?: boolean` - Show dismiss button
- `onDismiss?: () => void` - Dismiss handler
- `className?: string` - Additional CSS classes

---

#### `Badge`
Small label for statuses and counts.

```tsx
import { Badge } from '@appski/ui-components';

<Badge variant="success">Active</Badge>
<Badge variant="danger" size="sm">3</Badge>
```

**Props:**
- `variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'` - Badge style (default: `'default'`)
- `size?: 'sm' | 'md' | 'lg'` - Badge size (default: `'md'`)
- `children?: ReactNode` - Badge content
- `className?: string` - Additional CSS classes

---

#### `Spinner`
Loading spinner indicator.

```tsx
import { Spinner } from '@appski/ui-components';

<Spinner size="md" />
```

**Props:**
- `size?: 'sm' | 'md' | 'lg'` - Spinner size (default: `'md'`)
- `color?: 'primary' | 'white' | 'gray'` - Spinner color (default: `'primary'`)
- `className?: string` - Additional CSS classes

---

#### `Toast`
Temporary notification message.

```tsx
import { Toast, useToast } from '@appski/ui-components';

const { showToast } = useToast();

// Trigger toast
showToast({
  title: 'Success!',
  message: 'Your changes have been saved.',
  variant: 'success',
  duration: 3000,
});

// Toast container (place once in app root)
<Toast />
```

**Toast Options:**
- `title?: string` - Toast title
- `message: string` - Toast message (required)
- `variant?: 'info' | 'success' | 'warning' | 'error'` - Toast style (default: `'info'`)
- `duration?: number` - Display duration in ms (default: `5000`)

---

### Overlay Components

#### `Modal`
Modal dialog overlay.

```tsx
import { Modal } from '@appski/ui-components';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to proceed?</p>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>
```

**Props:**
- `isOpen: boolean` - Modal open state (required)
- `onClose: () => void` - Close handler (required)
- `title?: string` - Modal title
- `children?: ReactNode` - Modal content
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Modal size (default: `'md'`)
- `closeOnOverlayClick?: boolean` - Close on backdrop click (default: `true`)
- `className?: string` - Additional CSS classes

---

#### `Dropdown`
Dropdown menu overlay.

```tsx
import { Dropdown } from '@appski/ui-components';

<Dropdown
  trigger={<Button>Menu</Button>}
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete, variant: 'danger' },
  ]}
/>
```

**Props:**
- `trigger: ReactNode` - Trigger element (required)
- `items: Array<{ label: string; onClick: () => void; variant?: string; icon?: ReactNode }>` - Menu items (required)
- `placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'` - Menu placement (default: `'bottom-start'`)
- `className?: string` - Additional CSS classes

---

### Data Display Components

#### `Card`
Content card with optional header and footer.

```tsx
import { Card } from '@appski/ui-components';

<Card
  title="Card Title"
  footer={<Button>Action</Button>}
>
  <p>Card content goes here.</p>
</Card>
```

**Props:**
- `title?: string` - Card title
- `children?: ReactNode` - Card content
- `footer?: ReactNode` - Card footer
- `padding?: 'sm' | 'md' | 'lg'` - Content padding (default: `'md'`)
- `className?: string` - Additional CSS classes

---

#### `Table`
Data table with sorting and pagination.

```tsx
import { Table } from '@appski/ui-components';

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

<Table columns={columns} data={data} keyField="id" />
```

**Props:**
- `columns: Array<{ key: string; label: string; sortable?: boolean; render?: (value: any, row: any) => ReactNode }>` - Table columns (required)
- `data: Array<any>` - Table data (required)
- `keyField: string` - Unique key field (required)
- `onRowClick?: (row: any) => void` - Row click handler
- `pagination?: { page: number; pageSize: number; total: number; onPageChange: (page: number) => void }` - Pagination config
- `loading?: boolean` - Loading state
- `emptyMessage?: string` - Empty state message
- `className?: string` - Additional CSS classes

---

#### `Avatar`
User avatar with fallback initials.

```tsx
import { Avatar } from '@appski/ui-components';

<Avatar src="/avatar.jpg" alt="John Doe" size="md" />
<Avatar name="Jane Smith" size="lg" />
```

**Props:**
- `src?: string` - Image source URL
- `alt?: string` - Image alt text
- `name?: string` - Name for fallback initials
- `size?: 'sm' | 'md' | 'lg' | 'xl'` - Avatar size (default: `'md'`)
- `className?: string` - Additional CSS classes

---

### Navigation Components

#### `Tabs`
Tabbed navigation.

```tsx
import { Tabs } from '@appski/ui-components';

const tabs = [
  { id: 'profile', label: 'Profile', content: <ProfileTab /> },
  { id: 'settings', label: 'Settings', content: <SettingsTab /> },
];

<Tabs tabs={tabs} defaultTab="profile" />
```

**Props:**
- `tabs: Array<{ id: string; label: string; content: ReactNode; disabled?: boolean }>` - Tab configuration (required)
- `defaultTab?: string` - Default active tab ID
- `activeTab?: string` - Controlled active tab ID
- `onTabChange?: (tabId: string) => void` - Tab change handler
- `className?: string` - Additional CSS classes

---

#### `Breadcrumbs`
Breadcrumb navigation trail.

```tsx
import { Breadcrumbs } from '@appski/ui-components';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Widget', href: '/products/widget' },
];

<Breadcrumbs items={items} />
```

**Props:**
- `items: Array<{ label: string; href?: string; onClick?: () => void }>` - Breadcrumb items (required)
- `separator?: ReactNode` - Custom separator (default: `/`)
- `className?: string` - Additional CSS classes

---

## Installation & Usage

### Installation

```bash
npm install @appski/ui-components
```

### Basic Usage

```tsx
import { Button, Input, Card } from '@appski/ui-components';
import '@appski/ui-components/dist/styles.css';

function MyComponent() {
  return (
    <Card title="My Form">
      <Input label="Name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Tailwind CSS Configuration

Extend your Tailwind config to include component library paths:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@appski/ui-components/**/*.js',
  ],
  // ... rest of config
};
```

---

## Storybook

View interactive component documentation and examples:

```bash
npm run storybook
```

Access Storybook at `http://localhost:6006`

---

## Publishing Workflow

### Version Update

```bash
# Patch (bug fixes)
npm version patch

# Minor (new features, backwards compatible)
npm version minor

# Major (breaking changes)
npm version major
```

### Build & Publish

```bash
# Build library
npm run build

# Publish to npm
npm publish
```

### CI/CD

Publishing is automated via GitHub Actions on version tags:

1. Commit changes
2. Run `npm version [patch|minor|major]`
3. Push tag: `git push --tags`
4. GitHub Actions will build and publish

---

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

### Adding a New Component

1. Create component file: `src/components/MyComponent.tsx`
2. Create story file: `src/components/MyComponent.stories.tsx`
3. Export from `src/index.ts`
4. Add documentation to this file
5. Write tests
6. Run `npm run lint` and `npm run format`

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

---

## Theming

Components use CSS variables for theming. Override in your app:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-danger: #ef4444;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --border-radius: 0.375rem;
  --font-family: 'Inter', sans-serif;
}
```

---

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ ARIA labels and roles
- ✅ Focus management
- ✅ Color contrast compliance

---

## Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)

---

## Contributing

See `CONTRIBUTING.md` for contribution guidelines.

---

## License

MIT License - see `LICENSE` file for details.

---

**Last Updated:** 2026-03-01  
**Version:** 1.0.0
