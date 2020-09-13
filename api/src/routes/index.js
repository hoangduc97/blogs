const router = require('express').Router();
const {
    apiConstant
} = require('../utils/constants');

router.use(apiConstant.BASE_URL + '/post');

export default router;