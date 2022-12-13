import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';

import InputGroup from '~/components/InputGroup';
import { IProductPreview } from '~/types';

import { SearchList } from '../SearchList';

import { SearchPropTypes } from './Search.types';


let queryMemo = '';

export const Search: FC<SearchPropTypes> = ({ publicIndexURL, publicStoreURL }) => {
    const [index, setIndex] = useState<string | null>(null);
    const [store, setStore] = useState<Record<string, IProductPreview> | null>(null);
    const [query, setQuery] = useState(queryMemo);

    useEffect(() => {
        fetch(publicIndexURL)
            .then((res) => res.text())
            .then((data) => setIndex(data));

        fetch(publicStoreURL)
            .then((res) => res.json())
            .then((data) => setStore(data));
    }, []);

    useEffect(() => {
        queryMemo = query;
    }, [query]);

    const handleSearch = useCallback(() => {
        return (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    }, []);

    return (
        <div className="container mt-3">
            <InputGroup>
                <input
                    placeholder="Enter search query..."
                    value={query}
                    onChange={handleSearch()}
                />
            </InputGroup>
            {(index && store) ? <SearchList index={index} query={query} store={store} /> : null}
        </div>
    );
};
