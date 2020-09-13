import mongoose from "mongoose";

const categoryMeta = new mongoose.Schema({
    comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    },
    key: {
        type: String,
        unique: true,
    },
    content: {
        type: String,
    },
});

export default mongoose.model("CategoryMeta", categoryMeta);
