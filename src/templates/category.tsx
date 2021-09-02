import { graphql, PageProps } from 'gatsby';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';

import { Container } from '~/components';
import { CategoriesBar } from '~/components/CategoriesBar';
import { Pagination } from '~/components/Pagination';
import { ProductList } from '~/components/ProductList';
import { Seo } from '~/components/Seo';
import { Title } from '~/components/Title';
import { IPagination, IProductPreview } from '~/types';


interface CategoryPageContext extends IPagination {
    type: string
    category?: string
    categories: string[]
}

interface CategoryPageData {
    allMarkdownRemark: {
        nodes: IProductPreview[]
    }
}


const categoryPage: FC<PageProps<CategoryPageData, CategoryPageContext>> = ({
    pageContext: {
        category, type, categories, ...paginationContext
    },
    data: {
        allMarkdownRemark: { nodes: products },
    },
}) => {
    const title = `${capitalize(type)}${category ? ` - ${capitalize(category)}` : ''}`;

    return (
        <main>
            <Seo keywords={[...categories, type]} title={title} />
            <Container component="section" topSpace="md">
                <Title>{type}</Title>
                <CategoriesBar categories={categories} type={type} />
                <Pagination {...paginationContext} />
                <ProductList products={products} />
                <Pagination {...paginationContext} />
            </Container>
        </main>
    );
};


export const query = graphql`

query CategoryPage($type: String!, $category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: {frontmatter: {
            type: {eq: $type},
            category: {eq: $category},
            layout: {eq: "product"},
            hidden: {eq: false}
        }
    }
        sort: {
            fields: frontmatter___careatedAt,
            order: DESC
        }
        skip: $skip
        limit: $limit
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
  
  fragment ProductFrontmatterFragment on MarkdownRemarkFrontmatter {
        title
        category
        hidden
        careatedAt
        discount
        type
        price
  }
  
    fragment ProductCardImageFragment on File {
        childImageSharp {
            gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 272
                height: 390
            )
        }
    }
  

`;


export default categoryPage;
