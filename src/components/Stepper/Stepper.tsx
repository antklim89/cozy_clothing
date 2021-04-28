import { FC, useState } from 'react';

import { StepperPropTypes } from './Stepper.types';


export const Stepper: FC<StepperPropTypes> = ({ children, maxSteps }) => {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<boolean[]>(() => (
        Array.from({ length: maxSteps }).map(() => false)
    ));

    function isStepCompleted(stepIndex: number): boolean {
        return completedSteps[stepIndex - 1];
    }

    function isPrevStepsCompleted(stepIndex: number): boolean {
        return completedSteps.slice(0, stepIndex).every((i) => i);
    }

    function completeStep(index: number, stepState: boolean): void {
        setCompletedSteps((p) => p.map((v, i) => (i === index - 1 ? stepState : v)));
    }


    return (
        <>
            {children({
                step,
                setStep,
                completeStep,
                isStepCompleted,
                isPrevStepsCompleted,
            })}
        </>
    );
};
