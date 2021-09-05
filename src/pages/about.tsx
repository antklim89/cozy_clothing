import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { About } from '~/components/layout/About';
import { Seo } from '~/components/layout/Seo';
import { IAbout } from '~/types/about';


interface AboutPageQuery {
    about: IAbout
}

const AboutPage: FC<PageProps<AboutPageQuery>> = ({ data: { about } }) => {
    return (
        <main>
            <Seo
                description={about.body}
                title="About Shop"
            />
            <About {...about} />
        </main>
    );
};

export const query = graphql`
    query AboutPage {
        about {
            body
            title
            image {
                childImageSharp {
                    gatsbyImageData(width: 200, height: 200, layout: FULL_WIDTH)
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
