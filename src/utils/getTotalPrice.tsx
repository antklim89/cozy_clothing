import type { CartItem } from '~/components/CartProvider';
import { getPrice } from '~/utils';


export function getTotalPrice(cart: CartItem[]): number {
    return cart.reduce(
        (acc, i) => {
            const price = getPrice(i.product.frontmatter.price, i.product.frontmatter.discount);
            return (acc + price * i.qty);
        }, 0,
    );
}
