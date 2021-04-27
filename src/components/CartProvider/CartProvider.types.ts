import { Dispatch, SetStateAction } from 'react';

import { IProduct, Sizes } from '~/types';


export interface CartItem {
    id: string
    qty: number
    size: Sizes
    product: IProduct
}

export interface CartContext {
    cart: CartItem[]
    setCart: Dispatch<SetStateAction<CartItem[]>>
    addToCart: (arg: CartItem) => void
    removeFromCart: (arg: CartItem) => void
    updateCartItem: (arg: CartItem) => void
}

