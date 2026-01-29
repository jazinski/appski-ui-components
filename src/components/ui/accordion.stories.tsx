import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A vertically stacked set of interactive headings that each reveal a section of content.

## Features
- Multiple variants (default, bordered, ghost)
- Single or multiple items can be open
- Keyboard navigation support
- Smooth animations
- Accessible with ARIA attributes

## Usage

\`\`\`tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@appski/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at once',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="bordered">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content for section 1 with a bordered style.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" variant="bordered">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content for section 2 with a bordered style.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="ghost">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content for section 1 with a minimal ghost style.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" variant="ghost">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content for section 2 with a minimal ghost style.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can open multiple</AccordionTrigger>
          <AccordionContent>
            With type="multiple", you can have multiple items open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Try opening both</AccordionTrigger>
          <AccordionContent>
            Click both headers and see that they can both be open.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>And this one too</AccordionTrigger>
          <AccordionContent>All three can be open simultaneously.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="w-[500px]">
        <h3 className="mb-2 text-sm font-medium">Default</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" variant="default">
            <AccordionTrigger>Default variant</AccordionTrigger>
            <AccordionContent>Content with default styling.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-[500px]">
        <h3 className="mb-2 text-sm font-medium">Bordered</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" variant="bordered">
            <AccordionTrigger>Bordered variant</AccordionTrigger>
            <AccordionContent>Content with bordered styling.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-[500px]">
        <h3 className="mb-2 text-sm font-medium">Ghost</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" variant="ghost">
            <AccordionTrigger>Ghost variant</AccordionTrigger>
            <AccordionContent>Content with minimal styling.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
