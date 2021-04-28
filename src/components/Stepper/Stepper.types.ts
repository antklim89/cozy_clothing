import { ReactNode } from 'react';


export interface StepperPropTypes {
    children: (arg: {
        step: number,
        canNextStep: boolean,
        setCanNextStep: React.Dispatch<React.SetStateAction<boolean>>,
        setStep: React.Dispatch<React.SetStateAction<number>>
        handleBack(): void
        isStepCompleted(stepIndex:number): boolean
        completeStep(index: number, stepState: boolean): void
        isPrevStepsCompleted(stepIndex: number): boolean
    }) => ReactNode
    maxSteps: number
}

