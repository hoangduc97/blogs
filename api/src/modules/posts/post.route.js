import express from 'express';
import PostService from './post.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { postValidate } from './post.validate';
import { roleConstant } from '../../utils/constants';

const router = express.Router();

router.get('/', PostService.getPosts);
router.get('/:id', PostService.getPost);

router.put(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
    PostService.updatePost
);
router.patch(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
    PostService.updatePost
);
router.delete(
    '/:id',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
    PostService.deletePost
);
router.post(
    '/',
    [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
    PostService.createPost
);
export default router;
