// import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './AboutPage.module.scss';
import { AboutPagePropTypes } from './AboutPage.types';

import { Container } from '~/components/Container';
import { Title } from '~/components/Title';


export const AboutPage: FC<AboutPagePropTypes> = ({ title, body, image }) => {
    return (
        <Container className={styles.root} component="section">
            <Title>{title}</Title>
            <article className={styles.content}>
                <div>
                    <img alt={title} src={image} width={200} />
                </div>
                <div>
                    <ReactMarkdown source={body} />
                </div>
            </article>
            {/* <StaticImage
                alt={title}
                formats={['webp']}
                layout="constrained"
                placeholder="blurred"
                src={image}
            /> */}
        </Container>
    );
};
