import { ReactNode } from 'react';


export interface StepperPropTypes {
    children: (arg: {
        step: number,
        canNextStep: boolean,
        setCanNextStep: React.Dispatch<React.SetStateAction<boolean>>,
        setStep: React.Dispatch<React.SetStateAction<number>>
    }) => ReactNode
    maxSteps: number
}

