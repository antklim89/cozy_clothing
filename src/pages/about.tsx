import { graphql, PageProps, useStaticQuery } from 'gatsby';
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
                title={file?.remark?.frontmatter?.title || 'Loadin...'}
            />
        </main>
    );
};

export default about;
export const query = graphql`
  query AboutPage {
    file(name: {eq: "about"}) {
      remark: childMarkdownRemark {
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }`;
