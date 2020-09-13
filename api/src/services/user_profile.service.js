import { UserProfile } from '../models';

const createOne = (req, res) => {
    console.log(req);
    const userProfile = new UserProfile({
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        full_name: `${user_data.first_name} ${user_data.last_name}`,
    });
    return userProfile.save();
}

const getAll = (req, res) => {
    return UserProfile.find({});
}

const UserService = {
    createOne,
    getAll
}

export default UserService;