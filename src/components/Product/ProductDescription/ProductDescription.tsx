import { ChangeEvent, FC, useState } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { Select } from '~/components/Select';


const MAX_QTY = 50;

enum Sizes {
    XXL = 'XXL',
    XL = 'XL',
    L = 'L',
    M = 'M',
    S = 'S',
}

export const ProductDescription: FC<ProductPropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState<Sizes>(Sizes.M);

    const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSize(e.target.value as Sizes);
    };

    const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (Number.isNaN(value)) return;
        if (value > MAX_QTY || value < 1) return;
        setQty(value);
    };

    const handlePlusQty = () => setQty((prev) => Math.min(prev + 1, MAX_QTY));
    const handleMinusQty = () => setQty((prev) => Math.max(prev - 1, 1));

    return (
        <div className={styles.root}>
            <div className={styles.titleSection}>
                <h1>
                    {product.title}
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
                        <Select id="select-size" value={size} onChange={handleSizeChange}>
                            {Object.keys(Sizes).map((sizeItem) => (
                                <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className={styles.qty}>
                    QTY:
                    {' '}
                    <Button onClick={handlePlusQty}>+</Button>
                    <input
                        value={qty}
                        onChange={handleChangeQty}
                    />
                    <Button onClick={handleMinusQty}>-</Button>
                </div>
                <div className={styles.cardBtn}>
                    <Button size="large">Add To Card</Button>
                </div>
            </div>
        </div>
    );
};
