import {check} from "express-validator";

const commentValidate = [
    check('post_id').notEmpty(),
    check('content').notEmpty().isLength({min: 30})
]

export {commentValidate};