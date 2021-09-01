import { graphql, PageProps } from 'gatsby';
import capitalize from 'lodash/capitalize';
import { FC } from 'react';

import { CategoriesBar } from '~/components/CategoriesBar';
import { Container } from '~/components/Container';
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
    allProduct: {
        nodes: IProductPreview[]
    }
}


const categoryPage: FC<PageProps<CategoryPageData, CategoryPageContext>> = ({
    pageContext: {
        category, type, categories, ...paginationContext
    },
    data: {
        allProduct: { nodes: products },
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
    allProduct(
        filter: {
            type: {eq: $type},
            category: {eq: $category},
            layout: {eq: "product"},
            hidden: {eq: false}
        }
        sort: {
            fields: careatedAt,
            order: DESC
        }
        skip: $skip
        limit: $limit
    ) {
      nodes {
        id
        ...BaseProductFragment
        imagePreview {
            ...ProductCardImageFragment
        }
      }
    }
  }
  
  fragment BaseProductFragment on Product {
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
