import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import * as yup from 'yup';

import styles from './Hero.module.scss';

import { Title } from '~/components/Title';
import { heroSchema } from '~/validation';


export const Hero: FC = () => {
    const { json } = useStaticQuery<any>(graphql`
        query Hero {
            json: hero {
                title
                body
                image {
                    a:childImageSharp {
                        b:gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
                            transformOptions: {cropFocus: CENTER}
                            breakpoints: [380, 640]
                            width: 1440
                            height: 640
                        )
                    }
                }
            }
        }
    `);

    const data = yup.object(heroSchema).validateSync(json);

    return (
        <section className={styles.root}>
            <GatsbyImage alt={data.title} className={styles.image} image={data.image} />
            <div className={styles.body}>
                <Title position="left">{data.title}</Title>
                <p className="hide-sm">{data.body}</p>
            </div>
        </section>
    );
};
