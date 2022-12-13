import { ChangeEvent, FC, useCallback } from 'react';

import { Sizes } from '~/types';

import InputGroup from '../InputGroup';

import { SelectSizePropTypes } from './SelectSize.types';


export const SelectSize: FC<SelectSizePropTypes> = ({ value, onChange, label }) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Sizes);
    }, [onChange]);

    return (
        <InputGroup label={label}>
            <select
                value={value}
                onChange={handleChange}
            >
                {Object.keys(Sizes).map((sizeItem) => (
                    <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
                ))}
            </select>
        </InputGroup>
    );
};
