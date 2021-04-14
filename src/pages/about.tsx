import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import * as yup from 'yup';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';


const schema = yup.object({
    rawMarkdownBody: yup.string().required(),
    frontmatter: yup.object({
        chooseUs: yup.array(yup.object({
            text: yup.string().required(),
            title: yup.string().required(),
            image: yup.mixed<IGatsbyImageData>().transform((v) => v.childImageSharp.gatsbyImageData).required(),
        })).required(),
        image: yup.mixed<IGatsbyImageData>().transform((v) => v.childImageSharp.gatsbyImageData).required(),
        title: yup.string().required(),
    }).required(),
}).transform((v) => v.file.remark).required();

const about: FC<PageProps<GatsbyTypes.AboutPageQuery>> = ({ data }) => {
    const { rawMarkdownBody, frontmatter } = schema.validateSync(data);

    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage
                body={rawMarkdownBody}
                chooseUs={frontmatter.chooseUs}
                image={frontmatter.image}
                title={frontmatter.title}
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
