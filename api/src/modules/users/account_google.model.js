import mongoose from 'mongoose';

const accountGoogle = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    google_id: {
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

export default mongoose.model('AccountGoogle', accountGoogle);
