import { FC } from 'react';


import { SelectSizePropTypes } from './SelectSize.types';

import { Select } from '~/components/Select';
import { Sizes } from '~/types';


export const SelectSize: FC<SelectSizePropTypes> = ({
    value, onChange, label,
}) => {
    return (
        <Select label={label} value={value} onChange={(e) => onChange(e.target.value as Sizes)}>
            {Object.keys(Sizes).map((sizeItem) => (
                <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
            ))}
        </Select>
    );
};
