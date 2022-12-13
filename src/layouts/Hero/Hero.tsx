import { graphql, useStaticQuery } from 'gatsby';
import { FC } from 'react';

import { Title } from '~/components/Title';

import styles from './Hero.module.scss';
import { HeroQuery } from './Hero.types';


export const Hero: FC = () => {
    const { hero } = useStaticQuery<HeroQuery>(graphql`
        query Hero {
            hero {
                title
                body
                image {
                    childImageSharp {
                        fluid(fit: CONTAIN) {
                            srcWebp
                        }
                    }
                }
            }
        }
    `);

    return (
        <section
            className={styles.root}
            style={{ backgroundImage: `URL(${hero.image.childImageSharp.fluid.srcWebp})` }}
        >
            <div className={styles.gradient} />
            <div className={styles.text}>
                <Title position="left">{hero.title}</Title>
                <p className="hide-sm">{hero.body}</p>
            </div>
        </section>
    );
};
