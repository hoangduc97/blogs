import mongoose from 'mongoose';

const accountTwitter = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    twitter_id: {
        type: String,
    },
    update_at: {
        type: Date,
        default: Date.now()
    },
    create_at: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('AccountTwitter', accountTwitter);