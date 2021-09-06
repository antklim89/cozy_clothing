import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Container } from '~/components/Container';
import { Features } from '~/components/Features';
import { Hero } from '~/components/Hero/Hero';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';
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
            <Container bottomSpace="sm" component="section" topSpace="xl">
                <Title>New Products</Title>
                <ProductList products={newProducts} />
            </Container>
            <Features />
            <Container bottomSpace="sm" component="section">
                <Title>Discount Products</Title>
                <ProductList products={promoProducts} />
            </Container>
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
