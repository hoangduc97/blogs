import { check } from 'express-validator';

const postValidate = [
    check('title').notEmpty().length({
        min: 10,
        max: 255,
    }),
    check('content').notEmpty().length({
        min: 255,
    }),
];

export { postValidate };
