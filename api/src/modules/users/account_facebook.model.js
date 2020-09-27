import mongoose from 'mongoose';

const accountFacebook = new mongoose.Schema({
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
