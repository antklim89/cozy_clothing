import { FC } from 'react';

import styles from './Price.module.scss';
import { PricePropTypes } from './Price.types';

import { getPrice } from '~/utils';


export const Price: FC<PricePropTypes> = ({ price, discount }) => {
    return (
        <div className={styles.root}>
            {discount && discount > 0 ? (
                <p className={styles.priceWithDiscount}>
                    <span>
                        $
                        {price}
                    </span>
                    <b>
                        $
                        {getPrice(price, discount)}
                    </b>
                </p>
            ) : (
                <p className={styles.price}>
                    <b>
                        $
                        {price}
                    </b>
                </p>
            )}
        </div>
    );
};


