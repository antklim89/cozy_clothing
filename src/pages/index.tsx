import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Container } from '~/components';
import { Hero } from '~/components/Hero/Hero';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';
import { productPreviewArraySchema } from '~/validation';


const index: FC<PageProps<AnyObject>> = ({ data }) => {
    const newProducts = productPreviewArraySchema.validateSync(
        data.newProducts.nodes.map(({ id, frontmatter }: AnyObject) => ({ id, ...frontmatter })),
    );
    const promoProducts = productPreviewArraySchema.validateSync(
        data.promoProducts.nodes.map(({ id, frontmatter }: AnyObject) => ({ id, ...frontmatter })),
    );

    return (
        <main>
            <Seo title="Home" />
            <Hero />
            <Container bottomSpace="sm">
                <Title>New Products</Title>
                <ProductList products={newProducts} />
            </Container>
            <Container bottomSpace="sm">
                <Title>Promo Products</Title>
                <ProductList products={promoProducts} />
            </Container>
        </main>
    );
};

export default index;


export const query = graphql`

query IndexPage {
    newProducts: allMarkdownRemark(
        filter: {
            frontmatter: {
                layout: {eq: "product"},
                hidden: {eq: false},
            }
        }
        limit: 4
        sort: {
            fields: frontmatter___careatedAt
        }
    ) {
    nodes {
        id
        frontmatter {
            ...ProductFrontmatterFragment
                images {
                    ...ProductCardImageFragment
                }
            }
        }
    }
    promoProducts: allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "product"}, hidden: {eq: false}, discount: {eq: 0}}}
        limit: 4
        sort: {fields: id}
    ) {
        nodes {
            id
            frontmatter {
                ...ProductFrontmatterFragment
                images {
                ...ProductCardImageFragment
                }
            }
        }
    }
}

`;
