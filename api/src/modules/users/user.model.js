import mongoose from 'mongoose';
import Account from './account.model';

const User = new mongoose.Schema(
    {
        account: Account.schema,
        username: {
            type: String,
            default: '',
        },
        avatar_url: {
            type: String,
            default: 'url://',
        },
        role: {
            type: Number,
            enum: [0, 1, 2],
            required: true,
        },
        bookmark_article: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Article',
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model('User', User);
