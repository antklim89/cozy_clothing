import { FC } from 'react';

import styles from './Footer.module.scss';

import { Container } from '~/components/Container';


export const Footer: FC = () => {
    return (
        <footer className={styles.root}>
            <Container>
                <p>Copyright @ Devitems All right reserved </p>
            </Container>
        </footer>
    );
};
