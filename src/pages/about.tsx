import { graphql, useStaticQuery } from 'gatsby';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';


const about = () => {
    const { file } = useStaticQuery<GatsbyTypes.AboutPageQuery>(graphql`
    query AboutPage {
        file(name: {eq: "about"}) {
            remark: childMarkdownRemark {
                frontmatter {
                    title
                }
                html
            }
        }
    }
`);
    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage
                html={file?.remark?.html || ''}
                title={file?.remark?.frontmatter?.title || 'Loadin...'}
            />
        </main>
    );
};

export default about;
