import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card(props) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.article_title_image} />
            </div>
            <div className="card__info">
                <h3 className="card__info--title">
                    <Link to="/resume">{props.article_title}</Link>
                </h3>
                <div className="card__info--time">
                    <span className="card__info--timeread">
                        {props.time_read}
                    </span>
                    <span className="card__info--publishday">
                        {props.publishday}
                    </span>
                </div>
            </div>

            <div className="card__brief">
                <p>{props.brief}</p>
            </div>
            <ul className="card__tags">
                {props.tags &&
                    props.tags.map((ele, index) => (
                        <li key={index} className="card__tags--item">
                            <Link to="/">{ele.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Card;
