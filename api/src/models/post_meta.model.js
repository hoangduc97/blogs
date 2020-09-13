import mongoose from "mongoose";

const postMeta = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    key: {
        type: String,
        unique: true,
    },
    content: {
        type: String,
    },
});

export default mongoose.model("PostMeta", postMeta);
