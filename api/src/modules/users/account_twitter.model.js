import mongoose from 'mongoose';

const accountTwitter = new mongoose.Schema({
    twitter_id: {
        type: String,
    },
    update_at: {
        type: Date,
        default: Date(),
    },
    create_at: {
        type: Date,
        default: Date(),
    },
});

export default mongoose.model('AccountTwitter', accountTwitter);
