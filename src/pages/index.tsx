import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';
import Title from '~/components/Title';
import Features from '~/layouts/Features';
import Hero from '~/layouts/Hero/Hero';
import ProductList from '~/layouts/ProductList';
import Seo from '~/layouts/Seo';
import { IProductPreview } from '~/types';


interface IndexPageData {
    newProducts: {
        nodes: IProductPreview[]
    }
    promoProducts: {
        nodes: IProductPreview[]
    }
}

const HomePage: FC<PageProps<IndexPageData>> = ({ data }) => {
    const newProducts = data.newProducts.nodes;
    const promoProducts = data.promoProducts.nodes;


    return (
        <main>
            <Hero />
            <section className="container mb-2 mt-5">
                <Title component="h2">New Products</Title>
                <ProductList products={newProducts} />
            </section>
            <Features />
            <section className="container mb-2">
                <Title component="h2">Discount Products</Title>
                <ProductList products={promoProducts} />
            </section>
        </main>
    );
};

export default HomePage;


export const Head = () => (
    <Seo title="Home" />
);

export const query = graphql`
    query IndexPage {
        newProducts: allProduct(
            filter: {
                layout: {eq: "product"},
                hidden: {eq: false},
            }
            limit: 4
            sort: { createdAt: DESC }
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
            sort: { discount: DESC }
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
