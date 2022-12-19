import { FC, useCallback, useEffect, useState } from 'react';

import { useCart } from '~/components/CartProvider';
import Price from '~/components/Price';
import SelectNumber from '~/components/SelectNumber';
import SelectSize from '~/components/SelectSize';
import { IProduct } from '~/types';
import { Sizes } from '~/types/product-sizes';

import ProductCartButton from './ProductCartButton';
import styles from './ProductInfo.module.scss';


const ProductInfo: FC<IProduct> = (product) => {
    const { updateCartItem, getCartItem } = useCart();
    const [cartItem, setCartItem] = useState(() => getCartItem(product));
    const { discount, price } = product;

    const handleChangeSize = useCallback((size: Sizes) => {
        setCartItem((prevCartItem) => ({ ...prevCartItem, size }));
    }, []);

    const handleChangeQty = useCallback((qty: number) => {
        setCartItem((prevCartItem) => ({ ...prevCartItem, qty }));
    }, []);

    useEffect(() => {
        updateCartItem(product.id, cartItem);
    }, [cartItem]);


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

export default ProductInfo;
