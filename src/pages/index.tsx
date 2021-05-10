import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Hero } from '~/components/Hero/Hero';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';
import { productPreviewArraySchema } from '~/validation';


const index: FC<PageProps<AnyObject>> = ({ data }) => {
    const newProducts = productPreviewArraySchema.validateSync(
        data.newProducts.nodes.map(({ id, frontmatter }: AnyObject) => ({ id, ...frontmatter })),
    );

    return (
        <main>
            <Seo
                title="Home"
            />
            <Hero />
            <Title>New Products</Title>
            <ProductList products={newProducts} />
        </main>
    );
};

export default index;


export const query = graphql`

query IndexPage {
    newProducts: allMarkdownRemark(
        filter: {
            frontmatter: {
                type: {},
                layout: {eq: "product"},
                hidden: {eq: false},
                category: {}
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
}

`;
