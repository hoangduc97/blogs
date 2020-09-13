import mongoose from 'mongoose';

const tag = new mongoose.Schema({
    tag_name: {
        type: String,
        unique: true
    },
    slug: {
        type: String,
        unique: true
    },
    meta_title: {
        type: String,
    },
    content: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

export default mongoose.model('Tag', tag);