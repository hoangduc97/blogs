import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ to, href, alt }) => {
    return (
        <Link to={to}>
            {/* <image href={href} alt={alt} /> */}
            logo
        </Link>
    );
};

export default ImageLink;
