import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './Features.module.scss';
import { FeaturesQuery } from './Features.types';

import { Container } from '~/components/Container';


export const Features: FC = () => {
    const { features } = useStaticQuery<FeaturesQuery>(graphql`
        query Features {
            features {
                image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED,
                            width: 60,
                            height: 70,
                            layout: FIXED
                        )
                    }
                }
                text
            }
        }
    `);

    return (
        <Container bottomSpace="sm" component="section">
            <div className={styles.features}>
                {features.map((feature) => (
                    <section className={styles.feature} key={feature.text}>
                        <GatsbyImage alt={feature.text} image={feature.image.childImageSharp.gatsbyImageData} />
                        <h6>{feature.text}</h6>
                    </section>
                ))}
            </div>
        </Container>
    );
};
