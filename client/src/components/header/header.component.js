import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from '../link/navbarLink/navbar_link.component';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <Link to="/">Logo</Link>
            </div>
            <nav className="header__navbar">
                <ul className="navbar__menu">
                    <li>
                        <NavbarLink to="/article" label={'Articles'}  />
                    </li>
                    <li>
                        <NavbarLink to="/book" label={'Books'} />
                    </li>
                    <li>
                        <NavbarLink to="/tutorial" label={'Tutorials'} />
                    </li>
                    <li>
                        <NavbarLink to="/project" label={'Projects'} />
                    </li>
                </ul>
                <ul className="navbar__auth">
                    <li>
                        <NavbarLink to="/signin" label={'Signin'} />
                    </li>
                    <li>
                        <NavbarLink to="/signup" label={'Signup'} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
