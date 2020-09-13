import { UserProfile } from "../models";

const createOne = (req, res) => {
    user_data = req.body;
    const userProfile = new UserProfile({
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        full_name: `${user_data.first_name} ${user_data.last_name}`,
    });
    return userProfile
        .save()
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
};

const getAll = (req, res) => {
    return UserProfile.find({})
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
};

const UserService = {
    createOne,
    getAll,
};

export default UserService;
