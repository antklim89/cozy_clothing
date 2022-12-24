import { useStaticQuery, graphql } from 'gatsby';
import { FC } from 'react';
import { SeoProps, SeoQuery } from './Seo.types';


const Seo: FC<SeoProps> = ({
    description,
    keywords = [],
    title = 'Page',
    children,
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
        <>
            <meta content={['clothing', 'shop', ...keywords].join(', ')} name="keywords" />
            <meta content={metaDescription} name="description" />
            <meta content={title} property="og:title" />
            <meta content={metaDescription} property="og:description" />
            <meta content="website" property="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={info.author || ''} name="twitter:creator" />
            <meta content={title} name="twitter:title" />
            <meta content={metaDescription} name="twitter:description" />
            <title>{`${title} | ${defaultTitle}`}</title>
            {children}
        </>
    );
};

export default Seo;
