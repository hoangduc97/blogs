import React from 'react';
import { Link } from 'react-router-dom';
import './image_link.scss';

const ImageLink = ({ to, srcImage, alt }) => {
    return (
        <Link to={to}>
            <img src={srcImage} alt={alt} />
        </Link>
    );
};

export default ImageLink;
