import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAll } from '../../../store/category/category.action';
import { create } from '../../../store/article/article.action';
import './article_writer.scss';

function ArticleWriter(props) {
    const history = useHistory();
    const { categories, getAll, create } = props;

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        getAll();
    }, [getAll]);

    const options = categories
        ? [...categories.map((ele) => ({ value: ele._id, label: ele.title }))]
        : [];

    const handleClick = () => {
        if (title && content && summary && category) {
            create( 
                {
                    title: title,
                    content: content,
                    summary: summary,
                    category: category,
                },
                (url) => history.push(url)
            );
        } else alert('Enter all value');
    };

    return (
        <div className="article_writer">
            <label>WRITER ARTICLE</label>
            <div className="article_writer--title">
                <label>TITLE *</label>
                <textarea
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
    create: (data, cb) => dispatch(create(data, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleWriter);
