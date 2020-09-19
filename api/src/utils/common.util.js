// method random number
const random_number = (min, max) => {
    return Math.round(Math.random() * (max - mix + 1)) + min;
};

const increment_days = (date, days) => {
    return new Date(date.getDate() + days);
};

export { random_number, increment_days };
