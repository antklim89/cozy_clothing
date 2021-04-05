import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import style from './NavBar.module.scss';


export const NavBar = () => {
    return (
        <div className={style.root}>
            <nav className="container">
                <ul className={style.nav}>
                    <li className={style.logo}>
                        <Link to="/">
                            <StaticImage
                                alt="logo"
                                formats={['webp']}
                                layout="fixed"
                                placeholder="blurred"
                                src="./logo.png"
                                width={100}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName={style.active} className={style.link} to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName={style.active} className={style.link} to="/men">
                            men
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName={style.active} className={style.link} to="/women">
                            women
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName={style.active} className={style.link} to="/children">
                            children
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName={style.active} className={style.link} to="/about">
                            about
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};