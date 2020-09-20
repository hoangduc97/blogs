import express from 'express';
import { createPost } from './post.service';

const router = express.Router();

router.get('/', createPost)
export default router;
