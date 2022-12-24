import { graphql, HeadFC, PageProps } from 'gatsby';
import { FC } from 'react';
import About from '~/layouts/About';
import Seo from '~/layouts/Seo';
import { IAbout } from '~/types/about';


interface AboutPageData {
    about: IAbout
}

const AboutPage: FC<PageProps<AboutPageData>> = ({ data: { about } }) => {
    return (
        <main>
            <About {...about} />
        </main>
    );
};

export const Head: HeadFC<AboutPageData> = ({ data: { about } }) => (
    <Seo
        description={about.body}
        title="About Shop"
    />
);

export const query = graphql`
    query AboutPage {
        about {
            body
            title
            image {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            chooseUs {
                title
                text
                image {
                    childImageSharp {
                        gatsbyImageData(width: 100, height: 100)
                    }
                }
            }
        }
    }
`;

export default AboutPage;
