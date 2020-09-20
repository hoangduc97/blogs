import { validationResult } from 'express-validator';
import Post from './post.model';

const createPost = async (req, res) => {
    const errors = validationResult(req);
};

const PostService = {
    createPost,
};

export default PostService;
