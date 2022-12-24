import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { SearchPropTypes } from './Search.types';
import SearchList from './SearchList';
import Input from '~/components/Input';
import { IProductPreview } from '~/types';


let queryMemo = '';

const Search: FC<SearchPropTypes> = ({ publicIndexURL, publicStoreURL }) => {
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
            <Input
                placeholder="Enter search query..."
                value={query}
                onChange={handleSearch()}
            />
            {(index && store) ? <SearchList index={index} query={query} store={store} /> : null}
        </div>
    );
};

export default Search;
