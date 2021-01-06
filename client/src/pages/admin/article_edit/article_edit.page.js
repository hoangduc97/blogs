import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from '../../../store/category/category.action';
import { update, getDetail } from '../../../store/article/article.action';
import './article_edit.scss';

function ArticleEdit(props) {
    const history = useHistory();
    const { categories, getAll, update, match, getDetail, article } = props;

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        getAll();
    }, [getAll]);

    useEffect(() => {
        if (!article) getDetail(match.params.admin);
        else {
            setTitle(article.title);
            setSummary(article.summary);
            setCategory(article.category._id);
            setContent(article.content);
        }
    }, [getDetail, article]);

    useEffect(() => {
        getDetail(match.params.admin);
    }, [getDetail]);

    const options = categories
        ? [...categories.map((ele) => ({ value: ele._id, label: ele.title }))]
        : [];

    const handleClick = () => {
        if (title && content && summary && category) {
            update(
                {
                    title: title,
                    content: content,
                    summary: summary,
                    category: category,
                    _id: match.params.admin,
                },
                (url) => history.push(url)
            );
        } else alert('Enter all value');
    };

    return (
        <div className="article_writer">
            <label>EDIT ARTICLE</label>
            <div className="article_writer--title">
                <label>TITLE *</label>
                <textarea
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="article_writer--summary">
                <label>SUMMARY *</label>
                <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />
            </div>
            <div className="article_writer--category">
                <label>CATEGORY *</label>
                <Select
                    options={options}
                    defaultValue={
                        article
                            ? { value: category, label: article.category.title }
                            : null
                    }
                    isClearable={true}
                    classNamePrefix="select"
                    onChange={({ value }) => setCategory(value)}
                />
            </div>
            <MDEditor value={content} onChange={setContent} />
            <button className="article_writer--save" onClick={handleClick}>
                SAVE
            </button>
        </div>
    );
}

const mapStateToProps = ({ CategoryReducer, ArticleReducer }) => ({
    categories: CategoryReducer,
    article: ArticleReducer.articleDetail,
});

const mapDispatchToProps = (dispatch) => ({
    getAll: () => dispatch(getAll()),
    getDetail: (id) => dispatch(getDetail(id)),
    update: (data, cb) => dispatch(update(data, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);
