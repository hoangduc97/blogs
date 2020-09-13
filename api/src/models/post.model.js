import mongoose from 'mongoose';

const post = new mongoose.Schema({
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
    },
    meta_title: {
        type: String,
    },
    slug: {
        type: String,
    },
    summary: {
        type: String,
    },
    published: {
        type: Boolean,
    },
    create_at: {
        type: Date,
        default: Date.now()
    },
    update_at: {
        type: Date,
        default: Date.now()
    },
    published_at: {
        type: Date,
        default: Date.now()
    },
    content: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ],
    post_meta: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PostMeta'
        }
    ]
});

export default mongoose.model('Post', post);