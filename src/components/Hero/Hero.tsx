import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FC } from 'react';
import * as yup from 'yup';

import styles from './Hero.module.scss';

import { Container } from '~/components/Container';
import { Title } from '~/components/Title';


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

    const data = yup.object({
        title: yup.string().min(5).max(50).required(),
        body: yup.string().min(5).max(1000).required(),
        image: yup.mixed<IGatsbyImageData>().transform((v, o) => o.a.b).required(),
    }).validateSync(json);

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
