import { PageProps } from 'gatsby';
import { FC } from 'react';

import { CategoryPage, CategoryPagePropTypes } from '~/components/CategoryPage';
import { Seo } from '~/components/Seo';


const category: FC<PageProps<unknown, CategoryPagePropTypes>> = ({ pageContext }) => {
    return (
        <main>
            <Seo
                title="Home"
            />
            <CategoryPage categories={pageContext.categories} type={pageContext.type} />
        </main>
    );
};

export default category;
