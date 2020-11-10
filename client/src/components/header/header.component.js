import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import CustomLink from '../link/customLink/custom_link.component';
import NavbarLink from '../link/navbarLink/navbar_link.component';
import './header.scss';

const Header = (props) => {
    const personal = useRouteMatch({ path: '/resume' }) ? "resume" : "home";
    return (
        <header id="header">
            <div className="header__container">
                <div className="header__logo">
                    <p className="header__logo--primary">
                        <CustomLink to={'/'}>Zrik</CustomLink>
                    </p>
                    <span className="header__logo--split"></span>
                    <p className="header__logo--secondary">personal home</p>
                </div>
                <nav className="header__navbar">
                    <ul className="navbar__menu">
                        <NavbarLink
                            className="navbar--item"
                            to={'/article'}
                            label={'article'}
                        />
                        <NavbarLink
                            className="navbar--item"
                            to={'/book'}
                            label={'book'}
                        />
                        <NavbarLink
                            className="navbar--item"
                            to={'/tutorial'}
                            label={'tutorial'}
                        />
                        <NavbarLink
                            className="navbar--item"
                            to={'/project'}
                            label={'project'}
                        />
                        <NavbarLink
                            className="navbar--item"
                            to={'/resume'}
                            label={'resume'}
                        />
                    </ul>
                    <ul className="navbar__auth">
                        <NavbarLink
                            className="navbar--item"
                            to={'/signin'}
                            label={'signin'}
                        />
                        <NavbarLink
                            className="navbar--item"
                            to={'/signup'}
                            label={'signup'}
                        />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
