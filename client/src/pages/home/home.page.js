import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import Card from '../../components/card/card.component';
import Search from '../../components/search/search.component';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home__search">
                <Search />
            </div>
            <section className="home__section article--new">
                <div className="home__section--title">
                    <RiArticleLine />
                    <h3>new article</h3>
                </div>
                <div className="home__section--list">
                    <div className="list__card">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
