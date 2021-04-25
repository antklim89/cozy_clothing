import {
    ChangeEvent, FC, useEffect, useState,
} from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { useCart } from '~/components/Cart/Cart.provider';
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

    const {
        cart, addToCart, removeFromCart, updateCartItem,
    } = useCart();
    const cartItem = cart.find((i) => i.id === product.id);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState<Sizes>(Sizes.M);

    const handleAddToCart = () => {
        addToCart({
            id: product.id, qty, size, product,
        });
    };

    const handleRemoveFromCart = () => {
        if (cartItem) removeFromCart(cartItem);
    };

    useEffect(() => {
        if (cartItem) updateCartItem({ ...cartItem, qty, size });
    }, [qty, size]);

    const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSize(e.target.value as Sizes);
    };

    const handleChangeQty = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (Number.isNaN(value)) return;
        if (value > 99) return;
        setQty(value);
    };

    const handleBlurQty = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > MAX_QTY) setQty(MAX_QTY);
        if (value < 1) setQty(1);
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
                        onBlur={handleBlurQty}
                        onChange={handleChangeQty}
                    />
                    <Button onClick={handleMinusQty}>-</Button>
                </div>
                <div className={styles.cardBtn}>
                    {cartItem ? (
                        <Button
                            size="large"
                            onClick={handleRemoveFromCart}
                        >
                            Remove From Cart
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            onClick={handleAddToCart}
                        >
                            Add To Card
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
