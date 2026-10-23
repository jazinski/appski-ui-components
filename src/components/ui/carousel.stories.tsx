import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './carousel';
import { Card, CardContent, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A horizontal item carousel built on CSS scroll-snap, with prev/next arrows, dot indicators, optional loop mode, partial-peek slides, and keyboard + swipe navigation. Use it for screenshots, onboarding flows, and card galleries.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loop: {
      control: { type: 'boolean' },
      description: 'Wrap around at the ends instead of stopping',
    },
    showArrows: {
      control: { type: 'boolean' },
      description: 'Show prev/next arrow buttons',
    },
    showDots: {
      control: { type: 'boolean' },
      description: 'Show dot indicators',
    },
    peek: {
      control: { type: 'boolean' },
      description:
        'Partial-peek: slides take 85% width so the next slide peeks at the edge. Pass a number for an explicit percentage.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

function Gallery({ ...carouselArgs }) {
  return (
    <Carousel ariaLabel="Card gallery" {...carouselArgs}>
      {items.map((item) => (
        <Card key={item} className="w-full">
          <CardHeader>
            <CardTitle>{item} card</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-24 items-center justify-center rounded-md bg-muted text-muted-foreground">
              {item} content
            </div>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
}

export const Default: Story = {
  render: (args) => <Gallery {...args} />,
};

export const Loop: Story = {
  render: (args) => <Gallery {...args} />,
  args: {
    loop: true,
  },
};

export const PartialPeek: Story = {
  name: 'Partial peek',
  render: (args) => <Gallery {...args} />,
  args: {
    peek: true,
  },
};

export const DotsOnly: Story = {
  name: 'Dots only',
  render: (args) => <Gallery {...args} />,
  args: {
    showArrows: false,
  },
};

export const Minimal: Story = {
  name: 'Arrows only',
  render: (args) => <Gallery {...args} />,
  args: {
    showDots: false,
  },
};
