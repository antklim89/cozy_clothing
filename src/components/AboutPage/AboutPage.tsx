import { GatsbyImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './AboutPage.module.scss';
import { AboutPagePropTypes } from './AboutPage.types';

import { Container } from '~/components/Container';
import { Title } from '~/components/Title';


export const AboutPage: FC<AboutPagePropTypes> = ({
    title, body, image, chooseUs,
}) => {
    return (
        <>
            <Container bottomSpace="xl" component="section" topSpace="md">
                <Title>{title}</Title>
                <article className={styles.aboutContainer}>
                    <div className={styles.aboutItem}>
                        <GatsbyImage alt="about" image={image} />
                    </div>
                    <div className={styles.aboutItem}>
                        <ReactMarkdown source={body} />
                    </div>
                </article>
            </Container>

            <Container component="section">
                <Title>Why Choose Us</Title>
                <div className={styles.chooseUsContainer}>
                    {chooseUs.map((item) => (
                        <article className={styles.chooseUsItem} key={item.title}>
                            <GatsbyImage
                                alt={item.title}
                                image={item.image}
                            />
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </>
    );
};
