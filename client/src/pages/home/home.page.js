import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAll as getAllCategory } from '../../store/category/category.action';
import { getAll as getAllTag } from '../../store/tag/tag.action';
import ListArticle from '../../components/list_article/list_article.component';
import './home.scss';

function Home({ categories, tags, getAllCategory, getAllTag }) {
    const articles = [...Array(8).keys()];

    useEffect(() => {
        getAllCategory();
    }, [getAllCategory]);

    useEffect(() => {
        getAllTag();
    }, [getAllTag]);
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
                <div className="home__menubar--tag">
                    <span className="title">tag</span>
                    <ul className="content">
                        {tags &&
                            tags.map((tag, index) => (
                                <li className="content--item" key={index}>
                                    <Link to={'/tag/' + tag.slug}>
                                        {tag.title}
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

const mapStateToProps = ({ CategoryReducer, TagReducer }) => ({
    categories: CategoryReducer,
    tags: TagReducer,
});

const mapDispatchToProps = (dispatch) => ({
    getAllCategory: () => dispatch(getAllCategory()),
    getAllTag: () => dispatch(getAllTag()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
