import type { Meta, StoryObj } from '@storybook/react';
import { Wizard, type WizardStep } from './wizard';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const steps: WizardStep[] = [
  { id: 'account', label: 'Account', description: 'Your login details' },
  { id: 'profile', label: 'Profile', description: 'Tell us about yourself' },
  { id: 'confirm', label: 'Confirm', description: 'Review and finish' },
];

const meta: Meta<typeof Wizard> = {
  title: 'Components/Wizard',
  component: Wizard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A multi-step wizard/stepper flow: numbered indicator header with connector
lines, content area (node or render-prop), and Back/Next footer navigation.
Completed steps are clickable to jump back.

\`\`\`tsx
import { Wizard } from '@appski/ui';

<Wizard
  steps={[{ id: 'a', label: 'Account' }, { id: 'b', label: 'Profile' }]}
  onChange={(step) => console.log(step)}
>
  {({ next }) => <Button onClick={next}>Continue</Button>}
</Wizard>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    footerAlign: { control: 'select', options: ['between', 'end'] },
    allowStepSelect: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Wizard steps={steps} className="w-[480px]">
      <div className="min-h-[160px] rounded-md border p-6">
        <h3 className="mb-1 text-lg font-semibold">Create your account</h3>
        <p className="mb-4 text-sm text-muted-foreground">Step content goes here.</p>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="chris@jazinski.dev" />
          </div>
        </div>
      </div>
    </Wizard>
  ),
};

export const RenderProp: Story = {
  name: 'Render prop with custom actions',
  render: () => (
    <Wizard steps={steps} className="w-[480px]">
      {({ step, isFirst, isLast, next, previous }) => (
        <div className="min-h-[160px] rounded-md border p-6">
          <h3 className="text-lg font-semibold">{step.label}</h3>
          {step.description && (
            <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>
          )}
          <div className="mt-6 flex gap-2">
            {!isFirst && (
              <Button variant="outline" onClick={previous}>
                Go back
              </Button>
            )}
            {!isLast && <Button onClick={next}>Continue</Button>}
            {isLast && <Button>Finish</Button>}
          </div>
        </div>
      )}
    </Wizard>
  ),
};

export const WithError: Story = {
  name: 'Step with error',
  render: () => (
    <Wizard
      className="w-[480px]"
      steps={[
        { id: 'a', label: 'Account' },
        { id: 'b', label: 'Profile', error: true },
        { id: 'c', label: 'Confirm' },
      ]}
      defaultActiveStep={1}
    >
      <div className="min-h-[160px] rounded-md border border-destructive/40 bg-destructive/5 p-6">
        <p className="text-sm text-destructive">
          Please fix the highlighted fields before continuing.
        </p>
      </div>
    </Wizard>
  ),
};

export const NoStepSelect: Story = {
  name: 'Linear (no jumping back)',
  render: () => (
    <Wizard steps={steps} allowStepSelect={false} defaultActiveStep={2} className="w-[480px]">
      <div className="min-h-[120px] rounded-md border p-6 text-sm">
        Steps cannot be clicked — navigation only via Back/Next.
      </div>
    </Wizard>
  ),
};

export const FooterEnd: Story = {
  name: 'Footer aligned end',
  render: () => (
    <Wizard steps={steps} footerAlign="end" className="w-[480px]">
      <div className="min-h-[120px] rounded-md border p-6 text-sm">
        Footer controls grouped to the right.
      </div>
    </Wizard>
  ),
};
