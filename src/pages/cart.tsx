import { FC, useState } from 'react';

import { Button } from '~/components';
import { CartList } from '~/components/CartList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';


const index: FC = () => {
    const [step, setStep] = useState(0);
    const [canNextStep, setCanNextStep] = useState(true);

    return (
        <main>
            <Seo title="Cart" />
            <Title>Cart</Title>

            {step === 0 && (
                <CartList onChangeEmpty={(isEmpty) => setCanNextStep(!isEmpty)} />
            )}
            {step === 1 && (
                <div>
                    STEP
                    {' '}
                    {step}
                </div>
            )}
            <Button onClick={() => setStep((p) => p + 1)}>
                NEXT
                {canNextStep.toString()}
            </Button>
            <Button onClick={() => setStep((p) => p - 1)}>
                BACK
                {canNextStep.toString()}
            </Button>
        </main>
    );
};

export default index;
