import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './navbar_link.scss';

const NavbarLink = ({ label, to, className }) => {
    const match = useRouteMatch({
        path: to,
    });
    const styleClass = 'navbar ' + className + (match ? ' active' : '');

    return (
        <li className={styleClass}>
            <Link to={to}>{label}</Link>
        </li>
    );
};

export default NavbarLink;
