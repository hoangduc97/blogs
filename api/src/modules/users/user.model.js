import mongoose from 'mongoose';

const userProfile = new mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    full_name: {
        type: String,
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
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAccount',
    },
    account_facebook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountFacebook',
    },
    account_google: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountGoogle',
    },
    account_twitter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountTwitter',
    },
});

export default mongoose.model('UserProfile', userProfile);
