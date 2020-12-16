import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
    return (
        <div className="card">
            <Link to={'/article/abc'}>
                <img
                    className="card__image"
                    src="https://via.placeholder.com/400"
                    alt="card"
                />
            </Link>
            <div className="card__info">
                <p className="card__info--title">
                    Join the Awwwards Jury 2021 - Seeking Leading Digital
                    Creatives
                </p>
                <div className="card__info--orther">
                    <span className='in_category'>
                        Added to <Link to={'/category/avc'}>News</Link>
                    </span>
                    <span className='publish_date'>December 7, 2020</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
