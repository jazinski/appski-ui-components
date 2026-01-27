import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. Built with Radix UI primitives and styled with Tailwind CSS design tokens.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <label htmlFor="r1" className="cursor-pointer text-sm leading-none font-medium">
          Default
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <label htmlFor="r2" className="cursor-pointer text-sm leading-none font-medium">
          Comfortable
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <label htmlFor="r3" className="cursor-pointer text-sm leading-none font-medium">
          Compact
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" orientation="horizontal" className="flex gap-6">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option1" id="h1" />
        <label htmlFor="h1" className="cursor-pointer text-sm leading-none font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option2" id="h2" />
        <label htmlFor="h2" className="cursor-pointer text-sm leading-none font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option3" id="h3" />
        <label htmlFor="h3" className="cursor-pointer text-sm leading-none font-medium">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" className="max-w-md">
      <div className="flex items-start gap-3">
        <RadioGroupItem value="standard" id="d1" className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="d1" className="cursor-pointer text-sm leading-none font-medium">
            Standard
          </label>
          <p className="text-muted-foreground text-sm">Standard spacing for most use cases.</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <RadioGroupItem value="comfortable" id="d2" className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="d2" className="cursor-pointer text-sm leading-none font-medium">
            Comfortable
          </label>
          <p className="text-muted-foreground text-sm">More space between elements.</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <RadioGroupItem value="compact" id="d3" className="mt-1" />
        <div className="grid gap-1.5">
          <label htmlFor="d3" className="cursor-pointer text-sm leading-none font-medium">
            Compact
          </label>
          <p className="text-muted-foreground text-sm">Minimal spacing for dense layouts.</p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option1" id="dis1" disabled />
        <label
          htmlFor="dis1"
          className="cursor-not-allowed text-sm leading-none font-medium opacity-70"
        >
          Disabled (Selected)
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option2" id="dis2" />
        <label htmlFor="dis2" className="cursor-pointer text-sm leading-none font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option3" id="dis3" disabled />
        <label
          htmlFor="dis3"
          className="cursor-not-allowed text-sm leading-none font-medium opacity-70"
        >
          Disabled (Unselected)
        </label>
      </div>
    </RadioGroup>
  ),
};

export const WithGroupLabel: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <h3 className="mb-1 text-sm leading-none font-medium">Notification Preferences</h3>
        <p className="text-muted-foreground mb-3 text-sm">
          Choose how you want to receive notifications.
        </p>
      </div>
      <RadioGroup defaultValue="email">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="email" id="notif1" />
          <label htmlFor="notif1" className="cursor-pointer text-sm leading-none font-medium">
            Email only
          </label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="sms" id="notif2" />
          <label htmlFor="notif2" className="cursor-pointer text-sm leading-none font-medium">
            SMS only
          </label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="both" id="notif3" />
          <label htmlFor="notif3" className="cursor-pointer text-sm leading-none font-medium">
            Both Email & SMS
          </label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const CardStyle: Story = {
  render: () => (
    <RadioGroup defaultValue="pro" className="grid max-w-md gap-3">
      <label
        htmlFor="card1"
        className="border-input hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
      >
        <RadioGroupItem value="basic" id="card1" className="mt-1" />
        <div className="grid flex-1 gap-1.5">
          <div className="text-sm font-semibold">Basic</div>
          <p className="text-muted-foreground text-sm">For individuals and small projects.</p>
        </div>
      </label>
      <label
        htmlFor="card2"
        className="border-input hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
      >
        <RadioGroupItem value="pro" id="card2" className="mt-1" />
        <div className="grid flex-1 gap-1.5">
          <div className="text-sm font-semibold">Pro</div>
          <p className="text-muted-foreground text-sm">For growing businesses and teams.</p>
        </div>
      </label>
      <label
        htmlFor="card3"
        className="border-input hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors"
      >
        <RadioGroupItem value="enterprise" id="card3" className="mt-1" />
        <div className="grid flex-1 gap-1.5">
          <div className="text-sm font-semibold">Enterprise</div>
          <p className="text-muted-foreground text-sm">
            For large organizations with advanced needs.
          </p>
        </div>
      </label>
    </RadioGroup>
  ),
};

export const InForm: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const plan = formData.get('plan');
      const planValue = typeof plan === 'string' ? plan : 'none';
      alert(`Selected plan: ${planValue}`);
    };

    return (
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <h3 className="mb-1 text-sm leading-none font-medium">Select a subscription plan *</h3>
          <p className="text-muted-foreground mb-3 text-sm">
            Choose the plan that best fits your needs.
          </p>
        </div>
        <RadioGroup defaultValue="monthly" name="plan" required>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="monthly" id="plan1" />
            <label htmlFor="plan1" className="cursor-pointer text-sm leading-none font-medium">
              Monthly ($9.99/month)
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="yearly" id="plan2" />
            <label htmlFor="plan2" className="cursor-pointer text-sm leading-none font-medium">
              Yearly ($99.99/year)
            </label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="lifetime" id="plan3" />
            <label htmlFor="plan3" className="cursor-pointer text-sm leading-none font-medium">
              Lifetime ($299.99)
            </label>
          </div>
        </RadioGroup>
        <button
          type="submit"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors"
        >
          Continue
        </button>
      </form>
    );
  },
};
