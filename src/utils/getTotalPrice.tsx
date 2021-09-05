import type { CartItem } from '~/components/cart/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: CartItem[]): number {
    return cart.reduce((acc, cartItem) => {
        const price = getPrice(cartItem.product.price, cartItem.product.discount);
        return (acc + (price * cartItem.qty));
    }, 0);
}
