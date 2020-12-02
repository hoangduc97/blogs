import {validationResult} from 'express-validator';
import {retrieveToken} from "../../utils/auth.util";
import {apiStatus} from "../../utils/constants";
import Post from './post.model';

const _create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(apiStatus.CREATE_FAILURE).json({
            success: false,
            errors: errors.array(),
        });
    }

    const _author = await retrieveToken(req.headers);
    const new_post = {
        author_id: _author.id,
        parent_id: req.body.parent_id,
        title: req.body.title,
        slug: req.body.slug,
        summary: req.body.summary,
        content: req.body.content,
        tags: req.body.tags ? [...req.body.tags]: null,
        categories: req.body.categories ? [...req.body.categories] : null
    }

    const post = new Post(new_post);
    post.save().then((post_data) => {
        return res.status(apiStatus.CREATE_SUCCESS).json({
            success: true,
            message: "Create new post success.",
            data: post_data
        });
    }).catch((e) => {
        return res.status(apiStatus.CREATE_FAILURE).json({
            success: false,
            message: "Can't create new post."
        });
    })
};

const _update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(apiStatus.UPDATE_FAILURE).json({
            success: false,
            errors: errors.array(),
        });
    }
};

const _delete = async (req, res) => {
    const errors = validationResult(req);
};

const _get = async (req, res) => {
    Post.find({}).then((posts) => {
        return res
            .status(apiStatus.GET_SUCCESS)
            .json({
                success: true,
                data: posts
            });
    }).catch((err) => {
        return res
            .status(apiStatus.GET_FAILURE)
            .json({
                success: false,
                message: "Can't get all post",
            })
    });
};

const PostService = {
    _get,
    _create,
    _update,
    _delete,
};

export default PostService;
