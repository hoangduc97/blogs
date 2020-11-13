import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import CustomLink from '../link/customLink/custom_link.component';
import NavbarLink from '../link/navbarLink/navbar_link.component';
import './header.scss';

const Header = (props) => {
    const personal = useRouteMatch({ path: '/resume' }) ? 'resume' : 'home';
    const navbar_list = ['article', 'book', 'tutorial', 'project', 'resume'];

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
                    <ul className="navbar__menu">
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
                </nav>
            </div>
        </header>
    );
};

export default Header;
