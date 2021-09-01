import { graphql, PageProps } from 'gatsby';
import { FC } from 'react';

import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';
import { aboutSchema } from '~/validation';


const about: FC<PageProps<any>> = ({ data }) => {
    const {
        body, chooseUs, image, title,
    } = aboutSchema.validateSync(data.aboutJson);

    return (
        <main>
            <Seo
                description={body}
                title="About Shop"
            />
            <AboutPage
                body={body}
                chooseUs={chooseUs}
                image={image}
                title={title}
            />
        </main>
    );
};

export const query = graphql`
    query AboutPage {
        aboutJson {
            body
            title
            image {
                childImageSharp {
                    gatsbyImageData(width: 500, height: 500)
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

export default about;
