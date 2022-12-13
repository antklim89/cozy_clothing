import { FC, memo } from 'react';

import { cls, getPrice } from '~/utils';

import style from './Price.module.scss';
import { PricePropTypes } from './Price.types';


const Price: FC<PricePropTypes> = ({
    price,
    unit,
    discount = 0,
    qty = 1,
    className,
}) => {
    const withDiscount = discount > 0
        ? (
            <>
                <span className={cls(style.price, className)}>{getPrice({ price, qty })}$</span>
                <span className={cls(style.priceWithDiscount, className)}>{getPrice({ price, discount, qty })}$</span>
            </>
        )
        : (
            <span className={cls(style.price, className)}>{getPrice({ price, qty })}$</span>
        );

    return (
        <span>
            {withDiscount}{unit ? ` for ${unit}` : ''}
        </span>
    );
};

export default memo(Price);
