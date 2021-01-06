import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll as getAllCategory } from '../../store/category/category.action';
import { getAll as getAllArticle } from '../../store/article/article.action';
import ListArticle from '../../components/list_article/list_article.component';
import './home.scss';

function Home({ categories, articles, getAllCategory, getAllArticle }) {
    useEffect(() => {
        getAllCategory();
    }, [getAllCategory]);

    useEffect(() => {
        getAllArticle();
    }, [getAllArticle]);

    return (
        <div className="home">
            <div className="home__menubar">
                <div className="home__menubar--category">
                    <span className="title">category</span>
                    <ul className="content">
                        {categories &&
                            categories.map((category, index) => (
                                <li className="content--item" key={index}>
                                    <Link to={'/category/' + category.slug}>
                                        {category.title} (
                                        {category.count_article})
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <ListArticle articles={articles} />
        </div>
    );
}

const mapStateToProps = ({ CategoryReducer, ArticleReducer }) => ({
    categories: CategoryReducer,
    articles: ArticleReducer.articlesInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getAllCategory: () => dispatch(getAllCategory()),
    getAllArticle: () => dispatch(getAllArticle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
