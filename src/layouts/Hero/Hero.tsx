import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import styles from './Hero.module.scss';
import { HeroQuery } from './Hero.types';


const Hero: FC = () => {
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
                            webpOptions: {quality: 70}
                            width: 1440
                            height: 440
                        )
                    }
                }
            }
        }
    `);

    return (
        <section className={styles.root}>
            <div className={styles.image} >
                <GatsbyImage
                    alt="hero" image={hero.image.childImageSharp.gatsbyImageData}
                />
            </div>
            <div className={styles.gradient} />
            <div className={styles.text}>
                <h1>{hero.title}</h1>
                <p className="hide-sm">{hero.body}</p>
            </div>
        </section>
    );
};

export default Hero;
