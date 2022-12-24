import { ChangeEvent, FC, useCallback } from 'react';
import { SelectSizePropTypes } from './SelectSize.types';
import Input from '~/components/Input';
import { Sizes } from '~/types';


const SelectSize: FC<SelectSizePropTypes> = ({ value, onChange, label }) => {
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

export default SelectSize;
