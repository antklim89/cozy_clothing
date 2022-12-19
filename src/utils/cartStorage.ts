import { ICartItem } from '~/components/CartProvider';


const CART_STORAGE_NAME = 'cart';
const isBrowser = typeof window !== 'undefined';


export function getCartFromStorage(): ICartItem[] {
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

export function setCartToStorage(cart: ICartItem[]): void {
    if (!isBrowser) return;
    const cartTransformed = cart.map(({ id, product, qty, size }) => ({ id, product, qty, size }));
    localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cartTransformed));
}

function validateCart(cart: ICartItem[]): boolean {
    return cart.map(({ id, product, qty, size }) => id && product && qty && size).every((item) => item);
}
