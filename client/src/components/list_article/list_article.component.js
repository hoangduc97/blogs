import React from 'react';
import Card from '../../components/card/card.component';
import './list_article.scss';

function ListArticle(props) {
    const { articles } = props;
    return (
        <section className="articles">
            {articles &&
                articles.map((ele, index) => <Card key={index} {...ele} />)}
        </section>
    );
}

export default ListArticle;
