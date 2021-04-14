import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';
import {
    string, number, array, object, mixed,
} from 'yup';

import { Container } from '~/components';
import { CategoriesBar } from '~/components/CategoriesBar';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';


const schema = array(object({
    id: string().required(),
    title: string().required(),
    price: number().required(),
    type: string().required(),
    image: mixed<IGatsbyImageData>().required(),
})).required();


interface CategoryPageContext {
    type: string
    category?: string
    categories: Array<{
        name: string
        type: string
    }>
}


const categoryPage: FC<PageProps<GatsbyTypes.CategoryPageQuery, CategoryPageContext>> = ({
    pageContext: { type, category, categories },
    data,
}) => {
    if (!data.allMarkdownRemark.nodes) throw new Error();

    const products = schema.validateSync(data.allMarkdownRemark.nodes.map((i) => ({
        id: i.id,
        title: i.frontmatter?.title,
        price: i.frontmatter?.price,
        type: i.frontmatter?.category?.type,
        image: i.frontmatter?.image?.childImageSharp?.gatsbyImageData,
    })));

    const title = `${capitalize(type)}${category ? ` - ${capitalize(category)}` : ''}`;

    return (
        <main>
            <Seo title={title} />
            <Container component="section">
                <Title>{title}</Title>
                <CategoriesBar categories={categories.map((i) => i.name)} type={type} />
                <ProductList products={products} />
            </Container>
        </main>
    );
};


export const query = graphql`
    query CategoryPage($type: String!, $category: String) {
        allMarkdownRemark(
            filter: {
                frontmatter: {
                    category: {
                        type: {eq: $type},
                        name: {eq: $category},
                    },
                    layout: {eq: "product"}
                }
            }
        ) {
            nodes {
                frontmatter {
                    title
                    category {
                        type
                        name
                    }
                    price
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
            }
        }
    }
`;


export default categoryPage;
