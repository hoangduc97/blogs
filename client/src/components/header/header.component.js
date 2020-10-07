import React from 'react';
import ImageLink from '../link/imageLink/image_link.component';
import NavbarLink from '../link/navbarLink/navbar_link.component';
import './header.scss';

const Header = (props) => {
    return (
        <header>
            <div className="header__logo">
                <ImageLink to="/" href={<h1>Logo</h1>} alt={'Logo'} />
            </div>
            <nav className="header__navbar">
                <ul className="navbar__menu">
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/article"
                            label={'Articles'}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/book"
                            label={'Books'}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/tutorial"
                            label={'Tutorials'}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/project"
                            label={'Projects'}
                        />
                    </li>
                </ul>
                <ul className="navbar__auth">
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/signin"
                            label={'Signin'}
                        />
                    </li>
                    <li>
                        <NavbarLink
                            className="navbar--item"
                            to="/signup"
                            label={'Signup'}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
