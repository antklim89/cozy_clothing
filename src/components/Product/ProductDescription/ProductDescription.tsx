import { FC, useEffect, useState } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { CartItem, useCart } from '~/components/CartProvider';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';
import { Sizes } from '~/types/product-sizes';


export const ProductDescription: FC<ProductPropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    const {
        cart, addToCart, removeFromCart, updateCartItem,
    } = useCart();

    const [cartItem, setCartItem] = useState<CartItem>(() => (
        cart.find((i) => i.id === product.id) || {
            id: product.id,
            product,
            qty: 1,
            size: Sizes.M,
        }
    ));

    const handleAddToCart = () => {
        addToCart(cartItem);
    };

    const handleRemoveFromCart = () => {
        if (cartItem) removeFromCart(cartItem);
    };

    useEffect(() => {
        updateCartItem(cartItem);
    }, [cartItem.qty, cartItem.size]);

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
                <SelectSize
                    label="SIZE:"
                    value={cartItem.size}
                    onChange={(size) => setCartItem((p) => ({ ...p, size }))}
                />
                <SelectNumber
                    label="QTY:"
                    value={cartItem.qty}
                    onChange={(qty) => setCartItem((p) => ({ ...p, qty }))}
                />
                <div className={styles.cardBtn}>
                    {cart.includes(cartItem) ? (
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
