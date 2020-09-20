import { check } from 'express-validator';

const signupValidate = () => [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
];

const signinValidate = () => [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
];

export { signinValidate, signupValidate };
