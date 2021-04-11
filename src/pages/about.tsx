import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';
import { throwErr } from '~/utils/throwErr';


const about: FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({ data: { file } }) => {
    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage
                body={file?.remark?.rawMarkdownBody || throwErr()}
                chooseUs={file?.remark?.frontmatter?.chooseUs?.map((item) => ({
                    text: item?.text || throwErr(),
                    title: item?.title || throwErr(),
                    image: item?.image?.childImageSharp?.gatsbyImageData || throwErr(),
                })) || throwErr()}
                image={file?.remark?.frontmatter?.image?.childImageSharp?.gatsbyImageData || throwErr()}
                title={file?.remark?.frontmatter?.title || 'About Shop'}
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
                image {
                    childImageSharp {
                        gatsbyImageData(width: 500, height: 500)
                    }
                }
                chooseUs: choose_us {
                    title
                    text
                    image {
                        childImageSharp {
                            gatsbyImageData(width: 100, height: 100)
                        }
                    }
                }
            }
            rawMarkdownBody
        }
    }
}`;

export default about;
