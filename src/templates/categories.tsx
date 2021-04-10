import { Page } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const product: FC<Page> = ({ path, context }) => {
    console.debug('||context: \n', context);
    return (
        <main>
            <Seo
                title="Home"
            />
            Page
            {' '}
            {path}
        </main>
    );
};

export default product;
