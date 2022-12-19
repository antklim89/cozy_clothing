import { ChangeEvent, FC, useCallback } from 'react';

import Input from '~/components/Input';
import { Sizes } from '~/types';

import { SelectSizePropTypes } from './SelectSize.types';


export const SelectSize: FC<SelectSizePropTypes> = ({ value, onChange, label }) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Sizes);
    }, [onChange]);

    return (
        <Input
            as="select"
            label={label}
            value={value}
            onChange={handleChange}
        >
            {Object.keys(Sizes).map((sizeItem) => (
                <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
            ))}
        </Input>
    );
};
