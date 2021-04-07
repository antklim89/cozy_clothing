// import { StaticImage } from 'gatsby-plugin-image';
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
            <Container className={styles.root} component="section">
                <Title>{title}</Title>
                <article className={styles.aboutContainer}>
                    <div className={styles.aboutItem}>
                        <img alt={title} src={image} />
                    </div>
                    <div className={styles.aboutItem}>
                        <ReactMarkdown source={body} />
                    </div>
                </article>
            </Container>

            <Container className={styles.root} component="section">
                <Title>Why Choose Us</Title>
                <article className={styles.chooseUsContainer}>
                    {chooseUs.map((item) => (
                        <div className={styles.chooseUsItem} key={item.title}>
                            <img alt={item.title} src={item.image} width={200} />
                            <h5>{item.title}</h5>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </article>
            </Container>
        </>
    );
};
