import mongoose from 'mongoose';

const post = new mongoose.Schema({
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
        required: true,
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
    title: {
        type: String,
        required: true,
    },
    meta_title: {
        type: String,
        lowercase: true
    },
    slug: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    },
    published: {
        type: Boolean,
        required: true,
        default: true,
    },
    create_at: {
        type: Date,
        default: Date(),
    },
    update_at: {
        type: Date,
    },
    published_at: {
        type: Date,
        default: Date(),
    },
    content: {
        type: String,
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag',
        },
    ],
    post_meta: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PostMeta',
        },
    ],
});

post.pre('save', function (next) {
    const post = this;

    if (this.isModified('update_at') || this.isNew) {
        post.update_at = new Date();
        next();
    } else {
        return next();
    }
});

export default mongoose.model('Post', post);
