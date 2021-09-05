import { graphql, useStaticQuery } from 'gatsby';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import { Container } from '~/components/Container';
import { Input } from '~/components/Input';
import { Search } from '~/components/Search';
import { Seo } from '~/components/Seo';
import { IProductPreview } from '~/types';


let queryMemo = '';

export const SearchPage: FC = () => {
    const { localSearchAllProducts } = useStaticQuery(graphql`
        {
            localSearchAllProducts {
                publicStoreURL
                publicIndexURL
            }
        }
    `);

    const [index, setindex] = useState<string | null>(null);
    const [store, setStore] = useState<Record<string, IProductPreview> | null>(null);
    const [query, setQuery] = useState(queryMemo);

    useEffect(() => {
        if (localSearchAllProducts?.publicIndexURL) {
            fetch(localSearchAllProducts.publicIndexURL)
                .then((res) => res.text())
                .then((data) => setindex(data));
        }

        if (localSearchAllProducts?.publicStoreURL) {
            fetch(localSearchAllProducts.publicStoreURL)
                .then((res) => res.json())
                .then((data) => setStore(data));
        }
    }, []);

    useEffect(() => {
        queryMemo = query;
    }, [query]);

    const handleSearch = useCallback(() => {
        return (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    }, []);

    return (
        <main>
            <Container topSpace="md">
                <Seo title="Search" />
                <Input
                    placeholder="Enter search query..."
                    value={query}
                    onChange={handleSearch()}
                />
                {(index && store) && (
                    <Search index={index} query={query} store={store} />
                )}
            </Container>
        </main>
    );
};

export default SearchPage;
