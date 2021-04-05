// import { Link } from 'gatsby';

import { Page } from 'gatsby';
import { FC } from 'react';

import { Layout } from '~/components/Layout/Layout';


const Prodyuct: FC<Page> = ({ path }) => {
    return (
        <Layout title="Page">
            <div>
                Page
                {' '}
                {path}
            </div>
        </Layout>
    );
};

export default Prodyuct;
