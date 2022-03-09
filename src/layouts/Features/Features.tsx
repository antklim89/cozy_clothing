import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './Features.module.scss';
import { FeaturesQuery } from './Features.types';


export const Features: FC = () => {
    const { allFeatures: { nodes: features } } = useStaticQuery<FeaturesQuery>(graphql`
        query Features {
            allFeatures {
                nodes {
                    image {
                            childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED,
                                width: 80,
                                height: 90,
                                layout: FIXED
                            )
                        }
                    }
                    text
                }
            }
        }
    `);

    return (
        <div className={styles.bg}>
            <div className="container">
                <div className={styles.features}>
                    {features.map((feature) => (
                        <section className={styles.feature} key={feature.text}>
                            <GatsbyImage
                                alt={feature.text}
                                className={styles.image}
                                image={feature.image.childImageSharp.gatsbyImageData}
                            />
                            <h6 className={styles.text}>{feature.text}</h6>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};
