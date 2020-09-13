import express from 'express';
const { apiConstant } = require('../utils/constants');
const UserProfileRouter = require('./user_profile.route');

import {} from '../utils/constants.js';
router = express.Router();
router.use(apiConstant.BASE_URL + '/post', UserProfileRouter);

export default router;