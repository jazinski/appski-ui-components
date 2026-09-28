import * as React from 'react';
import { cva } from 'class-variance-authority';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

const stepIndicatorVariants = cva(
  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium transition-colors',
  {
    variants: {
      state: {
        incomplete: 'border-border bg-background text-muted-foreground',
        current: 'border-primary bg-primary text-primary-foreground',
        complete: 'border-primary bg-primary/10 text-primary',
        error: 'border-destructive bg-destructive/10 text-destructive',
      },
    },
    defaultVariants: {
      state: 'incomplete',
    },
  }
);

export interface WizardStep {
  /** Unique id for the step */
  id: string;
  /** Label shown under the indicator and used by screen readers */
  label: string;
  /** Optional short description rendered when the step is current */
  description?: string;
  /** Mark the step as invalid — shows error styling */
  error?: boolean;
}

export interface WizardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
  /** Ordered step definitions */
  steps: WizardStep[];
  /** Index of the active step (controlled) */
  activeStep?: number;
  /** Initial active step index (uncontrolled) */
  defaultActiveStep?: number;
  /** Fired whenever the active step changes */
  onChange?: (step: number) => void;
  /** Allow clicking a previous step indicator to jump back */
  allowStepSelect?: boolean;
  /** Render the current step's content */
  children?: React.ReactNode | ((state: WizardRenderState) => React.ReactNode);
  /** Footer alignment */
  footerAlign?: 'between' | 'end';
}

export interface WizardRenderState {
  /** Index of the current step */
  activeStep: number;
  /** Current step definition */
  step: WizardStep;
  /** True when on the first step */
  isFirst: boolean;
  /** True when on the last step */
  isLast: boolean;
  /** Move to the next step (no-op on last) */
  next: () => void;
  /** Move to the previous step (no-op on first) */
  previous: () => void;
}

function stepState(index: number, active: number, error?: boolean): 'incomplete' | 'current' | 'complete' | 'error' {
  if (error && index === active) return 'error';
  if (index < active) return 'complete';
  if (index === active) return 'current';
  return 'incomplete';
}

/**
 * Wizard component — a multi-step flow with indicator header, content
 * area, and Back/Next footer navigation.
 *
 * @example
 * const steps = [{ id: 'a', label: 'Account' }, { id: 'b', label: 'Plan' }];
 * <Wizard steps={steps} onChange={setStep}>
 *   {({ next }) => <Button onClick={next}>Continue</Button>}
 * </Wizard>
 */
const Wizard = React.forwardRef<HTMLDivElement, WizardProps>(
  (
    {
      className,
      steps,
      activeStep: controlled,
      defaultActiveStep = 0,
      onChange,
      allowStepSelect = true,
      children,
      footerAlign = 'between',
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState(defaultActiveStep);
    const activeStep = controlled ?? internal;
    const stepCount = steps.length;

    const goTo = (next: number) => {
      const clamped = Math.max(0, Math.min(stepCount - 1, next));
      if (clamped === activeStep) return;
      setInternal(clamped);
      onChange?.(clamped);
    };

    const state: WizardRenderState = {
      activeStep,
      step: steps[activeStep] ?? steps[0] ?? { id: 'step', label: 'Step' },
      isFirst: activeStep === 0,
      isLast: activeStep === stepCount - 1,
      next: () => { goTo(activeStep + 1); },
      previous: () => { goTo(activeStep - 1); },
    };

    return (
      <div ref={ref} className={cn('flex w-full flex-col gap-6', className)} {...props}>
        <ol className="flex items-center gap-2" aria-label="Progress">
          {steps.map((s, i) => {
            const st = stepState(i, activeStep, s.error);
            const clickable = allowStepSelect && i < activeStep;
            return (
              <li key={s.id} className="flex flex-1 items-center gap-2 last:flex-none">
                <button
                  type="button"
                  aria-current={i === activeStep ? 'step' : undefined}
                  disabled={!clickable}
                  onClick={() => {
                    if (clickable) goTo(i);
                  }}
                  className={cn(
                    'flex items-center gap-2 rounded-md text-left',
                    clickable ? 'cursor-pointer' : 'cursor-default'
                  )}
                >
                  <span className={stepIndicatorVariants({ state: st })}>
                    {st === 'complete' ? <Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <span
                    className={cn(
                      'text-sm font-medium',
                      i === activeStep ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {s.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'h-px flex-1',
                      i < activeStep ? 'bg-primary' : 'bg-border'
                    )}
                  />
                )}
              </li>
            );
          })}
        </ol>

        {typeof children === 'function' ? children(state) : children}

        <div
          className={cn(
            'flex items-center gap-2',
            footerAlign === 'between' ? 'justify-between' : 'justify-end'
          )}
        >
          {footerAlign === 'between' && (
            <Button
              type="button"
              variant="outline"
              onClick={state.previous}
              disabled={state.isFirst}
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground" aria-live="polite">
              Step {activeStep + 1} of {stepCount}
            </span>
            <Button type="button" onClick={state.next} disabled={state.isLast}>
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);
Wizard.displayName = 'Wizard';

export { Wizard, stepIndicatorVariants };
