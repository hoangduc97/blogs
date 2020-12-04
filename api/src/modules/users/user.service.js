import { validationResult } from 'express-validator';
import { createToken } from '../../utils/auth.util';
import { roleConstant, apiStatus } from '../../utils/constants';
import { ErrorHandler } from '../../utils/error.util';
import Account from './account.model';
import User from './user.model';

const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.CREATE_FAILURE,
            'Invalid Register Type',
            13021
        );
    }
    const { email, password } = req.body;
    try {
        const account = await Account.findOne({ email });
        if (account) {
            throw new ErrorHandler(
                apiStatus.CREATE_FAILURE,
                'User already exists',
                1309
            );
        }
        const newAccount = new Account({
            email: email,
            password: password,
        });
        newAccount.save({}, (error, account) => {
            if (error)
                throw new ErrorHandler(
                    apiStatus.CREATE_FAILURE,
                    'Account create failed',
                    1310
                );
            const newUser = new User({
                role: roleConstant.USER,
                account: account._id,
            });
            newUser.save({}, (error) => {
                if (error)
                    throw new ErrorHandler(
                        apiStatus.CREATE_FAILURE,
                        'Account create failed',
                        1310
                    );
            });
            return res.status(apiStatus.CREATE_SUCCESS).json({
                success: true,
                message: 'Account create success',
                data: account,
            });
        });
        
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.GET_FAILURE,
            'Invalid Login Type',
            1302
        );
    }

    const { email, password } = req.body;
    try {
        const user = await User.findOne().populate({
            path: 'account',
            match: { email: email },
        });
        if (!user || (user && !user.account)) {
            throw new ErrorHandler(apiStatus.GET_FAILURE, 'Login Error', 1304);
        }
        user.account.comparePassword(password, (err, isMatch) => {
            if (isMatch && !err) {
                const token = createToken(user);
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    token: token,
                    message: 'Login success',
                });
            }
            throw new ErrorHandler(apiStatus.GET_FAILURE, 'Login Error', 1304);
        });
        
    } catch (err) {
        next(err);
    }
};

const getAll = async (req, res, next) => {
    try {
        User.find({})
            .then((data) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data found',
                    data: data,
                });
            })
            .catch((error) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Not found',
                    1105
                );
            });
        
    } catch (error) {
        next(error);
    }
};

const UserService = {
    register,
    login,
    getAll,
};

export default UserService;
