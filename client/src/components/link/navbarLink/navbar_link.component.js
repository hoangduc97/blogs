import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './navbar_link.scss';

const NavbarLink = ({ tag, label, to, className }) => {
    const match = useRouteMatch({
        path: to,
    });
    const styleClass = className + (match ? ' active' : '');
    
    return (
        <tag className={styleClass}>
            <Link to={to}>{label}</Link>
        </tag>
    );
};

export default NavbarLink;
