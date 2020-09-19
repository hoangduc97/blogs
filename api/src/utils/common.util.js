import { v4 as uuidv4 } from "uuid";

// method random number
const random_number = (length) => {
    return Math.random()
        .toString()
        .slice(2, length + 2);
};

const increment_days = (date, days) => {
    return new Date(date.getDate() + days);
};

const gen_uuid = () => uuidv4();

export { random_number, increment_days, gen_uuid };
