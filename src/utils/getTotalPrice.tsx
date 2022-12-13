import type { CartItem } from '~/components/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: CartItem[]): string {
    const totalPrice = cart.reduce((acc, { qty, product }) => {
        return (acc + (product.price * qty));
    }, 0);

    return getPrice({ price: totalPrice });
}
