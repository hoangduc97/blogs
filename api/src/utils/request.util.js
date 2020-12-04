const check_existed = async (Schema, filter) => {
    return await Schema.count(filter, (count) => count > 0);
};
export { check_existed };
