import { FC, useState } from 'react';

import styles from './Stepper.module.scss';
import { StepperPropTypes } from './Stepper.types';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';


export const Stepper: FC<StepperPropTypes> = ({ children, maxSteps }) => {
    const [step, setStep] = useState(1);
    const [canNextStep, setCanNextStep] = useState(true);

    return (
        <div>
            {children({
                step, canNextStep, setStep, setCanNextStep,
            })}
            <Container className={styles.buttons}>
                <Button
                    disabled={!canNextStep || step === 0}
                    size="large"
                    onClick={() => setStep((p) => Math.max(p - 1, 1))}
                >
                    BACK
                </Button>
                <Button
                    disabled={!canNextStep || step === maxSteps}
                    size="large"
                    onClick={() => setStep((p) => Math.min(p + 1, maxSteps))}
                >
                    NEXT
                </Button>
            </Container>
        </div>
    );
};
