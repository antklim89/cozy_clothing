import { FC } from 'react';

import style from './AboutPage.module.scss';


export const AboutPage: FC = () => {
    return (
        <section className={style.root}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis inventore similique incidunt! Quidem dignissimos velit eum, est vitae illo, quam eveniet minima at, laudantium debitis deserunt totam aperiam officiis id quae? Libero deserunt reprehenderit voluptas repudiandae, culpa eaque, error eveniet alias cum nemo nisi consequuntur quas, saepe quae molestiae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis inventore similique incidunt! Quidem dignissimos velit eum, est vitae illo, quam eveniet minima at, laudantium debitis deserunt totam aperiam officiis id quae? Libero deserunt reprehenderit voluptas repudiandae, culpa eaque, error eveniet alias cum nemo nisi consequuntur quas, saepe quae molestiae.</p>
        </section>
    );
};
