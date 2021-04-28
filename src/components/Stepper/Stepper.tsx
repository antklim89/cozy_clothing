import { FC, useState } from 'react';

import styles from './Stepper.module.scss';
import { StepperPropTypes } from './Stepper.types';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';


export const Stepper: FC<StepperPropTypes> = ({ children, maxSteps }) => {
    const [step, setStep] = useState(1);
    const [canNextStep, setCanNextStep] = useState(true);
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

    function handleBack() {
        setStep((p) => Math.max(p - 1, 1));
    }

    function handleNext() {
        setStep((p) => Math.min(p + 1, maxSteps));
    }


    return (
        <div>
            {children({
                step,
                canNextStep,
                setStep,
                setCanNextStep,
                handleBack,
                isStepCompleted,
                completeStep,
                isPrevStepsCompleted,
            })}
            <Container className={styles.buttons}>
                <Button
                    disabled={step === 0}
                    size="large"
                    onClick={handleBack}
                >
                    BACK
                </Button>
                <Button
                    disabled={!canNextStep || step === maxSteps}
                    size="large"
                    onClick={handleNext}
                >
                    NEXT
                </Button>
            </Container>
        </div>
    );
};
