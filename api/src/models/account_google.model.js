import mongoose from "mongoose";

const accountGoogle = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserProfile",
    },
    google_id: {
        type: String,
    },
    update_at: {
        type: Date,
        default: Date.now(),
    },
    create_at: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("AccountGoogle", accountGoogle);
