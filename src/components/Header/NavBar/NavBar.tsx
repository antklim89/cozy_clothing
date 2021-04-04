import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';


import style from './NavBar.module.scss';


export const NavBar = () => {
    return (
        <div className={style.root}>
            <nav className="container">
                <ul className={style.nav}>
                    <li className={style.logo}>
                        <StaticImage
                            alt="logo"
                            formats={['webp']}
                            layout="fixed"
                            placeholder="blurred"
                            src="./logo.png"
                            width={100}
                        />
                    </li>
                    <li>
                        <Link className={style.nav__link} to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link className={style.nav__link} to="/men">
                            men
                        </Link>
                    </li>
                    <li>
                        <Link className={style.nav__link} to="/women">
                            women
                        </Link>
                    </li>
                    <li>
                        <Link className={style.nav__link} to="/children">
                            children
                        </Link>
                    </li>
                    <li>
                        <Link className={style.nav__link} to="/about">
                            about
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
