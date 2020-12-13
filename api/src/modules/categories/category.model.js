import mongoose from 'mongoose';

const category = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
        },
        count_article: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Category', category);
