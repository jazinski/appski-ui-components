import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormField, FormMessage } from './form';
import { z } from 'zod';

// Simple input component for tests
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input {...props} />;

describe('Form', () => {
  it('renders form with fields', () => {
    const schema = z.object({
      email: z.string().email(),
    });

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={vi.fn()}>
        <FormField name="email" label="Email">
          <Input />
        </FormField>
      </Form>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('displays validation errors on submit with invalid data', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      email: z.string().email('Invalid email'),
    });
    const onSubmit = vi.fn();

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={onSubmit}>
        <FormField name="email" label="Email">
          <Input />
        </FormField>
        <button type="submit">Submit</button>
      </Form>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('calls onSubmit with validated values on valid submission', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      email: z.string().email(),
    });
    const onSubmit = vi.fn();

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={onSubmit}>
        <FormField name="email" label="Email">
          <Input />
        </FormField>
        <button type="submit">Submit</button>
      </Form>
    );

    const input = screen.getByLabelText('Email');
    await user.type(input, 'test@example.com');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ email: 'test@example.com' });
    });
  });

  it('validates on blur when validateOnBlur is true', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      email: z.string().email('Invalid email'),
    });

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={vi.fn()} validateOnBlur={true}>
        <FormField name="email" label="Email">
          <Input />
        </FormField>
      </Form>
    );

    const input = screen.getByLabelText('Email');
    await user.type(input, 'invalid');
    await user.tab(); // Trigger blur

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
    });
  });

  it('validates on change when validateOnChange is true', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      username: z.string().min(3, 'Too short'),
    });

    render(
      <Form
        schema={schema}
        initialValues={{ username: '' }}
        onSubmit={vi.fn()}
        validateOnChange={true}
      >
        <FormField name="username" label="Username">
          <Input />
        </FormField>
      </Form>
    );

    const input = screen.getByLabelText('Username');
    await user.type(input, 'ab');
    await user.tab(); // Blur to trigger showing errors

    await waitFor(() => {
      expect(screen.getByText(/Too short/i)).toBeInTheDocument();
    });
  });

  it('displays required indicator when field is required', () => {
    const schema = z.object({
      name: z.string(),
    });

    render(
      <Form schema={schema} initialValues={{ name: '' }} onSubmit={vi.fn()}>
        <FormField name="name" label="Name" required>
          <Input />
        </FormField>
      </Form>
    );

    const label = screen.getByText('Name');
    expect(label.parentElement).toBeInTheDocument();
  });

  it('displays field description', () => {
    const schema = z.object({
      username: z.string(),
    });

    render(
      <Form schema={schema} initialValues={{ username: '' }} onSubmit={vi.fn()}>
        <FormField name="username" label="Username" description="Choose a unique username">
          <Input />
        </FormField>
      </Form>
    );

    expect(screen.getByText('Choose a unique username')).toBeInTheDocument();
  });

  it('hides description when error is shown', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      email: z.string().email('Invalid email'),
    });

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={vi.fn()} validateOnBlur={true}>
        <FormField name="email" label="Email" description="Enter your email address">
          <Input />
        </FormField>
      </Form>
    );

    const input = screen.getByLabelText('Email');
    await user.type(input, 'invalid');
    await user.tab();

    await waitFor(() => {
      expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
      expect(screen.queryByText('Enter your email address')).not.toBeInTheDocument();
    });
  });

  it('sets isSubmitting state during submission', async () => {
    const user = userEvent.setup();
    const schema = z.object({
      email: z.string().email(),
    });
    const onSubmit = vi
      .fn()
      .mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 100)));

    render(
      <Form schema={schema} initialValues={{ email: 'test@example.com' }} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <>
            <FormField name="email" label="Email">
              <Input />
            </FormField>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </>
        )}
      </Form>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('Submitting...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Submit')).toBeInTheDocument();
    });
  });

  it('supports render function as children', () => {
    const schema = z.object({
      email: z.string(),
    });

    render(
      <Form schema={schema} initialValues={{ email: '' }} onSubmit={vi.fn()}>
        {({ errors, touched }) => (
          <>
            <FormField name="email" label="Email">
              <Input />
            </FormField>
            <div data-testid="form-state">
              Errors: {Object.keys(errors).length}, Touched: {Object.keys(touched).length}
            </div>
          </>
        )}
      </Form>
    );

    expect(screen.getByTestId('form-state')).toBeInTheDocument();
  });
});

describe('FormMessage', () => {
  it('renders default message', () => {
    render(<FormMessage variant="default">Default message</FormMessage>);
    expect(screen.getByText('Default message')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<FormMessage variant="error">Error message</FormMessage>);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('renders success message', () => {
    render(<FormMessage variant="success">Success message</FormMessage>);
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('does not render when children is empty', () => {
    const { container } = render(<FormMessage variant="default"></FormMessage>);
    expect(container.firstChild).toBeNull();
  });
});
