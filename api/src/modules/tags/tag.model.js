import mongoose from 'mongoose';

const tag = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
    },
    count_article: {
        type: Number,
        default: 0,
    },
    articles: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Article',
        },
    ],
});

export default mongoose.model('Tag', tag);
