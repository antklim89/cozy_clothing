import { FC } from 'react';

import { ProductPricePropTypes } from './ProductPrice.types';

import { Price } from '~/components/Price';


export const ProductPrice: FC<ProductPricePropTypes> = ({ discount, price, qty }) => {
    return (
        <>
            Price for one piece:
            <br />
            <Price discount={discount} price={price} />
            <br />
            Total price:
            <br />
            <Price discount={discount} price={price * qty} />
        </>
    );
};
