import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FC } from 'react';

import style from './NavBar.module.scss';

import { Button } from '~/components/Button';
import { Catalog } from '~/components/Layout/Header/Catalog';
import { productTypes } from '~/constants';


export const NavBar: FC = () => {
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
                        <Button
                            activeClassName={style.active}
                            className={style.link}
                            color="secondary"
                            component={Link}
                            to="/"
                            variant="text"
                        >
                            home
                        </Button>
                    </li>
                    {productTypes.map((type) => (
                        <li className="hide-sm" key={type}>
                            <Button
                                partiallyActive
                                activeClassName={style.active}
                                className={style.link}
                                color="secondary"
                                component={Link}
                                to={`/category/${type}`}
                                variant="text"
                            >
                                {type}
                            </Button>
                        </li>
                    ))}
                    <li>
                        <Button
                            partiallyActive
                            activeClassName={style.active}
                            className={style.link}
                            color="secondary"
                            component={Link}
                            to="/about"
                            variant="text"
                        >
                            about
                        </Button>
                    </li>
                    <li className="grow" />
                    <Catalog activeLinksClassName={style.active} linksClassName={style.link} />
                </ul>
            </nav>
        </div>
    );
};
