import { PageProps } from 'gatsby';
import { FC } from 'react';

import { Seo } from '~/components/Seo';


const productType: FC<PageProps> = ({ path, pageContext }) => {
    console.debug('||props: \n', pageContext);
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

export default productType;
