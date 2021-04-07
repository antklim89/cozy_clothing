import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';


const about: FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({ data: { file } }) => {
    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage
                body={file?.remark?.rawMarkdownBody || ''}
                image={file?.remark?.frontmatter?.image || ''}
                title={file?.remark?.frontmatter?.title || 'Loading...'}
            />
        </main>
    );
};

export const query = graphql`
    query AboutPage {
        file(name: {eq: "about"}) {
            remark: childMarkdownRemark {
                frontmatter {
                title
                image
            }
            rawMarkdownBody
        }
    }
}`;

export default about;
