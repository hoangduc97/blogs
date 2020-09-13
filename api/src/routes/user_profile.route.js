import express from 'express';
const { UserService } = require('../services');

router = express.Router();
router.post('/', UserService.createOne());

export default router;