import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './navbar_link.scss';

const NavbarLink = ({ label, to, className }) => {
    const match = useRouteMatch({
        path: to,
    });
    const styleClass = className + (match ? ' active' : '');
    
    return (
        <div className={styleClass}>
            <Link to={to}>{label}</Link>
        </div>
    );
};

export default NavbarLink;
