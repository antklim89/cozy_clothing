import { FC } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { Select } from '~/components/Select';


export const ProductDescription: FC<ProductPropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    return (
        <div className={styles.root}>
            <div className={styles.titleSection}>
                <h1>
                    {product.title.replace(/\s/ig, ' ')}
                </h1>
                {isNew && (
                    <span className={styles.new}>NEW</span>
                )}
                <b className={styles.price}>
                    $
                    {product.price}
                </b>

            </div>
            <div className={styles.brandSection}>
                <h2>
                    {product.brand}
                    <br />
                </h2>
                <p>
                    {product.type}
                </p>
            </div>
            <div className={styles.cartSection}>
                <div className={styles.selectSize}>
                    <div>
                        SIZE:
                        {' '}
                        {' '}
                        <Select id="select-size">
                            <option value="XXL">XXL</option>
                            <option value="XL">XL</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                        </Select>
                    </div>
                </div>
                <div className={styles.qty}>
                    QTY:
                    {' '}
                    {' '}
                    <Button>+</Button>
                    <span>1</span>
                    <Button>-</Button>
                </div>
                <div className={styles.cardBtn}>
                    <Button size="large">Add To Card</Button>
                </div>
            </div>
        </div>
    );
};
