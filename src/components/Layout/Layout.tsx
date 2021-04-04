import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

import styles from './Layout.module.scss';
import { LayoutPropTypes } from './Layout.types';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';


export const Layout: FC<LayoutPropTypes> = ({
    description,
    meta = [],
    title = 'Page',
    children,
    container = false,
}) => {
    const { site } = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql` 
        query Layout {
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
        <>
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
            <div className={styles.root}>
                <Header />
                <main className={container ? 'container' : undefined}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};
