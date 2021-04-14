import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { CategoryPage, CategoryPagePropTypes } from '~/components/CategoryPage';
import { Seo } from '~/components/Seo';
import { throwErr } from '~/utils';


const category: FC<PageProps<GatsbyTypes.CategoryPageQuery, CategoryPagePropTypes>> = ({
    pageContext,
    data,
}) => {
    if (!data.allMarkdownRemark.nodes) throw new Error();

    const products = data.allMarkdownRemark.nodes.map((i) => ({
        id: i.id || throwErr(),
        title: i.frontmatter?.title || throwErr(),
        price: i.frontmatter?.price || throwErr(),
        type: i.frontmatter?.category?.type || throwErr(),
        image: i.frontmatter?.image?.childImageSharp?.gatsbyImageData || throwErr(),
    }));

    return (
        <main>
            <Seo
                title="Home"
            />
            <CategoryPage
                categories={pageContext.categories}
                products={products}
                type={pageContext.type}
            />
        </main>
    );
};

export const query = graphql`
  query CategoryPage($type: String) {
    allMarkdownRemark(filter: {frontmatter: {category: {type: {eq: $type}}}}) {
      nodes {
        frontmatter {
          title
          category {
            type
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

export default category;
