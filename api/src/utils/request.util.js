const check_existed = async (Schema, filter) => {
    return await Schema.exists(filter);
};
export { check_existed };
