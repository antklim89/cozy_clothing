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
    category: string().required(),
    images: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).required(),
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
    if (!data.amr.nodes) throw new Error();

    const products = schema.validateSync(data.amr.nodes.map((i) => ({
        id: i.id,
        title: i.frontmatter?.title,
        price: i.frontmatter?.price,
        type: i.frontmatter?.category?.type,
        category: i.frontmatter?.category?.name,
        images: i.frontmatter?.images,
    })));

    const title = `${capitalize(type)}${category ? ` - ${capitalize(category)}` : ''}`;

    return (
        <main>
            <Seo title={title} />
            <Container component="section">
                <Title>{type}</Title>
                <CategoriesBar categories={categories.map((i) => i.name)} type={type} />
                <ProductList products={products} />
            </Container>
        </main>
    );
};


export const query = graphql`
    query CategoryPage($type: String!, $category: String) {
        amr: allMarkdownRemark(
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
                id
                frontmatter {
                    title
                    category {
                        type
                        name
                    }
                    price
                    images {
                        image {
                            a:childImageSharp {
                                b:gatsbyImageData(
                                    layout: FIXED
                                    placeholder: BLURRED
                                    width: 272
                                    height: 390
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`;


export default categoryPage;
