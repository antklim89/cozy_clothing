import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import styles from './Hero.module.scss';
import { HeroQuery } from './Hero.types';

import { Title } from '~/components/ui/Title';


export const Hero: FC = () => {
    const { hero } = useStaticQuery<HeroQuery>(graphql`
        query Hero {
            hero {
                title
                body
                image {
                    childImageSharp {
                        gatsbyImageData(
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


    return (
        <section className={styles.root}>
            <GatsbyImage alt={hero.title} className={styles.image} image={hero.image.childImageSharp.gatsbyImageData} />
            <div className={styles.body}>
                <Title position="left">{hero.title}</Title>
                <p className="hide-sm">{hero.body}</p>
            </div>
        </section>
    );
};
