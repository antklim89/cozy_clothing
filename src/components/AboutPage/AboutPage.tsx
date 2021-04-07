import { FC } from 'react';

import style from './AboutPage.module.scss';


export const AboutPage: FC<{title: string, html: string}> = ({ title, html }) => {
    return (
        <section className={style.root}>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
    );
};
