import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';
import {
    string, number, array, object, mixed, boolean,
} from 'yup';

import { Container } from '~/components';
import { CategoriesBar } from '~/components/CategoriesBar';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';


// const schema = array(object({
//     id: string().required(),
//     title: string().required(),
//     brand: string().required(),
//     price: number().required(),
//     type: string().required(),
//     category: string().required(),
//     careatedAt: string().required(),
//     hidden: boolean().required(),
//     promo: boolean().required(),
//     images: array(
//         mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
//     ).default([]).required(),
// }).transform((v, { id, frontmatter }) => ({ id, ...frontmatter }))).required();


interface ProductPageContext {
    id: string
}


const productPage: FC<PageProps<any, ProductPageContext>> = ({
    pageContext,
    data,
}) => {
    return (
        <main>
            {pageContext.id}
        </main>
    );
};


// export const query = graphql`
//     query CategoryPage($type: String!, $category: String) {
//         amr: allMarkdownRemark(
//             filter: {
//                 frontmatter: {
//                     type: {eq: $type}
//                     category: {eq: $category}
//                     layout: {eq: "product"}
//                     hidden: {eq: false}
//                 }
//             }
//         ) {
//             nodes {
//                 id
//                 frontmatter {
//                     title
//                     category
//                     hidden
//                     careatedAt
//                     slug
//                     promo
//                     type
//                     price
//                     brand
//                     images {
//                         image {
//                             a:childImageSharp {
//                                 b:gatsbyImageData(
//                                     layout: CONSTRAINED
//                                     placeholder: BLURRED
//                                     width: 272
//                                     height: 390
//                                 )
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;


export default productPage;
