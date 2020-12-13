import express from 'express';
import UserService from './user.service';
import { authJwt } from '../../middlewares/auth.middleware';
import { userValidate } from './user.validation';
import { roleConstant } from '../../utils/constants';

const router = express.Router();

// routes for register or login user
router.post(
    process.env.AUTH_REGISTER_PATH,
    [...userValidate],
    UserService.register
);
router.post(
    process.env.AUTH_LOGIN_PATH,
    [...userValidate],
    UserService.login
);

// routes for user
router.get('/', authJwt([roleConstant.MANAGER]), UserService.getAll);

export default router;
