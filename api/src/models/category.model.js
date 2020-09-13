import mongoose from 'mongoose';

const category = new mongoose.Schema({
    category_name: {
        type: String,
        unique: true
    },
    slug: {
        type: String,
    },
    meta_title: {
        type: String,
    },
    content: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

export default mongoose.model('Category', category);