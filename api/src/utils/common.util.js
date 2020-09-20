import { v4 } from 'uuid';

// method random number
const random_number = (length) => {
    return Math.random()
        .toString()
        .slice(2, length + 2);
};

const increment_days = (days) => {
    const currentDate = new Date();
    const afterDate = new Date();
    return afterDate.setDate(currentDate.getDate() + days);
};

const gen_uuid = () => v4();

export { random_number, increment_days, gen_uuid };
