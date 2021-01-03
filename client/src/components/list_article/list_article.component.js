import React from 'react';
import Card from '../../components/card/card.component';
import './list_article.scss';

function ListArticle(props) {
    return (
        <section className="articles">
            {props.articles.map((ele, index) => (
                <Card key={index} {...ele} />
            ))}
        </section>
    );
}

export default ListArticle;
