import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
    const { title, slug, updatedAt, category } = props;
    return (
        <div className="card">
            <Link to={'/article/' + slug}>
                <img
                    className="card__image"
                    src="https://dummyimage.com/640x640"
                    alt="card"
                />
            </Link>
            <div className="card__info">
                <Link to={'/article/' + slug} className="card__info--title">
                    {title}
                </Link>
                <div className="card__info--orther">
                    <span className="in_category">
                        Added to
                        <Link to={'/category/' + category.slug}>
                            {category.title}
                        </Link>
                    </span>
                    <span className="publish_date">{updatedAt}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
