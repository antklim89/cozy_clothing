import { FC, useCallback, useEffect, useState } from 'react';

import { CartItem, useCart } from '~/components/CartProvider';
import { Price } from '~/components/Price';
import { SelectNumber } from '~/components/SelectNumber';
import { SelectSize } from '~/components/SelectSize';
import { IProduct } from '~/types';
import { Sizes } from '~/types/product-sizes';

import { ProductCartButton } from './ProductCartButton';
import styles from './ProductInfo.module.scss';


export const ProductInfo: FC<IProduct> = (product) => {
    const { cart, updateCartItem } = useCart();
    const { discount, price } = product;

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
        <>
            <div className={styles.priceSection}>
                <p>Price for one piece:</p>
                <Price discount={discount} price={price} />
                <p>Total price:</p>
                <Price discount={discount} price={price * cartItem.qty} />
            </div>
            <div className={styles.cartSection}>
                <SelectSize
                    label="SIZE"
                    value={cartItem.size}
                    onChange={handleChangeSize}
                />
                <SelectNumber
                    value={cartItem.qty}
                    onChange={handleChangeQty}
                />
                <ProductCartButton cartItem={cartItem} />
            </div>
        </>
    );
};
