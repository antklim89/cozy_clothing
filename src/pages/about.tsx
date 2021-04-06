import { AboutPage } from '~/components';
import { Seo } from '~/components/Seo';


const about = () => {
    return (
        <main>
            <Seo
                title="About Shop"
            />
            <AboutPage />
        </main>
    );
};

export default about;
