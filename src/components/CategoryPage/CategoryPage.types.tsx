import { Product } from '~/components/ProductCard';


export interface CategoryPagePropTypes {
    type: string
    categories: Array<{
        name: string
        type: string
    }>
    products: Array<Product>
}
