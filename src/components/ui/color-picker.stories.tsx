import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker, ColorSwatchSet, DEFAULT_COLOR_SWATCHES } from './color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A swatch-based color picker with optional free-form hex entry, plus a
read-only ColorSwatchSet for displaying palettes.

\`\`\`tsx
import { ColorPicker, ColorSwatchSet } from '@appski/ui';

<ColorPicker defaultValue="#2563eb" onChange={(hex) => console.log(hex)} />
<ColorSwatchSet colors={['#dc2626', '#2563eb']} />
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'default', 'lg'] },
    allowCustom: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    defaultValue: '#2563eb',
  },
};

export const SwatchesOnly: Story = {
  name: 'Swatches only (no custom hex)',
  args: {
    allowCustom: false,
  },
};

export const CustomPalette: Story = {
  name: 'Custom palette',
  args: {
    swatches: ['#0ea5e9', '#22c55e', '#eab308', '#f97316', '#ef4444', '#a855f7'],
  },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex items-center gap-4">
      <ColorPicker size="sm" defaultValue="#dc2626" />
      <ColorPicker size="default" defaultValue="#2563eb" />
      <ColorPicker size="lg" defaultValue="#16a34a" />
    </div>
  ),
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    defaultValue: '#7c3aed',
    disabled: true,
  },
};

export const SwatchSet: Story = {
  name: 'ColorSwatchSet (read-only)',
  render: () => (
    <div className="flex flex-col gap-4">
      <ColorSwatchSet colors={DEFAULT_COLOR_SWATCHES} />
      <ColorSwatchSet colors={['#0ea5e9', '#22c55e', '#eab308']} size={32} />
    </div>
  ),
};
