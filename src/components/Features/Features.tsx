import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import * as yup from 'yup';

import { Container } from '../Container';
import { Title } from '../Title';

import styles from './Features.module.scss';


const featuresSchema = yup.array(yup.object({
    text: yup.string().required(),
    image: yup.mixed<IGatsbyImageData>().transform((v) => v.a.b).required(),
}).required()).required();


export const Features: FC = () => {
    const data = useStaticQuery<GatsbyTypes.FeaturesQuery>(graphql`
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
                    <section className={styles.feature}>
                        <GatsbyImage alt={feature.text} image={feature.image} />
                        <h6>{feature.text}</h6>
                    </section>
                ))}
            </div>
        </Container>
    );
};
