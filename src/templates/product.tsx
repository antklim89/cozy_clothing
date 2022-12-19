import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Product } from '~/layouts/Product';
import { Seo } from '~/layouts/Seo';
import { IProduct } from '~/types';


interface ProductPageContext {
    id: string
}

interface ProductPageData {
    product: IProduct
}


const productPage: FC<PageProps<ProductPageData, ProductPageContext>> = ({ data: { product } }) => {
    return (
        <main>
            <Seo
                description={product.body}
                keywords={[product.category, product.type]}
                title={product.title}
            />
            <Product {...product} />
        </main>
    );
};


export const query = graphql`
    query ProductPage($id: String!) {
        product(id: {eq: $id}) {
            id
            body
            ...BaseProductFragment
            images {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                    )
                }
            }
            imagesPreview: images {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        width: 170
                        height: 120
                    )
                }
            }
        }
    }
`;

export default productPage;
