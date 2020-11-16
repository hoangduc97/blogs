import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import CustomLink from '../link/customLink/custom_link.component';
import NavbarLink from '../link/navbarLink/navbar_link.component';
import './header.scss';

const Header = (props) => {
    const [toggle, setToggle] = useState(false);
    const personal = useRouteMatch({ path: '/resume' }) ? 'resume' : 'home';
    const navbar_list = ['article', 'book', 'tutorial', 'project', 'resume'];
    const menu_toggle = () => setToggle(!toggle);

    return (
        <header id="header">
            <div className="header__container">
                <div className="header__logo">
                    <p className="header__logo--primary">
                        <CustomLink to={'/'}>Zrik</CustomLink>
                    </p>
                    <span className="header__logo--split"></span>
                    <p className="header__logo--secondary">
                        personal {personal}
                    </p>
                </div>
                <nav className="header__navbar">
                    <ul
                        className={
                            'navbar__menu' +
                            (toggle ? '' : ' navbar__menu--active')
                        }
                    >
                        {navbar_list.map((element, index) => (
                            <NavbarLink
                                key={index}
                                className="navbar--item"
                                to={'/' + element}
                                label={element}
                            />
                        ))}
                    </ul>
                    <div className="navbar__auth">
                        <CustomLink
                            to={'/signin'}
                            className="navbar--item navbar__auth--menu"
                        >
                            <FaUser />
                        </CustomLink>
                    </div>
                    <button
                        className={
                            'header__navbar--menu' +
                            (toggle ? ' header__navbar--opened' : '')
                        }
                        onClick={menu_toggle}
                        aria-label="Main Menu"
                    >
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
