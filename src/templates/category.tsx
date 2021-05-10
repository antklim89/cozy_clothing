import { graphql, PageProps } from 'gatsby';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';

import { productPreviewArraySchema } from '../validation/productPreviewArraySchema';

import { Container } from '~/components';
import { CategoriesBar } from '~/components/CategoriesBar';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';


interface CategoryPageContext {
    type: string
    category?: string
    categories: string[]
}


const categoryPage: FC<PageProps<GatsbyTypes.CategoryPageQuery, CategoryPageContext>> = ({
    pageContext: { type, category, categories },
    data,
}) => {
    const products = productPreviewArraySchema.validateSync(data.amr.nodes.map(({ id, frontmatter }) => {
        return { id, ...frontmatter };
    }));

    const title = `${capitalize(type)}${category ? ` - ${capitalize(category)}` : ''}`;

    return (
        <main>
            <Seo title={title} />
            <Container component="section">
                <Title>{type}</Title>
                <CategoriesBar categories={categories} type={type} />
                <ProductList products={products} />
            </Container>
        </main>
    );
};


export const query = graphql`

query CategoryPage($type: String!, $category: String) {
  amr: allMarkdownRemark(
    filter: {frontmatter: {type: {eq: $type}, category: {eq: $category}, layout: {eq: "product"}, hidden: {eq: false}}}
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

fragment ProductFrontmatterFragment on MarkdownRemarkFrontmatter {
    title
    category
    hidden
    careatedAt
    slug
    promo
    type
    price
    brand
}

fragment ProductCardImageFragment on MarkdownRemarkFrontmatterImages {
    image {
        a:childImageSharp {
            b:gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 272
                height: 390
            )
        }
    }
}

`;


export default categoryPage;
