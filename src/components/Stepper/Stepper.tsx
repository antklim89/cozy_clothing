import { FC, useState } from 'react';
import Button from '../Button';
import style from './Stepper.module.scss';
import { StepperPropTypes } from './Stepper.types';


const Stepper: FC<StepperPropTypes> = ({ children, maxSteps }) => {
    const [step, setStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<boolean[]>(() => (
        Array.from({ length: maxSteps }).map(() => false)
    ));

    function isStepCompleted(stepIndex: number): boolean {
        return completedSteps[stepIndex - 1];
    }

    function isPrevStepsCompleted(stepIndex: number): boolean {
        return completedSteps.slice(0, stepIndex).every((item) => item);
    }

    function completeStep(index: number, stepState: boolean): void {
        setCompletedSteps((prevSteps) => {
            return prevSteps.map((prevStep, prevStepIndex) => (prevStepIndex === index - 1 ? stepState : prevStep));
        });
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


            <div className={style.nextButton}>
                {isStepCompleted(step) && (
                    <Button onClick={() => setStep(step + 1)}>
                        NEXT
                    </Button>
                )}
            </div>
        </>
    );
};

export default Stepper;
