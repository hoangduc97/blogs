import mongoose from "mongoose";

const comment = new mongoose.Schema({
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    parent_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserProfile",
    },
    published: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    published_at: {
        type: Date,
        default: Date.now(),
    },
    create_at: {
        type: Date,
        default: Date.now(),
    },
    comment_meta: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CommentMeta",
        },
    ],
});

export default mongoose.model("Comment", comment);
