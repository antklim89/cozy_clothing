import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Container } from '~/components';
import { Product } from '~/components/Product';
import { Seo } from '~/components/Seo';
import { IProduct } from '~/types';
import { throwErr } from '~/utils';
import { productSchema } from '~/validation/productSchema';


interface ProductPageContext {
    id: string
}


const productPage: FC<PageProps<GatsbyTypes.ProductPageQuery, ProductPageContext>> = ({
    data,
}) => {
    const { rawMarkdownBody, id } = data?.amr || throwErr();
    const frontmatter = data?.amr?.frontmatter || throwErr();

    const product: IProduct = productSchema.validateSync({
        ...frontmatter,
        rawMarkdownBody,
        id,
    });

    return (
        <main>
            <Seo
                description={product.rawMarkdownBody}
                keywords={[product.category, product.type]}
                title={product.title}
            />
            <Container component="section" topSpace="md">
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
                        layout: CONSTRAINED
                        placeholder: BLURRED
                    )
                }
            }
        }
        imagesPreview: images {
            image {
                a:childImageSharp {
                    b:gatsbyImageData(
                        layout: CONSTRAINED
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
