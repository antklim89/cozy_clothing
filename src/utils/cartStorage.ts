import { CartItem } from '~/components/CartProvider';


const CART_STORAGE_NAME = 'cart';
const isBrowser = typeof window !== 'undefined';


export function getCart(): CartItem[] {
    if (!isBrowser) return [];
    const cartString = localStorage.getItem(CART_STORAGE_NAME);
    if (!cartString) return [];

    try {
        const cart = JSON.parse(cartString);
        if (validateCart(cart)) return cart;
        return [];
    } catch (error) {
        localStorage.removeItem(CART_STORAGE_NAME);
        return [];
    }
}

export function setCart(cart: CartItem[]): void {
    if (!isBrowser) return;
    const cartTransformed = cart.map(({ id, product, qty, size }) => ({ id, product, qty, size }));
    localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cartTransformed));
}

function validateCart(cart: CartItem[]): boolean {
    return cart.map(({ id, product, qty, size }) => id && product && qty && size).every((item) => item);
}
