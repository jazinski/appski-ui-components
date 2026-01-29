import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormField, FormMessage } from './form';
import { z } from 'zod';
import { useState } from 'react';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A form component with Zod validation support for building type-safe forms.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    validateOnBlur: {
      control: 'boolean',
      description: 'Validate fields on blur',
      defaultValue: true,
    },
    validateOnChange: {
      control: 'boolean',
      description: 'Validate fields on change',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple input component for stories
const Input = ({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Button = ({
  className = '',
  disabled = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
    disabled={disabled}
    {...props}
  />
);

export const Default: Story = {
  render: () => {
    const schema = z.object({
      email: z.string().email('Invalid email address'),
      password: z.string().min(8, 'Password must be at least 8 characters'),
    });

    const [submitted, setSubmitted] = useState(false);

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log('Form submitted:', values);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <FormField name="email" label="Email" required>
                <Input type="email" placeholder="you@example.com" />
              </FormField>

              <FormField name="password" label="Password" required>
                <Input type="password" placeholder="Enter password" />
              </FormField>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>

              {submitted && (
                <FormMessage variant="success">Form submitted successfully!</FormMessage>
              )}
            </>
          )}
        </Form>
      </div>
    );
  },
};

export const WithValidationOnChange: Story = {
  render: () => {
    const schema = z.object({
      username: z.string().min(3, 'Username must be at least 3 characters'),
      email: z.string().email('Invalid email address'),
    });

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ username: '', email: '' }}
          onSubmit={(values) => console.log('Submitted:', values)}
          validateOnChange={true}
        >
          <FormField name="username" label="Username" required>
            <Input placeholder="johndoe" />
          </FormField>

          <FormField name="email" label="Email" required>
            <Input type="email" placeholder="you@example.com" />
          </FormField>

          <Button type="submit">Create Account</Button>
        </Form>
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const schema = z.object({
      displayName: z.string().min(2, 'Display name must be at least 2 characters'),
      bio: z.string().max(160, 'Bio must be 160 characters or less').optional(),
    });

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ displayName: '', bio: '' }}
          onSubmit={(values) => console.log('Submitted:', values)}
        >
          <FormField
            name="displayName"
            label="Display Name"
            required
            description="This is your public display name"
          >
            <Input placeholder="John Doe" />
          </FormField>

          <FormField
            name="bio"
            label="Bio"
            description="Tell us a little about yourself (max 160 characters)"
          >
            <Input placeholder="I love building web apps..." />
          </FormField>

          <Button type="submit">Save Profile</Button>
        </Form>
      </div>
    );
  },
};

export const ComplexValidation: Story = {
  render: () => {
    const schema = z
      .object({
        password: z.string().min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string(),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
      });

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ password: '', confirmPassword: '' }}
          onSubmit={(values) => console.log('Submitted:', values)}
        >
          <FormField name="password" label="Password" required>
            <Input type="password" placeholder="Enter password" />
          </FormField>

          <FormField name="confirmPassword" label="Confirm Password" required>
            <Input type="password" placeholder="Confirm password" />
          </FormField>

          <Button type="submit">Set Password</Button>
        </Form>
      </div>
    );
  },
};

export const WithInitialValues: Story = {
  render: () => {
    const schema = z.object({
      firstName: z.string().min(2, 'First name must be at least 2 characters'),
      lastName: z.string().min(2, 'Last name must be at least 2 characters'),
      email: z.string().email('Invalid email address'),
    });

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
          }}
          onSubmit={(values) => console.log('Submitted:', values)}
        >
          <FormField name="firstName" label="First Name" required>
            <Input />
          </FormField>

          <FormField name="lastName" label="Last Name" required>
            <Input />
          </FormField>

          <FormField name="email" label="Email" required>
            <Input type="email" />
          </FormField>

          <Button type="submit">Update Profile</Button>
        </Form>
      </div>
    );
  },
};

export const ContactForm: Story = {
  render: () => {
    const schema = z.object({
      name: z.string().min(2, 'Name must be at least 2 characters'),
      email: z.string().email('Invalid email address'),
      subject: z.string().min(5, 'Subject must be at least 5 characters'),
      message: z.string().min(10, 'Message must be at least 10 characters'),
    });

    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          onSubmit={async (values) => {
            console.log('Contact form submitted:', values);
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
          }}
        >
          {({ isSubmitting }) => (
            <>
              <FormField name="name" label="Name" required>
                <Input placeholder="Your name" />
              </FormField>

              <FormField name="email" label="Email" required>
                <Input type="email" placeholder="you@example.com" />
              </FormField>

              <FormField name="subject" label="Subject" required>
                <Input placeholder="What is this about?" />
              </FormField>

              <FormField
                name="message"
                label="Message"
                required
                description="Please provide as much detail as possible"
              >
                <Input placeholder="Your message..." />
              </FormField>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <FormMessage variant="success">
                  Message sent successfully! We'll get back to you soon.
                </FormMessage>
              )}
              {status === 'error' && (
                <FormMessage variant="error">Failed to send message. Please try again.</FormMessage>
              )}
            </>
          )}
        </Form>
      </div>
    );
  },
};

export const NoValidationOnBlur: Story = {
  render: () => {
    const schema = z.object({
      username: z.string().min(3, 'Username must be at least 3 characters'),
      email: z.string().email('Invalid email address'),
    });

    return (
      <div className="w-full max-w-md">
        <Form
          schema={schema}
          initialValues={{ username: '', email: '' }}
          onSubmit={(values) => console.log('Submitted:', values)}
          validateOnBlur={false}
        >
          <FormField name="username" label="Username" required>
            <Input placeholder="johndoe" />
          </FormField>

          <FormField name="email" label="Email" required>
            <Input type="email" placeholder="you@example.com" />
          </FormField>

          <Button type="submit">Submit</Button>

          <FormMessage variant="default">Validation will only occur on submit</FormMessage>
        </Form>
      </div>
    );
  },
};

export const FormMessages: Story = {
  render: () => {
    return (
      <div className="w-full max-w-md space-y-4">
        <FormMessage variant="default">This is a default message providing information</FormMessage>

        <FormMessage variant="error">This is an error message indicating a problem</FormMessage>

        <FormMessage variant="success">This is a success message confirming an action</FormMessage>
      </div>
    );
  },
};
