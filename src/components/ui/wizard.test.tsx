import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Wizard, type WizardStep } from './wizard';

const steps: WizardStep[] = [
  { id: 'account', label: 'Account' },
  { id: 'profile', label: 'Profile' },
  { id: 'confirm', label: 'Confirm' },
];

function renderWizard(props: Partial<React.ComponentProps<typeof Wizard>> = {}) {
  return render(
    <Wizard steps={steps} {...props}>
      <div>step content</div>
    </Wizard>
  );
}

describe('Wizard', () => {
  it('renders all step labels', () => {
    renderWizard();

    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('shows Step 1 of N for the first step', () => {
    renderWizard();

    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
  });

  it('marks the first step as current with aria-current=step', () => {
    renderWizard();

    expect(screen.getByRole('button', { name: /Account/ })).toHaveAttribute(
      'aria-current',
      'step'
    );
  });

  it('advances with Next and reports onChange', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWizard({ onChange });

    await user.click(screen.getByRole('button', { name: /Next/ }));

    expect(onChange).toHaveBeenCalledWith(1);
    expect(screen.getByText('Step 2 of 3')).toBeInTheDocument();
  });

  it('Back is disabled on the first step and enabled after advancing', async () => {
    const user = userEvent.setup();
    renderWizard();

    const back = screen.getByRole('button', { name: /Back/ });
    expect(back).toBeDisabled();

    await user.click(screen.getByRole('button', { name: /Next/ }));
    expect(screen.getByRole('button', { name: /Back/ })).toBeEnabled();
  });

  it('Next is disabled on the last step', () => {
    renderWizard({ defaultActiveStep: 2 });

    expect(screen.getByRole('button', { name: /Next/ })).toBeDisabled();
    expect(screen.getByText('Step 3 of 3')).toBeInTheDocument();
  });

  it('renders completed steps with a check icon and allows jumping back', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWizard({ defaultActiveStep: 2, onChange });

    const firstStep = screen.getByRole('button', { name: /Account/ });
    // completed steps are clickable
    await user.click(firstStep);

    expect(onChange).toHaveBeenCalledWith(0);
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
  });

  it('future steps are not clickable', () => {
    const onChange = vi.fn();
    renderWizard({ onChange });

    const lastStep = screen.getByRole('button', { name: /Confirm/  });
    expect(lastStep).toBeDisabled();

    expect(lastStep).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('disables step selection when allowStepSelect is false', () => {
    renderWizard({ defaultActiveStep: 2, allowStepSelect: false });

    expect(screen.getByRole('button', { name: /Account/ })).toBeDisabled();
  });

  it('render-prop receives state and actions', async () => {
    const user = userEvent.setup();
    render(
      <Wizard steps={steps}>
        {({ step, isLast, next }) => (
          <div>
            <span>current:{step.label}</span>
            <span>last:{String(isLast)}</span>
            <button type="button" onClick={next}>
              custom-next
            </button>
          </div>
        )}
      </Wizard>
    );

    expect(screen.getByText('current:Account')).toBeInTheDocument();
    expect(screen.getByText('last:false')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'custom-next' }));
    expect(screen.getByText('current:Profile')).toBeInTheDocument();
  });

  it('controlled activeStep wins over internal navigation', async () => {
    const user = userEvent.setup();
    render(<Wizard steps={steps} activeStep={0}>content</Wizard>);

    await user.click(screen.getByRole('button', { name: /Next/ }));

    // parent never changed activeStep, so display stays on step 1
    expect(screen.getByText('Step 1 of 3')).toBeInTheDocument();
  });

  it('error step shows error indicator styling', () => {
    render(
      <Wizard
        steps={[
          { id: 'a', label: 'A' },
          { id: 'b', label: 'B', error: true },
        ]}
        defaultActiveStep={1}
      >
        content
      </Wizard>
    );

    const indicator = screen.getByRole('button', { name: /2 B/ }).querySelector('span');
    expect(indicator).toHaveClass('border-destructive');
  });

  it('merges custom className on the root', () => {
    renderWizard({ className: 'custom-wizard' });

    const root = screen.getByText('step content').parentElement;
    expect(root).toHaveClass('custom-wizard');
  });
});
