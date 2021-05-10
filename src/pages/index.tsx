import { FC } from 'react';

// import { Container } from '~/components';
import { Hero } from '~/components/Hero/Hero';
import { Seo } from '~/components/Seo';


const index: FC = () => {
    return (
        <main>
            <Seo
                title="Home"
            />
            <Hero />
            {/* <Container>
            </Container> */}
        </main>
    );
};

export default index;
