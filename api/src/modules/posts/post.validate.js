import { check } from 'express-validator';

const postValidate = [
    check('title').notEmpty().isLength({
        min: 10,
        max: 255,
    }),
    check('content').notEmpty().isLength({
        min: 255,
    }),
];

export { postValidate };
