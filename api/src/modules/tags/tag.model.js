import mongoose from 'mongoose';

const tag = new mongoose.Schema({
    tag_name: {
        type: String,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    content: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Post',
        },
    ],
    categories: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Categories'
    }
});

export default mongoose.model('Tag', tag);
