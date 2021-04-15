import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import style from './NavBar.module.scss';

import { Catalog } from '~/components/Layout/Header/Catalog';
import { productTypes } from '~/constants';


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
                            />
                        </Link>
                    </li>
                    <li className="hide-xs">
                        <Link
                            activeClassName={style.active}
                            className={style.link}
                            to="/"
                        >
                            home
                        </Link>
                    </li>
                    {productTypes.map((type) => (
                        <li className="hide-sm" key={type}>
                            <Link
                                partiallyActive
                                activeClassName={style.active}
                                className={style.link}
                                to={`/category/${type}`}
                            >
                                {type}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            partiallyActive
                            activeClassName={style.active}
                            className={style.link}
                            to="/about"
                        >
                            about
                        </Link>
                    </li>
                    <li className="grow" />
                    <Catalog activeLinksClassName={style.active} linksClassName={style.link} />
                </ul>
            </nav>
        </div>
    );
};
