import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import { SeoProps } from './Seo.types';


export const Seo: FC<SeoProps> = ({
    description,
    meta = [],
    title = 'Page',
}) => {
    const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(graphql` 
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

    const metaDescription = description || site?.siteMetadata?.description;
    const defaultTitle = site?.siteMetadata?.title;
    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[
                ...meta,
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
        />
    );
};
