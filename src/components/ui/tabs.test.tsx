import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const TestTabs = ({ onValueChange }: { onValueChange?: (value: string) => void }) => (
  <Tabs defaultValue="tab1" onValueChange={onValueChange}>
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3" disabled>
        Tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
    <TabsContent value="tab3">Content 3</TabsContent>
  </Tabs>
);

describe('Tabs', () => {
  it('renders correctly', () => {
    render(<TestTabs />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });

  it('displays default tab content', () => {
    render(<TestTabs />);
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('switches tabs on click', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('calls onValueChange when tab changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<TestTabs onValueChange={handleChange} />);

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('does not switch to disabled tab', async () => {
    const user = userEvent.setup();
    render(<TestTabs />);

    await user.click(screen.getByRole('tab', { name: 'Tab 3' }));

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
  });

  it('has correct aria attributes', () => {
    render(<TestTabs />);

    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab1).toHaveAttribute('aria-controls', 'tabpanel-tab1');

    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toHaveAttribute('aria-selected', 'false');
  });

  it('tabpanel has correct aria attributes', () => {
    render(<TestTabs />);

    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('id', 'tabpanel-tab1');
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-tab1');
  });

  it('applies variant classes', () => {
    render(
      <Tabs defaultValue="tab1" variant="underline">
        <TabsList data-testid="tablist">
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    );

    expect(screen.getByTestId('tablist')).toHaveClass('bg-transparent');
  });

  it('supports controlled mode', async () => {
    const user = userEvent.setup();
    const ControlledTabs = () => {
      const [value, setValue] = React.useState('tab1');
      return (
        <div>
          <button onClick={() => { setValue('tab2'); }}>Switch to Tab 2</button>
          <Tabs value={value} defaultValue="tab1" onValueChange={setValue}>
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">Content 1</TabsContent>
            <TabsContent value="tab2">Content 2</TabsContent>
          </Tabs>
        </div>
      );
    };

    // Import React for the controlled test
    const React = await import('react');
    render(<ControlledTabs />);

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    await user.click(screen.getByText('Switch to Tab 2'));

    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('supports forceMount on TabsContent', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2" forceMount>
          Content 2
        </TabsContent>
      </Tabs>
    );

    // Content 2 should be in DOM but hidden
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByText('Content 2').closest('[role="tabpanel"]')).toHaveClass('hidden');
  });
});
