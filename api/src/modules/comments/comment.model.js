import mongoose from 'mongoose';
import Message from '../../logger/message.data';
import { status } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';

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

comment.pre('save', function (next) {
    const Comment = this;

    if (this.isNew) {
        this.model('Article').exists(
            { _id: Comment.article },
            (err, exited) => {
                if (err || !exited) {
                    throw new ErrorHandler(
                        status.BAD_REQUEST,
                        Message[1323],
                        1323
                    );
                }
                next();
            }
        );
    } else {
        next();
    }
});

export default mongoose.model('Comment', comment);
