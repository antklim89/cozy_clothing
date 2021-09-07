import { ReactNode } from 'react';


export interface StepperPropTypes {
    children: (arg: {
        step: number,
        setStep: React.Dispatch<React.SetStateAction<number>>
        completeStep(index: number, stepState: boolean): void
        isStepCompleted(stepIndex:number): boolean
        isPrevStepsCompleted(stepIndex: number): boolean
    }) => ReactNode
    maxSteps: number
}

