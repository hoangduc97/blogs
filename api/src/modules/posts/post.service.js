import { validationResult } from 'express-validator';
import Post from './post.model';

const createPost = async (req, res) => {
    const errors = validationResult(req);
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
    const errors = validationResult(req);
};

const PostService = {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPosts,
};

export default PostService;
