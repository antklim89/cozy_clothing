import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Container } from '~/components';
import { Features } from '~/components/Features';
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
            <Features />
            <Container bottomSpace="sm" component="section" topSpace="xl">
                <Title>New Products</Title>
                <ProductList products={newProducts} />
            </Container>
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
    newProducts: allMarkdownRemark(
        filter: {
            frontmatter: {
                layout: {eq: "product"},
                hidden: {eq: false},
            }
        }
        limit: 4
        sort: {
            fields: frontmatter___careatedAt,
            order: DESC
        }
    ) {
        nodes {
            id
            frontmatter {
                ...ProductFrontmatterFragment
                imagePreview {
                  ...ProductCardImageFragment
                }
            }
        }
    }

    promoProducts: allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "product"}, hidden: {eq: false}, discount: {nin: 0}}}
        limit: 4
        sort: {
            fields: frontmatter___discount,
            order: DESC
        }
    ) {
        nodes {
            id
            frontmatter {
                ...ProductFrontmatterFragment
                imagePreview {
                    ...ProductCardImageFragment
                }
            }
        }
    }
}

`;
