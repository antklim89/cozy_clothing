import { ChangeEvent, FC } from 'react';

import { Button } from '../Button';

import styles from './SelectNumber.module.scss';
import { SelectNumberPropTypes } from './SelectNumber.types';


export const SelectNumber: FC<SelectNumberPropTypes> = ({
    value, onChange, max = 50, min = 1, label,
}) => {
    const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (Number.isNaN(newValue)) return;
        if (newValue > 99) return;
        onChange(newValue);
    };

    const handleBlurQty = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (newValue > max) onChange(max);
        if (newValue < 1) onChange(min);
    };

    const handlePlusQty = () => onChange(Math.min(value + 1, max));
    const handleMinusQty = () => onChange(Math.max(value - 1, min));

    const id = (Math.random() * 10000).toString(32);

    return (
        <label className={styles.root} htmlFor={id}>
            {label && (
                <span>
                    {label}
                    &nbsp;
                </span>
            )}
            <div className={styles.select}>
                <Button onClick={handlePlusQty}>+</Button>
                <input
                    id={id}
                    type="number"
                    value={value}
                    onBlur={handleBlurQty}
                    onChange={handleChangeQty}
                />
                <Button onClick={handleMinusQty}>-</Button>
            </div>
        </label>
    );
};
