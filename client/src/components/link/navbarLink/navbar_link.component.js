import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './navbar_link.scss';

const NavbarLink = ({ label, to, activeWhenExect }) => {
    const match = useRouteMatch({
        path: to,
        exact: activeWhenExect,
    });
    return (
        <div className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </div>
    );
};

export default NavbarLink;
