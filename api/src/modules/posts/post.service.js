import { validationResult } from 'express-validator';
import Post from './post.model';

const createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }

    
};

const updatePost = async (req, res) => {
    const errors = validationResult(req);
};

const deletePost = async (req, res) => {
    const errors = validationResult(req);
};

const getPost = async (req, res) => {
    const errors = validationResult(req);
};

const getPosts = async (req, res) => {
    
};

const PostService = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPosts,
};

export default PostService;
