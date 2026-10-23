import type { Meta, StoryObj } from '@storybook/react';
import { QrCode } from './qr-code';

const meta: Meta<typeof QrCode> = {
  title: 'Components/QrCode',
  component: QrCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    size: { control: { type: 'range', min: 64, max: 512, step: 16 } },
    marginSize: { control: { type: 'range', min: 0, max: 8, step: 1 } },
    level: {
      control: 'select',
      options: ['L', 'M', 'Q', 'H'],
    },
    inverted: { control: 'boolean' },
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
    caption: { control: 'text' },
  },
  args: {
    value: 'https://casa.jazinski.dev',
    size: 128,
    marginSize: 2,
    level: 'M',
    inverted: false,
  },
};

export default meta;
type Story = StoryObj<typeof QrCode>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 256,
    level: 'H',
    caption: 'casa.jazinski.dev',
  },
};

export const WithCaption: Story = {
  args: {
    value: 'https://t.me/+abc123def456',
    caption: 'Telegram bot invite',
    size: 160,
  },
};

export const Inverted: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    inverted: true,
    size: 160,
    caption: 'Dark-mode plate — note: light-on-dark scans less reliably',
  },
};

export const ErrorCorrectionLevels: Story = {
  render: () => (
    <div className="flex flex-wrap items-start gap-8">
      {(['L', 'M', 'Q', 'H'] as const).map((level) => (
        <QrCode
          key={level}
          value="https://casa.jazinski.dev"
          level={level}
          size={128}
          caption={`level ${level}`}
        />
      ))}
    </div>
  ),
};

export const WireGuardInvite: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <QrCode
        value="https://wg.jazinski.dev/config/8f3k2?token=xK9mQ2pL7vR4"
        size={192}
        level="H"
        marginSize={4}
        label="Scan to import the WireGuard peer config"
        caption="wg.jazinski.dev/config/8f3k2"
      />
    </div>
  ),
};
