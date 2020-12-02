import { validationResult } from 'express-validator';
import { apiStatus } from '../../utils/constants';
import { response } from '../../utils/request.util';
import Tag from './tag.model';

const _get = (req, res) => {
    const slug = req.param['slug'];
    const condition = slug ? { slug: slug } : {};

    Tag.find(
        condition,
        response(
            res,
            'Get tags success',
            apiStatus.GET_SUCCESS,
            "Can't get tags",
            apiStatus.GET_FAILURE
        )
    );
};

const _create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(apiStatus.CREATE_FAILURE).json({
            success: false,
            errors: errors.array(),
        });
    }

    const new_tag = {
        tag_name: req.body.tag_name,
        slug: req.body.slug,
        content: req.body.content,
        categories: req.body.categories,
    };
    const tag = new Tag(new_tag);
    tag.save(
        {},
        response(
            res,
            'Create tag success',
            apiStatus.CREATE_SUCCESS,
            'Create tag error',
            apiStatus.CREATE_FAILURE
        )
    );
};

const _update = (req, res) => {
    const filter = { slug: req.body.slug };
    const update = { content: req.body.content };

    Tag.findOneAndUpdate(filter, update)
        .then((tag) => {
            return res.status(apiStatus.UPDATE_SUCCESS).json({
                success: true,
                message: 'Update tag success',
                data: tag,
            });
        })
        .catch((err) => {
            return res.status(apiStatus.UPDATE_FAILURE).json({
                success: false,
                message: 'Update tag failure',
                error: err,
            });
        });
};

const _delete = (req, res) => {
    const tag_id = req.param.id;

    Tag.find
}

const TagService = { _get, _create, _update };
export default TagService;
