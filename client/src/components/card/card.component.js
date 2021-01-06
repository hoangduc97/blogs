import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
    const { title, slug, updatedAt, category, summary } = props;
    return (
        <div className="card">
            <Link to={'/article/' + slug}>
                <img
                    className="card__image"
                    src="https://images-platform.99static.com/hspcyKRvXHRmOn9gHVVv0-6eUUw=/500x500/top/smart/99designs-contests-attachments/8/8066/attachment_8066795"
                    alt="card"
                />
            </Link>
            <div className="card__info">
                <Link to={'/article/' + slug} className="card__info--title">
                    {title}
                </Link>
                <p>{summary}</p>
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
