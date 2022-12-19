import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import Search from '~/layouts/Search';
import Seo from '~/layouts/Seo';


interface SearchPageData {
    localSearchAllProducts: {
        publicStoreURL: string
        publicIndexURL: string
    }
}


export const SearchPage: FC<PageProps<SearchPageData>> = ({ data: { localSearchAllProducts } }) => {
    return (
        <main>
            <Seo title="Search" />
            <div className="container mt-3">
                <Search {...localSearchAllProducts} />
            </div>
        </main>
    );
};

export default SearchPage;


export const query = graphql`
    query SearchQuery {
        localSearchAllProducts {
            publicStoreURL
            publicIndexURL
        }
    }
`;
