import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAll } from '../../../store/article/article.action';
import './article.scss';

function Article(props) {
    const history = useHistory();
    const { articles, getAll } = props;

    useEffect(() => {
        getAll();
    }, [getAll]);

    const convertDate = (str) => {
        let date = new Date(str);
        return date.toISOString().split('T')[0];
    };

    const handleEdit = (slug) => {
        history.push(`/admin/${slug}`);
    };

    return (
        <div className="article">
            <label>ARTICLES</label>
            <Link to={'/admin/article_writer'} className="article__write">
                write article
            </Link>
            <ul className="article__list">
                {articles &&
                    articles.map((ele, index) => (
                        <li className="article__list--item" key={index}>
                            <div className="title">
                                <Link to={`/article/${ele.slug}`}>
                                    {ele.title}
                                </Link>
                            </div>
                            <div className="create">
                                <p>{convertDate(ele.createdAt)}</p>
                                <span>create</span>
                            </div>
                            <div className="category">
                                <p>{ele.category.title}</p>
                                <span>category</span>
                            </div>
                            <div className="setting">
                                <button className="edit" onClick={() => handleEdit(ele.slug)}>
                                    EDIT
                                </button>
                                {ele.published ? (
                                    <button className="unpublish">
                                        UNPUBLISH
                                    </button>
                                ) : (
                                    <button className="publish">PUBLISH</button>
                                )}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ ArticleReducer }) => ({
    articles: ArticleReducer.articlesInfo,
});

const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch(getAll()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Article);
