import has from 'lodash/has';
import pick from 'lodash/pick';
import { ICartItem } from '~/components/CartProvider';


const CART_STORAGE_NAME = 'cart';
const isBrowser = typeof window !== 'undefined';


export function getCartFromStorage(): ICartItem[] {
    if (!isBrowser) return [];
    const cartString = localStorage.getItem(CART_STORAGE_NAME);
    if (!cartString) return [];

    try {
        const cart = JSON.parse(cartString);
        return validateCart(cart);
    } catch (error) {
        localStorage.removeItem(CART_STORAGE_NAME);
        return [];
    }
}

export function setCartToStorage(cart: ICartItem[]): void {
    if (!isBrowser) return;
    const validatedCart = validateCart(cart);
    localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(validatedCart));
}

function validateCart(cart: ICartItem[]): ICartItem[] {
    const allowedKeys: Array<keyof ICartItem> = ['id', 'qty', 'size', 'discount', 'image', 'price', 'title', 'type'];
    const transformedCart = cart.map((cartItem) => (pick(cartItem, allowedKeys)));

    const filteredCart = transformedCart.filter((cartItem) => (
        allowedKeys.every((allowedKey) => (
            has(cartItem, allowedKey)
        ))
    ));

    return filteredCart;
}
