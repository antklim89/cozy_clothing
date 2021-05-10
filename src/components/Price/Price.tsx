import { FC } from 'react';

import styles from './Price.module.scss';
import { PricePropTypes } from './Price.types';


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
                        {(price - (price / (100 * discount))).toFixed(2)}
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
