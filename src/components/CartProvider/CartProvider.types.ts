import { Dispatch, SetStateAction } from 'react';

import { IProduct, Sizes } from '~/types';


export interface ICartItem {
    id: string
    qty: number
    size: Sizes
    product: IProduct
}

export interface CartContext {
    cart: ICartItem[]
    setCart: Dispatch<SetStateAction<ICartItem[]>>
    addToCart: (arg: ICartItem) => void
    removeFromCart: (arg: ICartItem) => void
    updateCartItem: (arg: ICartItem) => void
}

