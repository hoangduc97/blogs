import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../../store/article/article.action';
import './article.scss';

function Article(props) {
    const { article, collected = false, getDetailArticle } = props;
    useEffect(() => {
        const articleSlug = props.params['articleSlug'];
        getDetailArticle(articleSlug);
    }, [getDetailArticle]);

    return (
        <React.Fragment>
            {article && (
                <div className="article">
                    <section className="article__collect">
                        {collected ? (
                            <button className="collected">COLLECTED</button>
                        ) : (
                            <button>COLLECT</button>
                        )}
                    </section>
                    <section className="article__content">
                        <div className="article__content--header">
                            <h1 className="title">{article.title}</h1>
                            <span>
                                ARTICLE BY
                                <p className="highlight highlight__text">
                                    {article.author.username}
                                </p>
                                IN
                                <Link
                                    to={'/category/' + article.category.slug}
                                    className="highlight highlight__text"
                                >
                                    {article.category.title}
                                </Link>
                                -
                                <p className="highlight highlight__time">
                                    {article.createdAt}
                                </p>
                            </span>
                        </div>
                        <div className="article__content--body">
                            <ReactMarkdown
                                plugins={[gfm]}
                                children={article.content}
                            />
                        </div>
                    </section>
                </div>
            )}
        </React.Fragment>
    );
}

const mapStateToProps = ({ ArticleReducer }) => ({
    article: ArticleReducer.articleDetail,
});

const mapDispatchToProps = (dispatch) => ({
    getDetailArticle: (articleSlug) => dispatch(getDetail(articleSlug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
