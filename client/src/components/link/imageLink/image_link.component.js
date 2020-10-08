import React from 'react';
import { Link } from 'react-router-dom';
import './image_link.scss';

const ImageLink = ({ to, image, alt }) => {
    return (
        <Link to={to}>
            <img src={image} alt={alt} />
        </Link>
    );
};

export default ImageLink;
