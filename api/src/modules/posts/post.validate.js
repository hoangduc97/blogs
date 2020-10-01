import { check } from 'express-validator';

const postValidate = [
    check('title').notEmpty().isLength({ min: 10, max: 255 }),
    check('summary').notEmpty().isLength({ min: 100 }),
    check('content').notEmpty().isLength({ min: 255 }),
    check('post_meta').notEmpty()
];

export { postValidate };
