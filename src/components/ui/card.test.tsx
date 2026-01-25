import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card data-testid="card">Card content</Card>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders all card parts together', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    const { rerender } = render(
      <Card data-testid="card" variant="default">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('shadow-sm');

    rerender(
      <Card data-testid="card" variant="elevated">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('shadow-md');

    rerender(
      <Card data-testid="card" variant="ghost">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('border-transparent');
  });

  it('applies custom className', () => {
    render(
      <Card data-testid="card" className="custom-class">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Content</Card>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardHeader', () => {
  it('renders correctly with padding', () => {
    render(<CardHeader data-testid="header">Header content</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('p-6');
  });
});

describe('CardTitle', () => {
  it('renders as h3 by default', () => {
    render(<CardTitle>Title</CardTitle>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Title');
  });

  it('renders with custom heading level', () => {
    render(<CardTitle as="h2">Title</CardTitle>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Title');
  });
});

describe('CardDescription', () => {
  it('renders with muted foreground class', () => {
    render(<CardDescription data-testid="desc">Description</CardDescription>);
    expect(screen.getByTestId('desc')).toHaveClass('text-muted-foreground');
  });
});

describe('CardContent', () => {
  it('renders with correct padding', () => {
    render(<CardContent data-testid="content">Content</CardContent>);
    const content = screen.getByTestId('content');
    expect(content).toHaveClass('p-6');
    expect(content).toHaveClass('pt-0');
  });
});

describe('CardFooter', () => {
  it('renders with flex layout', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);
    expect(screen.getByTestId('footer')).toHaveClass('flex');
  });
});
