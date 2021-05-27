import { graphql, useStaticQuery } from 'gatsby';
import { FC, useEffect, useState } from 'react';

import { Container } from '~/components';
import { Input } from '~/components/Input';
import { Search } from '~/components/Search';
import { Seo } from '~/components/Seo';


let queryMemo = '';

export const search: FC = () => {
    const { localSearchAllProducts } = useStaticQuery(graphql`
        {
            localSearchAllProducts {
                publicStoreURL
                publicIndexURL
            }
        }
    `);

    const [index, setindex] = useState<string | null>(null);
    const [store, setStore] = useState<Record<string, unknown> | null>(null);
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

    useEffect(() => { queryMemo = query; }, [query]);

    return (
        <main>
            <Container topSpace="md">
                <Seo title="Search" />
                <Input
                    placeholder="Enter search query..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {(index && store) && (
                    <Search index={index} query={query} store={store} />
                )}
            </Container>
        </main>
    );
};

export default search;
