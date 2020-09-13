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
    },
    password_expire: {
        type: Date,
    },
    account_facebook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountFacebook'
    },
    account_google: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountGoogle'
    },
    account_twitter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AccountTwitter'
    }
});

export default mongoose.model('UserProfile', userProfile);