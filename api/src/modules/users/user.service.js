import { validationResult } from 'express-validator';
import { createToken } from '../../utils/auth.util';
import { roleConstant } from '../../utils/constants';
import Account from './account.model';
import User from './user.model';

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    const { email, password } = req.body;
    try {
        const account = await Account.findOne({ email });
        if (account) {
            return res.status(400).json({
                success: false,
                message: 'User already exists!',
            });
        }
        const newAccount = new Account({
            email: email,
            password: password,
        });
        newAccount.save((error, account) => {
            if (error)
                return res.status(400).json({
                    success: false,
                    error: error,
                    message: 'Account create failed!',
                });
            const newUser = new User({
                role: roleConstant.USER,
                account: account._id,
            });
            newUser.save((error) => {
                if (error)
                    return res.status(400).json({
                        success: false,
                        message: 'User create failed!',
                    });
            });
            return res.status(200).json({
                success: true,
                message: 'User create success!',
            });
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Register error!',
            errors: error,
        });
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    const { email, password } = req.body;
    const user = await User.findOne().populate({
        path: 'account',
        match: { email: email }
    });
    if (!user || (user && !user.account)) {
        return res.status(400).json({
            success: false,
            message: 'User not exists!',
        });
    }

    user.account.comparePassword(password, (err, isMatch) => {
        if (isMatch && !err) {
            const token = createToken(user);
            return res.status(200).json({
                success: true,
                token: token,
                message: 'Login success!',
            });
        }
        return res.status(400).json({
            success: false,
            message: 'Login failed!',
        });
    });
};

const getAll = (req, res) => {
    return User.find({})
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
};

const UserService = {
    register,
    login,
    getAll,
};

export default UserService;
