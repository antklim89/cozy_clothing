import { FC, useCallback, useEffect, useState } from 'react';

import { ProductPropTypes } from '../Product.types';

import styles from './ProductDescription.module.scss';

import { Button } from '~/components/Button';
import { CartItem, useCart } from '~/components/CartProvider';
import { Price } from '~/components/Price';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';
import { Sizes } from '~/types/product-sizes';


export const ProductDescription: FC<ProductPropTypes> = ({ product }) => {
    const isNew = new Date(product.careatedAt).getTime() > new Date().setMonth(new Date().getMonth() - 1);

    const { cart, addToCart, removeFromCart, updateCartItem } = useCart();

    const [cartItem, setCartItem] = useState<CartItem>(() => (
        cart.find((storedCartItem) => storedCartItem.id === product.id) || {
            id: product.id,
            product,
            qty: 1,
            size: Sizes.M,
        }
    ));

    const handleAddToCart = useCallback(() => {
        addToCart(cartItem);
    }, [cartItem]);

    const handleRemoveFromCart = useCallback(() => {
        if (cartItem) removeFromCart(cartItem);
    }, [cartItem, removeFromCart]);

    const handleChangeSize = useCallback((size: Sizes) => {
        setCartItem((prev) => ({ ...prev, size }));
    }, []);

    const handleChangeQty = useCallback((qty: number) => {
        setCartItem((prev) => ({ ...prev, qty }));
    }, []);

    useEffect(() => {
        updateCartItem(cartItem);
    }, [cartItem.qty, cartItem.size]);

    return (
        <section className={styles.root}>
            <div className={styles.titleSection}>
                <h1>
                    {product.title}
                </h1>
                <p>
                    {product.type}
                </p>
                <p className={styles.promos}>
                    {isNew && (
                        <span>NEW PRODUCT</span>
                    )}
                    {product.discount > 0 && (
                        <span>
                            DISCOUNT
                            {' '}
                            {product.discount}
                            %
                        </span>
                    )}
                </p>
            </div>
            <div className={styles.priceSection}>
                <Price discount={product.discount} price={product.price} />
            </div>
            <div className={styles.cartSection}>
                <SelectSize
                    label="SIZE:"
                    value={cartItem.size}
                    onChange={handleChangeSize}
                />
                <SelectNumber
                    label="QTY:"
                    value={cartItem.qty}
                    onChange={handleChangeQty}
                />
                <div className={styles.cardBtn}>
                    {cart.includes(cartItem)
                        ? (
                            <Button
                                size="large"
                                onClick={handleRemoveFromCart}
                            >
                                Remove From Cart
                            </Button>
                        )
                        : (
                            <Button
                                size="large"
                                onClick={handleAddToCart}
                            >
                                Add To Card
                            </Button>
                        )}
                </div>
            </div>
        </section>
    );
};
