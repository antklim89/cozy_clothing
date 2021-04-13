import style from './TopBar.module.scss';

import { Button } from '~/components/Button';


export const TopBar = () => {
    // const APIUrl = process.env.URL || 'https://cozy-clothing.netlify.app';
    // const handleIndentity = async () => {
    //     const { default: netlifyIdentity } = await import('netlify-identity-widget');

    //     netlifyIdentity.init({
    //         APIUrl,
    //         container: '#netlify-modal',
    //         locale: 'en',
    //     });

    //     netlifyIdentity.open('login');
    // };

    return (
        <div className={style.root}>
            <div className="container">
                <Button color="white">login/register</Button>
                {/* <Button color="white" onClick={handleIndentity}>login/register</Button> */}
            </div>
        </div>
    );
};
