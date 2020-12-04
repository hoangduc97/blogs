import Category from './category.model';
import {apiStatus} from "../../utils/constants";
import {validationResult} from "express-validator";
import {ErrorHandler} from '../../utils/error.util';
import {convert_slug} from "../../utils/common.util";
import {check_existed} from "../../utils/request.util";

const _getAll = async (req, res, next) => {
    try {
        Category.find({})
            .then((data) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data found',
                    data: data
                })
            })
            .catch((err) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Not Found',
                    1105
                )
            });
    } catch (error) {
        next(error);
    }
}

const _getOne = async (req, res, next) => {
    try {
        const filter = {_id: req.params['id']};
        Category.find(filter)
            .then((data) => {
                return res.status(apiStatus.GET_SUCCESS).json({
                    success: true,
                    message: 'Data Found',
                    data: data,
                });
            })
            .catch((err) => {
                throw new ErrorHandler(
                    apiStatus.GET_FAILURE,
                    'Not Found',
                    1105
                );
            });
    } catch (error) {
        next(error);
    }
}

const _create = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ErrorHandler(
            apiStatus.CREATE_FAILURE,
            'Invalid Social Type',
            1303
        );
    }
    try {
        const new_category = {
            category_name: req.body.category_name,
            slug: convert_slug(req.body.category_name),
            content: req.body.content,
        };
        const filter_existed = {
            slug: new_category.slug,
        };
        const found = await check_existed(Category, filter_existed);
        if (found) {
            throw new ErrorHandler(
                apiStatus.CREATE_FAILURE,
                `Category ${new_category.category_name} has exist`,
                1303
            );
        } else {
            await Category.create(new_category)
                .then((data) => {
                    return res.status(apiStatus.CREATE_SUCCESS).json({
                        success: true,
                        message: 'Created successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        apiStatus.CREATE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        }
    } catch (error) {
        next(error);
    }
}

const _update = async (req, res, next) => {
    try {
        const update = {
            category_name: req.body.category_name,
            slug: convert_slug(req.body.category_name),
            content: req.body.content,
        };
        const filter = {_id: req.params['id']};
        const found = await check_existed(Category, filter);
        if (found) {
            Category.findOneAndUpdate(filter, update)
                .then((data) => {
                    return res.status(apiStatus.UPDATE_SUCCESS).json({
                        success: true,
                        message: 'Updated successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        apiStatus.UPDATE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                apiStatus.UPDATE_FAILURE,
                `Category ${update.category_name} not exist`,
                1303
            );
        }
    } catch (error) {
        next(error);
    }
}

const _delete = async (req, res, next) => {
    try {
        const filter = {_id: req.param['id']};
        const found = await check_existed(Category, filter);
        if (found) {
            Category.findByIdAndDelete(filter)
                .then((data) => {
                    return res.status(apiStatus.DELETE_SUCCESS).json({
                        success: true,
                        message: 'Deleted successfully',
                        data: data,
                    });
                })
                .catch((err) => {
                    throw new ErrorHandler(
                        apiStatus.DELETE_FAILURE,
                        'Invalid Social Type',
                        1105
                    );
                });
        } else {
            throw new ErrorHandler(
                apiStatus.DELETE_FAILURE,
                'Tag not existed',
                1303
            );
        }
    } catch (error) {
        next(error);
    }
}

const CategoryService = {_getAll, _getOne, _create, _update, _delete};
export default CategoryService;