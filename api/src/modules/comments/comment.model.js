import mongoose from 'mongoose';

const comment = new mongoose.Schema(
    {
        article: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article',
            required: true,
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
            default: null,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            default: '',
        },
        published: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Comment', comment);
