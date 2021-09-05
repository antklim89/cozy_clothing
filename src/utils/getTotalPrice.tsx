import type { CartItem } from '~/components/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: CartItem[]): number {
    return cart.reduce((acc, i) => {
        const price = getPrice(i.product.price, i.product.discount);
        return (acc + price * i.qty);
    }, 0);
}
