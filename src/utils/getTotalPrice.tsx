import type { CartItem } from '~/components/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: CartItem[]): string {
    const totalPrice = cart.reduce((acc, cartItem) => {
        const price = getPrice({
            price: cartItem.product.price,
            discount: cartItem.product.discount,
            qty: cartItem.qty,
        });
        return (acc + Number(price));
    }, 0);
    return getPrice({ price: totalPrice });
}
