import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import style from './AboutPage.module.scss';
import { AboutPagePropTypes } from './AboutPage.types';


export const AboutPage: FC<AboutPagePropTypes> = ({ title, body: html }) => {
    return (
        <section className={style.root}>
            <h1>{title}</h1>
            <ReactMarkdown source={html} />
        </section>
    );
};
