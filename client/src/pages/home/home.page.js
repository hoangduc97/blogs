import React from 'react';
import Card from '../../components/card/card.component';
import './home.scss';

const LoadingBar = () => (
    <div className="home__loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default function Home(props) {
    const articles = [...Array(5).keys()];

    return (
        <div className="home">
            <div className="home__menubar">
                <div className="home__menubar--category">
                    <span className="title">category &#9660;</span>
                </div>
                <div className="home__menubar--tag">
                    <span className="title">tag &#9660;</span>
                </div>
            </div>
            <div className="home__container">
                {articles.map((ele, index) => (
                    <Card key={index} {...ele} />
                ))}
            </div>
            <LoadingBar />
        </div>
    );
}
