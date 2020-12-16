import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/card.component';
import './home.scss';

export default function Home(props) {
    const articles = [...Array(4).keys()];

    return (
        <div className="home">
            <div className="home__menubar">
                <div className="home__menubar--category">
                    <span className="title" >
                        category &#9660;
                    </span>
                    <ul
                        className="content"
                    >
                        <li className="content--item">
                            <Link to={'/category/data-struct-and-algorithm'}>
                                Data structure and Algorithm
                            </Link>
                        </li>
                        <li className="content--item">
                            <Link to={'/category/web-application'}>
                                Web Application
                            </Link>
                        </li>
                        <li className="content--item">
                            <Link to={'/category/devopts'}>DevOpts</Link>
                        </li>
                    </ul>
                </div>
                <div className="home__menubar--tag">
                    <span className="title">
                        tag &#9660;
                    </span>
                    <ul
                        className="content"
                    >
                        <li className="content--item">
                            <Link to={'/category/data-struct-and-algorithm'}>
                                C/C++
                            </Link>
                        </li>
                        <li className="content--item">
                            <Link to={'/category/web-application'}>React</Link>
                        </li>
                        <li className="content--item">
                            <Link to={'/category/devopts'}>Python</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="home__new-article">
                {articles.map((ele, index) => (
                    <Card key={index} {...ele} />
                ))}
            </section>
        </div>
    );
}
