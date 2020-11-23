import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './navbar_link.scss';

const NavbarLink = (props) => {
    const match = useRouteMatch({
        path: props.to,
    });
    const styleClass = 'navbar ' + props.className + (match ? ' active' : '');

    return (
        <li className={styleClass} onClick={props.onClick}>
            <Link to={props.to}>{props.label}</Link>
        </li>
    );
};

export default NavbarLink;
