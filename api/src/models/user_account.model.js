import mongoose from 'mongoose';

const userAccount = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    email: {
        type: String,
        unique: true
    },
    hash: {
        type: String,
    },
    salt: {
        type: String,
    },
    email_confirm_token: {
        type: String,
        default: "1234"
    },
    password_expire: {
        type: Date,
    }
});

export default mongoose.model('UserAccount', userAccount);