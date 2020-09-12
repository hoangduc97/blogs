const router = require('express').Router();
const {
    BASE_URL
} = require('../utils/constants');

router.use(BASE_URL + '/post');

export default router;