import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { Container } from '~/components';
import { Product } from '~/components/Product';
import { Seo } from '~/components/Seo';
import { IProduct } from '~/types';


interface ProductPageContext {
    id: string
}

interface ProductPageData {
    markdownRemark: IProduct
}


const productPage: FC<PageProps<ProductPageData, ProductPageContext>> = ({
    data: { markdownRemark: product },
}) => {
    return (
        <main>
            <Seo
                description={product.rawMarkdownBody}
                keywords={[product.frontmatter.category, product.frontmatter.type]}
                title={product.frontmatter.title}
            />
            <Container component="section" topSpace="md">
                <Product product={product} />
            </Container>
        </main>
    );
};


export const query = graphql`
    query ProductPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
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
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        placeholder: BLURRED
                    )
                }
            }
        }
        imagesPreview: images {
            image {
                childImageSharp {
                    gatsbyImageData(
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
