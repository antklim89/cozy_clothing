import { IGatsbyImage, IProduct, IProductPreview, Sizes } from '~/types';


export interface ICartItem {
    id: string
    qty: number
    size: Sizes
    title: string
    type: string
    image: IGatsbyImage
    price: number
    discount: number

}

export interface CartContext {
    cart: ICartItem[]
    addToCart: (cartItem: ICartItem) => void
    removeFromCart: (cartItem: ICartItem) => void
    updateCartItem: (id: string, itemToUpdate: Partial<ICartItem>) => void
    getCartItem: (product: IProduct | IProductPreview) => ICartItem
}

