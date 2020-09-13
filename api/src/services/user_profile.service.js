import { UserProfile } from '../models';

const createOne = (req, res) => {
    user_data = req.data;
    const userProfile = new UserProfile({
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        full_name: `${user_data.first_name} ${user_data.last_name}`,
    });
    return userProfile.save();
}

const UserService = {
    createOne
}

module.exports = UserService;