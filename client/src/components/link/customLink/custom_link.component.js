import React from 'react';
import { Link } from 'react-router-dom';
import "./custom_link.scss";

function CustomLink(props) {
    return (
        <Link to={props.to}>
            {props.children}
        </Link>
    )
}

export default CustomLink
