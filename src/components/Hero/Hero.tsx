import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import * as yup from 'yup';

import styles from './Hero.module.scss';

import { Title } from '~/components/Title';
import { heroSchema } from '~/validation';


export const Hero: FC = () => {
    const { json } = useStaticQuery<GatsbyTypes.HeroQuery>(graphql`
        query Hero {
            json: heroJson {
                title
                body
                image {
                    a:childImageSharp {
                        b:gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
                            height: 700
                            width: 1920
                            transformOptions: {cropFocus: CENTER}
                        )
                    }
                }
            }
        }
    `);

    const data = yup.object(heroSchema).validateSync(json);

    return (
        <section className={styles.root}>
            <GatsbyImage alt={data.title} image={data.image} />
            <div className={styles.body}>
                <Title>{data.title}</Title>
                <p className="hide-sm">{data.body}</p>
            </div>
        </section>
    );
};
