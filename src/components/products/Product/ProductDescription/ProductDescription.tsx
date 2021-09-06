import { FC, useCallback, useEffect, useState } from 'react';

import { ProductPropTypes } from '../Product.types';

import { ProductCartButton } from './ProductCartButton';
import styles from './ProductDescription.module.scss';
import { ProductPrice } from './ProductPrice';
import { ProductTitle } from './ProductTitle';

import { CartItem, useCart } from '~/components/cart/CartProvider';
import { SelectNumber } from '~/components/ui/SelectNumber';
import { SelectSize } from '~/components/ui/SelectSize';
import { Sizes } from '~/types/product-sizes';


export const ProductDescription: FC<ProductPropTypes> = ({ product }) => {
    const { cart, updateCartItem } = useCart();

    const [cartItem, setCartItem] = useState<CartItem>(() => (
        cart.find((storedCartItem) => storedCartItem.id === product.id) || {
            id: product.id,
            product,
            qty: 1,
            size: Sizes.M,
        }
    ));

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
                <ProductTitle product={product} />
            </div>
            <div className={styles.priceSection}>
                <ProductPrice discount={product.discount} price={product.price} qty={cartItem.qty} />
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
                <ProductCartButton cartItem={cartItem} />
            </div>
        </section>
    );
};
