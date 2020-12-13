import express from 'express';
import { authJwt } from '../../middlewares/auth.middleware';
import { role } from '../../utils/constants';
import validate from './tag.validate';
import TagService from './tag.service';

const router = express.Router();

router.get('/', TagService._getAll);
router.get('/:id', TagService._getOne);
router.post(
    '/',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    TagService._create
);
router.put(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER]), ...validate],
    TagService._update
);
router.delete(
    '/:id',
    [authJwt([role.MANAGER, role.WRITER])],
    TagService._delete
);
export default router;
