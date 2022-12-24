import { HeadFC, Link } from 'gatsby';
import { FC } from 'react';

import Seo from '~/layouts/Seo';


const NotFoundPage: FC = () => (
    <main className="center">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Go Home</Link>
    </main>
);

export const Head: HeadFC = () => (
    <Seo title="404: Not found" />
);

export default NotFoundPage;
