import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps } from './Seo.types';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    keywords = [],
    title = 'Page',
}) => {
    const { site } = useStaticQuery<any>(graphql` 
        query Seo {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `);

    const metaDescription = `${site?.siteMetadata?.description} ${description || ''}`.trim();
    const defaultTitle = site?.siteMetadata?.title;

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
                    content: site?.siteMetadata?.author || '',
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
