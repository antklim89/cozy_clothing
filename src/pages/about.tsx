import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';


const about: FC<PageProps<Required<GatsbyTypes.AboutPageQuery>>> = ({ data: { file } }) => {
    if (!file?.remark || !file.remark.frontmatter || !file.remark.frontmatter.chooseUs) {
        return null;
    }

    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage
                body={file.remark.rawMarkdownBody || ''}
                chooseUs={file.remark.frontmatter.chooseUs as [] || []}
                image={file.remark.frontmatter.image || ''}
                title={file.remark.frontmatter.title || 'Loading...'}
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
                chooseUs: choose_us {
                    title
                    text
                    image
                }
            }
            rawMarkdownBody
        }
    }
}`;

export default about;
