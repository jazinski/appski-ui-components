import type { Meta, StoryObj } from '@storybook/react';
import { Gauge } from './gauge';

const meta: Meta<typeof Gauge> = {
  title: 'Components/Gauge',
  component: Gauge,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A radial gauge for single-value metrics with threshold bands (green/amber/red by default). Rendered as inline SVG with no chart library dependency; arc colors follow the theme via currentColor, so light and dark mode come automatic. The value arc takes the tone of the band it lands in.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current reading; clamped to [min, max]',
    },
    min: { control: { type: 'number' }, description: 'Lower bound of the dial scale' },
    max: { control: { type: 'number' }, description: 'Upper bound of the dial scale' },
    unit: { control: { type: 'text' }, description: 'Suffix for the auto center label (e.g. "%")' },
    decimals: {
      control: { type: 'number', min: 0, max: 3, step: 1 },
      description: 'Decimal places for the auto center label',
    },
    sublabel: { control: { type: 'text' }, description: 'Secondary label under the value' },
    centerLabel: {
      control: { type: 'text' },
      description: 'Replaces the formatted value as the center label',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Size variant',
    },
    thickness: {
      control: { type: 'range', min: 0.05, max: 0.45, step: 0.01 },
      description: 'Value arc thickness as a fraction of the radius',
    },
    thresholds: {
      description: 'Threshold bands drawn as an inner scale ring; each takes a tone',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 72,
    sublabel: 'CPU',
    unit: '%',
    thresholds: [{ upTo: 70 }, { upTo: 90 }],
  },
};

export const WithoutThresholds: Story = {
  args: {
    value: 42,
    sublabel: 'Load',
    unit: '%',
  },
  parameters: {
    docs: {
      description: {
        story:
          'With no thresholds the value arc uses the primary token — useful when a metric has no meaningful limits.',
      },
    },
  },
};

export const BowlingAverage: Story = {
  args: {
    value: 186,
    min: 100,
    max: 300,
    sublabel: 'Thu avg',
    thresholds: [
      { upTo: 170, tone: 'destructive' },
      { upTo: 200, tone: 'warning' },
      { upTo: 300, tone: 'success' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Higher-is-better metrics reverse the ladder: tones are fully configurable per band, and any scale works via min/max.',
      },
    },
  },
};

export const NasCapacity: Story = {
  args: {
    value: 6.8,
    max: 8,
    decimals: 1,
    unit: ' TB',
    sublabel: 'NAS used',
    size: 'lg',
    thresholds: [{ upTo: 5 }, { upTo: 7 }, { upTo: 8 }],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Capacity dials with a non-zero-scale unit. decimals + unit format the center value; size="lg" for widget headers.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    value: 55,
    sublabel: 'MEM',
    unit: '%',
    size: 'sm',
    thresholds: [{ upTo: 70 }, { upTo: 90 }],
  },
};

export const CustomCenterLabel: Story = {
  args: {
    value: 88,
    sublabel: 'Disk /dev/sda',
    centerLabel: '88%',
    thresholds: [{ upTo: 70 }, { upTo: 90 }],
  },
};

export const DashboardRow: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-8">
      <Gauge value={34} sublabel="CPU" unit="%" thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
      <Gauge value={78} sublabel="MEM" unit="%" thresholds={[{ upTo: 70 }, { upTo: 90 }]} />
      <Gauge
        value={91}
        sublabel="Disk"
        unit="%"
        thresholds={[{ upTo: 70 }, { upTo: 90 }]}
      />
      <Gauge value={52.4} sublabel="Temp" unit="°C" decimals={0} max={100} thresholds={[{ upTo: 60 }, { upTo: 80 }]} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A typical homelab widget row. Token-only styling means the whole row re-themes with the palette and dark mode.',
      },
    },
  },
};
