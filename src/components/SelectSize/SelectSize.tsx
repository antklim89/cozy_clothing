import { FC } from 'react';


import { SelectSizePropTypes } from './SelectSize.types';

import { Input } from '~/components/Input';
import { Sizes } from '~/types';


export const SelectSize: FC<SelectSizePropTypes> = ({
    value, onChange, label,
}) => {
    return (
        <Input
            component="select"
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value as Sizes)}
        >
            {Object.keys(Sizes).map((sizeItem) => (
                <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
            ))}
        </Input>
    );
};
