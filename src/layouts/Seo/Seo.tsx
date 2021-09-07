import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps, SeoQuery } from './Seo.types';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    keywords = [],
    title = 'Page',
}) => {
    const { info } = useStaticQuery<SeoQuery>(graphql` 
        query InfoQuery {
            info {
                description
                author
                title
            }
        }
    `);

    const metaDescription = `${info.description} ${description || ''}`.trim();
    const defaultTitle = info.title;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[
                ...meta,
                {
                    name: 'keywords',
                    content: ['clothing', 'shop', ...keywords].join(', '),
                },
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: info.author || '',
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ]}
            title={title}
            titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
        >
            {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" type="text/javascript" /> */}
        </Helmet>
    );
};
