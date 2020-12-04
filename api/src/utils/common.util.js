import { v4 } from 'uuid';

// method random number
const random_number = (length) => {
    return Math.random()
        .toString()
        .slice(2, length + 2);
};

const increment_days = (days) => {
    const currentDate = new Date();
    return currentDate.setDate(currentDate.getDate() + days);
};

const gen_uuid = () => v4();

const convert_slug = async (str) =>
    await str
        .toUppercase();

export { random_number, increment_days, gen_uuid, convert_slug };
