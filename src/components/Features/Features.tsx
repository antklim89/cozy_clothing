import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import { Container } from '../Container';

import styles from './Features.module.scss';
import featuresSchema from './Features.schema';


export const Features: FC = () => {
    const data = useStaticQuery<any>(graphql`
        query Features {
            featuresJson {
                features {
                    image {
                        a: childImageSharp {
                            b: gatsbyImageData(
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
        }
    `);

    const features = featuresSchema.validateSync(data?.featuresJson?.features);

    return (
        <Container bottomSpace="sm" component="section">
            <div className={styles.features}>
                {features.map((feature) => (
                    <section className={styles.feature} key={feature.text}>
                        <GatsbyImage alt={feature.text} image={feature.image} />
                        <h6>{feature.text}</h6>
                    </section>
                ))}
            </div>
        </Container>
    );
};
