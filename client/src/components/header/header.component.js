import React from 'react';
import { FcMenu } from 'react-icons/all';
import ThemeLogo from '../logo/theme.logo';
import Search from './search/search.component';
import './header.scss';

const Header = (props) => {
    const { handleToggle } = props;

    return (
        <header className="header">
            <div className="header--menu">
                <FcMenu onClick={(e)=>handleToggle(true)} />
            </div>
            <div className="header--content">
                <Search />
                <p className="header--content__logo">ZRIK</p>
            </div>
            <div className="header--theme">
                <ThemeLogo />
            </div>
        </header>
    );
};

export default Header;
