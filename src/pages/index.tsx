import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Title } from '~/components/Title';
import { Features } from '~/layouts/Features';
import { Hero } from '~/layouts/Hero/Hero';
import { ProductList } from '~/layouts/ProductList';
import { Seo } from '~/layouts/Seo';
import { IProductPreview } from '~/types';


interface IndexPageData {
    newProducts: {
        nodes: IProductPreview[]
    }
    promoProducts: {
        nodes: IProductPreview[]
    }
}

const index: FC<PageProps<IndexPageData>> = ({ data }) => {
    const newProducts = data.newProducts.nodes;
    const promoProducts = data.promoProducts.nodes;


    return (
        <main>
            <Seo title="Home" />
            <Hero />
            <section className="container mb-2 mt-5">
                <Title>New Products</Title>
                <ProductList products={newProducts} />
            </section>
            <Features />
            <section className="container mb-2">
                <Title>Discount Products</Title>
                <ProductList products={promoProducts} />
            </section>
        </main>
    );
};

export default index;


export const query = graphql`
    query IndexPage {
        newProducts: allProduct(
            filter: {
                layout: {eq: "product"},
                hidden: {eq: false},
            }
            limit: 4
            sort: {
                fields: careatedAt,
                order: DESC
            }
        ) {
            nodes {
                id
                ...BaseProductFragment
                imagePreview {
                ...ProductCardImageFragment
                }
            }
        }

        promoProducts: allProduct(
            filter: {
                layout: {
                    eq: "product"
                },
                hidden: {
                    eq: false
                },
                discount: {
                    nin: 0
                }
            }
            limit: 4
            sort: {
                fields: discount,
                order: DESC
            }
        ) {
            nodes {
                id
                ...BaseProductFragment
                imagePreview {
                    ...ProductCardImageFragment
                }
            }
        }
    }
`;
