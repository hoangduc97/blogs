import { validationResult } from 'express-validator';
import { createToken } from '../../utils/auth.util';
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

        const newUser = new User();
        newUser.save({}, (error, user) => {
            if (error)
                return res.status(400).json({
                    success: false,
                    message: 'User create failed!',
                });
            const newAccount = new Account({
                _id: user._id,
                email: email,
                password: password,
            });

            newAccount.save((error) => {
                if (error)
                    return res.status(400).json({
                        success: false,
                        error: error,
                        message: 'Account create failed!',
                    });
                return res.status(200).json({
                    success: true,
                    message: 'Account create success!',
                });
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
    const user = await Account.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User not exists!',
        });
    }

    user.comparePassword(password, (err, isMatch) => {
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
