import express from 'express';
import PostService from './post.service';
import {authJwt} from '../../middlewares/auth.middleware';
import {postValidate} from './post.validate';
import {roleConstant} from '../../utils/constants';

const router = express.Router();

router
    .get('/', PostService._get)
    .put(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
        PostService._update
    )
    .patch(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
        PostService._update
    )
    .delete(
        '/:id',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER])],
        PostService._delete
    )
    .post(
        '/',
        [authJwt([roleConstant.MANAGER, roleConstant.WRITER]), ...postValidate],
        PostService._create
    );
export default router;
