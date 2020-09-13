// method random number
const random_number = (min, max) => {
    return Math.round(Math.random() * (max - mix + 1)) + min;
}

export {
    random_number
}