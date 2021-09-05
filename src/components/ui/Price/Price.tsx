import { FC, memo } from 'react';

import styles from './Price.module.scss';
import { PricePropTypes } from './Price.types';

import { getPrice } from '~/utils';


export const Price: FC<PricePropTypes> = memo(({ price, discount }) => {
    return (
        <div className={styles.root}>
            {discount && discount > 0
                ? (
                    <p className={styles.priceWithDiscount}>
                        <span>
                            ${price.toFixed(2)}
                        </span>
                        <b>
                            ${getPrice(price, discount).toFixed(2)}
                        </b>
                    </p>
                )
                : (
                    <p className={styles.price}>
                        <b>
                            ${price.toFixed(2)}
                        </b>
                    </p>
                )}
        </div>
    );
});

Price.displayName = 'Price';
