import { ChangeEvent, FC, useMemo } from 'react';

import styles from './SelectNumber.module.scss';
import { SelectNumberPropTypes } from './SelectNumber.types';

import { Button } from '~/components/Button';
import { cls } from '~/utils';


export const SelectNumber: FC<SelectNumberPropTypes> = ({
    value, onChange, max = 50, min = 1, label, className,
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

    const id = useMemo(() => (Math.random() * 10000).toString(32), []);

    return (
        <label className={cls(styles.root, className)} htmlFor={id}>
            {label ? <>{label} <br /></> : null }
            <div className={styles.select}>
                <Button aria-label="plus" className={styles.button} onClick={handlePlusQty}>+</Button>
                <input
                    aria-label="select quantity"
                    className={styles.input}
                    id={id}
                    type="number"
                    value={value}
                    onBlur={handleBlurQty}
                    onChange={handleChangeQty}
                />
                <Button aria-label="minus" className={styles.button} onClick={handleMinusQty}>-</Button>
            </div>
        </label>
    );
};
