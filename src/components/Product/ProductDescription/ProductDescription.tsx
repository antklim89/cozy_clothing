import {
    ChangeEvent, FC, useEffect, useState,
} from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { useCart } from '~/components/Cart/Cart.provider';
import { Select } from '~/components/Select';
import { SelectNumber } from '~/components/SelectNumber';


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

    const [qty, setQty] = useState(cartItem?.qty || 1);
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
        if (cartItem && cartItem.qty !== qty) updateCartItem({ ...cartItem, qty, size });
        if (cartItem && cartItem.size !== size) updateCartItem({ ...cartItem, qty, size });
    }, [qty, size]);

    useEffect(() => {
        if (cartItem && cartItem.qty !== qty) setQty(cartItem.qty);
    }, [cartItem?.qty]);

    const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSize(e.target.value as Sizes);
    };

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
                <Select label="SIZE:" value={size} onChange={handleSizeChange}>
                    {Object.keys(Sizes).map((sizeItem) => (
                        <option key={sizeItem} value={sizeItem}>{sizeItem}</option>
                    ))}
                </Select>
                <SelectNumber label="QTY:" value={qty} onChange={(n) => setQty(n)} />
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
