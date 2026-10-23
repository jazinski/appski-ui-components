import * as React from 'react';
declare const stepIndicatorVariants: (props?: ({
    state?: "current" | "error" | "incomplete" | "complete" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export interface WizardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
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
declare const Wizard: React.ForwardRefExoticComponent<WizardProps & React.RefAttributes<HTMLDivElement>>;
export { Wizard, stepIndicatorVariants };
//# sourceMappingURL=wizard.d.ts.map