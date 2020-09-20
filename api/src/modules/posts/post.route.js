import express from 'express';
import PostService from './post.service';

const router = express.Router();

router.get('/', PostService.createPost)
export default router;
