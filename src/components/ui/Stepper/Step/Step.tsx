import { FC } from 'react';

import { StepPropTypes } from './Step.types';


export const Step: FC<StepPropTypes> = ({ children, index, step }) => {
    if (index !== step) return null;
    return children;
};
