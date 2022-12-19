import { FC } from 'react';

import { StepPropTypes } from './Step.types';


const Step: FC<StepPropTypes> = ({ children, index, step }) => {
    if (index !== step) return null;
    return <>{children}</>;
};

export default Step;
