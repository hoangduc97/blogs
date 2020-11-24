import React from 'react';
import './card.scss';

function Card(props) {

    const class_size = props.class_size ? 'props.class_size' : '';

    return (
        <div className="card">
            <div className={"card__header " + class_size}>
                <img
                    src="https://via.placeholder.com/500x300"
                    className="card__image"
                />
                <div className="card__info">
                    <h3 className="card__info--title">This is title</h3>
                    <span className="card__info--timeread">12 min</span>
                    <span className="card__info--publishday">
                        Apr 7th, 2020
                    </span>
                </div>
            </div>

            <div className="card__brief">
                <p>
                    The next major version of React Router, version 6, is just
                    around the corner
                </p>
            </div>
            <ul className="card__tags">
                <li className="card__tag">React</li>
                <li className="card__tag">React Router</li>
            </ul>
        </div>
    );
}

export default Card;
