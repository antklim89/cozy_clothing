import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import {
    string, number, array, object, mixed, boolean,
} from 'yup';

import { Container } from '~/components';
import { Product } from '~/components/Product';
import { Seo } from '~/components/Seo';


const schema = object({
    id: string().required(),
    rawMarkdownBody: string().required(),
    title: string().required(),
    brand: string().required(),
    price: number().required(),
    type: string().required(),
    category: string().required(),
    careatedAt: string().required(),
    hidden: boolean().required(),
    promo: boolean().required(),
    images: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).default([]).required(),
    imagesPreview: array(
        mixed<IGatsbyImageData>().transform((v, o) => o.image.a.b).required(),
    ).default([]).required(),
});


interface ProductPageContext {
    id: string
}


const productPage: FC<PageProps<any, ProductPageContext>> = ({
    data,
}) => {
    const product = schema.validateSync({
        ...data.amr.frontmatter,
        rawMarkdownBody: data.amr.rawMarkdownBody,
        id: data.amr.id,
    });

    return (
        <main>
            <Seo title={product.title} />
            <Container component="section">
                <Product product={product} />
            </Container>
        </main>
    );
};


export const query = graphql`
    query ProductPage($id: String!) {
        amr: markdownRemark(id: {eq: $id}) {
            id
            rawMarkdownBody
            frontmatter {
                ...ProductFrontmatterFragment
                ...ProductImagesFragment
            }

        }
    }

    fragment ProductImagesFragment on MarkdownRemarkFrontmatter {
        images {
            image {
                a:childImageSharp {
                    b:gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                    )
                }
            }
        }
        imagesPreview: images {
            image {
                a:childImageSharp {
                    b:gatsbyImageData(
                        layout: FIXED
                        placeholder: BLURRED
                        width: 170
                        height: 120
                    )
                }
            }
        }
    }
`;

export default productPage;
