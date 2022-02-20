import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './About.module.scss';

import { Title } from '~/components/Title';
import { IAbout } from '~/types';


export const About: FC<IAbout> = ({ title, body, image, chooseUs }) => {
    return (
        <>
            <section className="container mb-5 mt-3">
                <Title>{title}</Title>
                <article className={styles.aboutContainer}>
                    <div className={styles.aboutImage}>
                        <GatsbyImage alt="about" image={image.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className={styles.aboutText}>
                        <ReactMarkdown source={body} />
                    </div>
                </article>
            </section>

            <section className="container">
                <Title component="h2">Why Choose Us</Title>
                <div className={styles.chooseUsContainer}>
                    {chooseUs.map((item) => (
                        <article className={styles.chooseUsItem} key={item.title}>
                            <GatsbyImage
                                alt={item.title}
                                image={item.image.childImageSharp.gatsbyImageData}
                            />
                            <h5 className="mb-2">{item.title}</h5>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};
