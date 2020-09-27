import mongoose from 'mongoose';

const accountGoogle = new mongoose.Schema({
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
