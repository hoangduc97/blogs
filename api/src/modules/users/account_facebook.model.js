import mongoose from 'mongoose';

const accountFacebook = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    facebook_id: {
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

export default mongoose.model('AccountFacebook', accountFacebook);
