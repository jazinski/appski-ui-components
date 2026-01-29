import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Trigger 1')).toBeInTheDocument();
    expect(screen.getByText('Trigger 2')).toBeInTheDocument();
  });

  it('expands and collapses items on click', async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Trigger');

    // Initially collapsed
    expect(trigger).toHaveAttribute('data-state', 'closed');

    // Click to expand
    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'open');

    // Click to collapse
    await user.click(trigger);
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('allows multiple items to be open with type="multiple"', async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Trigger 1');
    const trigger2 = screen.getByText('Trigger 2');

    await user.click(trigger1);
    await user.click(trigger2);

    expect(trigger1).toHaveAttribute('data-state', 'open');
    expect(trigger2).toHaveAttribute('data-state', 'open');
  });

  it('only allows one item open at a time with type="single"', async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText('Trigger 1');
    const trigger2 = screen.getByText('Trigger 2');

    await user.click(trigger1);
    expect(trigger1).toHaveAttribute('data-state', 'open');

    await user.click(trigger2);
    expect(trigger1).toHaveAttribute('data-state', 'closed');
    expect(trigger2).toHaveAttribute('data-state', 'open');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="bordered">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Check for specific classes that identify the bordered variant
    const itemElement = screen.getByText('Trigger').parentElement?.parentElement;
    expect(itemElement).toHaveClass('rounded-lg');
    expect(itemElement).toHaveClass('border');

    rerender(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="ghost">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Check for the ghost variant which has border-0
    const ghostItem = screen.getByText('Trigger').parentElement?.parentElement;
    expect(ghostItem).toHaveClass('border-0');
  });

  it('merges custom className', () => {
    render(
      <Accordion type="single" collapsible className="custom-accordion">
        <AccordionItem value="item-1" className="custom-item">
          <AccordionTrigger className="custom-trigger">Trigger</AccordionTrigger>
          <AccordionContent className="custom-content">Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    // Find the accordion root (should be a div with data-orientation)
    const accordion = document.querySelector('[data-orientation="vertical"]');
    expect(accordion).toHaveClass('custom-accordion');

    // Check other custom classes are applied
    const item = screen.getByText('Trigger').parentElement?.parentElement;
    expect(item).toHaveClass('custom-item');

    const trigger = screen.getByText('Trigger');
    expect(trigger).toHaveClass('custom-trigger');
  });
});
