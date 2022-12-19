import type { ICartItem } from '~/components/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: ICartItem[]): string {
    const totalPrice = cart.reduce((acc, { qty, price }) => {
        return (acc + (price * qty));
    }, 0);

    return getPrice({ price: totalPrice });
}
