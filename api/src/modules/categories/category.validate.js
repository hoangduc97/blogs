import {check} from 'express-validator';

const categoryValidate = [
    check('category_name').notEmpty(),
    check('content').notEmpty()
];

export {categoryValidate};